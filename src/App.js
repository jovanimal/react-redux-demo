import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';

import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import BurgerContainer from './components/BurgerContainer'
import NewCakeContainer from './components/NewCakeContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <BurgerContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
