function apresentarDescricao() {
    var endereco = document.getElementById('endereco').value;
    var valores = endereco.split('.');
    var oct1 = parseInt(valores[0]);

    if (oct1 >= 1 && oct1 <= 126) {
        document.getElementById('classe').textContent = 'Classe: A';  
        document.getElementById('mascara').textContent = 'Máscara: 255.0.0.0';
    } 
  else 
      if (oct1 >= 128 && oct1 <= 191) {
        document.getElementById('classe').textContent = 'Classe: B';
        document.getElementById('mascara').textContent = 'Máscara: 255.255.0.0';
    } 
  else 
    if (oct1 >= 192 && oct1 <= 223) {
        document.getElementById('classe').textContent = 'Classe: C';
        document.getElementById('mascara').textContent = 'Máscara: 255.255.255.0';
    } 
  else {
        document.getElementById('classe').textContent = 'Classe: Não foi possível identificar uma classe para o endereço inserido';
        document.getElementById('mascara').textContent = 'Máscara: Não foi possível identificar uma máscara para o endereço inserido';
    }

    if (
        (valores[0] === '10') ||
        (valores[0] === '172' && valores[1] >= 16 && valores[1] <= 31) ||
        (valores[0] === '192' && valores[1] === '168')
    ) {
        document.getElementById('privacidade').textContent = 'Nível de Privacidade: Privado';
    } else {
        document.getElementById('privacidade').textContent = 'Nível de Privacidade: Público';
    }

    var converter = valores.map(function (valor) {
        return ('00000000' + parseInt(valor).toString(2)).slice(-8);
    }).join('.');
  
    document.getElementById('binario').textContent = 'Endereço em Binário: ' + converter;
}