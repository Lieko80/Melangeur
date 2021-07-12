function imprimer_page(){
    window.print();
  }
  
var check = document.getElementById("envoi");
check.addEventListener("click", function verif(event) {
//variables 
var phrase = document.getElementById("phrase").value;
var splitphrase;
var split;
var longphrase;
var long;
var result;
    
    //separe les phrase
    splitphrase = phrase.split('.');

    // randomizer tableau
    function shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
    }

    //longueur des phrases
    longphrase = splitphrase.length - 1;
    console.log("nombre de phrase : " + longphrase);    

    for (j = 0; j<longphrase; j++){
        split = splitphrase[j].split(" ");
        console.log("phrase spliter : " + split);

        //melange les mots
        shuffleArray(split);
        console.log("randomiser melanger : " + split);

        //recupere la taille du tableau
        long = split.length;
        console.log("nombre de mots dans la phrase : " + long);

        //je creer une div pour chaque phrase
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "container");

        for(i = 0; i<long; i++){
            //j'enleve le premier mot du tableau a cahque tour de boucle
            result = split.shift();
            console.log("resultat : " + result);

            //je creer des boutons en leur mettant les valeur de split en allant
            var btn = document.createElement("BUTTON");  
            btn.setAttribute("class", "btn btn-outline-secondary");                                
            btn.innerHTML = result;                
            
            newDiv.appendChild(btn);
        }   

        // ajoute le nouvel élément créé et son contenu dans le DOM
        var currentDiv = document.getElementById(i);
        document.body.insertBefore(newDiv, currentDiv);

    }

});