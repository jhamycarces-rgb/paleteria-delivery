export const RETAIL_PRICE = 12
export const WHOLESALE_PRICE = 9
export const BOX_UNITS = 24
export const WHOLESALE_MIN_UNITS = 71
export const money = value => `Bs ${value.toFixed(2)}`
export const boxes = [
  {id:'box_agua',name:'Caja Frutal Agua (24 pzs)',price:WHOLESALE_PRICE*BOX_UNITS},
  {id:'box_crema',name:'Caja Artesanal Crema (24 pzs)',price:WHOLESALE_PRICE*BOX_UNITS},
  {id:'box_premium',name:'Caja Gourmet Rellenas (24 pzs)',price:WHOLESALE_PRICE*BOX_UNITS},
]
export function totals(cart) {
  const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0)
  return {subtotal,discount:0,total:subtotal}
}
