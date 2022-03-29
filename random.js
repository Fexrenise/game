let x = Math.floor(Math.random()*11);
console.log(x);
function simple(){
    let y = document.getElementById('first').value;
    let show =document.getElementById('text');
    if (x == y) {
        alert('Düzgün ədədi taptınız!');
    }else if (y == "") {
        alert('eded daxil edin');
    }
    else if (0<x && x<6) {
        alert('Ədəd 0-5 arasında yerləşir');
    }
    else if (5<x && x<11) {
        alert('Ədəd 6-10 arasında yerləşir');
    }
    else{
        alert('Ədəddən uzqlaşdınız');
    }   
}