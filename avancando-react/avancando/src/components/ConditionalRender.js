import { useState } from "react"
//aula de renderização condicional
const ConditionalRender = () => {

    const [x] = useState(true)
    const [name, setName] = useState('jam')
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true sim!</p>}
        {!x && <p>Se x for true sim!</p>} 
        {/*!false => true // not / */}

        {/*retorno entre () igual o método do map pq é jsx*/}
        {name === 'jam'? (<div><p>O nome é jan</p></div>): (<div><p>O nome não é jan</p></div>)}

        <button onClick={() => setName('Jam')}>Clica aqui!</button>


    </div>
  )
}

export default ConditionalRender