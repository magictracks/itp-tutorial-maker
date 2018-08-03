import React, {Component} from "react";
import {connect} from "react-redux";
import Todos from "../components/Todos.js"

class Index extends Component {

    // static getInitialProps({store, isServer, pathname, query}) {
    //   // component will be able to read from store's state when rendered
    //   store.dispatch({type: 'FOO', payload: 'foo'}); 
    //   // you can pass some custom props to component from here
    //   return {custom: 'custom'}; 
    // }

    render() {
      let todos = this.props.todos.map( ({task, id}) => <li>{task}, {id}</li>)

      return (
          <div id="Main">
            <div>Hello There!</div>
            <div>
              <ul>
               {todos}
              </ul>
            </div>
            <Todos {...this.props}/>
          </div>
      )
    }
}



export default connect(state => state)(Index);










