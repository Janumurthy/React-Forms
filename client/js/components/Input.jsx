import React,{Component} from 'react';

export default class Input extends Component{
	constructor(props){
		super(props);
		this.onChange=this.onChange.bind(this);
	}

	onChange(event){
		this.props.handleValueChange(event.target.value) // handleValueChange is in-built function?
	}

	render(){
		let fieldState = this.props.fieldState; //fieldState is inbuilt obj that the Form Api offers
		return(
			<div>
				<label className="uk-form-label">{this.props.label}</label>
				<div className="uk-form-controls">
					<input 
					type={this.props.type || "text"}
					name={this.props.name}
					onChange={this.onChange}
					onBlur={this.onChange}
					className="uk-input uk-margin-bottom"
					placeholder={this.props.placeholder} //in-built property?
					autoFocus={this.props.autofocus} //in-built property?
					/>
				</div>
				<span className="uk-text-small uk-text-danger uk-margin-bottom">
				{this.props.fieldState.getMessage()}
				</span>
			</div>
		)
	}
}