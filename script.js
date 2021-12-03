let i = 0;
let image = document.querySelector('.slider-item1');
let imgs = new Array('paris.jpg', 'street.jpg', 'laduree.jpg', 'paris_view.jpg');
function change(){
image.src = imgs[i];
i++;
i = i % 4;
}