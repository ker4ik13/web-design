const testForm = document.querySelector('.test__form');
const submitButton = document.querySelector('.input__submit__button');
const asksCount = document.querySelectorAll('.test__ask');
const inputs = document.querySelectorAll('.test__form__input');
let yes = 0;
let no = 0;
let result = '';
let choise;


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkTest();
})


function checkTest(){

    for(let i = 1; i<inputs.length; i++){

        if(inputs[i].checked){
            choise = inputs[i].value

            if(choise === 'yes'){
                yes++
            }
            if(choise === 'no'){
                no++
            }
        }
    }

    alert(`Правильно: ${yes}, неправильно: ${no}`)
    yes = 0
    no = 0
}