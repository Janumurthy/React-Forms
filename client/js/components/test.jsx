import React, { Component } from 'react';
import { FormState, Form } from 'react-formstate';
import { validationAdapter } from 'react-formstate-validation';
validationAdapter.plugInto(FormState);

const Input = ({label, value, help,onChange}) => {
  return (
    <div className="uk-width-1-1@m">
      <div>{label}</div>
      <input className="uk-input uk-margin-bottom" type='text' value={value} onChange={onChange}/>
    	<div>{help}</div>
    </div>
  );
};

// (prop names are configurable)
const RfsInput = ({fieldState, label, handleValueChange}) => {
  return (
    <Input
      label={label}
      value={fieldState.getValue()}
      onChange={e => handleValueChange(e.target.value)}
      help={fieldState.getMessage()}
     />
  );
};

const RfsSelect = ({fieldState, label, handleValueChange}) => {
  return (
    <Select
      label={label}
      value={fieldState.getValue()}
      onChange={e => handleValueChange(e.target.value)}
      help={fieldState.getMessage()}
     />
  );
};

const Select = ({label,value,help,onChange}) => {
	return(
	<div className="uk-width=1=1@m">
		<div>{label}</div>
		<select className="uk-select uk-margin-bottom" type="select" value={value} onChange={onChange}/>
	</div>
	)
}

export default class SimpleRfsForm extends Component {

  constructor(props) {
    super(props);

    // This is an instance of the API. It will bind to
    // form fields configured in your JSX. It normally
    // assumes state is held in this.state, but you can configure
    // it to work with a state management solution like Redux.
    this.formState 	= FormState.create(this);

    // you only need to initialize values for non-empty fields
    // and you can do it in the jsx
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Form className="uk-grid" formState={this.formState} onSubmit={this.handleSubmit}>
        <RfsInput formField='fname' label='First Name' required validate={this.validateName}/>
         <RfsInput formField='lname' label='Last Name' required validate={this.validateName}/>
        <RfsInput formField='company' label='Company' required/>
        <RfsInput formField='phone' label='Phone' required/>
        <RfsSelect formField='role' label='Role' required/>
        <RfsSelect formField='country' label='Country' required/>
        <RfsInput formField='zipcode' label='Zipcode' required fsv= { v => v.min(5).message('Must be minumum of 5 digits') } / >
        {/*<Checkbox formField='agree' label='I agree to Terms and Conditions' required/>*/}
        <input className="uk-button-primary uk-padding-small uk-margin-bottom" type='submit' value='Submit' disabled={this.formState.isInvalid()}/>	
      </Form>
    );
  }

  validateName(newValue){
  	console.log(newValue);
  	if(newValue.substring(0,1) === newValue.substring(0,1).toLowerCase()){
  		return 'Name should be capitalized'
  	}
  }

  handleSubmit(e) {
    e.preventDefault();
    // persist the model instance here...
    const model = this.formState.createUnitOfWork().createModel();
    if(model)
    alert(JSON.stringify(model));
  }
}