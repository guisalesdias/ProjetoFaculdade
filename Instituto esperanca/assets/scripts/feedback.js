// Toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 400);
    }, 3000);
}

// Modal
function showModal(content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = content + '<br><br><button onclick="closeModal(this)">Fechar</button>';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

function closeModal(button) {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
    document.body.removeChild(modal);
}
