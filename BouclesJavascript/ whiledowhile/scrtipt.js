// boucle while : tant que //

let chiffre = 1;

while(chiffre <= 11){
    console.log(chiffre);
    chiffre++
}



//  faire apparaitre la lettre : e //
const chaine = "je suis julien.";

console.log(chaine[1])



// faire apparaitre la totalité des lettres ://
const chaine1 = "je suis julien.";

let i  = 0;
let count = 0;
//let tours = 20;

while(chaine1[i] !="."){

    if(chaine1[i] == " " ){
        i++;
        continue;
    }
    console.log(chaine1[i]);
    console.log("i="+i);
    count++;
    i++;

  //  if( i== tours  ) break;
}

console.log(count);



const chaine2 =  "la table en marbre."

let A =  0;
let compteur = 0;

while(chaine2[A] !="."){

   if(chaine2[A] == " "){
    A++;
    continue;
}
    console.log(chaine2[A]);
    console.log("A="+A);
    compteur++;
    A++;
}
*/


//faire apparaitre les chiffres impairs 
let n = 1;

while (n < 11) 
{
    // chiffre pair
   //if(n%2 == 1)

    if(n%2 == 0)
    {
        n++;
        continue;
    }
    console.log(n);
    n++;
}


// dowhile fais tant que //
// ÉXÉCUTE LE CODE AVEC LE DO  ET EXECUTE LA CONDITION AVEC LE WHILE

//let b = prompt("quel est ton nom")
//console.log(b);


let m = prompt("entrez un nombre inférieur a 10");
do {
    m = prompt("entrez un nombre inférieur a 10");
  }
  
while(m > 10)
 
