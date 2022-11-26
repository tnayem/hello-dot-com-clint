import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import Modal from './Pages/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Modal></Modal>
      <ToastContainer/>
    </div>
  );
}

export default App;
