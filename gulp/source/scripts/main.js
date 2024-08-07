const sendQuestion =  document.forms.sendQuestion;

//Список элементов формы
const childrenForm = {
    'btn': sendQuestion.elements.btn_submit,
    'name': sendQuestion.elements.input_name,
    'age': sendQuestion.elements.input_age,
    'comment': sendQuestion.elements.input_comment,
    'email': sendQuestion.elements.input_email,
}

sendQuestion.onpointerdown = (e)=>{
    let ageValid, emailValid;

    switch (e.target.name) {
        case childrenForm.name.name:
            clickInput(childrenForm.name);
            break;

        case childrenForm.age.name:
            clickInput(childrenForm.age);

            e.target.oninput = checkAge(e.target);
            
            break;

        case childrenForm.comment.name:
            clickInput(childrenForm.comment);
            
            break;

        case childrenForm.email.name:
            
            clickInput(childrenForm.email);

            e.target.oninput = checkEmail(e.target);
        
            break;

        case childrenForm.btn.name:

            let valid = true;
            
            if(!checkInput(childrenForm.name, 'Имя')) valid = false;
            if(!checkInput(childrenForm.age, 'Возраст')) valid = false;
            if(!checkInput(childrenForm.comment, 'Комментарий')) valid = false;
            if(!checkInput(childrenForm.email, 'Email')) valid = false;
            
            
            (valid && checkAge(childrenForm.age) && checkEmail(childrenForm.email)) ? alert("Сообщение отправлено!") : alert("Возникла ошибка при отправке формы. Проверьте введённые данные!") ;

            break;
    }
};

function checkInput(input){
    if(input.value == ''){
        input.classList.add('input-error');
        return false;
    }
     else {
        input.classList.remove('input-error');
        return true;
    }
}

function clickInput(input){
    if(input.classList.contains('input-error')){
        input.classList.remove('input-error');
    }
}

function checkAge(input){
    if(isNaN(+input.value)){
        input.classList.add('input-error');
        return false;                    
    } else {
        input.classList.remove('input-error');  
        return true;
    }
}

function checkEmail(input){
    const EMAIL_REG = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if(EMAIL_REG.test(input.value)) {
        input.classList.remove('input-error');  
        return true;
    } else {
        input.classList.add('input-error');
        return false;
    };
    
}