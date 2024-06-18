import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Channel from './pages/Channel';
import Details from './pages/Details';
import Confirmed from './pages/Confirmed';
//import { useSelector } from 'react-redux';

function App() {
  //const {loading} =useSelector(state => state.alerts)
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/channel' element={<Channel />} />
      <Route path='/details' element={<Details />} />
      <Route path='/confirmed' element={<Confirmed />} />
    </Routes>
    
    </BrowserRouter>
   </> 
  );
}

export default App;
