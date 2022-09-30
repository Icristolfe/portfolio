const Nav = document.querySelectorAll('.nav a[href^="#"]')

function scrollSmooth(e){
    e.preventDefault()
    const element = e.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    window.scroll(0, to)
}

Nav.forEach(item => {
    item.addEventListener('click', scrollSmooth)
})