import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import Modal from './Pages/Modal/Modal';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Modal></Modal>
    </div>
  );
}

export default App;
