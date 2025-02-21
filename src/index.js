const readline = require("readline");
const Calculatrice = require("./calculatrice");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calc = new Calculatrice();

const regex = /^(\d+)([+\-*/])(\d+)$/;

const calculer = (input) => {
  const match = input.match(regex);

  if (match) {
    const num1 = parseFloat(match[1]);
    const operateur = match[2];
    const num2 = parseFloat(match[3]);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Veuillez entrer des nombres valides.");
      return demanderCalcul();
    }

    let resultat;

    switch (operateur) {
      case "+":
        resultat = calc.addition(num1, num2);
        break;
      case "-":
        resultat = calc.soustraction(num1, num2);
        break;
      case "*":
        resultat = calc.multiplication(num1, num2);
        break;
      case "/":
        try {
          resultat = calc.division(num1, num2);
        } catch (error) {
          console.error(error.message);
          return demanderCalcul();
        }
        break;
      default:
        console.log("seulement +, -, *, / autorisés");
        return demanderCalcul();
    }

    console.log(`resultat: ${resultat}`);
  } else {
    console.log("Format invalide. Utilisez un format comme 2+2.");
  }
  demanderCalcul();
};

const demanderCalcul = () => {
  console.log("Votre calcul (ex: 2+2) :");
  rl.once("line", (input) => calculer(input));
};

demanderCalcul();
