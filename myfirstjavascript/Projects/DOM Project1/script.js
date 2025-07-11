

const clock = document.querySelector('.clock')

setInterval(function () {

    const date = new Date();
const actualDate = (date.toLocaleTimeString())
    clock.innerHTML = `${actualDate}`

}, 1000)
