//Introdução ao props 
const ShowUserName = (props) => {
  return (
    <div>
        {/*props.name recebendo as propriedade name do app.js
        esse componente é recebido por meio do componente pai para componente filho
        o dado do componte pode ser dinâmico, feito com variável, com useState  */}
        <h2>O nome do usuário: {props.name}</h2>
    </div>
  )
}

export default ShowUserName