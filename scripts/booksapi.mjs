const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "&key=AIzaSyAu1aRXhxNC9Ui9gqSI8NrpxNlCC-92sfg";

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: "servicesError", message: data };
    }
}

export async function getBooksData(finder) {
  if (finder === "") {
    finder = "*";
  }
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${finder}&key=AIzaSyAu1aRXhxNC9Ui9gqSI8NrpxNlCC-92sfg`);
    const data = await convertToJson(response);
    console.log(data.items);
    return data.items;
}