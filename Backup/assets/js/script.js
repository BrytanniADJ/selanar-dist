// escopo global
let ativar_modos = true;
let cor_logo = false;

const bds = [];
for (let i = 1; i <= 6; i++) {
    bds.push(document.getElementById(`bd_${i}`));
}

// Modo claro / escuro - cores
function modos(){
    // Alterna o estado das variáveis
    ativar_modos = !ativar_modos;
    cor_logo = !ativar_modos;
    const icons = document.querySelectorAll(".icon");

    // Aplica o estilo com base no modo
    if(!ativar_modos){
        // Modo claro
        document.documentElement.style.setProperty('--base-negro', '#ffffff');
        document.documentElement.style.setProperty('--gris100', '#f2f2f2');
        document.documentElement.style.setProperty('--gris90', '#f8f8fa');
        document.documentElement.style.setProperty('--gris80', '#f6f7f8');
        document.documentElement.style.setProperty('--gris70', '#f1f3f1');
        document.documentElement.style.setProperty('--gris60', '#eae7ea');
        document.documentElement.style.setProperty('--gris10', '#616b77');
        document.documentElement.style.setProperty('--gris5', '#1f2328');
        document.documentElement.style.setProperty('--cores', '#ff6b00');
        document.documentElement.style.setProperty('--cores-es', '#ffa05c');
    }else{
        // Modo escuro
        document.documentElement.style.setProperty('--base-negro', '#010409');
        document.documentElement.style.setProperty('--gris100', '#0d0d0d');
        document.documentElement.style.setProperty('--gris90', '#212121');
        document.documentElement.style.setProperty('--gris80', '#242424');
        document.documentElement.style.setProperty('--gris70', '#2b2b2b');
        document.documentElement.style.setProperty('--gris60', '#383838');
        document.documentElement.style.setProperty('--gris10', '#d4d4d4');
        document.documentElement.style.setProperty('--gris5', '#ececea');
        document.documentElement.style.setProperty('--cores', '#0094ff');
        document.documentElement.style.setProperty('--cores-es', '#005694');
    }

    // Atualiza a imagem do modo
    icons.forEach((icon) => {
        const type = icon.getAttribute("data-type");
        icon.style.opacity = 0; // deixa opacidade em 0 das imagens
        setTimeout(() =>{ 
            icon.src = `assets/images/${type}-${cor_logo ? 'cl' : 'es'}.png?${new Date().getTime()}`;
            icon.style.opacity = 1; // deixa imagens visíveis após o tempo de 0.5s
        }, 500);
    });
}

// mascaras
document.addEventListener('DOMContentLoaded', (event) => {
    $(document).ready(function(){
        $(".cpf-mask").inputmask("999.999.999-99");
        $(".nit-mask").inputmask("999.99999.99-9");
        $(".ctps-mask").inputmask("9999999/9999");
        $(".cbo-mask").inputmask("9999-99");
        $(".cep-mask").inputmask("99999-999");
        $(".cnpj-mask").inputmask("99.999.999/9999-99");
        $(".cei-mask").inputmask("99.999.99999/99");
        $(".caepf-mask").inputmask("999.999.999/999-99");
        $(".cno-mask").inputmask("99.999.999999/99");
        $(".cnae-mask").inputmask("9999-9/99");
        $(".rg-mask").inputmask("99.999.999-9");
        $(".tell-mask").inputmask("(99) 9 9999-9999");
        $(".regpoli-mask").inputmask("99999");
        $(".crm-mask").inputmask("999999-9")
        $(".num-mask").inputmask({
            alias: "currency",
            prefix: "R$ ",
            groupSeparator: ".",
            radixPoint: ",",
            digits: 2,
            autoGroup: true,
            rightAlign: false   
        });
    });
});

// trocar imagem da logo principal
document.addEventListener('DOMContentLoaded', (event) => {
    const imagens = document.querySelectorAll('.img-logo'); // Seleciona todos os elementos com a classe 'img-logo'
    
    imagens.forEach(imagem => {
        imagem.addEventListener('mouseenter', () => {
            imagem.src = 'assets/images/logo-cl.png';
            if(!cor_logo){
            }else{
                imagem.src = 'assets/images/logo-es.png';
            }
        });

        imagem.addEventListener('mouseleave', () => {
            if (!cor_logo){
                imagem.src = 'assets/images/logo-es.png';
            } else {
                imagem.src = 'assets/images/logo-cl.png';
            }
        });
    });
});

// header fixa, transparente
window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    var div = document.getElementById('div');
    if (window.scrollY > 15){
        header.classList.add('scrolled');
        div.classList.remove('none');
        div.classList.add('add');
    }else{
        header.classList.remove('scrolled');
        div.classList.remove('add');
        div.classList.add('none');
    }
});

