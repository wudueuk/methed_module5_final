/* import React from 'react'; */
import {useDispatch} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <div className='wrapper'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
