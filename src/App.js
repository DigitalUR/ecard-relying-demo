import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './scenes/auth';
import Navbar from './scenes/navbar';
import StudentCard from './scenes/studentCard';
import SignUp from './scenes/createAccount';
// import { useParams } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Routes>
      {/* <Route path='navbar' component={<Navbar/>}/> */}
      <Route path="/" element={<HelloWorld/>}/>
      <Route path="/One1" element={<One/>}/>
      <Route path="/info" element={<StudentCard/>}/>
      <Route path="/auth" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;

const HelloWorld = ()=>{
  return (  <>
    Hello world ...
  </>)
}
const One = ()=>{
  return (  <>
    number one
  </>)
}