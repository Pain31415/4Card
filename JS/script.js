/* (1) ЗАВДАННЯ */

// class JSONFormatter {
//     constructor() {
//         this.jsonInput = document.getElementById('jsonInput');
//         this.formatButton = document.getElementById('formatButton');
//         this.result = document.getElementById('result');
//         this.initialize();
//     }

//     initialize() {
//         this.formatButton.addEventListener('click', () => this.formatJSON());
//     }

//     formatJSON() {
//         const inputText = this.jsonInput.value.trim();

//         try {
//             const jsonObject = JSON.parse(inputText);
//             const formattedJSON = JSON.stringify(jsonObject, null, 4);
//             this.displayResult(formattedJSON, false);
//         } catch (error) {
//             this.displayResult('Невірний формат JSON!', true);
//         }
//     }

//     displayResult(message, isError) {
//         this.result.textContent = message;
//         this.result.style.color = isError ? 'red' : 'black';
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     new JSONFormatter();
// });