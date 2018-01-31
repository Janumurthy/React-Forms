import React, {Component} from 'react';
import Form from 'react-form';
export default class FormContainer extends Component{
	
	constructor(props){
		super(props);
		this.state={
			fname:'',
			lname:'',
			email:'',
			phone:'',
			company:'',
			isLoading:true,
			displayResults:false
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.componentWillMount=this.componentWillMount.bind(this);
		this.componentDidMount=this.componentDidMount.bind(this);
	}

	componentDidMount(){
		this.setState({isLoading:false});
	}

	componentWillMount(){
		this.setState({isLoading:true});
	}

	handleChange(event){
		const name=event.target.name;
		const value=event.target.value;
		this.setState({
			[name]:value
		});
	}

	handleSubmit(event){
		this.setState({'displayResults':true})
		event.preventDefault();
	}

	render(){
		return(
			<div className="uk-container">
				{this.state.isLanding ? 
				<div className="Loader">Loading the form....</div>:
					<form className="Form" onSubmit = {this.handleSubmit}>
						<div className="heading">
							<h1>Fill the form</h1>
						</div>
						<div className="uk-grid uk-grid-small">
							<div className="ui-width-1-2@m uk-margin-bottom">
								<label>
									First Name:
									<input className="uk-input" name="fname" type="text" value={this.state.fname} onChange={this.handleChange}/>
								</label>
							</div>
							<div className="ui-width-1-2@m uk-margin-bottom">
								<label>
									Last Name:
									<input className="uk-input" name="lname" type="text" value={this.state.lname} onChange={this.handleChange}/>
								</label>
							</div>
						</div>
						<div className="ui-width-1-1@m uk-margin-bottom">
							<label>
								Company:
								<input className="uk-input" name="company" type="text" value={this.state.company} onChange={this.handleChange}/>
							</label>
						</div>
						<div className="ui-width-1-1@m uk-margin-bottom">
							<label>
								Email Address:
								<input className="uk-input" name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
							</label>
						</div>
						<button className="uk-padding-small uk-text-center uk-margin-bottom uk-button-primary" type='submit' value='Submit'>Submit</button>
					</form>
				}
				{this.state.displayResults ? 
				<div>
					<h3>Details entered</h3>
					<p>Your name: <b>{this.state.fname} {this.state.lname}</b></p> 
					<p>Your E_mail address: <b>{this.state.email}</b></p> 
					<p>Your Company: <b>{this.state.company}</b></p> 
				</div>:
				<div></div>
				}
			</div>
		)
	}
}