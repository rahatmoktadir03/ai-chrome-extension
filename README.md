## 🔮 AI Chrome Extension: Autocomplete Anywhere with Gemini

> A lightweight Chrome Extension that brings smart, AI-powered autocomplete to any website with a text input field — using Google's Gemini API.

---

## 📌 Overview

This project enhances your writing experience by generating **real-time autocomplete suggestions** as you type — whether you're drafting an email, answering a forum post, or taking notes. Built with `Manifest V3`, JavaScript, and Google's Gemini AI, this extension mimics a "ChatGPT-style" experience directly in your browser.

---

## 🛠️ Tech Stack

- **Manifest V3** – Chrome extension framework
- **JavaScript** – Core scripting
- **Google Gemini API** – Powers the intelligent text completions
- **Content Scripts** – DOM injection and input detection
- **HTML/CSS** – For the popup UI and styling

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahatmoktadir03/ai-chrome-extension.git
   cd ai-chrome-extension
   ```
2. **Add your Gemini API Key**
   • Create a .env file in the root of the extension folder:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
   • Or hardcode your key into content.js for now:
   ```bash
   const API_KEY = "your_api_key_here";
   ```
3. Load the extension in Chrome
• Go to chrome://extensions/
• Enable Developer Mode
• Click Load Unpacked
• Select the project directory

---

## ✨ How It Works
• As you type in any <textarea> or text field on websites like Reddit, GitHub, etc., the extension sends your input to Gemini's text generation endpoint.
• It fetches a relevant continuation and overlays it as a gray, inline suggestion.
• You can press Tab to accept the suggestion instantly.

---

## 🧪 Usage Guide
1. Navigate to any website with a basic text input field (e.g., Reddit, Twitter, Gmail, etc.)
2. Begin typing naturally
3. A suggestion will appear after a short delay
4 Hit Tab to autocomplete the suggestion
⚠️ Note: Some platforms (like Google Docs or Notion) use complex editors that block DOM access; support for these is being worked on.

---

## 🔭 Future Iterations
If given more time, the following features would be high priority:
• ✅ Support for Google Docs, Notion, and other rich editors
• 🌐 Toggle on/off per website using popup UI
• ⏱️ Debounce logic for smarter rate-limited queries
• 🧠 Context-aware completions using longer conversation history
• 🔊 Voice-to-text + autocomplete integration
• 🪄 Theme-aware UI for better font & color matching
• 🧪 Add test coverage and better error handling
