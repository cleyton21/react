import './App.css';

function App() {

  const name = "Cleyton"
  const newName = name.toUpperCase()

  const url = "https:///via.placeholder.com/150"

  return (
    <div className="App">
     <h1>Olá Mundo!</h1>
     <h2>Estou aprendendo React</h2>
     <p>Meu nome é {newName}</p>
     <img src={url} alt={name} />
     
     </div>
  );
}

export default App;
