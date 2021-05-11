function decipher(){
  let dictionary =new Map();
    dictionary.set("0","Zero");
    dictionary.set("1","One");
    dictionary.set("2","Two");
    dictionary.set("3","Three");
    dictionary.set("4","Four");
    dictionary.set("5","Five");
    dictionary.set("6","Six");
    dictionary.set("7","Seven");
    dictionary.set("8","Eight");
    dictionary.set("9","Nine");
    dictionary.set("A","Alpha");
    dictionary.set("B","Bravo");
    dictionary.set("C","Charlie");
    dictionary.set("D","Delta");
    dictionary.set("E","Echo");
    dictionary.set("F","Foxtrot");
    dictionary.set("G","Golf");
    dictionary.set("H","Hotel");
    dictionary.set("I","India");
    dictionary.set("J","Juliett");
    dictionary.set("K","Kilo");
    dictionary.set("L","Lima");
    dictionary.set("M","Mike");
    dictionary.set("N","November");
    dictionary.set("O","Oscar");
    dictionary.set("P","Papa");
    dictionary.set("Q","Quebec");
    dictionary.set("R","Romeo");
    dictionary.set("S","Sierra");
    dictionary.set("T","Tango");
    dictionary.set("U","Uniform");
    dictionary.set("V","Victor");
    dictionary.set("W","Whiskey");
    dictionary.set("X","X-ray");
    dictionary.set("Y","Yankee");
    dictionary.set("Z", "Zulu");
  

  abbreviation=(document.getElementById("abbreviationInput").value).toUpperCase();
  let signs = abbreviation.split('');

  let result = '';

  for(let i=0; i<=signs.length; i++){
    if(signs[i]>="A" && signs[i]<="Z" || signs[i]>="0" && signs[i]<="9"){
      result+=` ${dictionary.get(signs[i])}`;
    }
  }
  document.getElementById("result").innerHTML = result;
}
