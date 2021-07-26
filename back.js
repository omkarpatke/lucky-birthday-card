var Input1 = document.querySelector(".inputdate");
var Input2 = document.querySelector(".inputnumber");
var cheakbtn = document.querySelector(".btn");
var Answer = document.querySelector(".answer");
var sorryimg = document.querySelector(".sorry");
var congratsimg = document.querySelector(".congrats");
cheakbtn.addEventListener("click" , clickHandler);



function clickHandler(){
    console.log("clicked");
 var date = Input1.value.split("-");
 console.log(date);
 var sum =0;
 date.map((string) => {
     for( var i=0 ; i< string.length;i++){
         sum = sum + string[i];
     }
 })
  sum = Number(sum);
  console.log(sum);
  if(Input1.value >= 0){
    alert("Please Enter Information!");
}else if(Input2.value <= 0){
    alert("Please enter your lucky Number");
}else if(sum % Number(Input2.value)!==0){
Answer.innerHTML='Your Birthday is Not Lucky.';
sorryimg.classList.remove('display');

  }else{
      Answer.innerHTML="Your Birthday is Lucky";
      congratsimg.classList.remove("hidden");
  }
  
  

}
