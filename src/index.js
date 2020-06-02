import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './containers/App';   // study about named and default exports, I worked tirelessly debugging the errors 
//import Card from './components/CardList';  // please pay attention to the exporting importing
//import CardList from './components/CardList';
import 'tachyons';
//import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';

//import registerServiceWorker from './serviceWorker';

// this is when we get data from robots manually
/* ReactDOM.render(
				<div>
					<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
					<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
					<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
				</div>,
	document.getElementById('root')); */
//ReactDOM.render(<CardList robots = {robots} />, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

