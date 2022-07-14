//tarefa 3
const PessoasCarteiras = ({nome, profissao, idade}) => {
  return (
    <div>
        <p><strong>Tarefa 3</strong></p>
        <ul>
            <li><strong>NOME:</strong> {nome}</li>
            
            <li><strong>PROFISSÃO:</strong> {profissao}</li>
            
            <li><strong>IDADE:</strong> {idade}</li>
        </ul>

        {(idade >= 18) && <p><strong> Você pode tirar a carteira de motorista</strong></p> }
        {(idade <= 18) && <p> <strong>Você é ainda menor de 18 anos</strong></p> }
    </div>
  )
}

export default PessoasCarteiras;