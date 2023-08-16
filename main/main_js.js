const slider = document.querySelector('.recommend_slide_box');
let mouseDown = false;
let startX, scrollLeft;
let touchOn = false;
let startTouch, dragLeft;

let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
    mouseDown = false;
};

let startTouching = function (e) {
    touchOn = true;
    startTouch = e.touches[0].pageX - slider.offsetLeft;
    dragLeft = slider.scrollLeft;
}
let stopTouching = function (e) {
    touchOn = false;
}

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


slider.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!touchOn) { return; }
    const x = e.touches[0].pageX - slider.offsetLeft;
    const scroll = x - startTouch;
    slider.scrollLeft = dragLeft - scroll;
    console.log("hi")
});

slider.addEventListener('touchstart',startTouching,false);
slider.addEventListener('touchend',stopTouching,false);

function click_to_map(){
  const login_button = document.getElementById("to_map");
  location.replace('../map/index.html')
}

const click_login_button_action = document.getElementById("to_map");
click_login_button_action.addEventListener("click", click_to_map);