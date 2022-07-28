import {useState, useEffect} from 'react'
// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //5- reformando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //6- loading
    //quando fizmos requisições para APIs é normal que haja um intervalo de loading entre a requisição e o recebimento da resposta, podemos fazer isso no hook também, identificando quando começa e termina este estado 
    const [loading, setLoading] = useState(false);

    //8- tratando os erros
    const [error, setError] = useState(null)

    // 9 - desafio
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method)=>{
        if (method === "POST") {
            setConfig({
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
      
            setMethod("POST");
          } else if (method === "DELETE") {
            setConfig({
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            setMethod("DELETE");
            setItemId(data);
          }
        };

    useEffect(() => {
        const fecthData = async () => {

        //6- carregar o loading
            setLoading(true)

            try{
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            }catch(error){
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!")
            }
            setLoading(false)
        };

        fecthData();
    }, [url, callFetch])
    // autualizando com o callFetch    

    //5 - refatorando post
    useEffect(() => {
      const httpRequest = async() =>{
        if (method ===  "POST"){

            let fetchOptions = [url, config];

            const res = await fetch(...fetchOptions);

            const json = await res.json()

            setCallFetch(json)
    // 9 - desafio
        } else if (method === "DELETE") {
          const deleteUrl = `${url}/${itemId}`;

          const res = await fetch(deleteUrl, config);

          const json = await res.json();

         setCallFetch(json);
        }
    };

       httpRequest();
    },[config, method, url])
    return{data,httpConfig, loading, error};
};