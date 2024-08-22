function enviarForms () {
    // alert("kfvklfdv")
    var Cadastro = new Object();

    Cadastro.nome = document.getElementById('nome').value;
    Cadastro.senha = document.getElementById('senha').value;
    Cadastro.cpf = document.getElementById('cpf').value;
    Cadastro.cep = document.getElementById('cep').value;
    Cadastro.rua = document.getElementById('rua').value;
    Cadastro.numero = document.getElementById('numero').value;
    Cadastro.bairro = document.getElementById('bairro').value;
    Cadastro.cidade = document.getElementById('cidade').value;
    Cadastro.estado = document.getElementById('estado').value;
    Cadastro.email = document.getElementById('email').value;


    var myJSON = JSON.stringify(Cadastro)

    console.log(myJSON)
    console.log(Cadastro.valueOf())
}
 
                                                           