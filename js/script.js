// const lawSection = document.querySelector('#lawSection');
// let mouseDown = false;
// let startX, scrollLeft;


// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - lawSection.offsetLeft;
//   scrollLeft = lawSection.scrollLeft;
// };
// let stopDragging = function (event) {
//   mouseDown = false;
// };
// if(lawSection){

//   lawSection.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     if(!mouseDown) { return; }
//     const x = e.pageX - lawSection.offsetLeft;
//     const scroll = x - startX;
//     lawSection.scrollLeft = scrollLeft - scroll;
//   });

//   // Add the event listeners
//   lawSection.addEventListener('mousedown', startDragging, false);
//   lawSection.addEventListener('mouseup', stopDragging, false);
//   lawSection.addEventListener('mouseleave', stopDragging, false);

// }

// lawSection.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   lawSection.scrollBy({
//     left: event.deltaY < 0 ? -30 : 30,
    
//   });
// });