//criando uma estrutura básica de componentes com a funcao, retorno de algo e exportação

//uma hierarquia mais complexa onde o App.js é o pai, FirstComponents é o filho e o MyComponents é o filho do filho
import MyComponents from "./MyComponents";

// funcao criada por arrow function ()=>
const FristComponents = () => {

    return(
        //comentario
        /*
            outro comentario
        */
        <div>
            {/* outro comentario*/}
            <h1>Meu primeiro componente</h1>
            <p className='text'>Meu texto: </p>
            <MyComponents></MyComponents>
        </div>
    );

};

//exportando para importar em algum lugar para utilização ou reutilização de componente
export default FristComponents;