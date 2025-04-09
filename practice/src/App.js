
import './App.css';
import LocalandSession from './Examplemap/local_session/Localandsession';
import LocalStorageForm from './Examplemap/local_session/Localexample';
import SessionStorageForm from './Examplemap/local_session/sessionexample';
import Map1 from './Examplemap/Map1/Map1';
import Mapandsort1 from './Examplemap/Mapandsort/Mapandsort1';

function App() {
  return (
    <div >
    <Map1/>
    <Mapandsort1/>
    <LocalStorageForm/>
    <SessionStorageForm/>
    <LocalandSession/>
    </div>
  );
}

export default App;
