   const buttons = document.querySelectorAll('.product-card__button');

    
    // let cartCount = 0;

    
    // const nav = document.querySelector('.navbar-nav');

    // const cartItem = document.createElement('li');
    // cartItem.classList.add('nav-item');

    // cartItem.innerHTML = `
    //     <a class="nav-link fw-bold" href="#">
    //         <i class="bi bi-cart3"></i>
    //         Carrinho (<span id="cart-count">0</span>)
    //     </a>
    // `;

    nav.appendChild(cartItem);


    buttons.forEach(button => {

        button.addEventListener('click', function () {

            // Captura informações do produto
            const card = this.closest('.card');

            const productName =
                card.querySelector('.product-card__title').textContent;

            const productPrice =
                card.querySelector('.product-card__price').textContent;

            // Atualiza carrinho
            cartCount++;

            document.getElementById('cart-count').textContent = cartCount;

            // SweetAlert2
            Swal.fire({
                title: 'Produto adicionado!',
                html: `
                    <strong>${productName}</strong><br>
                    Preço: ${productPrice}
                `,
                icon: 'success',
                confirmButtonColor: '#198754',
                confirmButtonText: 'Continuar comprando'
            });

        });

    });

    // =========================
    // Hover nos ícones sociais
    // =========================
    const socialIcons = document.querySelectorAll('.footer__social-icon');

    socialIcons.forEach(icon => {

        icon.addEventListener('mouseenter', () => {
            icon.style.color = '#198754';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.color = 'white';
        });

    });

    // =========================
    // Scroll suave do menu
    // =========================
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {

        link.addEventListener('click', function (e) {

            const targetId = this.getAttribute('href');

            // Verifica se é âncora
            if (targetId.startsWith('#')) {

                e.preventDefault();

                const section = document.querySelector(targetId);

                section.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        });

    });

    // =========================
    // Mensagem ao carregar página
    // =========================
    window.addEventListener('load', () => {

        Swal.fire({
            title: 'Bem-vindo à FloraGrid 🌸',
            text: 'Explore nossas flores especiais!',
            icon: 'info',
            timer: 2500,
            showConfirmButton: false
        });

    });

