//esse aqui é o css de componentes globais
import './App.css';
import MyComponents from './components/MyComponents';
import {useState} from "react";
import Title from './components/Title';

function App() {

  const n = 5;
  const [nome]= useState("flaviana")

  const redTitle = true

  return (
    <div className="App">

      {/*CSS global*/}
      <h1>React com CSS</h1>

      {/*CSS de componente*/}
      <MyComponents/>
      <p>Este parágrafo é do meu css global app.js</p>

      {/*CSS inline
      o iline style do react é igual o do css, por meior do atributo style conseguimos aplicar regras diretamente em um elemento, devemos optar por outras maneiras de css, inline pode dificultar a manutenção ou deixar o código imprevisível em algumas situações*/}
      {/*style= {1ºinserir algo dinâmico  {2ºinserir um objeto com chave e valor, separados com , e utilizando " " }  }*/}
      <p style={{color: "red", padding: "25px", border: "1px solid black", fontSize:"2rem", borderRadius:"150px"}}>Este elemento foi estilizado de forma inline!!</p>
      <p style={{
        color: "red", 
        padding: "25px", 
        border: "1px solid black", 
        }}>Este elemento foi estilizado de forma inline!!</p>

      {/*CSS inline dinâmico*/}
      {/*CSS inline dinâmico aplica estilo basedo em uma condicional, vamos inserir no atributo u if ternário, dependendo da condição mudar que regras de estilo um elemento receber*/}

      <h2 style={ n < 10 ? {color: "purple"} : {color: "pink"}} >Css dinâmico</h2>
         
      <h2 style={ n > 10 ? {color: "purple"} : {color: "pink"}} >Css dinâmico</h2>

      <h2 
        style = { nome === 'flaviaa' ? {color: "purple"} : {color: "red"} }> testar nome 1
      </h2>
      <h2 
        style = { nome === 'flaviana' ? {color: "purple"} : null }> testar nome 2
      </h2>

      {/*classs dinâmico*/}
        <h2 className={redTitle ? "red-title" : "title"}>Este título está em classes dinâmico</h2>
      
      {/*classs dinâmico*/}
      {/*pode também aplicar lógica para mudar de css de um elemento também ultilizamos o if ternário, essa abordagem é mais interessante que o css inline, pois as classes estarão isoladas no arquivo de css, resolvendo o problemas de organização de código*/}
        <Title/>
    </div>
  );
}

export default App;
