//
const Executando = ({myFunction}) => {
  return (
    <div>
        {/*aqui vai o código que vai executar a função
            vê o resultado depois no console
        */}
            <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  )
}

export default Executando