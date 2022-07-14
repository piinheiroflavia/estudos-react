//COMPONENTES
import TemplateExpressions from './components/TemplateExpressions';
import FristComponents from './components/FirstComponents';
import NameColors from './components/NameColors';
import MyComponents from './components/MyComponents';
//componentes/evetos/button
import Events from './components/Events';
//STYLE/CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <TemplateExpressions></TemplateExpressions>
      <FristComponents></FristComponents>
      <NameColors></NameColors>
      {/*Consigo aproveitar os componentes em todos os lugares*/}
      <MyComponents></MyComponents>
      <Events></Events>

    </div>
  );
}

export default App;
