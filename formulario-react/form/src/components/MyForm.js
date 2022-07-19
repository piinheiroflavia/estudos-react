import './MyForm.css'
import {useState} from 'react'
/*Manipulação de valores
Para manipular os valores dos inputs vamos utilizar o hook useState, ou seja, podemos armazenar na variável e utilizar o set para alterar o valor, vamos criar uma função para alterar o valor no evento onChange, deixando nosso código fácil de trabalhar nas próximas etapas: com envio dos dados para BD e validação
*/

const MyForm = ({user}) => {
    //6- controlando o input
    //3- gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [senha, setSenha] = useState(user ? user.senha : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [sistema, setSistema] = useState(user ? user.sistema : '');

    const handleNome = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        //preventDefault previni o comportamento padrão de um evento//cancela o evento se for cancelável, sem parar a propagação do mesmo.
        event.preventDefault();
        console.log('Formulário enviado');
        console.log(name + '\n' + email + '\n' + senha + '\n' + bio + '\n' + sistema);

        //7- limpando form
        setName('');
        setEmail('');
        setSenha('');
        setBio('');

    };

  return (
    <div>
        {/*5- envio de form com submit*/}
        {/*1- criando um formulário*/}
        <form onSubmit={handleSubmit}>
            <div>
            {/*primeira possibilidade*/}
                <label htmlFor="nome">Nome:  
                <input type="text" name="nome" placeholder='nome ' onChange={handleNome} value={name}/>
                </label><br/>
                 {/*3- simplificação de manipulação do useState*/}
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" placeholder='exemplo@gmail.com ' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label><br />
            {/*2- segunda possibilidade*/}
                <label htmlFor="senha">Senha:  
                <input type="password" name="senha" placeholder='senha 'onChange={(e) => setSenha(e.target.value)} value={senha}/></label>
            </div>
            {/*8- textarea*/}
            <label >
                <span>Bio: </span>
            <textarea name="bio" placeholder='descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio} ></textarea></label><br />
            {/*9- select*/}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setSistema(e.target.value)} value={sistema}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label><br />
            <input type="submit" className='btn' value="Cadastrar" />
        </form>
        
    </div>
  )
}

export default MyForm;