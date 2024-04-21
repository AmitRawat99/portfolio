// let MenuBtn = document.getElementById('bars');
// MenuBtn.addEventListener ('click',function(e){
//     document.querySelector('body').classList.toggle('mobile-now-active');
//     this.classList.toggle('fa-xmark')
// })

let MenuBtn = document.getElementById('bars');
MenuBtn.addEventListener('click',function(e){
   document.querySelector('body').classList.toggle('mobile-now-active');
   this.classList.toggle('fa-xmark');
})