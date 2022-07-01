import React, { useState } from 'react';
import uniqid from 'uniqid'

export const Listadonombre=()=>{
const [product, setProduct]= useState('')
const [products,setProducts]= useState([])
const [precio,setPrecio] = useState('')


function handleSubmit(e){
e.preventDefault()
const nuevoprouto ={
    id:uniqid(),
    tituloprouct:product,
    costo:precio
}


setProducts(product)
setProducts([...products,nuevoprouto,precio])

setProduct('')
}



    return(
        <div>
            <h2>Aplicación de crud basico</h2>

            <div className="row">
            <div className="col">
        <h1>Listado de nombre</h1>


        <table class="table">
  <thead>

    <tr>
<th>Productos</th>        
<th>precio</th>        
    </tr>

  </thead>
  <tbody>
    <tr>
        {

        }
      {
    products.map(item=>
<td key={item.id}>{item.tituloprouct}</td>

    )
}



  
    </tr>
    <tr>
      <th scope="row">{
    products.map(item=>
<td key={item.id}>{item.tituloprouct}</td>

    )
}</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

            </div>
            <div className="col">
<h2>Formulario </h2>
<form onSubmit={(e)=> handleSubmit(e)} className='form-group'>
    <input type="text" className='form-control' placeholder='Introduzca el producto' 
    onChange={(e)=>{setProduct(e.target.value)}}
   
  
  />

<input type="number" className='form-control' placeholder='Introduzca el producto' 
    onChange={(e)=>{setPrecio(e.target.value)}}
   
  
  />
    <input type="submit" className='btn btn-info btn-block mt-3' value="Registrar producto" />
</form>
            </div>

   

          
            </div>
        </div>
    )
}