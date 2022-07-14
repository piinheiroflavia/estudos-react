import {useState} from 'react';

const ListaRender = () => {

    {/*array com tipos de dados de lista*/}
    const [list] = useState(["Kaz", "Inej", "Mathias", "Nina"])

     {/*podemos colocar key como alguma chave única, como o id de algum dade como no exemplo abaixo, facilita muito mais do que colocando um index, pois o index vai fazer a contage, lembrando que só em último caso devemos utilizar o index no método map*/}
    const [user, setUsers] = useState([
        {id: 1, name: "Cardan", age: 100},
        {id: 2, name: "jude", age: 18},
        {id: 3, name:"Oak", age: 8},    
    ])

    const deleteRandom = () =>{
        //0,1,2/ um dos três
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>{
            //vou filtrar alguns usuários
            return prevUsers.filter((user) => randomNumber !== user.id )
        })
    }
  return (
    <div>
        {/*exerção de dados dinâmicos com as aberturs e fechamento de chaves*/}
        {/*funções com parenteses e não chaves*/}
        {/*método de map inserindo esse dado utilizando a sintaxe dinâmica ultizando o jsx*/}
        {/*se não add uma propriedade pra chave aparece erro pedindo no console*/}
        <h5>Redenrização de listas e Propriedade key</h5>
        <ul>
            {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul>
        <h5>Previous State</h5>
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>              
            ) )}
        </ul>
        <button onClick={deleteRandom}>Deletar um usuário</button>
    </div>
  );
};

export default ListaRender;