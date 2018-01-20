

var pic1 =  document.getElementById("pic1");
var pic2 =  document.getElementById("pic2");
var pic3 =  document.getElementById("pic3");
var ingredient = document.getElementById("ingredientAdder");

var submitBtn = document.getElementById("submitButton");

window.onload = function(){
pic1.style.display="none";
pic2.style.display="none";
pic3.style.display="none";
}

submitBtn.onclick = function() {
  var entry=ingredient.value;

  if(entry=="garlic, potatoes, butter, cream"){
    pic2.style.display="block";
    pic1.style.display="none";
    pic3.style.display="none";
  }
    else if (entry=="flour, butter, apples, sugar") {
      pic1.style.display="block";
      pic2.style.display="none";
      pic3.style.display="none";
    }
    else if (entry=="eggs, cheese, ham, broccoli"){
      pic3.style.display="block";
      pic2.style.display="none";
      pic1.style.display="none";
    }
    else {
      pic2.style.display="none";
      pic3.style.display="none";
      pic1.style.display="none";

    }
}
