import React, {Component} from 'react';
import {FormState, Form} from 'react-formstate';
import Input from './Input.jsx';
/*import Select from './Select.jsx';
import Checkbox from './Checkbox.jsx';*/
import validation from './validation.js';
import FormJSON from '../data.json';
import UIKit from 'uikit';

export default class FormContainer extends Component{
	constructor(props){
		super(props);
		validation(FormState); //need to understand
		this.data = FormJSON.data['gated-form-fields'];
		this.state={
			form_fields: this.data,
			error:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addValidation = this.addValidation.bind(this);
		this.addValidationMsg = this.addValidationMsg.bind(this);
		this.button=FormJSON.data['gated-form-submit'][0].data.button_field[0];
		this.checkboxText= FormJSON.data['gated-form-fields'][7].data.label.lang;

		this.formState = new FormState(this); //need to understand
	}

	  addValidation(item) {
	        if(item.data.validation) {
	            return (item.data.validation.map((val, i) => {
	                return [
	                    val.data.validation_type,
	                    val.data.validation_value
	                ];
	            })
	            )
	        } else {
	            return null;
	        }
	    }

	    addValidationMsg(item) {
	        if(item.data.validation) {
	            return item.data.validation.map((val, i) => {
	                return val.data.error_message.lang
	            })
	        } else {
	            return null;
	        }
	    }

	handleSubmit(){

	}

	render(){
		let context = this.data; //need to understand why let
		let self = this;
		let submitMessage = null;
		let isInvalid = this.formState.isInvalid();
		if(isInvalid){
			submitMessage =  "Please fix the submission errors";
		} 

		return(
			<div>
				<Form className="form" formState={this.formState}>
					<div className="uk-grid uk-grid-small">
						<div className="uk-width-1-1@m">
							<div className="form-text">
								Tell me about yourself
							</div>
						</div>
						{this.state.form_fields.map((item,i) => {
								return(
									<div key={i} className={i === 0 || i === 1 ? 'uk-width-1-2@m' : 'uk-width-1-1@m'}>
									{ item.data.type !== 'agreement' && item.data.type !== 'select' && item.data.type !== 'selectInput' ? 
									<Input  
										key={i}
                                        formField={item.data.name}
                                        type={item.data.type}
                                        label={item.data.label.lang}
                                        validate={this.addValidation(item)}
                                        validationMessages={this.addValidationMsg(item)}
                                    /> 
                                    : null
									}
									</div>
								)
							})
						}
						<div className="uk-width-1-1@m">
							<button disabled={this.formState.isInvalid()} type="submit" 
							className="uk-button uk-button-primary uk-button-lg" value={this.button.data.label.lang}>
							{this.button.data.label.lang}
							</button>
						</div>
					</div>
				</Form>
			</div>
		)
	}
}
