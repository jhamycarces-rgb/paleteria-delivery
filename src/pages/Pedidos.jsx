import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Pedidos() {
const navigate=useNavigate(); const [filter,setFilter]=useState('todos'); const [notice,setNotice]=useState('')
return <>
<p role="status" className="px-4 text-primary-ink">{notice}</p><div className="stitch-screen"><div className="flex flex-col w-full px-margin space-y-space-lg">

<section className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-center justify-between">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{"Mis Pedidos"}</h2>

<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-ink font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
{"\n        1 Activo\n      "}</span>

</div>


<div className="flex items-center gap-2 overflow-x-auto py-1 -mx-margin px-margin scrollbar-none" id="filter-tabs">
<button onClick={() => setFilter('todos')} aria-pressed={filter === 'todos'} className={'filter-tab shrink-0 h-9 px-4 rounded-full flex items-center gap-1.5 ' + (filter === 'todos' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="material-symbols-outlined text-[16px]">{"receipt_long"}</span>
{"\n        Todos\n      "}</button>

<button onClick={() => setFilter('domicilio')} aria-pressed={filter === 'domicilio'} className={'filter-tab shrink-0 h-9 px-4 rounded-full flex items-center gap-1.5 ' + (filter === 'domicilio' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="material-symbols-outlined text-[16px]">{"moped"}</span>
{"\n        A Domicilio\n      "}</button>

<button onClick={() => setFilter('mayorista')} aria-pressed={filter === 'mayorista'} className={'filter-tab shrink-0 h-9 px-4 rounded-full flex items-center gap-1.5 ' + (filter === 'mayorista' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="material-symbols-outlined text-[16px]">{"inventory_2"}</span>
{"\n        Lote Mayorista\n      "}</button>

</div>

</section>


<section className="order-card relative rounded-lg bg-surface-container-lowest p-space-md shadow-[0_12px_32px_-6px_rgba(255,85,165,0.12)] overflow-hidden transition-all duration-300" data-category="domicilio" id="card-active-order" hidden={filter !== 'todos' && filter !== 'domicilio'}>

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-12 h-12 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary-ink shrink-0">
<span className="material-symbols-outlined text-[26px]">{"icecream"}</span>

</div>

<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">{"Pedido #DP-8921"}</span>

<span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">{"En ruta"}</span>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Pack 6 Paletas Artesanales Variadas"}</p>

</div>

</div>

<div className="text-right shrink-0">
<span className="font-headline-sm text-headline-sm text-primary-ink block leading-tight">{"18 min"}</span>

<span className="font-label-sm text-label-sm text-on-surface-variant">{"Llegada estimada"}</span>

</div>

</div>


<div className="relative w-full h-44 rounded bg-surface-container overflow-hidden mb-space-sm shadow-inner">
<div className="w-full h-full bg-cover bg-center" data-location="Roma Norte, Ciudad de Mexico" style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZi7aIgJp7CYauUCShdSc6CuRxdkwOQ3gtlGcA97c-YS4sSmiPMAaICfYheS0huLNftAy4wG_Zfk4YFN4NdMtrFdTtP4mluI8pslhj99WpSm0oPUZyr7aQ6tCP-uX-9vMaXfOTYxDw8D67Xu6kK8IezQXC86L-oCFfPMtFsTEGDFNW3zwChQ198gXQfUxR_GXlMq4MhoFgVu1TodQZLy-sVOAvnYjkZhO79AORsszcraN1mT0AFcyr_A')"}}></div>


<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute top-3 left-3 bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-ink text-[18px]">{"near_me"}</span>

<span className="font-label-sm text-label-sm text-on-surface">{"Av. Álvaro Obregón 142"}</span>

</div>

<div className="absolute bottom-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>

<span className="font-label-sm text-label-sm text-secondary-ink">{"GPS Activo"}</span>

</div>

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm bg-surface-container-low p-space-sm rounded mb-space-md">

<div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-sm py-2 rounded shadow-sm">
<div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
<span className="material-symbols-outlined text-[20px]">{"ac_unit"}</span>

</div>

<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">{"Control Térmico"}</span>

<span className="font-headline-sm text-headline-sm text-secondary-ink font-bold">{"-18.4°C"}</span>

</div>

<div className="w-full bg-surface-container-highest h-1.5 rounded-full mt-1 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[94%]"></div>

</div>

<span className="font-label-sm text-[10px] text-secondary-ink mt-0.5 block leading-tight">{"Garantía Crío-Fresh® Óptima"}</span>

</div>

</div>


<div className="flex items-center justify-between gap-space-sm bg-surface-container-lowest px-space-sm py-2 rounded shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjMv5no40M6SsLLm8-ux0KaiWFeYNAdy4JS3Y17ib3hKzQk0aqLPtbiG7NUVFmpoFA-QDYs2iLd9lVbEcYRJXH206X-TUoI6zkl7-XX9Mw1hKo7Gqs2gFfvXLqIWXd3fZnVy2NBaSc-MKvsf86r63o9x_Fzyt0AQsRaCUvFuOa2MSqp04TTfAFj1s0F9mZVPwvOauIxYBJ-CTpjW0yr5h18DD_0BnTcKikfYPWwT-aHiUmauMu3q-Aw" alt="Warm and cheerful Mexican courier smiling kindly wearing branded Helados Krem cap with bright pink and mint colors in sunlit outdoor Roma street, close up portrait" loading="lazy"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary"></span>

</div>

<div className="min-w-0">
<span className="font-label-lg text-label-lg text-on-surface block truncate">{"Mateo R."}</span>

<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px] text-tertiary-container">{"star"}</span>

<span className="font-label-sm text-label-sm font-semibold">{"4.9"}</span>

<span className="text-xs text-on-surface-variant/70">{"• Moto Termo"}</span>

</div>

</div>

</div>

<button aria-label="Llamar repartidor" className="w-9 h-9 rounded-full bg-primary-fixed/50 text-on-primary-fixed flex items-center justify-center hover:bg-primary-fixed transition-colors active:scale-90" onClick={() => setNotice('Este repartidor es un ejemplo del diseño; no hay un teléfono real conectado.')}>
<span className="material-symbols-outlined text-[18px]">{"call"}</span>

</button>

</div>

</div>


<div className="space-y-space-sm">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-primary-ink font-bold">{"1. Preparado"}</span>

<span className="text-secondary-ink font-bold">{"2. En camino"}</span>

<span >{"3. Entregado"}</span>

</div>

<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden flex">
<div className="bg-primary h-full w-1/3"></div>

<div className="bg-secondary h-full w-1/3 animate-pulse"></div>

<div className="bg-transparent h-full w-1/3"></div>

</div>

</div>

</section>


<section className="flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">{"Historial de Pedidos"}</h3>

<span className="font-body-sm text-body-sm text-on-surface-variant">{"Últimos 30 días"}</span>

</div>


<div className="order-card bg-surface-container-lowest rounded p-space-md shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] transition-all flex flex-col gap-space-sm" data-category="mayorista" hidden={filter !== 'todos' && filter !== 'mayorista'}>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-[22px]">{"inventory_2"}</span>

</div>

<div >
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">{"Lote Mayorista #B2B-402"}</span>

<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">{"Punto Gourmet"}</span>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant">{"3 cajas de 24 pzs (Mango Chamoy, Fresa de Agua, Pistache)"}</p>

</div>

</div>

<span className="font-label-sm text-label-sm text-secondary-ink bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold shrink-0">{"Entregado"}</span>

</div>

<div className="flex items-center justify-between pt-space-xs text-on-surface-variant">
<div className="flex items-center gap-1 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">{"calendar_today"}</span>

<span >{"12 May, 2024"}</span>

<span className="mx-1">{"•"}</span>

<span className="font-headline-sm text-headline-sm text-on-surface">{"Bs 648.00"}</span>

</div>

<button className="h-10 px-4 rounded-full bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5 active:scale-95" onClick={() => navigate('/b2b')}>Elegir productos similares</button>

</div>

</div>


<div className="order-card bg-surface-container-lowest rounded p-space-md shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] transition-all flex flex-col gap-space-sm" data-category="domicilio" hidden={filter !== 'todos' && filter !== 'domicilio'}>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-[22px]">{"moped"}</span>

</div>

<div >
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">{"Pedido #DP-7730"}</span>

<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">{"Casa"}</span>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant">{"4 Paletas Crema de Coco & 2 Limón Chia"}</p>

</div>

</div>

<span className="font-label-sm text-label-sm text-secondary-ink bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold shrink-0">{"Entregado"}</span>

</div>

<div className="flex items-center justify-between pt-space-xs text-on-surface-variant">
<div className="flex items-center gap-1 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">{"calendar_today"}</span>

<span >{"08 May, 2024"}</span>

<span className="mx-1">{"•"}</span>

<span className="font-headline-sm text-headline-sm text-on-surface">{"Bs 72.00"}</span>

</div>

<button className="h-10 px-4 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5 active:scale-95" onClick={() => navigate('/delivery')}>Elegir productos similares</button>

</div>

</div>


<div className="order-card bg-surface-container-lowest rounded p-space-md shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] transition-all flex flex-col gap-space-sm" data-category="mayorista" hidden={filter !== 'todos' && filter !== 'mayorista'}>
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-[22px]">{"store"}</span>

</div>

<div >
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">{"Lote Mayorista #B2B-389"}</span>

<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">{"Mini Súper Condesa"}</span>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant">{"Pallet Exhibidor 120 pzs Mix Tropical"}</p>

</div>

</div>

<span className="font-label-sm text-label-sm text-secondary-ink bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold shrink-0">{"Entregado"}</span>

</div>

<div className="flex items-center justify-between pt-space-xs text-on-surface-variant">
<div className="flex items-center gap-1 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px]">{"calendar_today"}</span>

<span >{"29 Abr, 2024"}</span>

<span className="mx-1">{"•"}</span>

<span className="font-headline-sm text-headline-sm text-on-surface">{"Bs 1.080.00"}</span>

</div>

<button className="h-10 px-4 rounded-full bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5 active:scale-95" onClick={() => navigate('/b2b')}>Elegir productos similares</button>

</div>

</div>

</section>


<section className="rounded-lg bg-surface-container-low p-space-md shadow-sm mb-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[26px]">{"support_agent"}</span>

</div>

<div className="min-w-0">
<h4 className="font-headline-sm text-headline-sm text-on-surface">{"¿Inconveniente con tu pedido?"}</h4>

<p className="font-body-sm text-body-sm text-on-surface-variant">{"Atención inmediata para congelación, ruta o cambio de lote."}</p>

</div>

</div>

<button className="w-full sm:w-auto h-12 px-6 rounded-full bg-secondary text-on-primary font-label-lg text-label-lg shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0" rel="noopener noreferrer" onClick={() => setNotice('Falta configurar el número de WhatsApp de la paletería.')}>
<span className="material-symbols-outlined text-[20px]">{"chat"}</span>
{"\n      Ayuda por WhatsApp\n    "}</button>

</section>

</div>


</div>

</>
}
