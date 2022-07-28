import './App.css';

import { useState, useEffect } from "react";
//4-custom hook
import{useFetch} from './hooks/useFetch';
//url dos dados
// "http://localhost:3001/products"
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);
  //4- custom
  const { data: items, httpConfig, loading, error} = useFetch(url)


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
 /* useEffect(() =>{
    async function fecthData() {
      const res = await fetch(url);

    const data = await res.json();

    setProducts(data);
    }

    fecthData();
  }, []);*/

  console.log(products)

   // 2 - add product
   const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, 
      price
    };
    console.log(product)

    /*const res = await fetch (url, {
      //método de envio em post, tipo do envio em json
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
       body: JSON.stringify(product),
    });

    //3- carregamento dinâmico 
    const addedProduct = await res.json();

    setProducts((prevProducts) => [... prevProducts, addedProduct]);*/

    //5- refatorando o post
    httpConfig(product, "POST");

    setName("");
    setPrice("");

  };

    /* 9 - desafio */
    const handleRemove = (id) => {
      httpConfig(id, "DELETE");
    };
  

  return (
    <div className="App">
      <div className='parte-1'>
        <h1>Lista de Produtos</h1>
        {/*6- State loading*/}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price} 
              {/* 9 - desafio */}
                 <button className='btn-excluir' onClick={() => handleRemove(product.id)}>Remover</button>
            </li>
            ))}
        </ul>
      </div>
      <div className="add-product">
        <h3>Adicionar produto:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*7- state de loading no post*/}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" className='btn-adicionar' value="Adicionar" />}
          
        </form>

      </div>
    </div>
  );
}

export default App;
