import style from "./PessoasCarteiras.module.css";
const PessoasCarteiras = ({modelo, cor, ano}) => {
  return (
    <div>
        <p><strong>MODELOS DE CARRO</strong></p>
        <ul type="none">
            <li><strong>MODELO: </strong> {modelo}</li>
            
            <li><strong>COR DO CARRO: </strong> {cor}</li>
            
            <li><strong>ANO DO CARRO: </strong> {ano}</li>
        </ul>
    </div>
  )
}

export default PessoasCarteiras;