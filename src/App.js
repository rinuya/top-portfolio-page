import './App.css';
import ContactMe from './ContactMe';
import Header from "./Header";
import MyWork from './MyWork';

function App() {
  return (
    <div className="App">
      <Header className="App-Header" />
      <MyWork className="App-Body" />
      <ContactMe className="App-Footer" />
    </div>
  );
}

export default App;
