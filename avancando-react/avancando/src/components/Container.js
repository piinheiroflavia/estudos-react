//aula a prop children
const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        
    </div>
  )
}

export default Container