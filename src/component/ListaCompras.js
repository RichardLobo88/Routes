import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from "../redux/listaComprasSlice"

const ListaCompras = () => {
  const listaCompras = useSelector((state) => state.listaCompras.items);
  const dispatch = useDispatch();
  const [item,setItem] = useState('');

  const handleChangeItem=(e) => {
    setItem(e.target.value)
//asignar lo que escribo al estado item
  }
 



    const handleAddItem= () =>{
    const body = {text:item, id:Math.random()}
    dispatch(addItem(body));}

    const handleRemoveItem= (id) =>{
        dispatch(removeItem(id));
    }
  return (
    <div>
      <h1>Lista de Compras</h1>
      <div>
        <input type="text" value={item} onChange={handleChangeItem} />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
      <ul>
        {listaCompras.map((itemCarrito) => (
          <li key={itemCarrito.id}>
        
        <p> {itemCarrito.text}    </p>
           
      
            <button onClick={()=> handleRemoveItem(itemCarrito.id)}>Eliminar</button>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCompras;