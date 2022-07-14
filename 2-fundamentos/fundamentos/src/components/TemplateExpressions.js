const TemplateExpressions = () => {

    // constantes em js
    const name = 'Flavia';
    const dados = {
        age: 22,
        job: "dev",
        hobbie: "lê"
    };


    return(
        <div>
            {/*Tudo detro do {} está em js*/}
            <h1>Olá {name}, Tudo jóia?</h1>
            <p>Sua idade: {dados.age}, seu trabalho é: {dados.job} e um dos seus hobbies é: {dados.hobbie}</p>
            <p>8 + 4 = {8+4}</p>
            <p>{console.log("Você está dentro do console hehe")}</p>
        </div>
    );
};

export default TemplateExpressions;