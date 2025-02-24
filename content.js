const API_KEY = "AIzaSyCQFLJCFxy3aHWwFuL7brMDo3HGAk8HSX0"; // Replace with your API key

async function fetchSuggestion(prompt) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${API_KEY}`;

  const requestBody = {
    prompt: { text: prompt },
    temperature: 0.7,
    maxOutputTokens: 20,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    if (data && data.candidates && data.candidates.length > 0) {
      return data.candidates[0].output;
    }
  } catch (error) {
    console.error("Error fetching AI suggestion:", error);
  }

  return "";
}

// Event listeners for text inputs
document.addEventListener("input", async function (event) {
  const target = event.target;
  if (target.tagName === "TEXTAREA" || target.isContentEditable) {
    console.log("Input detected in text area");
    const text = target.value || target.innerText;
    const suggestion = await fetchSuggestion(text);
    console.log("Suggestion fetched:", suggestion);
    insertSuggestion(target, suggestion);
  }
});

// Insert AI-generated suggestions
function insertSuggestion(target, suggestion) {
  if (!suggestion) return;
  if (target.tagName === "TEXTAREA") {
    const start = target.selectionStart;
    target.value =
      target.value.substring(0, start) +
      suggestion +
      target.value.substring(start);
    target.selectionStart = target.selectionEnd = start + suggestion.length;
  } else if (target.isContentEditable) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(target, target.childNodes.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("insertText", false, suggestion);
  }
}

// Handle "Tab" key to accept suggestions
document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault();
    const activeElement = document.activeElement;
    if (
      activeElement.tagName === "TEXTAREA" ||
      activeElement.isContentEditable
    ) {
      const text = activeElement.value || activeElement.innerText;
      fetchSuggestion(text).then((suggestion) => {
        insertSuggestion(activeElement, suggestion);
      });
    }
  }
});
