var axios = require('axios'); // need to understand what is axios


export default (formState) =>{
	formState.registerValidation('min', function(value,label,minLength){
		if(value.length < parseInt(minLength)) {return `${label} must be at least ${minLength} characters`; }
	})
	formState.registerValidation('max', function(value,label,maxLength){
		if(value.length > parseInt(maxLength)) {return `${label} must not be more than ${minLength} characters`; }
	})
	formState.registerValidation('noSpecialCheck', function(value,label){
		var regex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; //need to go thru regex rules
		if(regex.test(value)) {return `${label} must not contain special characters`; }
	})
	formState.registerValidation('emailCheck', function(value,label){
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(regex.test(value)) {return `${label} is not valid`; }
	})
}