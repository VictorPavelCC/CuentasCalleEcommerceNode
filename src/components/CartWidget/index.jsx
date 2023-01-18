import React, { useContext } from 'react'
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {

  const {countCart} = useContext(Shop)

  return (
    <>
    <HiShoppingCart size={'2em'}/>
    <span>{countCart.length}</span>
    </>
  )
}

export default CartWidget