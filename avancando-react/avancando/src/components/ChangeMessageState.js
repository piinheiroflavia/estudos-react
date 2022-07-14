/*aula de state lift
precisa criar outro componente para enviar a mensagem
*/

const ChangeMessageState = ({handleMessage}) => {
    const message = ['oi', 'olá', 'tudo bom?'];
  return (
    <div>
        <button onClick={() => handleMessage(message[0])}>1</button>
        <button onClick={() => handleMessage(message[1])}>2</button>
        <button onClick={() => handleMessage(message[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState