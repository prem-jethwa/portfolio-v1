const proj= document.querySelector(".main-other-project");
const projectBtn = document.getElementById("project-btn");
const downArrow = document.getElementById("btn-svg");

let containerHeight = false;


const showAll = () =>{
    if(containerHeight === false){
        proj.style.height = '100%';
        downArrow.style.transform = 'rotate(180deg)';
        containerHeight = true;
    }else if(containerHeight === true){
        proj.style.height = '300px';
        downArrow.style.transform = 'rotate(0deg)';
        containerHeight = false;
    }
}

projectBtn.addEventListener('click', showAll);

// animation section

// const anima = document.querySelector('.anima');


// const slideUp = () => {
//         anima.style.animation = "slide ease-in alternate 700ms";
//         anima.style.opacity = "1";
//         anima.style.transform = 'translateY(0)';
//     }

// buttom rotation effect

// const downArrow = document.getElementById("btn-svg");

// const rotate = () => {
//     downArrow.style.transform = ' rotate(180deg)';
// }

// projectBtn.addEventListener('click', showAll);

