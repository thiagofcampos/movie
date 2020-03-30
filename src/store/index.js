import {createStore} from 'redux';
import rootReducer from './module/rootReducer'

//const enhancer = process.env.NODE_ENV === 'development' ? null : null; 

const store = createStore(rootReducer);

export default store;
