import './App.css';
import MyFooter from './components/MyFooter';
import MyForm from './components/MyForm';


function App() {
  return (
    <div className="App">
      <h1>Cadastro</h1>
      <MyForm user={{name:"flavia", email:"flavia@gmail.com", senha:12345678, bio:'sou editora de vídeos', sistema:'editor'}}/>
      <MyFooter/>
    </div>
  );
}

export default App;
