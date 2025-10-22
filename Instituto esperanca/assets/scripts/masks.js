
document.addEventListener('DOMContentLoaded', function() {
    function maskInput(el, mask) {
        el.addEventListener('input', function() {
            let value = el.value.replace(/\D/g, '');
            let newValue = '';
            let maskIndex = 0;
            for (let i = 0; i < value.length && maskIndex < mask.length; i++) {
                while(mask[maskIndex] !== '#' && maskIndex < mask.length) {
                    newValue += mask[maskIndex];
                    maskIndex++;
                }
                newValue += value[i];
                maskIndex++;
            }
            el.value = newValue;
        });
    }
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');
    if(cpf) maskInput(cpf, '###.###.###-##');
    if(telefone) maskInput(telefone, '(##) #####-####');
    if(cep) maskInput(cep, '#####-###');
});
