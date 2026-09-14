import { createContext, useContext, useState } from 'react'

const ShopContext=createContext(null)
export function ShopProvider({children}) {
  const [cart,setCart]=useState([])
  const [note,setNote]=useState('')
  const addItem=item=>setCart(items=>items.some(i=>i.id===item.id)?items.map(i=>i.id===item.id?{...i,qty:i.qty+1}:i):[...items,{...item,qty:1}])
  const changeQty=(id,delta)=>setCart(items=>items.map(i=>i.id===id?{...i,qty:Math.max(0,i.qty+delta)}:i).filter(i=>i.qty>0))
  const replaceWholesale=(items,text)=>{setCart(current=>[...current.filter(i=>i.mode!=='b2b'),...items]);setNote(text)}
  const clearCart=()=>{setCart([]);setNote('')}
  return <ShopContext.Provider value={{cart,note,addItem,changeQty,replaceWholesale,clearCart}}>{children}</ShopContext.Provider>
}
// Shared hook used by catalog and checkout screens.
// eslint-disable-next-line react-refresh/only-export-components
export function useShop(){return useContext(ShopContext)}
