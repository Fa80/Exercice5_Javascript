function valider(){
  //initialisation des variables + la methode .getElementById
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  //Initialisation des variables contenant le resultat de la multiplication
  var result = parseInt(firstNumber) * (secondNumber);
//Si le resultat n'est pas un nombre j'affiche un message
  if (isNaN(firstNumber) || isNaN(secondNumber)){
  alert("Veuillez entrer des nombres !");
}else{
  alert("Le résultat est : " + result);
  }
};
