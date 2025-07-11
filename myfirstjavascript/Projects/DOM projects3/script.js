
const form = document.querySelector('.form')
const button = document.querySelector('button')
const box = document.querySelector('.box')
 const result = document.querySelector('.results')
 result.style.padding='12px'
 

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if(  height < 0 || isNaN(height)){
        result.innerHTML="Enter The Valid  Credentials"

    }else if( weight < 0 || isNaN(weight)){
        result.innerHTML="Enter The Valid  Credentials"

    }else{
        const bmi=( weight / ((height / 100) ** 2)).toFixed(2) // it is a string

        const bmivalue =parseFloat(bmi); // it became a no.

        if(bmivalue < 18.6){
            result.innerHTML=`Your bmi Value is  ${bmi} <strong> => UNDER WEIGHT </strong>`
    }else if(bmivalue >= 18.6 && bmivalue <= 24.9){
        result.innerHTML=`Your bmi Value is ${bmi} <strong> => NORMAL WEIGHT </strong>`
    }else{
        result.innerHTML=`Your bmi Value is ${bmi} <strong> => OVER WEIGHT </strong>`
    }
    
    
    }

})