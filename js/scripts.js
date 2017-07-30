

// SEC001 - URL DA API

var apiUrl = "http://www.diogenesjunior.com.br/angel2017/";


// LISTAR OS PEDIDOS CRIADOS NO BANCO DE DADOS
function carregarPedidos(){

    // ACESSO A API E VALIDAÇÃO DOS DADOS
            var request = $.ajax({
                method: "POST",
                url: apiUrl+"get-pedidos.php"                
            })
            request.done(function (msg) {
                
                // CONVERTER DADOS PARA JSON
                //var dados = JSON.parse(msg);

                if (!msg) {

                     //aqui deu erro de login e senha
                     console.log("Ocorreu um erro ao tentar transacionar a sua operação. Tente novamente mais tarde");
                     alert("Não conseguimos conexão com o servidor da API - ERRO 1");
                     location.href="index.html";                  

                } else {
                    
                    //aqui login e senha deu certo
                    console.log("Itens carregados com sucesso");    
                    $("#caixaResultadosPedidos").html(msg);                             

                }

            });
            request.fail(function (msg) {

               //aqui é se deu erro na chamada
               console.log("Não conseguimos acessar o servidor da API");
               alert("Não conseguimos conexão com o servidor da API - ERRO 1");

            });
            // FIM DA CHAMADA


}

// CARREGAR DADOS DO PEDIDO QUANDO O USUÁRIO SOLICITAR
function getPedido(idPedido){
    
    // LIMPAR AREA UTIL HTML
    $("#itensUserEscolha").html("carregando itens...");
    localStorage.setItem("pedidoLance",idPedido);
   
    // CHAMADA COM OS ITENS
    var request = $.ajax({
                method: "POST",
                url: apiUrl+"get-itens.php",
                data: {idPedido: idPedido}                
            })
            request.done(function (msg) {
                
                // CONVERTER DADOS PARA JSON
                //var dados = JSON.parse(msg);

                if (!msg) {

                     //aqui deu erro de login e senha
                     console.log("Ocorreu um erro ao tentar transacionar a sua operação. Tente novamente mais tarde");
                     alert("Não conseguimos conexão com o servidor da API - ERRO 1 "+idPedido);
                     location.href="index.html";                  

                } else {
                    
                    //aqui login e senha deu certo
                    console.log("Itens carregados com sucesso");    
                    $("#itensUserEscolha").html(msg);                             

                }

            });
            request.fail(function (msg) {

               //aqui é se deu erro na chamada
               console.log("Não conseguimos acessar o servidor da API");
               alert("Não conseguimos conexão com o servidor da API - ERRO 1");

            });
            // FIM DA CHAMADA

}



// ENVIAR LANCE PARA O BANCO DE DADOS
$('#enviarLance').click(function(){

  var valorLance = $("#valorLance").val();
  var pedidoLance = localStorage.getItem("pedidoLance");
  console.log("Valor do lance enviado: "+valorLance);

  // ENVIAR LANCE PARA O BANCO DE DADOS
    var request = $.ajax({
                method: "POST",
                url: apiUrl+"send-lance.php",
                data: {valorLance: valorLance, pedidoLance: pedidoLance}                
            })
            request.done(function (msg) {
                
                // CONVERTER DADOS PARA JSON
                //var dados = JSON.parse(msg);

                if (!msg) {

                     //aqui deu erro de login e senha
                     console.log("Ocorreu um erro ao tentar acionar o LIO CIELO");
                     alert("Não conseguimos conexão com o servidor da API - ERRO 2");
                     location.href="index.html";                  

                } else {
                    
                    //aqui login e senha deu certo
                    console.log("Lance enviado com sucesso"); 

                }

            });
            request.fail(function (msg) {

               //aqui é se deu erro na chamada
               console.log("Não conseguimos acessar o servidor da API");
               alert("Não conseguimos conexão com o servidor da API - ERRO 2");

            });
            // FIM DA CHAMADA


}); 