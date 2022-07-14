/*aula de css componentes, ele é utilizado para um componentes em específico, geralmente é criado um arquivo com o mesmo nome do cmponente e este é importado n componente, note que este método não é scoped, ou seja, o css vazapara todos os outros componentes se houver um regra e colisão, o react já cria um exemplo desta técnica com app.css/js*/

import "./MyComponents.css";

const MyComponents = () => {
  return (
    <div>
        <h1>CSS de componente</h1>
        <p>Este é meu parágrafo de css componetes</p>
        <p className="my-comp-paragraph">Este tabmbém é do meu componetes</p>
    </div>
  );
};

export default MyComponents;