const body  = document.querySelector('body'),
      input1 = document.querySelector('#color1'),
      input2 =  document.querySelector('#color2'),
      randomBtn=document.querySelector('#random'),
      lightBtn=document.querySelector('#light'),
      darkBtn=document.querySelector('#dark');

function changeback() {
  body.style.background=`linear-gradient(90deg,${input1.value},${input2.value})`
    
}

input1.addEventListener('input' , changeback)
input2.addEventListener('input' , changeback)




function random(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal;
    let randomNumber2 = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);

    randomNumber2 = Math.floor(randomNumber2);
    let randColor2 = randomNumber2.toString(16);
    body.style.background=`linear-gradient(90deg,#${ randColor},#${ randColor2})`


}
randomBtn.addEventListener('click',random)


function dark(){
    body.style.background="black";
    body.style.color="#fff"
}
darkBtn.addEventListener('click',dark)

function light(){
    body.style.background="#fff";
    body.style.color="#000"
}
lightBtn.addEventListener('click',light)

