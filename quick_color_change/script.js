//generate a random color from hex value

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0; i<6; i++){
        let position=Math.floor(Math.random()*16)
        color+=hex[position]
    }
    return color;
}

//console.log(randomColor())

 let intervalid;
const startChangingColor=function(){
    
    if (!intervalid){
   intervalid= setInterval(changeBg, 1000);
    }

    function changeBg(){
  document.body.style.backgroundColor=randomColor();
    }

}

const stopChangingColor=function(){
 clearInterval(intervalid)
 intervalid=null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
