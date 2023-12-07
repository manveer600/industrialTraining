window.addEventListener('resize', function(){
if (document.documentElement.clientWidth < 1200) {
    let x = document.querySelector("h1");
    x.innerHTML = '<a href="index.html">The Stanford NLP Group</a>';
}
if (document.documentElement.clientWidth > 1200) {
    let x = document.querySelector("h1");
    x.innerHTML = '<a href="index.html">The Stanford Natural Language Processing Group</a>'; 
}
});


if (document.documentElement.clientWidth < 1200) {
    let x = document.querySelector("h1");
    x.innerHTML = '<a href="index.html">The Stanford NLP Group</a>';
}
if (document.documentElement.clientWidth > 1200) {
    let x = document.querySelector("h1");
    x.innerHTML = '<a href="index.html">The Stanford Natural Language Processing Group</a>'; 
}
// function myFunction() {
//     var x = document.getElementById("ham-content");
//     if (x.style.display === "block") {
//       x.style.display = "none";

//     } else {
//       x.style.display = "block";
//     }
//   }

// function myFunction() {
//   var x = document.getElementById("ham-content");
//   if (x.style.opacity === "1") {
//     x.style.opacity = "0";
//     x.style.zIndex="1";
//     x.style.pointerEvents = "none"; // Prevent interaction with hidden content
//   } else {
//     x.style.zIndex="0";
//     x.style.opacity = "1";
//     x.style.pointerEvents = "auto"; // Allow interaction with visible content
//   }
// }
