// pages/_app.js
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import ConnectedLayout from "../components/Layout";
// import your action creators from the actionCreators.js
import {ADD_TODO, REMOVE_TODO} from "../services/actionCreators.js"


/**
@ Reducer
@*/
const initialState = {
  todos:[],
  id:0
}

const reducer = (state = initialState, action) => {
  let newState = {...state}
  switch(action.type){
    case ADD_TODO:
      newState.id++
      return{
        ...newState,
        todos: [...newState.todos, {task:action.task, id:newState.id}]
      }
    case REMOVE_TODO:
      let todos = newState.todos.filter( val => val.id !== action.id)
      return {...newState, todos}
    default:
      return newState
  }
};


/**
@ Store
@*/
const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};


class MyApp extends App {

  // static async getInitialProps({Component, ctx}) {
  //  // we can dispatch from here too
  //  ctx.store.dispatch({type: 'FOO', payload: 'foo'});
  //  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //  return {pageProps};
  // }

  render() {
    const {Component, pageProps, store} = this.props;
      return (
        <Container>
          <Provider store={store}>
            <ConnectedLayout>
              <Component {...pageProps} />
            </ConnectedLayout>
          </Provider>
        </Container>
      );
  }
}

MyApp.getInitialProps = async function( {Component, ctx} ) {
  // we can dispatch from here too
  // ctx.store.dispatch({type: 'ADD_TODO'});
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {pageProps};
}


// export default Index
export default withRedux(makeStore,  {debug: true})(MyApp);