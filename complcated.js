let x = Math.floor(Math.random()*100);
console.log(x);
function complicated() {
    let y = document.getElementById('first').value;
    let show =document.getElementById('text');
    if (x == y) {
        alert('Düzgün ədədi taptınız!');
    }else if (y == "") {
        alert('Ədəd daxil edin!');
    }
    else if (0 < x && x< 51) {
        alert('Ədəd 1-50 arasında yerləşir!');
    }
    else if (51< x && x<101) {
        alert('Ədəd 50-100 arasında yerləşir!');
    }
    else{
        alert('Ədəddən uzqlaşdınız');
    }
}