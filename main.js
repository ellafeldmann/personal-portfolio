$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
        $('.menu ul').toggleClass('active')

    })
});



// function removeAnimateCircles(){
//     circle.parentNode.removeChild(circle);
// }

// var colors = ['#234de1', '#F42F5D', '#A2FD50'];

// function animateCircles (event) {
//     var circle = document.createElement(circle);
//     circle.setAttribute("class", "circle");
//     document.body.appendChild(circle);
//     circle.style.left = event.clientX + 'px';
//     circle.style.top = event.clientY + 'px';

//     var color = colors[Math.floor((Math.random() * colors.length))];
//     circle.style.borderColor = color;

//     circle.style.transition = "all 0.5s linear 0s";

//     circle.style.left = circle.offsetLeft + 20 + 'px';
//     circle.style.top = circle.offsetTop - 20 + 'px';

//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderwidth = "60px";
//     circle.style.opacity = 0;

//     setTimeout(function() {
//         circle.remove();
//     }, 500);
// }



// document.onmousemove = animateCircles;



