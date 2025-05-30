/*return
`<h1>Пахомов Виктор Васильевич №231</h1>

/* document.body.onload = addElement();
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("Place");
  document.getElementById("Place").appendChild(newDiv)
} */
/*document.body.onload = function() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    document.getElementById("Place").appendChild(newDiv)
} */
document.addEventListener('DOMContentLoaded',function(){
    const header = document.getElementById('Place')

    const info = {
        SN: 'Пахомов Виктор Васильевич',
        group: '№231'
    }

    const infoElement = document.createElement('h1')
    infoElement.textContent = `${info.SN} ${info.group}`
    header.appendChild(infoElement)
})