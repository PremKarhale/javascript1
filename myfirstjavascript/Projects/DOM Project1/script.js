
//  const date = new Date();
//     console.log(date.toDateString())
const clock = document.querySelector('.clock')

setInterval(function () {
                                       // set interval is used to "set the time of recurrence" of the event occured 
    const date = new Date();

    const actualDate = (date.toLocaleTimeString())
    const newdate = date.toDateString()
    clock.innerHTML = `${actualDate} <div class ="div">${date.toDateString()}</div>`
    

}, 1000)

