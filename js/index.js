const modal = document.querySelector('.js-modal')
const btnLogin = document.querySelector('.js-login')

function showFormLoginRegister(params) {
    modal.classList.add('open')
}

function hideFormLoginRegister(params) {
    modal.classList.remove('open')
}

btnLogin.addEventListener('click',showFormLoginRegister)
modal.addEventListener('click',hideFormLoginRegister)