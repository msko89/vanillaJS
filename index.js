const title = document.querySelector("#title");

function handleClick(event){
    title.style.color = 'blue';
    // console.log(event);
//   console.log("I have been resized");
}

title.addEventListener("click",handleClick);