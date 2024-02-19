var imgBefore = document.querySelector(".img_before");
var imgAfter = document.querySelector('.img_after');
var btn_NO = document.getElementById('say_no');
var btn_Yes = document.getElementById('say_yes');

btn_NO.addEventListener('mouseover', function() {
    var top = Math.floor(Math.random()*400);
    var left = Math.floor(Math.random()*800);
    
    btn_NO.style.top = top + 'px'; 
    btn_NO.style.left = left + 'px'; 
})

// Hình ảnh
btn_Yes.addEventListener('mouseover', function() {
    imgAfter.style.display = "block";
    imgBefore.style.display = "none"
})

btn_Yes.addEventListener("mouseleave", function() {
    imgAfter.style.display = "none";
    imgBefore.style.display = "block"
});

//Model
var btn_close = document.getElementById('btn-close');
var modal_container = document.getElementById('modal-container');
btn_Yes.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});
btn_close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});