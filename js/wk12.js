// alert("hello");

let ourObjects = {
    "name": "Lexie",
    "profession": "student",
    "age": 20,
    "pets": [{"name": "Joey", "type": "dog", "age": "5", "unit": "years"},
            {"name": "Phoebe", "type": "dog", "age": "3", "unit": "years"}]
}

console.log(ourObjects);

// API stuff

let myData = {};
function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
            return res.json();

        }else{
            console.log("API response error", res);
        }     
    })
    .then(res =>{
        myData=res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}

fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})


console.log(myData);

// let name = "Lexie";
// let myString = `hello $(name) !` ;

