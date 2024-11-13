const { lancarNotas } = require("../src/lancamentoNotas");

describe("Test function lancarNotas", () => {
  it("Should return 'Notas salvas com sucesso'", () => {
    expect(lancarNotas(7.5, 8.2)).toBe("Notas salvas com sucesso");
  });
  it("Should throw error with number under 0", () => {
    expect(() => lancarNotas(-1.0, 8.2)).toThrow(
      'Erro: "Nota de 1UP inválida"'
    );
  });
  it("Should throw error with number over 10", () => {
    expect(() => lancarNotas(7.5, 12.0)).toThrow(
      'Erro: "Nota de 2UP inválida"'
    );
  });
  it("Should throw error with number with more than one decimal place", () => {
    expect(() => lancarNotas(7.567, 8.2)).toThrow(
      'Erro: "Nota de 1UP inválida"'
    );
  });
  it("Should throw error with number with more than one decimal place", () => {
    expect(() => lancarNotas(7.5, 8.256)).toThrow(
      'Erro: "Nota de 2UP inválida"'
    );
  });
  it("Should throw error with NaN", () => {
    expect(() => lancarNotas("sete", 8.2)).toThrow(
      'Erro: "Entradas devem ser numéricas"'
    );
  });
});
