import './App.css';
import { ToastContainer} from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<h1>Welcome to my contacts list</h1>} />
        <Route exact path='/add' element={<h1>Add</h1>} />
        <Route exact path='/edit/:id' element={<h1>Edit</h1>} />
          
      </Routes>
    </div>
  );
}

export default App;
