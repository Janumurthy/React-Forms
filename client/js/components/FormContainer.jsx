import React, {Component} from 'react';

export default class FormContainer extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			auth:true
		}
		this.setLoaderState=this.setLoaderState.bind(this);
	}
	setLoaderState(isLoading){
		this.setState({loading:isLoading})
	}
	render(){
		return(
			<div>
				<div className="Form">
					{this.state.auth}
					{
						this.state.loading ? 
						<div className="loader"></div>:
						<div className="no-loader"></div>
					}
				</div>
			</div>
		)
	}
}