import logo from './logo.svg';
import './App.css';
import UserRegistrationPage from './Component/UserRegistrationPage';
import RegistrationPage from './Component/RegistrationPage';


function App() {
  return (
    <div className="App">
     {/* <h1>Main component</h1> */}

   <UserRegistrationPage />
   <RegistrationPage />

    </div>
  );
}

export default App;
