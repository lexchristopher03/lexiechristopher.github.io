// console.log(document.querySelector('button'));
// console.log(document.querySelectorAll('button'));
// console.log(document.querySelectorAll('button')[1]);
// console.log(document.getElementsByClassName('my_button'));
// console.log(document.getElementsByClassName('my_button')[2]);
// console.log(document.querySelectorAll("3my_id .my_class")[1]);


hello();

function hello(name){
    alert("hello " + name);
}


// console.log(hello(lexie));


let text = ["one", "two", "three"];
let paragraph = "";

function buildText(arr){
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        paragraph += arr[i];
    }
    document.getElementById("my_para").innerHTML = paragraph;
    // console.log(paragraph)
}

document.getElementById("button_1").addEventListener("click", function(e){buildText(text)});
buildText(text);