// checkbox marcado para ver senha
document.addEventListener('DOMContentLoaded', (event) => {
    const check = document.getElementById('ver_senha');
    const senha = document.getElementById('password');

    check.addEventListener('change', () => {
        if(check.checked){
            // checkbox marcado
            senha.type = 'text';
        }else{
            // checkbox não marcado
            senha.type = 'password';
        }
    });
    $(document).ready(function(){
        $(".tell-mask").inputmask("(99) 9 9999-9999");
        $(".num-mask").inputmask({
            alias: "currency",
            prefix: "R$ ",
            groupSeparator: ".",
            radixPoint: ",",
            digits: 2,
            autoGroup: true,
            rightAlign: false
        });
    });
});

// cat-inicio
document.getElementById("tipoCat").addEventListener('change', function(){
    const tipoCat = this.value;

    const inicial = document.querySelectorAll(".inicial-cat");
    const reaber = document.querySelectorAll(".reabertura-cat");
    const obito = document.querySelectorAll(".obito-cat");
    const cat_part2 = document.getElementById("cat-part2");

    // reinicia deixando tudo invisivel quando mudado
    inicial.forEach(function(inicial){inicial.style.display = "none";});

    reaber.forEach(function(reaber){reaber.style.display = "none";});

    obito.forEach(function(obito){obito.style.display = "none";});

    cat_part2.style.visibility = "visible";
    
    if(tipoCat == 1){
        inicial.forEach(function(inicial){inicial.style.display = "block";});
    }else if(tipoCat == 2){
        reaber.forEach(function(reaber){reaber.style.display = "block";});
    }else if(tipoCat == 3){
        obito.forEach(function(obito){obito.style.display = "block";});
    }else{
        cat_part2.style.visibility = "hidden";
        alert("Uma opção precisa ser selecionada");
    }
});

//cat inicio
document.getElementById("tipo_empre-cat").addEventListener('change', function(){
    const tipo_empre = this.value;

    const cnpj = document.querySelectorAll(".cnpj-cat"); // campos que mudam
    const cei = document.querySelectorAll(".cei-cat");
    const cpf = document.querySelectorAll(".cpf-cat");
    const nit = document.querySelectorAll(".nit-cat");
    const caepf = document.querySelectorAll(".caepf-cat");
    const cno = document.querySelectorAll(".cno-cat");

    //reinicia deixado tudo invisível quando mudado
    cnpj.forEach(function(cnpj){cnpj.style.display = "none";});

    cei.forEach(function(cei){cei.style.display = "none";});

    cpf.forEach(function(cpf){cpf.style.display = "none";});

    caepf.forEach(function(caepf){caepf.style.display = "none";});

    cno.forEach(function(cno){cno.style.display = "none";});

    if(tipo_empre == 1){
        cnpj.forEach(function(cnpj){cnpj.style.display = "block";});
    }else if(tipo_empre == 2){
        cei.forEach(function(cei){cei.style.display = "block";});
    }else if(tipo_empre == 3){
        cpf.forEach(function(cpf){cpf.style.display = "block";});
    }else if(tipo_empre == 4){
        nit.forEach(function(nit){nit.style.display = "block";});
    }else if(tipo_empre == 5){
        caepf.forEach(function(caepf){caepf.style.display = "block";});
    }else if(tipo_empre == 6){
        cno.forEach(function(cno){cno.style.display = "block";});
    }else{
        alert("Uma opção precisa ser selecionada")
    }
});

document.getElementById("cep-pesquisa").addEventListener('change'), function(){
    var cep = document.getElementById('cep-pesquisa').value.replace(/\D/g, '');
}

function cat_proximo1(n){

}

// página 2 login

// pesquisa página login
function telas_none(){ // versão otimizada de uma função
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`bd_${i}`).style.display = "none";
    }
}

function btts_sections(n) {
    // Chama a função para esconder todos os elementos
    telas_none();

    // Exibe a tela de acordo com o botão
    document.getElementById(`bd_${n}`).style.display = "block";
}

function quests(n){ // mudar para fazer o inverso e trocar imagens de acordo com o modo
    const quest = document.getElementById(`main-quest${n}`)
    if(quest.style.display == "block"){ // identifica se o display está 'block'
        quest.style.display = "none"; // apaga o texto
        document.getElementById(`select${n}`).style.transform = 'scaleY(1)'; // volta a versão original do select
    }else{
        quest.style.display = "block";
        document.getElementById(`select${n}`).style.transform = 'scaleY(-1)'; // inverte verticalmente o select
    }
}

// modal página MAIN
function main_modal(n){
    if(n == 1){
        // Exibe o modal ao definir a visibilidade como "visible"
        document.getElementById("sec_modal").style.visibility = "visible";
    }else{
        document.getElementById("sec_modal").style.visibility = "hidden";
    }
}


//print da tela do documento
// window.print()