document.addEventListener('DOMContentLoaded', function() {
     const inputField = document.querySelector('.autocomplete');
     M.Autocomplete.init(inputField,{
            data:{
                'Computador completo': null,
                'Teclado Computador': null,
                'Monitor': null,
                'CPU': null ,
                'HD Notebook': null,
                'Memória RAM Computador': null,
                'Placa de Vídeo': null,
                'HD': null,
                'Placa Mãe Computador': null,
                'Processador': null,
                'Mouse': null,
                'Mouse sem Fio': null,
            }
     });
});
