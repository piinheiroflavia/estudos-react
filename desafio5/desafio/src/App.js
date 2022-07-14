import './App.css';
import PessoasCarteiras from './componentes/PessoasCarteiras';

function App() {
  
  const pessoasCarteira = [
    {id:1, modelo: "jeep", cor: "azul", ano:2014},
    {id:1, modelo: "celtinha", cor: "cinza", ano:2005},
    {id:1, modelo: "jimmy", cor: "amarelinho", ano:2022},
  ]
  return (
    <div className="App">
      <h1>Desafio 5</h1>
          {pessoasCarteira.map((pCart) =>
          <PessoasCarteiras
            key={pCart.id}
            modelo={pCart.modelo}
            cor={pCart.cor}
            ano={pCart.ano}
          />
          )};

    </div>
  );
}

export default App;
