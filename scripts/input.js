import { getBooksData } from "./booksapi.mjs";
import CardTemplate from "./CardTemplate.mjs";


document.getElementById("titleInput").addEventListener("input", processInput);
const books = document.querySelector(".books");

function processInput() {
    // Get the input value
    let inputValue = document.getElementById("titleInput").value;
    // Call a function with the input value
    myFunction(inputValue);
}

async function myFunction(inputValue) {

    const list = await getBooksData(inputValue);
    const listBooks = new CardTemplate(list, books);
    // console.log("Input value:", inputValue);
    listBooks.init();
}


