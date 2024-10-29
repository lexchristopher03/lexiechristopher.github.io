

console.log(document.getElementById("my_head"));

document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    // change paragraph when clicked on it
    document.getElementById("paragraph").innerHTML = "this is the new text";
    document.getElementById("paragraph").style.color= "blue";
    // change attributes of an element- change image when clicked
    document.getElementById("image").src="giraffeFun.jpeg";

})

document.getElementById("small_description").addEventListener("mouseenter", function(e){
    document.getElementById("second_paragraph").innerHTML = "this is new text that was hidden";
    document.getElementById("second_paragraph").style.color= "red";

})

// document.getElementById("other").addEventListener("shiftKey", function(e){
//     document.getElementById("second_paragraph").innerHTML = "this text showed up when you clicked the shift key";
//     document.getElementById("second_paragraph").style.color= "green";

// })


console.log(documnet.getElementById("my_head").innerHTML);

// mouseenter, mouseleave, mouseleave