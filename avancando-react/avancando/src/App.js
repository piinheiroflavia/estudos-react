import { Fragment, useState } from 'react';
import './App.css';
//imagem assets, como componente/ váriael
import thor4 from './assets/thor4.jpg';
import CarDetaills from './components/CarDetaills';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import Executando from './components/Executando';
import Fragments from './components/Fragments';
import ListaRender from './components/ListaRender';
import ManageDate from './components/ManageDate';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import ChangeMessageState from './components/ChangeMessageState';
import PessoasCarteiras from './components/PessoasCarteiras';

function App() {

  //const name = 'lily';
  const [userName] = useState('Atlas');

  const Cars = [
    {id:1, brand: "Ferrari", cor: "Amarela", novo: true, km:203235},
    {id:1, brand: "jeep", cor: "azul", novo: false, km:20556},
    {id:1, brand: "porsche", cor: "preto", novo: true, km:0},
  ]

  {/*tarefa 3*/}

  const pessoasCarteira = [
    {id:1, nome: "emma", profissao: "esudante", idade:17},
    {id:1, nome: "altlas", profissao: "dev", idade:25},
    {id:1, nome: "lily", profissao: "ilustradora", idade:20},
  ]

  {/*props functions*/}
  function showMessage(){
    console.log("Evento do componente pai")
  }

  {/*aqui vai um useState usando o hook com uma valor de entrada e outro pra alterar, depois é criado uma funçao pra alterar o estado*/}
  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando com React</h1>
        {/*Imagem com public*/}
        {/*Algo que não vai mudar, fixo como o logo */}
        <div>
          <img src="/thor4.jpg" alt="thor4" />
        </div>
        {/*Imagem com asset*/}
        {/*Asset precisa importar a imagem e o src é dinâmico com o nome de importação, é como se importase um componente diferente e simplifica pra utilizar em vários lugares, usa como se fosse uma várivel*/}
        {/*se a imagem mudar por algum motivo, só altero em um lugar, pensando ao longo prazo*/}
        <div>
          <img src={thor4} alt="thor4" />
        </div>
        {/*componets - manageDate// aula sobre useState hooks */}
        <ManageDate></ManageDate>
        <ListaRender></ListaRender>
        <ConditionalRender></ConditionalRender>
        {/*conceitos simples de props*/}
        <ShowUserName name={userName}/>
        {/*destructuring*/}
        <CarDetaills brand="VW" km={10000} cor="preto" novo={false}/>
        {/*reaproveitando os componentes do props*/}
        <CarDetaills brand="Tesla" km={50041} cor="cinza" novo={true}/>
        <CarDetaills brand="Fiat" km={105259} cor="vermelho" novo={false}/>

        {/*loop em array de objetos*/}           
        {/*a chave resolve a necessidade do react de cada elemento que leva o loop*/}
           
          {Cars.map((car) =>
            <CarDetaills 
   
             key={car.id}
              brand={car.brand}
              cor={car.cor}
              km={car.km}
              novo={car.novo}
            />
          )};

          {/*tarefa 3*/}
          {pessoasCarteira.map((pCart) =>
          <PessoasCarteiras
            key={pCart.id}
            nome={pCart.nome}
            profissao={pCart.profissao}
            idade={pCart.idade}
          />
          )};
          
        {/*componentes em fragments*/}
      <Fragments propFragments= "teste"/>
       {/*container*/}
       <Container myValue= 'olá'>
            <p>este é o conteúdo</p>
       </Container>
        {/*executando função*/}
       <Executando myFunction={showMessage}/>
        {/*state lift*/}
       <Message msg={message}/>
       <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
