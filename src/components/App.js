import React from 'react';
import Header from './Header';
import reportData from '../report-data.js';
import base from '../base';


class App extends React.Component {

	constructor(){
		super();


		// initial state
		this.state = {
			
		};
	}

	componentWillMount(){


		//check localstorage
		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
		if(localStorageRef) {
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUnmount(){
		base.removeBinding(this.ref)
	}

	componentWillUpdate(nextProps, nextState){
		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
	}


	render(){
		return(
			<div className="health-inspector">
				<div className="menu">
					<ul className="restos">
						restaurant
					</ul>
				</div>
			</div>
		)
	}
}

export default App;
