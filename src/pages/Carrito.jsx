import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useShop } from '../ShopContext'
import { money, totals } from '../shop'
import PedidoForm from '../components/PedidoForm'

export default function Carrito() {
  const {cart,note,changeQty,clearCart}=useShop()
  const [confirmed,setConfirmed]=useState(false)
  const {subtotal,discount,total}=totals(cart)
  if(confirmed) return <section className="m-4 rounded-lg bg-white p-6"><h2 className="text-headline-md">Solicitud enviada</h2><p>Te contactaremos para confirmar disponibilidad, precio y entrega.</p><Link className="text-primary-ink underline" to="/">Volver al inicio</Link></section>
  if(!cart.length) return <section className="m-4 rounded-lg bg-white p-6 space-y-4"><h2 className="text-headline-md">Tu carrito está vacío</h2><Link className="block text-primary-ink underline" to="/delivery">Elegir paletas</Link><Link className="block text-secondary-ink underline" to="/b2b">Elegir cajas mayoristas</Link></section>
  const details=cart.map(i=>`${i.qty} × ${i.name}: ${money(i.price*i.qty)}`).join('\n')+`\nTotal estimado: ${money(total)}\n${note}`
  return <div className="p-4 space-y-4"><h2 className="text-headline-md">Tu carrito</h2>
    {cart.map(i=><article key={i.id} className="bg-white rounded-lg p-4 space-y-2"><h3 className="font-bold">{i.name}</h3><p>{money(i.price*i.qty)}</p><div className="flex items-center gap-4"><button aria-label={`Quitar uno de ${i.name}`} className="rounded-full bg-primary-fixed w-9 h-9" onClick={()=>changeQty(i.id,-1)}>−</button><span>{i.qty}</span><button aria-label={`Añadir uno de ${i.name}`} className="rounded-full bg-primary text-on-primary w-9 h-9" onClick={()=>changeQty(i.id,1)}>+</button></div></article>)}
    <section className="bg-surface-container rounded-lg p-4"><p>Subtotal: {money(subtotal)}</p>{discount>0&&<p>Descuento mayorista: −{money(discount)}</p>}<p className="text-headline-sm">Total estimado: {money(total)}</p><p className="text-body-sm">Entrega únicamente lunes, miércoles y viernes. Selecciona fecha y forma de pago para enviar tu pedido.</p></section>
    <PedidoForm tipoInicial={cart.every(i=>i.mode==='b2b')?'Punto de venta / B2B':'Delivery a domicilio'} detallesIniciales={details} totalPedido={total} unidadesMayoristas={cart.some(i=>i.mode==='b2b') ? cart.filter(i=>i.mode==='b2b').reduce((sum,i)=>sum+i.qty*24,0) : null} onSuccess={()=>{clearCart();setConfirmed(true)}} />
  </div>
}
