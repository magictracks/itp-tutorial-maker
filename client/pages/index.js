import React, {Component} from "react";
import {connect} from "react-redux";
import HelloBtn from "../components/HelloBtn.js"

class Index extends Component {

    // static getInitialProps({store, isServer, pathname, query}) {
    //   // component will be able to read from store's state when rendered
    //   store.dispatch({type: 'FOO', payload: 'foo'}); 
    //   // you can pass some custom props to component from here
    //   return {custom: 'custom'}; 
    // }

   
   


    render() {
      return (
          <div id="Main">
            <div>Prop from Redux</div>
            {/*<div>Prop from getInitialProps {this.props.todos.id}</div>*/}
            <HelloBtn {...this.props}/>
          </div>
      )
    }
}



export default connect(state => state)(Index);


// export default connect(state => state)(({pathname}) => (
//        <div className="other">
//            <div>Using Next.js default prop in a wrapped component: {pathname}</div>
//            <nav>
//                <Link href="/"><a>Navigate to index</a></Link>
//            </nav>
//        </div>
//    ));