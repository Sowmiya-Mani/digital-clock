let ampm=document.getElementById('ampm');
function displaytime(){
    let datetime = new Date();
    let hr = datetime.getHours();
    let min = zeropad(datetime.getMinutes());
    let sec = zeropad(datetime.getSeconds());
     if(hr>=12){
      hr=hr-12;
      ampm.innerHTML = 'PM';
     }
    document.getElementById('hours').innerHTML =zeropad(hr)
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

function zeropad(num){
    return num<10? '0'+num : num
}

setInterval(displaytime,500)