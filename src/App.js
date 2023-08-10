// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About'


// let name="Welcome HArray"

function App() {
  return (
  <>
   
  
{/* <Navbar title="MovieFlix" aboutText="about us"/> */}
<Navbar title="MovieFlix" />
{/* <Navbar /> */}
<div className="container my-3">
{/* <TextForm heading="Enter the text to anylyze below"/> */}
<About/>

</div>


  </>

    
  );
}

export default App;
