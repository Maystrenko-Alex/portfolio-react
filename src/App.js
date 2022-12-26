import './App.css';
import { Contacts } from './contacts/Contacts';
import { DistantWork } from './distantWork/DistantWork';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Works } from './works/Works';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <DistantWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
