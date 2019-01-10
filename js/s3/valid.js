
function vendre() {
  
  var  pr=document.getElementById('prix');
  var  qte=document.getElementById('qte');
  var  qteStock=document.getElementById('qteStock');
  var  resultat=document.getElementById('resultat');
  var  erreur=document.getElementById('erreur');
  //convertion
  if(isNaN(pr.value)){
    alert('le prix doit etre numerique');
  }
   if(isNaN(qte.value)){
    alert('la qte doit etre numerique');
  }
   if(isNaN(qteStock.value)){
    alert('la qte en stock doit etre numerique');
  }

if(!isNaN(pr.value) && !isNaN(qte.value) && !isNaN(qteStock.value)){


    var vprix=eval(pr.value);
    var vqte=eval(qte.value);
    var vqteStock=eval(qteStock.value);
  //trt
      if(vqte>vqteStock){
          //alert("vente impossible");
      erreur.innerHTML="Erreur la qte < qte en stock";
      }else {
          var tht=vprix*vqte;
          vqteStock=vqteStock-vqte;
  
          resultat.innerHTML="tht est "+tht+" dhs<br>";
          qteStock.value=vqteStock;
      }
}
 
 
}




