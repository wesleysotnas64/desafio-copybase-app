
export const convertStringToDate = (dateString) => {

    if (!dateString || dateString.trim() === "") {
        return null;
    }

    const partes = dateString.split(' ');
    const dataPartes = partes[0].split('/');
    const horaPartes = partes[1] ? partes[1].split(':') : [0, 0];

    const ano = parseInt(dataPartes[2], 10) + 2000; // assumindo que "22" significa "2022"
    const mes = parseInt(dataPartes[0], 10) - 1;
    const dia = parseInt(dataPartes[1], 10);
    const hora = parseInt(horaPartes[0], 10);
    const minuto = parseInt(horaPartes[1], 10);

    return new Date(ano, mes, dia, hora, minuto);
};

export const removeDuplicatesById = (records) => {
    const uniqueRecords = [];
    const seenIds = new Set();
  
    for (const record of records) {
      if (!seenIds.has(record.id_assinante)) {
        seenIds.add(record.id_assinante);
        uniqueRecords.push(record);
      }
    }
  
    return uniqueRecords;
}

export const formatarValorMonetario = (valor) => {
  
  const valorArredondado = Math.round(valor * 100) / 100;
  const valorString = valorArredondado.toFixed(2);
  const [parteInteira, parteDecimal] = valorString.split('.');
  const parteInteiraFormatada = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const resultadoFormatado = `${parteInteiraFormatada},${parteDecimal}`;

  return resultadoFormatado;
}