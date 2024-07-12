import { ToastContainer } from 'react-toastify';

import './App.css'
import Game from './Game'

function App() {
  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <p>Created By: Morning Dove Nelson 2024</p>
      </footer>
    </>
  );
}

export default App;