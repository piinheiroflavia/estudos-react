import {useState} from 'react';
const ManageDate = () => {
    
    // a variável não importa se redenrizar o componente ela não altera o valor
    let someData = 10
    /*utilizando o hook, vai declarar duas variáveis, desistruturar como se fosse um arry como se fosse daqui, o number apresenta o primeiro valor e setNumber atribui qual será o próximo valor, userState iniciará o valor */
    /*essa é a importâ  cia do userState pq geralmente é manipulado o dado na tela e precisar vê o valor em tempo real*/
    const [number, setNumber] = useState(15)

    console.log(number)
  return (
    <div>
        <div>
            <p>O valor: {someData}</p>
            <button onClick={() => (someData= 15)}>Somar</button>
        </div>
        
        <div>
            <p>O valor: {number}</p>
            <button onClick={() => (setNumber(20))}>Mudar o State</button>
        </div>
    </div>
  )
}

export default ManageDate