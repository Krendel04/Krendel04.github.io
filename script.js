let i = 0;
let image = document.getElementById("image_slider");
let imgs = new Array('paris.jpg', 'street.jpg', 'laduree.jpg', 'paris_view.jpg');
function change(){
image.src = imgs[i];
i++;
i = i % 4;
}
