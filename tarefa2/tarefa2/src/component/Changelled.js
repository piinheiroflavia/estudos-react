const Changelled = () => {

    const handleCal = (e) => {
        var multi = 20 * 82
        console.log("o valor é: " + multi)
     
    };

    return(
        <div>
            <h2>Respondendo no console..</h2>
            <h2>20 X 82 = </h2>
            <button onClick= {handleCal} >Calcular</button>
        </div>
    );
};

export default Changelled;