import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Cleyton"
  const newName = nome.toUpperCase()

  const url = "https:///via.placeholder.com/150"

  return (
    <div className="App">
     <h1>Olá Mundo!</h1>
     <h2>Estou aprendendo React</h2>
     <p>Meu nome é {newName}</p>
     <img src={url} alt={nome} />

     <Frase />
     <Frase />

     <List />

     <HelloWorld /> 
     <SayMyName nome={nome} />
     <Pessoa nome="Cleyton" idade={23} profissao="Desenvolvedor" />
     </div>
  );
}

export default App;
