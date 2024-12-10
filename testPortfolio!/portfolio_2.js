
// get subdomain
let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));

console.log(subdomain);


fetch('projects.json')
   .then(response => {
        return response.json();
   }).then(projects => {
        // console.log(projects);
        proj = projects;
        findProjectInJSOn(projects);
        // parseData(projects);
   }).catch(err => {
        console.log(`error ${err}`);
   });

function findProjectInJSOn(projects){
    for(let i =0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}



function buildPage(project) {
    console.log(project);

    // Start building the HTML content for the project
    const projectSection = document.getElementById("project");
    projectSection.innerHTML += `
        <h1>${project.name}</h1>
        
       
        <div class="slideshow">
            <div class="slides-container">
                ${project.image
                  .map(
                    (img, index) => `
                    <img 
                        class="slide ${index === 0 ? "active" : ""}" 
                        src="${img}" 
                        alt="${project.name} Image ${index + 1}"
                    />
                  `
                  )
                  .join("")}
            </div>
            <button class="prev">❮</button>
            <button class="next">❯</button>
        </div>
         <div class="description">
            <p>${project.description}</p>
        </div>`;
        
    setupSlideshow();
}
function setupSlideshow() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentSlide = 0;

    // function to start slideshow with current image it's on from home page
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    // event listener for previous slide
    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // event listener for next slide
    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

