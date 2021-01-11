const submit= document.getElementById('submit');
const Email= document.getElementById('Email');
const Username= document.getElementById('Username');
const Password= document.getElementById('Password');
const confirm= document.getElementById('confirm');


function showError(idclass, message){
	const formControl= idclass.parentElement;
	formControl.className = 'form-fill error';
	const small= formControl.querySelector('small');
	small.innerText=message;
	

}

function showSuccess(idclass){
	const formControl=idclass.parentElement;
	formControl.className='form-fill success';
}


submit.addEventListener("click",function(event) {
	event.preventDefault();
//username
	if(Username.value.trim() === ''){
		showError(Username,'Username is required');

	}else{
		showSuccess(Username);
	}
//email
	if(Email.value.trim() === ''){
		showError(Email,'Email is required');

	}
	else if(validateEmail(Email.value)===false){
		showError(Email,'Please enter a valid email address');
	}else{
		showSuccess(Email);
	}
//password
	if(Password.value.trim() === ''){
		showError(Password,'Password is required');

	}else{
		showSuccess(Password);
	}
//comfirm password
	if(confirm.value === ''){
		showError(confirm,'Please confirm your password');

	}else{
		showSuccess(confirm);
	}
	checkLength(Password,8,15);
	checkLength(Username,3,10);
	confirm_Pass();
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//check length
function checkLength(input, min, max){
	if(input.value.length <= min){
		showError(input,`${getFieldName(input)} must have at least ${min} characters`);
	}else if(input.value.length >= max){
		showError(input,`${getFieldName(input)} can not have more than ${max} characters`);
	}else{
		showSuccess(input);
	}
}

function getFieldName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function confirm_Pass(){
	if((Password.value !== '')&&(confirm.value !== '')){
		if(Password.value === confirm.value){
		showSuccess(confirm);
	}else{
		showError(confirm,"Password doesn't match");
	}
	}
	
}

          
