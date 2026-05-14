// ===============================
// FLORICULTURA ENCANTADA
// SCRIPT PRINCIPAL
// ===============================


// -------------------------------
// ALERTA HERO SECTION
// -------------------------------

function saudar() {

    Swal.fire({
        title: 'Bem-vindo!',
        text: 'Prepare-se para conhecer os melhores arranjos florais.',
        icon: 'success',
        confirmButtonColor: '#198754',
        confirmButtonText: 'Ver flores 🌸'
    });

}



// -------------------------------
// CARRINHO
// -------------------------------

let contadorCarrinho = 0;

const botoesCompra = document.querySelectorAll('.comprar-btn');

botoesCompra.forEach(botao => {

    botao.addEventListener('click', () => {

        contadorCarrinho++;

        document.getElementById('contador')
        .innerText = contadorCarrinho;

        Swal.fire({
            title: 'Produto adicionado!',
            text: 'O item foi adicionado ao carrinho.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });

    });

});



// -------------------------------
// FORMULÁRIO
// -------------------------------

const formulario = document.getElementById('formulario');

if(formulario){

    formulario.addEventListener('submit', function(e){

        e.preventDefault();

        Swal.fire({
            title: 'Mensagem enviada!',
            text: 'Responderemos em breve 🌷',
            icon: 'success',
            confirmButtonColor: '#198754'
        });

        formulario.reset();

    });

}



// -------------------------------
// ANIMAÇÃO NOS CARDS
// -------------------------------

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px)';
        card.style.transition = '0.3s';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0)';

    });

});



// -------------------------------
// BOTÃO VOLTAR AO TOPO
// -------------------------------

const botaoTopo = document.getElementById('btnTopo');

if(botaoTopo){

    window.addEventListener('scroll', () => {

        if(window.scrollY > 300){

            botaoTopo.style.display = 'block';

        } else {

            botaoTopo.style.display = 'none';

        }

    });


    botaoTopo.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}



// -------------------------------
// NAVBAR MUDA AO ROLAR
// -------------------------------

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.classList.add('shadow');

    } else {

        header.classList.remove('shadow');

    }

});



// -------------------------------
// SCROLL SUAVE LINKS MENU
// -------------------------------

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {

    link.addEventListener('click', function(e){

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});



// -------------------------------
// MENSAGEM AO CARREGAR A PÁGINA
// -------------------------------

window.addEventListener('load', () => {

    console.log('Floricultura Encantada carregada com sucesso 🌸');

});


