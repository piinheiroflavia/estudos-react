//criando um evento de click
const Events = () => {

    //os eventos sempre usa um argumento especial chamado e são os dados que o evento contém
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('ativou o evento!!')
    }
    const handleAlert = (e) => {
        alert('recebeu um alert!!!')
    };

    //criando uma função de redenrização que retorna o jsx (javascript XML)
    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando Isso!</h1>
        }else{
            return <h1>Também posso redenrizar isso</h1>
             
        }
    }

    return(
        <div>
            <div>
                {/*não se coloca () no evento pq se faz ele executa a função ao ler o código e não é isso quero agora e sim que seja despara no click*/}
                <button onClick = {handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick= {handleAlert}>Alerta</button>
            </div>
            {/*Esse butao o evento irá desparar em forma inline, na função do evento*/
            /*Posso usar também a mesma funcão para esse evento*/}
            <div>
                <button onClick={() => console.log("clicou aqui")}>Clique Aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;