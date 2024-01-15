# Number to Words Converter

This repository features a straightforward and elegant solution for a "Number to Words Converter" implemented with HTML, CSS, and JavaScript. The primary objective is to convert numeric input into its corresponding word representation. The project places a strong emphasis on code simplicity, efficiency, and clean design.

## 🚀 Features

- **Responsive Design:** The user interface is thoughtfully designed to ensure optimal display on various devices, providing a seamless experience for all users.
  
- **Input Validation:** Robust input validation is in place to guarantee that users provide a valid number for accurate and reliable conversion.
  
- **Clean Code:** The JavaScript codebase is organized following best practices, promoting readability and maintainability for developers.

## 📂 Project Structure

- **index.html:** The main HTML file serves as the foundation, defining the structure of the web page.
  
- **styles.css:** The CSS file is responsible for styling the user interface, creating a visually appealing and intuitive design.
  
- **script.js:** The JavaScript file contains the logic for converting numeric input into its word representation, ensuring a smooth and efficient process.

### JavaScript - Conversion Logic

```javascript
function numberToWords(num, result = "") {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num === 0 && result === "") {
        return "Zero"; // base case
    } else if (num === 0) {
        return result.trim(); // final result
    } else if (num >= 1000000000) {
        return numberToWords(num % 1000000000, result + numberToWords(Math.floor(num / 1000000000)) + " Billion ");
    } else if (num >= 1000000) {
        return numberToWords(num % 1000000, result + numberToWords(Math.floor(num / 1000000)) + " Million ");
    } else if (num >= 1000) {
        return numberToWords(num % 1000, result + numberToWords(Math.floor(num / 1000)) + " Thousand ");
    } else if (num >= 100) {
        return numberToWords(num % 100, result + numberToWords(Math.floor(num / 100)) + " Hundred ");
    } else if (num >= 20) {
        return result + tens[Math.floor(num / 10)] + " " + numberToWords(num % 10);
    } else {
        return result + ones[num];
    }
}
```

## 💻 Usage

1. Open `index.html` in a web browser.
  
2. Enter a number in the input field.
  
3. Witness the magic as the numeric input seamlessly transforms into words in real-time!

## 📸 Screenshot

![Number to Words Converter](https://github.com/kariemSeiam/NumberToWordsConverter/assets/57973837/7fda3197-9ecd-4105-a105-3c3a15d05d3b)

## 🔗 Let's Connect!

Connect with me across platforms. Whether you have exciting opportunities or just want to chat, I'm just a message away.

[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B201033939828-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/201033939828) [![Gmail](https://img.shields.io/badge/Gmail-kariemseiam%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kariemseiam@gmail.com) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Kariem%20Seiam-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kariemseiam/)

> **Happy Textual Exploration!** 🚀✨
>
> <a href="https://www.buymeacoffee.com/kariemseiam"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kariemseiam&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
