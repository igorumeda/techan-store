export function removeAcentos(texto){
    let resultado = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return resultado;
}