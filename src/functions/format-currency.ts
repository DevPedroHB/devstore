/**
 * Formata um valor numérico como uma string representando uma quantia de dinheiro no formato de moeda brasileira (BRL).
 * @param {number} value - O valor numérico a ser formatado como dinheiro.
 * @param {number} decimalPlaces - O número de casas decimais a serem exibidas (opcional, padrão: 0).
 * @returns {string} - A string formatada representando a quantia de dinheiro.
 */
export function formatCurrency(value: number, decimalPlaces = 0) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}
