function buscarCEP() {
    let busca = document.getElementById('cep').value;
    let cep = document.getElementById('campoCEP');
    let logradouro = document.getElementById('campoLogradouro');
    let complemento = document.getElementById('campoComplemento');
    let unidade = document.getElementById('campoUnidade');
    let bairro = document.getElementById('campoBairro');
    let localidade = document.getElementById('campoLocalidade');
    let uf = document.getElementById('campoUF');
    let estado = document.getElementById('campoEstado');
    let regiao = document.getElementById('campoRegiao');
    let ibge = document.getElementById('campoIBGE');
    let gia = document.getElementById('campoGIA');
    let ddd = document.getElementById('campoDDD');
    let siafi = document.getElementById('campoSIAFI');

    let erro = document.getElementById('erro');
    let overlay = document.getElementById('overlay');

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + busca + '/json/');
    ajax.send();

    ajax.onload = function () {

        busca=busca.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');


        const obj = JSON.parse(this.responseText);

        let texto = JSON.stringify(this.responseText);

        var count = Object.keys(obj).length;

        if (count == 1) {
            erro.classList.toggle('hidden');
            overlay.classList.toggle("hidden");
        } else {

            cep.innerHTML = obj.cep;
            logradouro.innerHTML = obj.logradouro;
            if (obj.complemento != "") {
                complemento.innerHTML = obj.complemento;
            } else{
                complemento.innerHTML = "Não tem complemento";
            }
            if (obj.unidade != "") {
                unidade.innerHTML = obj.unidade;
            } else{
                unidade.innerHTML = "Não tem unidade";
            }
            bairro.innerHTML = obj.bairro;
            localidade.innerHTML = obj.localidade;
            uf.innerHTML = obj.uf;
            estado.innerHTML = obj.estado;
            regiao.innerHTML = obj.regiao;
            ibge.innerHTML = obj.ibge;
            gia.innerHTML = obj.gia;
            ddd.innerHTML = obj.ddd;
            siafi.innerHTML = obj.siafi;
        }

        console.log(erro)
        console.log(texto)
        console.log(obj.lentgh)
        console.log(count)
        console.log(obj === "{\n \"erro\": \"true\"\n}")


    }

}


function fecharOverlay(){
    let overlay = document.getElementById('overlay');
    let erro = document.getElementById('erro');

    erro.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

}