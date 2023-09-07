const register = document.getElementById('account')
const rContainer = document.getElementById('rContainer')

register.addEventListener('click', () => {
    rContainer.style.display = 'flex'
    document.getElementById('lContainer').style.display = 'none'

    setTimeout(() => {
        rContainer.classList.add('registerAnim')
    }, 100);
})