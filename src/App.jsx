import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import B2B from './pages/Mayorista.jsx'
import Delivery from './pages/Delivery'
import Pedidos from './pages/Pedidos'
import Carrito from './pages/Carrito'
import { ShopProvider } from './ShopContext'

const links=[['/','icecream','Inicio'],['/b2b','inventory_2','Puntos B2B'],['/delivery','moped','Delivery'],['/pedidos','receipt_long','Mis Pedidos']]
export default function App(){
  const {pathname}=useLocation()
  useEffect(()=>{window.scrollTo(0,0)},[pathname])
  const title=links.find(([path])=>path===pathname)?.[2] || 'Carrito'
  return <ShopProvider><div className="krem-app min-h-screen text-on-surface">
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/95 backdrop-blur-xl shadow-sm"><div className="mx-auto max-w-[480px] h-16 px-4 flex items-center gap-2">
      <Link to="/" aria-label="Helados Krem, inicio"><img src="/brand/llama-nueva.png" alt="Helados Krem" className="h-12 w-12 object-contain" /></Link>
      <div className="min-w-0 flex-1"><p className="font-bold text-primary-ink truncate">Helados Krem <span className="font-normal text-[11px] text-on-surface">• {title}</span></p><p className="text-[11px] text-secondary-ink">La Felicidad en Helado</p></div>
      <Link to="/" aria-label="Cambiar modo de compra" className="rounded-full bg-surface-container-low h-10 w-10 flex items-center justify-center text-secondary-ink"><span className="material-symbols-outlined">storefront</span></Link>
      <Link to="/pedidos" aria-label="Mis pedidos"><img src="/stitch/avatar.png" alt="" className="w-8 h-8 object-cover rounded-full" /></Link>
    </div></header>
    <main className="mx-auto max-w-[480px] pt-16 pb-24">
      {pathname!=='/'&&<p className="px-4 pt-2 text-[11px] text-on-surface-variant">{pathname==='/pedidos'?'Vista de demostración: pedidos, ubicación y seguimiento de ejemplo.':pathname==='/b2b'?'Sucursal y crédito de demostración · Precio mayorista: Bs 9 por paleta, más de 70 unidades.':'Paletas a Bs 12 · Entregas lunes, miércoles y viernes.'}</p>}
      <Routes><Route path="/" element={<Home/>}/><Route path="/delivery" element={<Delivery/>}/><Route path="/b2b" element={<B2B/>}/><Route path="/pedidos" element={<Pedidos/>}/><Route path="/carrito" element={<Carrito/>}/><Route path="*" element={<section className="p-4"><h2>Página no encontrada</h2><Link to="/">Volver al inicio</Link></section>}/></Routes>
    </main>
    <nav aria-label="Navegación principal" className="fixed bottom-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl shadow-sm"><div className="max-w-[480px] mx-auto flex h-20 items-center justify-around">{links.map(([path,icon,label])=><NavLink key={path} to={path} end={path==='/'} className={({isActive})=>`flex flex-col items-center gap-1 rounded-full px-3 py-2 ${isActive ? (path==='/' ? 'text-primary-ink font-bold' : 'text-primary-ink bg-primary-fixed/30 font-bold') : 'text-on-surface-variant'}`}><>{path==='/' ? <img src="/brand/llama-nueva.png" alt="" className="h-8 w-8 object-contain" /> : <span className="material-symbols-outlined">{icon}</span>}</><span className="text-[11px]">{label}</span></NavLink>)}</div></nav>
  </div></ShopProvider>
}
