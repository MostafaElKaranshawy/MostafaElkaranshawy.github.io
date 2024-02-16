var navbar = document.querySelector('.header')

    // Change style on scroll
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgb(0 0 0 / 70%)"; // Change to the desired color
    } else {
        navbar.style.backgroundColor = "transparent"; // Change to the default color
    }
});

// Projects

var AllProjects = [
    {
        Plink: 'https://github.com/MostafaElKaranshawy/Carabity',
        title: 'Carabity',
        photo: 'carabity.png',
        type: 'web'
    },
    {
        Plink: 'https://github.com/MostafaElKaranshawy/Xmail',
        title: 'Xmail',
        photo: 'mail.png',
        type: 'web'
    },
    {
        Plink: 'https://github.com/MostafaElKaranshawy/Producer-Consumer',
        title: 'Producer Consumer',
        photo: 'producer.png',
        type: 'web'
    },
    {
        Plink: 'https://github.com/MostafaElKaranshawy/To-Do',
        title: 'To Do',
        photo: 'toDo.png',
        type: 'web'
    },
    {
        Plink: 'https://github.com/MostafaElKaranshawy/Genieh-Game',
        title: 'Genieh Game',
        photo: 'genieh.png',
        type: 'web'
    },
    {
        Plink: 'https://mostafaelkaranshawy.github.io/Tic-Tac-Toe/',
        title: 'Tic Tac Toe',
        photo: 'xo.png',
        type: 'web'
    },
    {
        Plink: 'https://mostafaelkaranshawy.github.io/Contact-Card/',
        title: 'Contact Card',
        photo: 'card.png',
        type: 'web'
    },
    {
        Plink: 'https://mostafaelkaranshawy.github.io/Kasper-page/',
        title: 'Template',
        photo: 'template.png',
        type: 'web'
    },
    {
        Plink: 'https://github.com/MostafaElKaranshawy/Equations-Solver',
        title: 'Equations Solver',
        photo: 'solver.jpg',
        type: 'software'
    },
    {
        Plink: 'https://github.com/MostafaElKaranshawy/connect4_game',
        title: 'Connect 4 Engine',
        photo: 'connect.png',
        type: 'software'
    }
]

// Tabs for Filter
let webProjects = document.querySelector('.projects .container');
let filterAll = document.querySelector(".projects .filter .all");
let filterWeb = document.querySelector(".projects .filter .web");
let filterSoft = document.querySelector(".projects .filter .software");
let Projects = AllProjects;

// Functions
function filtering(){
    while (webProjects.firstChild) {
        webProjects.removeChild(webProjects.firstChild);
    }
    for(let i =  0; i < Projects.length; i++){
        var project = Projects[i];
        let child = document.createElement('div');
        child.classList.add('project');
        child.innerHTML = `<a href="${project.Plink}" class="image" target="blank">
                                <img src="style/projects/${project.photo}" alt="photo">
                            </a>
                            <div class="textBox">
                                ${project.title}
                            </div>`;
        webProjects.appendChild(child);
    }
}
function active(type){
    filterAll.classList.remove('active')
    filterWeb.classList.remove('active')
    filterSoft.classList.remove('active')
    if(type == 'all'){
        filterAll.classList.add('active')
        Projects = AllProjects
    }
    else if(type == 'web'){
        filterWeb.classList.add('active')
        Projects = AllProjects.filter(project => project.type == 'web')
    }
    else if(type == 'software'){
        filterSoft.classList.add('active')
        Projects = AllProjects.filter(project => project.type == 'software')
    }
    filtering();
}
filterAll.addEventListener('click',() =>{
    active('all');
});
filterWeb.addEventListener('click',() =>{
    active('web');
});
filterSoft.addEventListener('click',() =>{
    active('software');
});

filterAll.click()



// manage scroll

// let scroller = document.querySelector('body');
// let about = document.querySelector('.about')
// let projects = document.querySelector('.projects')
// let contact = document.querySelector('.contact')
// let homeIcon = document.querySelector('.navMenu .homeIcon')
// let aboutIcon = document.querySelector('.navMenu .aboutIcon')
// let projectsIcon = document.querySelector('.navMenu .projectsIcon')
// let contactIcon = document.querySelector('.navMenu .contactIcon')
// home.addEventListener('scroll',() =>{
//     console.log("ssssssssss")
//     aboutIcon.classList.remove('hovered')
//     projectsIcon.classList.remove('hovered')
//     contactIcon.classList.remove('hovered')
//     homeIcon.classList.add('hovered')
// })