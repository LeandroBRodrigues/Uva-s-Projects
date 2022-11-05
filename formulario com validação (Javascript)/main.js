window.onload = function () { //define foco para o campo de nome
document.getElementById("name").focus();
}

// nome 
function validaNome(){
    let nome = document.form.name;
    if(nome != ""){
        document.form.email.focus();
        return true;
    }
    return false;
}

// email
function validaEmail(){
    let email = document.form.email;
    if(email != ""){
        document.form.date.focus();
        return true;
    }
    return false;
}



//idade

function validaIdade(){
    let nasc = new Date(document.form.date.value);
    let diaNasc = nasc.getUTCDate();
    let mesNasc = (nasc.getUTCMonth() + 1);
    let anoNasc = nasc.getFullYear()
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth() + 1);
    let ano = dataAtual.getFullYear()
    let idade = ano - anoNasc;
    let texto = document.getElementById("idade");

    if (mes < mesNasc || mes == mesNasc && dia < diaNasc) {
        idade--;
    }

    if(idade < 0){
        texto.innerHTML = "Idade não pode ser inferior a 0";
        document.getElementById("date").focus();
      return false;
    }

    if(idade < 15){
        document.getElementById("date").focus();
        texto.innerHTML = "Idade não permitida!";
        return false;
     }

   if(idade >= 15 && idade <= 120){
      document.getElementById("gen").focus();
      texto.innerHTML = idade + " " + "anos";
      return true;
   }
   if(idade > 131){
   texto.innerHTML = "Idade não pode ser superior a 130 anos";
   document.getElementById("date").focus();
   return false;
   }
   return true;
}

//genero

function validaGenero(){
    let genero = document.form.gen.value;
    if(genero == 1){
        genero = "masculino";
    } else {
        genero = "feminino";
    }
}
//estado Cívil

function estadoCivil(){
    let select = document.form.estadocivil.value;
    let nasc = new Date(document.form.date.value);
    let diaNasc = nasc.getUTCDate();
    let mesNasc = (nasc.getUTCMonth() + 1);
    let anoNasc = nasc.getFullYear()
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth() + 1);
    let ano = dataAtual.getFullYear()
    let idade = ano - anoNasc;
    let texto = document.getElementById("idade");

    if (mes < mesNasc || mes == mesNasc && dia < diaNasc) {
        idade--;
    }
    
    if(select == 1) {
        if(idade < 15){
            document.getElementById("idade").innerHTML = "Idade não pode ser inferior a 15 anos";
        document.getElementById("date").focus();
        return false;
        }
        return true;
    } else if (select == 0 || select == "") {
        return false;
    }else {
        return true;
    }
}

//Area de interesse
function validaArea() {
    let checkboxs = [];

    console.log(checkboxs);
    if(document.form.Analise.checked === true) {
        checkboxs.push("Analise");
    }

    else if(document.form.BancoDeDados.checked == true) {
        checkboxs.push("Banco de Dados");
    }

    else if(document.form.Desenvolvimento.checked == true) {
        checkboxs.push("Desenvolvimento");
    }

    else if(document.form.EngenhariaDeSoftware.checked == true) {
        checkboxs.push("Engenharia de Software");
    }

    else if(document.form.RedesDeComputadores.checked == true) {
        checkboxs.push("Redes de Computadores");
    } 
    
    else{
        return false;
    }
    return true;
}

    
function validaForm() {
    let button = document.getElementById("btn");

    if (estadoCivil() === true) {
        if(validaArea() === true) {
            if (validaIdade() === true) {
                button.disabled = false
                return;
            }
        }
    }
    button.disabled = true
    return;
}