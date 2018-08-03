import React,{Component} from "react";
import {connect} from "react-redux";
import {addTodo, removeTodo} from '../services/actionCreators.js'

const Task = ({task, id, removeTodo}) => (
  <li> {task}, {id}, <button onClick={removeTodo}>X</button></li>
)

class Todos extends Component {

	constructor(props){
		super(props)

		this.addTodoToState = this.addTodoToState.bind(this);
    this.removeTodoFromState = this.removeTodoFromState.bind(this);

	}

	addTodoToState(){
    this.props.dispatch({type:"ADD_TODO", task:"clean!"})
    console.log("add", this.props.todos)
	}

  removeTodoFromState(id){
    console.log("remove", this.props)
    this.props.dispatch({type:"REMOVE_TODO", id})
  }

	render(){
      let todos = this.props.todos.map( todo => <Task {...todo} removeTodo={this.removeTodoFromState.bind(this, todo.id)}/>)
			return(
        <div>
					<button onClick={this.addTodoToState}>Add Todo</button>
          <ul>
          </ul>
          {todos}
          </div>
				)
		}
}

export default Todos
