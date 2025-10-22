document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });

    // Modal
    function openModal() {
        document.getElementById('modal').style.display = 'flex';
    }
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    // Confirmar e mostrar alerta de sucesso
    function confirmModal() {
        closeModal();

        const alertSuccess = document.getElementById('alert-success');
        alertSuccess.style.display = 'block';

        // some depois de alguns segundos
        setTimeout(() => {
            alertSuccess.style.display = 'none';
        }, 4000);
    }