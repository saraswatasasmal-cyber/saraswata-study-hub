const container =
document.getElementById("pdfContainer");

const saved =
localStorage.getItem("pdfs");

console.log(saved);

let pdfs = [];

if(saved){
    pdfs = JSON.parse(saved);
}

if(pdfs.length === 0){
    container.innerHTML =
    "<h2>No PDFs Uploaded Yet</h2>";
}

pdfs.forEach(pdf => {

    const div =
    document.createElement("div");

    div.className = "card";

    div.innerHTML = `
      <h3>${pdf.name}</h3>
      <a href="${pdf.url}"
      target="_blank">
      Download PDF
      </a>
    `;

    container.appendChild(div);
});