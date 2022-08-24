
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Registration from './Registration.js';
function App() {
  return (
    <div className="App">
   <Registration />
   <ToastContainer autoclose={7000} />
    </div>
    
  );
}

export default App;
