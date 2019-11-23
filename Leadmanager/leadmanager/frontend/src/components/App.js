import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	render(){
		return <h1>React App</h1>
	}
}

ReactDom.render(<App />, document.getElementById('app'))