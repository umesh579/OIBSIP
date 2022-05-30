let list=document.getElementById('right-nav');
let close_btn=document.getElementById('close-hamMenu');
let btn=document.querySelector('.hamburger');
btn.addEventListener('click',()=>{
   list.classList.add('active');
   btn.style.display='none';
   close_btn.style.display='block'
   console.log('add');
})
close_btn.addEventListener('click',()=>{
    list.classList.remove('active');
    btn.style.display='block';
    close_btn.style.display='none'
})