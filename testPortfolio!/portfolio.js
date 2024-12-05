
// /* <div class="projimg" > <img src ="projIMG/' + projects.projects[i].mainimg +'"' + '></div> */
let proj;
// Fetch JSON stuff
fetch('projects.json')
   .then(response => {
        return response.json();
   }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
   }).catch(err => {
        console.log(`error ${err}`);
   });

function parseData(data){
    for(let i = 0; i < data.projects.length; i++){
        const project = data.projects[i];
        let firstImage = '';

        // If 'image' is an array, get the first image, else use 'mainimg'
        if (Array.isArray(project.image) && project.image.length > 0) {
            firstImage = project.image[0];  // Use the first image in the array
        } else {
            firstImage = project.mainimg;  // Use the main image if no array or empty array
        }

        // Add project details to the page
        document.getElementById("projects").innerHTML += 
        `<a href="${data.projects[i].subdomain}.html"
        <div class="row project" id="${project.subdomain}">
            <div class="projimg">
                <img src="${firstImage}" alt="${project.name} Image">
            </div>
            <div class="description">
                <h2>${project.name}</h2>
                <p class="subtitle">${project.subtitle}</p>
                
            </div>
        </div></a>`;
    }
}

// Handling button clicks for filtering
for(b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "clear"){
        for(i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(i=0; i<proj.projects.length; i++){
            if(proj.projects[i].category.includes(button)== true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";

            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";

            }
        }
    }else{
        console.log("button value is undefined");
    }
}
