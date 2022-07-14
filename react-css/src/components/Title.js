import style from "./Title.module.css";

/*aula de css module /mais padrão/ mais utilizado
o csss modules é um recurso de css scoped, ou seja, ele vai ser exclusivo do componente, o nme do aquivo é componente.module.css precisamos importá lo também no componente.*/
const Title = () => {
  return (
    <div>
      <h1 className = {style.my_title} > Meu Título </h1>
    </div>
  )
}

export default Title;