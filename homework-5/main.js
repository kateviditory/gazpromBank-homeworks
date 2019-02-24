const dragElement = document.body.getElementsByClassName("dragElement")[0];

const getCoords = elem => {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};

removeListener = () => {
  document.removeEventListener("mousemove", moveAt);
  dragElement.removeEventListener("mouseup", removeListener);
};

const drag = elem => {
  let coords = getCoords(dragElement);
  let shiftX = elem.pageX - coords.left;
  let shiftY = elem.pageY - coords.top;

  dragElement.style.position = "absolute";

  const moveAt = elem => {
    dragElement.style.left = elem.pageX - shiftX + "px";
    dragElement.style.top = elem.pageY - shiftY + "px";
  };

  document.addEventListener("mousemove", moveAt);
  dragElement.addEventListener("mouseup", removeListener);
};

dragElement.addEventListener("mousedown", drag);
