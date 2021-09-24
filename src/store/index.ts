import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

//Informação que estará disponivel em toda aplicação
const store = createStore(rootReducer)

export default store;