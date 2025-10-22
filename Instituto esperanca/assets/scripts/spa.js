document.addEventListener("DOMContentLoaded", () => {

    // === Hamburger toggle ===
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // === SPA links para páginas externas ===
    const links = document.querySelectorAll('#menu a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if(href && !href.startsWith('#') && !href.includes('index.html')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                fetch(href)
                    .then(r => r.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        const mainContent = doc.querySelector('main');
                        document.querySelector('main').innerHTML = mainContent.innerHTML;
                        window.scrollTo(0,0);
                    })
                    .catch(err => console.error(err));
            });
        }
    });

    // === Modal ===
    const modal = document.getElementById('modal');
    window.openModal = () => modal.style.display = 'flex';
    window.closeModal = () => modal.style.display = 'none';
    window.confirmModal = () => {
        closeModal();
        showAlert("Formulário enviado com sucesso!");
    };

    // === Alert ===
    const alertSuccess = document.getElementById('alert-success');
    function showAlert(msg, duration=3000) {
        alertSuccess.textContent = msg;
        alertSuccess.style.display = 'block';
        setTimeout(() => alertSuccess.style.display = 'none', duration);
    }

});