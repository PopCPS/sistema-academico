const { lancarNotas } = require("../src/lancamentoNotas");
const { obterStatus } = require("../src/exibirStatus");

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

describe("Test function obterStatus", () => {
  it("Should return 'Reprovado por média'", () => {
    expect(obterStatus(3.5)).toBe("Reprovado por média");
  });
  it("Should return 'Aguardando a final'", () => {
    expect(obterStatus(4.0)).toBe("Aguardando a final");
  });
  it("Should return 'Aguardando a final'", () => {
    expect(obterStatus(5.5)).toBe("Aguardando a final");
  });
  it("Should return 'Aprovado por média'", () => {
    expect(obterStatus(6.0)).toBe("Aprovado por média");
  });
  it("Should return 'Aprovado por média'", () => {
    expect(obterStatus(7.5)).toBe("Aprovado por média");
  });
  it("Should return 'Reprovado por média'", () => {
    expect(obterStatus(0.0)).toBe("Reprovado por média");
  });
});
