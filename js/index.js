function imprimer_page(){
    window.print();
  }
  
var check = document.getElementById("envoi");
check.addEventListener("click", function verif(event) {
//variables 
var phrase = document.getElementById("phrase").value;
var split;
var long;
var result;
    
    //separe les mot par un espaces
    split = phrase.split(' ');
    //les met par ordre alphabetique    
    split.sort();
    console.log("mis alpha" + split);

    //recupere la taille du tableau
    long = split.length;
    console.log("longueur" + long);

    for(i = 0; i<long; i++){
        //j'enleve le premier mot du tableau a cahque tour de boucle
        result = split.shift();
        console.log(result);

        //je creer des boutons en leur mettant les valeur de split en allant
        var btn = document.createElement("BUTTON");      
        btn.setAttribute("class", "btn btn-outline-primary");                                
        btn.innerHTML = result;                
        document.getElementById("cont").appendChild(btn);

    }   


});