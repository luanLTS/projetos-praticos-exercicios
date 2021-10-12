const validarUltimoCaractere = (event) => {
    let ultimaPosicao = event.value.length - 1;
    let pattern = /[0-9]/;
    if (event.value[ultimaPosicao].match(pattern) == null) {
        event.value = event.value.substring(0, ultimaPosicao);
    }
};

const validarCaracteresColado = (event) => {
    let pattern = /[0-9]/;
    console.log(event.value.match(pattern));
};

// fontes:
// https://www.w3bai.com/pt/jsref/event_onpaste.html
// https://devdocs.io/javascript/global_objects/string/match
// https://devdocs.io/javascript/global_objects/string/substring
// https://www.devmedia.com.br/javascript-substring-selecionando-parte-de-uma-string/39232