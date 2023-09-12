const register = document.getElementById('account')
const rContainer = document.getElementById('rContainer')
const login = document.getElementById('re-account')
const lContainer = document.getElementById('lContainer')

register.addEventListener('click', () => {
    rContainer.style.display = 'flex'
    lContainer.style.display = 'none'

    setTimeout(() => {
        rContainer.classList.add('registerAnim')
        lContainer.classList.remove('loginAnim')
    }, 100);
})

login.addEventListener('click', () => {
    lContainer.style.display = 'flex'
    rContainer.style.display = 'none'

    setTimeout(() => {
        lContainer.classList.add('loginAnim')
        rContainer.classList.remove('registerAnim')
    }, 100);
})