class Calculatrice {
  addition(a, b) {
    return a + b;
  }

  soustraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b === 0) {
      throw new Error("pas de div par 0");
    }
    return a / b;
  }
}

module.exports = Calculatrice;
