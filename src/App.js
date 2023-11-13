import logo from './logo.svg';
import './App.css';

import Post from './components/Post';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Postform />
        <Post />
      </header>
    </div>
  );
}

export default App;
