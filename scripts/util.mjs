export function renderWithTemplate(template, parentElement, data, callback, position = "afterbegin") {
    parentElement.insertAdjacentHTML(position, template);
    if (callback) {
      callback(data);
    }
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("../partials/header.html");
    const footerTemplate = await loadTemplate("../partials/footer.html");
    const headerElement = document.querySelector("#main-header");
    const footerElement = document.getElementById("main-footer");
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}