let dragBox = document.querySelectorAll('.paper');
let count = 0;
let last = 0;
let current = 0;

dragBox.forEach(element => {
    dragElement(element);
});


function dragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    element.style.position = "absolute";

    current = parseInt(element.style.zIndex) || 0;
    element.style.zIndex = count;
    count++;

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let control = document.querySelector('.control');
    element.style.rotate = "0deg";

    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    element.id = null;
    document.onmouseup = null;
    document.onmousemove = null;
    // element.style.rotate = Math.floor(Math.random() * -10) + "deg";
    element.style.rotate = (Math.floor(Math.random() * -10)) + "deg";
    console.log(element.style.rotate);
  }
}