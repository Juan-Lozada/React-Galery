import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/layout/header';
import GaleryComponent from './components/galeria/galery';
import FooterComponent from './components/layout/footer'

function App() {
  return (
    <div className='App'>
    < NavbarComponent title="Galeria de imagenes con React" />
    < GaleryComponent />
    < FooterComponent />
    </div>
)
}

export default App;
