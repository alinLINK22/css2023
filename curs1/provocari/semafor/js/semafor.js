let lights=document.querySelectorAll('#isiqfor > div'),
    timers=[5000,2000,7000],counter=0;
let lights2=document.querySelectorAll('#isiqfor2 > div'),
    timers2=[5000,2000,7000],counter2=2;
    
    
window.addEventListener('load', start);


var start= setTimeout(function(){
    traffic();
    traffic2();
},5000);

function traffic(){
    for(i= 0;i< lights.length;i++){
        lights[i].classList.remove('on');
    }
    lights[counter].classList.add('on');
    setTimeout(traffic,timers[counter]);
    counter=(counter +1)% timers.length;
}

function traffic2(){
    for(i= 0;i< lights2.length;i++){
        lights2[i].classList.remove('on');
    }
    lights2[counter2].classList.add('on');
    setTimeout(traffic2,timers2[counter2]);
    counter2=(counter2 +1)% timers2.length;
}