
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Cal from './Screens/Cal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Cal/>}/>
        <Route path="cal"element={<Cal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
