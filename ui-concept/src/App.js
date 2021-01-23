// import logo from './logo.svg';
import './App.css';
import AbsoluteView from './components/views/AbsoluteView';
import ThemeContext from './api/ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="green">
      <div className="App">
        <AbsoluteView />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
