
import React, {useEffect, useState} from 'react'
import Item from '../../Item'
import './styles.css'
import products from '../../data/productos.json'
import ListaItems from '../../ListaItems'


const ItemListContainer = (greeting) => {
  
  const [products, setproducts] = useState([])
  
  useEffect(() => {

    const prom = new Promise ((acc, rec) =>{
      setTimeout(() => {
        acc(products)
      }, 2000)
      
    })

    prom
    .then((resultado)=>{
      setproducts(resultado)
    })
    .catch((error)=>{
      alert ("Ha ocurrido algo inesperado")
    })
  },[])

  return(
    <div>
       <ListaItems productos={products}/>
    </div>
  )
  
  /* return (
    <div className='item-list-container'>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      
    </div>
  ) */
}

export default ItemListContainer