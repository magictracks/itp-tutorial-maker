import rootReducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
// thunk allows us to eval when working in async
import thunk from 'redux-thunk';


/**
@ Store config
+ create and return a store that takes our rootReducer
+ we apply redux-thunk 
+ and if dev tools exist, bring that in too
*/
export function configureStore(){
	const store = createStore( 
		rootReducer,
		compose(
				applyMiddleware(thunk),
				window.devToolsExtension ? window.devToolsExtension() : f => f
			)
		);
	return store;
}