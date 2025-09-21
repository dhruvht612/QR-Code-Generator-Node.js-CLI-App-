# QR Code Generator (Node.js CLI App)

A simple Node.js command-line application that generates a QR code from a user-provided URL.  
The application uses **Inquirer** for user input, **qr-image** for QR code generation, and Node’s **fs** module for file handling.  

---

## 🚀 Features
- Prompt the user for a URL using **Inquirer**.
- Generate a QR code (`qr_code.png`) from the entered URL.
- Save the original URL to a text file (`URL.txt`).
- Demonstrates npm package usage and Node.js file system operations.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```bash
   npm install inquirer qr-image
   ```

---

## ▶️ Usage

Run the app in your terminal:
```bash
node index.js
```

Follow the prompt to enter a URL, for example:
```
? Enter the URL you want to turn into a QR code: https://openai.com
```

The app will:
- Generate a QR code image named **`qr_code.png`**.
- Save the input URL in a **`URL.txt`** file.

---

## 📂 Project Structure
```
qr-code-generator/
│── index.js       # Main application file
│── package.json   # Dependencies and scripts
│── URL.txt        # Stores user-entered URL (generated)
│── qr_code.png    # Generated QR code image (generated)
│── README.md      # Project documentation
```

---

## 🛠️ Built With
- [Node.js](https://nodejs.org/)  
- [Inquirer](https://www.npmjs.com/package/inquirer)  
- [qr-image](https://www.npmjs.com/package/qr-image)  
- [fs (Node.js File System)](https://nodejs.org/api/fs.html)  

---

## 📸 Demo

*(Optional: Add a screenshot of your terminal and generated QR code here)*  

---

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License
This project is licensed under the **MIT License**.
