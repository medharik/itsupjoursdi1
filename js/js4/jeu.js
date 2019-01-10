function repondre(){

   var n1= document.getElementById('n1');
   var n2= document.getElementById('n2');
   var rep= document.getElementById('rep');
   var image= document.getElementById('image');

    var produitReel=n1.value*n2.value;
if (produitReel==rep.value) {
    // alert("OK")
    image.src="images/ok.jpg";
} else {
     image.src="images/ko.jpg";
}    

image.className='montrer';

}