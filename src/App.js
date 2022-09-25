import './App.css';
import { ToastContainer} from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContacts from './components/AddContacts';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add' element={<AddContacts />} />
        <Route exact path='/edit/:id' element={<EditContact />} />
          
      </Routes>
    </div>
  );
}

export default App;
