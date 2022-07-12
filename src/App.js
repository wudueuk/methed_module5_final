import {useDispatch} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import {updateToken} from './store/token/tokenReducer';
import {updateCode} from './store/codeReducer';
import {useToken} from './hooks/useToken';
import {getToken} from './api/token';
import './App.css';

function App() {
  const dispatch = useDispatch();
  if (location.search.includes('code')) {
    const code = new URLSearchParams(location.search).get('code');
    dispatch(updateCode(code));
    const token = useToken();
    dispatch(updateToken(token));
  } else {
    dispatch(updateToken(getToken()));
  }


  return (
    <div className='wrapper'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
