
import './App.css';
import Registraion from './components/LoginRegistraion/Registraion';
import Http from './components/https/Http';
import Postform from './components/https/Postform';
// import Welcome from './components/Welcome'
// import Functionbased from './components/Functionbases';
// import Greet from './components/Greet'
// import Message from './components/Msg';
// import Counter from './components/Counter';
// import Eventbind from './components/Eventbind';
// import ParentCompent from './components/ParentCompent';
// import UserGreeting from './components/UserGreeting';
// import Namelist from './components/Namelist';
// import StyleExample1 from './components/CssStylingExample/StyleExample1';
// import Form from './components/formHandling/Form';
// import Lifecyclea from './components/lifecycle/LifecycleA';
// import  Fragment from './components/Fragment';
function App() {
  return (
    <>
      <h3 className='text-center bg-secondary text-white shadow-sm py-4 '>React Application</h3>
     {/* <Welcome />
      <Functionbased />
      <Greet Name="shubham" surName="rawat" />
      <Greet Name="Anil" surName="Kumar" />
      <Greet Name="Deepak" surName="Bharti" />
      <Greet Name="Lavkush" surName="Yadav" />
      <Message />
      <Counter />
      <Eventbind />
      <ParentCompent />
      <UserGreeting />
      <Namelist /> 
       <StyleExample1 primary=x1{true} /> 
       <Form /> 
     <Lifecyclea /> 
      <Fragment />  */}

      {/* <Http /> */}
      {/* <Postform /> */}
      <Registraion />
    </>
  );
}

export default App;
