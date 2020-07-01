import React from 'react';
import { createStore } from 'redux';
import allReducer from './reducers/index';
import { Provider } from 'react-redux';
import Posts from "./components/Posts";
import CarsForm from './components/CarsForm';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


function App() {

  return (
    <Provider store={store}>
      <CarsForm />
      <Posts  />
    </Provider>
    
  );
}

export default App;
