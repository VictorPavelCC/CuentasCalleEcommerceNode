import React from 'react'
import Item from '../Item'

const ListaItems = ({productos}) => {
  return (
    <div style={{
        padding: 50,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
      }}
    >
        {productos.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
        </div>
  )
}

export default ListaItems