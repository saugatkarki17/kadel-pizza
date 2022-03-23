
//div main 

function time() {
window.setTimeout(() => {
       document.getElementById('preloader').style.display = "none";
       document.getElementById('alpha').style.display = "flex";


},5000);
}
time();


// plus minus call
var plusOne = document.querySelector(".plus1");
var plusTwo = document.querySelector(".plus2");
var plusFour = document.querySelector(".plus4");
var plusThree = document.querySelector(".plus3");
var minOne = document.querySelector(".min1");
var minTwo = document.querySelector(".min2");
var minThree = document.querySelector(".min3");
var minFour = document.querySelector(".min4");

// inout call

var numOne = document.querySelector(".num1");
var numTwo = document.querySelector(".num2");
var numThree = document.querySelector(".num3");
var numFour = document.querySelector(".num4");

// div call

var namDiv  =  document.querySelector('.nam');
var namDivTwo  =  document.querySelector('.nam2');
var namDivThree  =  document.querySelector('.nam3');
var namDivFour  =  document.querySelector('.nam4');

//span call
var spanOne  =  document.querySelector('.addedMagS');
var spantwo  =  document.querySelector('.addedNS');
var spanThree  =  document.querySelector('.addedNYS');
var spanFour  =  document.querySelector('.addedPS');
var total  =  document.querySelector('.total-no');



// price

var marg = 10.99;
var nep = 14.99;
var nyu = 22.99;
var pep = 18.00;

//total

// plus one function

function oneAdd(){
    var a = numOne.value;
    a = 0 ;
   
    plusOne.addEventListener('click', () => {
      a += 1;
      numOne.value = a;
        
     namDiv.style.display = "flex";
spanOne.innerHTML = a;
        var tot = a * marg;
        total.innerHTML = tot ;
       });
minOne.addEventListener('click', () => {
       if(a > 0) {
              a -= 1;
              numOne.value = a;   
       }
        if(a == 0) {
     namDiv.style.display = "none";

       }
      
        
       spanOne.innerHTML = a;
        var tot = a * marg;
        total.innerHTML = tot ;
        
       });
       
}
oneAdd();


// plus Two function

function twoAdd(){
    var a = numTwo.value;
    a = 0 ;
   
    plusTwo.addEventListener('click', () => {
      a += 1;
      numTwo.value = a;
      var tottwo = (a * nep);
      total.innerHTML = tottwo;

     namDivTwo.style.display = "flex";
spantwo.innerHTML = a;
       
       });

       minTwo.addEventListener('click', () => {
              if(a > 0) {
                     a -= 1;
                     numTwo.value = a;   
              }
               if(a == 0) {
            namDivTwo.style.display = "none";
       
              }
             
               
              spantwo.innerHTML = a;
               var tottwo = a * nep;
               total.innerHTML = tottwo ;
               
              });
       
}
twoAdd();
// plus one function

function threeAdd(){
    var a = numThree.value;
    a = 0 ;
   
    plusThree.addEventListener('click', () => {
      a += 1;
      numThree.value = a;
      var totthree = (a * nyu);
      total.innerHTML = totthree;
        
     namDivThree.style.display = "flex";
spanThree.innerHTML = a;
       
       });

       minThree.addEventListener('click', () => {
              if(a > 0) {
                     a -= 1;
                     numThree.value = a;   
              }
               if(a == 0) {
            namDivTwo.style.display = "none";
       
              }
             
               
              spanThree.innerHTML = a;
               var totthree = a * nyu;
               total.innerHTML = totthree ;
               
              });

       
       
}
threeAdd();
// plus one function

function fourAdd(){
    var a = numFour.value;
    a = 0 ;
    var totfour ;
    plusFour.addEventListener('click', () => {

      a += 1;
      numFour.value = a;
      totfour = (a * pep);
      total.innerHTML = totfour ;
      namDivFour.style.display = "flex";
      spanFour.innerHTML = a;




       });

       minFour.addEventListener('click', () => {
              if(a > 0) {
                     a -= 1;
                     numFour.value = a;   
              }
               if(a == 0) {
            namDivFour.style.display = "none";
       
              }
             
               
              spanFour.innerHTML = a;
               var totfour = a * pep;
               total.innerHTML = totfour ;
               
              });
       
       
}
fourAdd();





//for disc

var dis = document.querySelector('.dis');
var alpha = document.querySelector('.alpha');
var pay = document.querySelector('.pay');

function disc() {

pay.addEventListener('click', () => {

       var okd = document.createElement("div");
              okd.classList.add('discountdiv');
              alpha.appendChild(okd);
       var okp = document.createElement("p");
              okp.classList.add('discountdivp');
              okd.appendChild(okp);  
       var okpt = document.createElement("p");
              okpt.classList.add('discountdivpt');
              okd.appendChild(okpt);
              
              var okdt = document.createElement("div");
              okdt.classList.add('discountdivt');
              okd.appendChild(okdt);


       var okb = document.createElement("button");
              okb.classList.add('discountdivb');
              okdt.appendChild(okb);
              okb.innerHTML = "Go Back";
       var okbt = document.createElement("a");
              okbt.classList.add('discountdivbt');
              okdt.appendChild(okbt);
              okbt.innerHTML = "Pay Now";
              okbt.style.background = 'rgb(45, 211, 45)';
              okbt.href ="https://esewa.com.np/#/home";

              document.body.classList.add('noscroll');


              okb.addEventListener('click',() => {
              alpha.removeChild(okd);
              document.body.classList.remove('noscroll');

              });



       
       if(dis.value == "qtpie"){
              okp.innerHTML = "Discount applied !!";
              okpt.innerHTML = "Your total : $ 69" ;

              
       }
       else if(dis.value == "") {
              okp.innerHTML = "No code used";
              okpt.innerHTML = "Your total : $ 69 ";

              okp.style.color = "grey";

       }
       else{
              okp.innerHTML = "Wrong code !!"
              okpt.innerHTML = "Your total : $ 69 ";
              okp.style.color = "red";

       }  
});
       
}
disc();







