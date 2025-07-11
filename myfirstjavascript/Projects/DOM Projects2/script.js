    const box = document.querySelectorAll('.boxes')
    const body = document.body



    box.forEach((box) => {

        box.addEventListener('click', (e) => {
            console.log(e)
            console.log(e.target)

            switch(true)
            {
                case (e.target.classList.contains('box1')):
                body.style.backgroundColor='blue'
                break;
                case(e.target.classList.contains('box2')):
                body.style.backgroundColor="red"
                break;
                case(e.target.classList.contains('box3')):
                body.style.backgroundColor="pink"
                break;
                case(e.target.classList.contains('box4')):
                body.style.backgroundColor="orange"
                break;
                default:
                body.style.backgroundColor='white'


            }
        })

    })
