import { getBooksData } from "./booksapi.mjs";
import ProductList from "./cardTemplate.mjs";

document.getElementById("titleInput").addEventListener("input", processInput);
const books = document.querySelector(".books");

function processInput() {
    // Get the input value
    let inputValue = document.getElementById("titleInput").value;
    
    // Call a function with the input value
    myFunction(inputValue);
}

async function myFunction(inputValue) {
    // Do something with the input
    const list = await getBooksData(inputValue);
    const listBooks = new ProductList(list, books);
    console.log("Input value:", inputValue);
    // You can perform further processing here
    listBooks.init();
}
