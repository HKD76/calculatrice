const Calculatrice = require("./calculatrice");

describe("Tests de la classe Calculatrice", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculatrice();
  });

  test("addition de 2 et 3 doit retourner 5", () => {
    expect(calc.addition(2, 3)).toBe(5);
  });

  test("soustraction de 5 et 3 doit retourner 2", () => {
    expect(calc.soustraction(5, 3)).toBe(2);
  });

  test("multiplication de 2 et 3 doit retourner 6", () => {
    expect(calc.multiplication(2, 3)).toBe(6);
  });

  test("division de 6 par 3 doit retourner 2", () => {
    expect(calc.division(6, 3)).toBe(2);
  });

  test("division par 0 doit lancer une erreur", () => {
    expect(() => {
      calc.division(6, 0);
    }).toThrow("pas de div par 0");
  });
});
