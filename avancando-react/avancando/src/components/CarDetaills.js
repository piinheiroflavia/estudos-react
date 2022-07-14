// aula destructuring
// no  lugar de props posso colocar o nome direto do componente
//componentes em objetos de variáveis
const CarDetaills = ({brand ,km ,cor ,novo}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {novo && <p>Esse carro é novo!!</p>}
    </div>
  )
}

export default CarDetaills