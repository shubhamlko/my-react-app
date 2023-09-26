
import './App.css';
import Welcome from './components/Welcome'
import Functionbased from './components/Functionbases';
import Greet from './components/Greet'
import Message from './components/Msg';
import Counter from './components/Counter';
import Eventbind from './components/Eventbind';
import ParentCompent from './components/ParentCompent';
import UserGreeting from './components/UserGreeting';
import Namelist from './components/Namelist';

function App() {
  return (
    <>

      <Welcome />
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
    </>
  );
}

export default App;
