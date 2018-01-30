import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/FormContainer.jsx';

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<FormContainer />
		)
	}
}