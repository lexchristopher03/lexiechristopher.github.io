// API stuff

let myData = {};
function getJoke(){
fetch('https://api.chucknorris.io/jokes/random')
    .then(res =>{
        if(res.ok){
            return res.json();

        }else{
            console.error("API response error", res);
        }     
    })
    .then(res =>{
        myData=res;
        console.log(myData);
        // document.getElementById("fact").innerHTML = myData.value;
        displayRes(myData.value);
    }
)
    .catch(error => {console.log(error)})
}
function displayRes(text) {
    document.getElementById("fact").innerHTML = text; // Update the paragraph with the joke
}

getJoke();

document.getElementById("generate").addEventListener("click", e=> {getJoke();})


console.log(myData);




