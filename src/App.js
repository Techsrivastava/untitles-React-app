import './App.css';
import Header from './components/Header';
import Textform from './components/Textform';




function App() {
  return (
    <>
      <Header title="Digital Assana" />
      <div className="container my-3">
        <Textform heading = "enter your text" />
      </div>

    </>

  );
}

export default App;