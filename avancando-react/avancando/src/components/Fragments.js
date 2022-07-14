const Fragments = ({propFragments}) => {
    //ele continua aparecendo que está dentro de uma div no inspecionar, porém essa dia é a do app.js que é do elemento pai
    //a tag vazia serve como elemento pai e não altera a estrutura do html com uma div
  return (
    
    <>
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{propFragments}</h4>
    </>
  )
}

export default Fragments