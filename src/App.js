import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/layout/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';



class App extends Component
{
	state = {
		todos: []
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => this.setState({ todos: res.data }));
	}

	// Mark complete
	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		})
	}

	delTodo = id => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => 
				this.setState({
					todos: [...this.state.todos.filter(todo => todo.id !== id)]
				})
			)
	}

	addTodo = title => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title, 
			completed: false
		}).then(res => this.setState({todos: [...this.state.todos, res.data]}))
		// this.setState({todos: [...this.state.todos, newTodo]})
	}

	render()
	{
		console.log(this.state.todos);
		return (
			<Router>
				<div className="App">
					<Header />
					<Route exact path="/ReactApp" render={props => (
						<React.Fragment>
							<div className="container">
								<AddTodo AddTodo={this.addTodo} />
								<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
							</div>
						</React.Fragment>
						)}
					/>
					<Route path="/ReactApp/about" component={About} />
				</div>
			</Router>
		)
	}
}

export default App;
