import { useRef, useState } from 'react'
import PedidoForm from '../components/PedidoForm'
import { useShop } from '../ShopContext'
import { money, boxes } from '../shop'

export default function B2B() {
const {cart, replaceWholesale}=useShop();
 const formRef=useRef(null);
 const [quantities,setQuantities]=useState(()=>Object.fromEntries(boxes.map(b=>[b.id,cart.find(i=>i.id===b.id)?.qty||0])));
 const [route,setRoute]=useState('hoy'); const [instructions,setInstructions]=useState('');
 const count=Object.values(quantities).reduce((a,b)=>a+b,0);
 const subtotal=boxes.reduce((s,b)=>s+b.price*quantities[b.id],0); const total=subtotal;
 const modifyBoxes=(id,delta)=>setQuantities(q=>({...q,[id]:Math.max(0,q[id]+delta)}));
 const detallesPedido=count ? boxes.filter(b=>quantities[b.id]>0)
   .map(b=>`${quantities[b.id]} × ${b.name}: ${money(b.price*quantities[b.id])}`).join('\n')
   + `\nTotal: ${count} cajas (${count*24} paletas)\nTotal estimado: ${money(total)}\nRuta solicitada: ${route==='hoy'?'Exprés':'Periódica'}\nInstrucciones: ${instructions}` : '';
 const confirmOrder=()=>{
   formRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
   formRef.current?.querySelector('input')?.focus({preventScroll:true});
 };
 const pedidoEnviado=()=>{
   setQuantities(Object.fromEntries(boxes.map(b=>[b.id,0])));
   setInstructions('');
   replaceWholesale([], '');
 };


return <>
<div className="px-4 pt-3 pb-2">
  <button type="button" onClick={confirmOrder} className="w-full rounded-full bg-secondary px-4 py-3 font-bold text-on-primary">
    Ir al formulario de pedido mayorista
  </button>
</div>
<div className="stitch-screen"><div className="flex flex-col w-full px-margin space-y-space-md">

<section className="bg-surface-container-low rounded-lg p-space-md shadow-sm relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm relative z-10">
<div className="min-w-0">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"verified"}</span>
{"\n          Punto Aliado #402\n        "}</div>

<h1 className="font-headline-md text-headline-md text-on-surface truncate">{"Kiosco Centro Plaza"}</h1>

<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[16px] text-primary-ink">{"ac_unit"}</span>
{"\n          Congelador Pop 320L • Activo y Monitoreado (-18°C)\n        "}</p>

</div>

<div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary-ink text-[26px]">{"store"}</span>

</div>

</div>


<div className="mt-space-md pt-space-sm bg-surface-container-lowest/80 backdrop-blur-sm rounded-DEFAULT p-space-sm flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">{"Línea de Crédito 15 Días"}</span>

<span className="font-headline-sm text-headline-sm text-secondary-ink font-bold">{"Bs 14.850 "}<span className="text-on-surface-variant/70 text-body-sm font-normal">{"/ Bs 20.000"}</span>
</span>

</div>

<div className="flex flex-col items-end shrink-0">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary-ink font-bold">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
{"\n          Al Corriente\n        "}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant">{"Corte: 18 May"}</span>

</div>

</div>

</section>


<section className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"local_shipping"}</span>

<span className="font-headline-sm text-headline-sm text-on-surface">{"Ruta de Congelados"}</span>

</div>

<span className="font-label-sm text-label-sm text-secondary-ink bg-secondary-container/30 px-2 py-0.5 rounded-full">{"Camión Thermo #04"}</span>

</div>

<div className="grid grid-cols-2 gap-space-sm pt-1">
<label className="cursor-pointer relative flex flex-col p-3 rounded-DEFAULT bg-surface-container-low transition-all">
<input className="sr-only peer" name="ruta_despacho" type="radio" value="hoy" checked={route === 'hoy'} onChange={() => setRoute('hoy')}/>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-primary-ink uppercase font-bold">{"Ruta Exprés"}</span>

<span className="material-symbols-outlined text-primary-ink text-[18px] peer-checked:opacity-100 opacity-0">{"check_circle"}</span>

</div>

<span className="font-headline-sm text-headline-sm text-on-surface">{"Lun · Mié · Vie"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant">{"Elige fecha en el formulario"}</span>

<div className="absolute inset-0 rounded-DEFAULT ring-2 ring-primary pointer-events-none peer-checked:opacity-100 opacity-0 transition-opacity"></div>

</label>

<label className="cursor-pointer relative flex flex-col p-3 rounded-DEFAULT bg-surface-container transition-all">
<input className="sr-only peer" name="ruta_despacho" type="radio" value="programado" checked={route === 'programado'} onChange={() => setRoute('programado')}/>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">{"Ruta Periódica"}</span>

<span className="material-symbols-outlined text-primary-ink text-[18px] peer-checked:opacity-100 opacity-0">{"check_circle"}</span>

</div>

<span className="font-headline-sm text-headline-sm text-on-surface">{"Lun · Mié · Vie"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant">{"Elige fecha en el formulario"}</span>

<div className="absolute inset-0 rounded-DEFAULT ring-2 ring-primary pointer-events-none peer-checked:opacity-100 opacity-0 transition-opacity"></div>

</label>

</div>

</section>


<section className="bg-gradient-to-r from-primary-container to-primary text-on-primary rounded-lg p-space-md shadow-md flex items-center justify-between gap-space-sm relative overflow-hidden">
<div className="space-y-0.5 min-w-0 z-10">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[20px] text-tertiary-fixed">{"celebration"}</span>

<span className="font-headline-sm text-headline-sm text-on-primary">{"Precio mayorista"}</span>

</div>

<p className="font-body-sm text-body-sm text-on-primary/90" id="tier-discount-copy">{count >= 3 ? 'Precio mayorista: Bs 9 por paleta.' : `Selecciona al menos ${3-count} cajas más. Mínimo: 72 paletas (3 cajas).`}</p>


<div className="w-full bg-surface-container-lowest/20 rounded-full h-2 mt-2 overflow-hidden">
<div className="bg-tertiary-fixed h-full rounded-full transition-all duration-300" id="volume-progress-bar" style={{width: `${Math.min(count/3*100,100)}%`}}></div>

</div>

</div>

<div className="text-right shrink-0 z-10">
<span className="font-label-sm text-label-sm block opacity-80 uppercase">{"Progreso"}</span>

<span className="font-headline-md text-headline-md text-tertiary-fixed" id="tier-count-display">{Math.min(count, 3)} / 3</span>

</div>

</section>


<section className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"stars"}</span>

<h2 className="font-headline-sm text-headline-sm text-on-surface">{"Resurtido Rápido (Top Sucursal)"}</h2>

</div>

<span className="font-label-sm text-label-sm text-on-surface-variant">{"Alta Rotación"}</span>

</div>


<div className="flex gap-space-sm overflow-x-auto pb-1 -mx-margin px-margin scrollbar-none">

<div className="w-44 bg-surface-container-lowest rounded-lg p-space-sm shadow-sm shrink-0 flex flex-col justify-between">
<div className="relative w-full h-28 rounded-DEFAULT overflow-hidden mb-2">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBJZIQAP7zVEGHxmmIASaiG3RQa9A4tw7CdOz1KT_f6A61JJshrBo9gRMkFMJ1roMeQ76y98DraB6PR_C7TR_iy9IoU_8XkjNXrdA3-ZkbKJu4GMZhy9jQ9C4LFKm2_r03dFpI-xv_pMI2cyq2nIuQlm107o-cz9QBLPW_zbE1Xd4eUoZL_og9d7__ZllYgKqfxkLFnTgYR41CRUi7OL7lMdsoswOd_qBUl1iVbcOHkeXhAYkHNn8BJQ" alt="Paleta helada artesanal mexicana de coco fresco sobre superficie de mármol rosado y coco rallado esparcido con iluminación cálida de estudio publicitario" loading="lazy"/>
<span className="absolute top-1.5 left-1.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">{"Base Crema"}</span>

</div>

<div >
<span className="font-label-sm text-label-sm text-secondary-ink font-bold uppercase">{"Más Vendido"}</span>

<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{"Coco Michoacano"}</h3>

<span className="font-body-sm text-body-sm text-on-surface-variant block mb-2">{"Bs 9 por paleta"}</span>

</div>

<button className="w-full h-9 rounded-full bg-surface-container-low text-primary-ink hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors" onClick={() => modifyBoxes('box_crema', 1)}>
<span className="material-symbols-outlined text-[16px]">{"add"}</span>
{"\n          +1 Caja surtida (24 pzs)\n        "}</button>

</div>


<div className="w-44 bg-surface-container-lowest rounded-lg p-space-sm shadow-sm shrink-0 flex flex-col justify-between">
<div className="relative w-full h-28 rounded-DEFAULT overflow-hidden mb-2">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqP_BLVbvM-kFt9BqMfaSbuADOmTBXrkQJc2M6AxUG44Y6hMgUjOkntYIShbL8lUZFCGCFq6PNY4AshYtv5xZpNj0dYRZigOUjCbhlbImt7NrboIAjVM6W3EsRMBx0mzZDf2SxY2C0S6aL4HNCyEBUxWYjf1PR5VTlxj-ZZfhHIW_zDc_T47k3u43RrQ5agdbXbTW-z5_b_flX6pZ-W-qt8jglqq3Okx8tm7WPnI_W-V9S2oyk9KVPag" alt="Paleta helada mexicana de mango con espiral de chamoy rojo brillante y chile tajín en polvo estilo paletería artesanal con luz natural soleada" loading="lazy"/>
<span className="absolute top-1.5 left-1.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">{"Agua Fresca"}</span>

</div>

<div >
<span className="font-label-sm text-label-sm text-primary-ink font-bold uppercase">{"Popular"}</span>

<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{"Mango con Chamoy"}</h3>

<span className="font-body-sm text-body-sm text-on-surface-variant block mb-2">{"Bs 9 por paleta"}</span>

</div>

<button className="w-full h-9 rounded-full bg-surface-container-low text-primary-ink hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors" onClick={() => modifyBoxes('box_agua', 1)}>
<span className="material-symbols-outlined text-[16px]">{"add"}</span>
{"\n          +1 Caja surtida (24 pzs)\n        "}</button>

</div>


<div className="w-44 bg-surface-container-lowest rounded-lg p-space-sm shadow-sm shrink-0 flex flex-col justify-between">
<div className="relative w-full h-28 rounded-DEFAULT overflow-hidden mb-2">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAksTLTPeV7RU0dMBefStd9ZIiY9hoycbEex9exGPkp5FSGtYE53rP5S4I6pyyVtRGy5aYF1GYqUieVcCzCq8g8Pp_NTYRWk6iyCRJpz-bIk-HTBzATbNoFRuqR00R8SyXeyKhTC7by4ObVjGUVyMAMP_lGYsPl2M2yBa95_-Ynka6VQBrLOStwRujgPZvNUqxw-RzI0ra2Xil6MSp58opCAgEcJX2GFre_Q9buJI3TYEzfI-DburYfjg" alt="Paleta gourmet de zarzamora silvestre marmoleada con crema de queso mascarpone artesanal en primer plano con fondo pastel" loading="lazy"/>
<span className="absolute top-1.5 left-1.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">{"Premium"}</span>

</div>

<div >
<span className="font-label-sm text-label-sm text-secondary-ink font-bold uppercase">{"Gourmet"}</span>

<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{"Zarzamora & Queso"}</h3>

<span className="font-body-sm text-body-sm text-on-surface-variant block mb-2">{"Bs 9 por paleta"}</span>

</div>

<button className="w-full h-9 rounded-full bg-surface-container-low text-primary-ink hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors" onClick={() => modifyBoxes('box_premium', 1)}>
<span className="material-symbols-outlined text-[16px]">{"add"}</span>
{"\n          +1 Caja surtida (24 pzs)\n        "}</button>

</div>


<div className="w-44 bg-surface-container-lowest rounded-lg p-space-sm shadow-sm shrink-0 flex flex-col justify-between">
<div className="relative w-full h-28 rounded-DEFAULT overflow-hidden mb-2">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCowV7ng6Zrqfho4PsdQBx-5-6_qxUvumgeob5_v5WlMrB2rV3g5rmjJeHqM_PocEyugznMUMLXGf_iZPHgeW_5SYLpG5jc3fKGCAMAtBbxj2znVvKY0itH71ykUwFP2e1Vu8NMAUH-2vPcvQjqrq3YLKM4Z4p6jUNINkaxlwJSP1wH1Y3QhvTO7IllE9xvNiNhwr6E59lSkszr3qzJtWGqUWnWlAtQIY-GABNNq7t9lHZ_PkvyyXKzg" alt="Refrescante paleta de hielo verde traslúcida de limón real con semillas de chía suspendidas y rodajas de limón sobre fondo claro" loading="lazy"/>
<span className="absolute top-1.5 left-1.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">{"Agua Fresca"}</span>

</div>

<div >
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">{"Clásico"}</span>

<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{"Limón con Chía"}</h3>

<span className="font-body-sm text-body-sm text-on-surface-variant block mb-2">{"Bs 9 por paleta"}</span>

</div>

<button className="w-full h-9 rounded-full bg-surface-container-low text-primary-ink hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors" onClick={() => modifyBoxes('box_agua', 1)}>
<span className="material-symbols-outlined text-[16px]">{"add"}</span>
{"\n          +1 Caja surtida (24 pzs)\n        "}</button>

</div>

</div>

</section>


<section className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"inventory_2"}</span>

<h2 className="font-headline-sm text-headline-sm text-on-surface">{"Cajas Consolidadas (Master Box)"}</h2>

</div>

<span className="font-label-sm text-label-sm text-secondary-ink bg-surface-container-low px-2 py-0.5 rounded-full font-bold">{"24 Paletas / Caja"}</span>

</div>


<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>

<h3 className="font-headline-sm text-headline-sm text-on-surface">{"Caja Frutal Agua (24 pzs)"}</h3>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n            Surtido: Fresa natural, Mango Chamoy, Limón con Chía, Tamarindo con Tajín.\n          "}</p>

</div>

<div className="text-right shrink-0">
<span className="font-headline-sm text-headline-sm text-primary-ink font-bold">{"Bs 216.00"}</span>

<span className="font-label-sm text-label-sm text-on-surface-variant block">{"Bs 9 / u"}</span>

</div>

</div>

<div className="flex items-center justify-between pt-2 border-t-0 bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-lg">
<div className="flex gap-1.5">
<button className="h-8 px-2.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container shadow-sm" onClick={() => modifyBoxes('box_agua', 5)}>{"+5"}</button>

<button className="h-8 px-2.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container shadow-sm" onClick={() => modifyBoxes('box_agua', 10)}>{"+10"}</button>

</div>


<div className="flex items-center gap-2 bg-surface-container-lowest rounded-full p-1 shadow-sm">
<button aria-label="Disminuir" className="w-9 h-9 rounded-full bg-surface-container-low text-primary-ink flex items-center justify-center active:scale-95 transition-transform" onClick={() => modifyBoxes('box_agua', -1)}>
<span className="material-symbols-outlined text-[18px]">{"remove"}</span>

</button>

<input className="w-10 text-center font-headline-sm text-headline-sm text-on-surface bg-transparent focus:outline-none" id="qty-box_agua" min="0" readOnly={true} type="number" aria-label="Cantidad de cajas de agua" value={quantities.box_agua}/>
<button aria-label="Aumentar" className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-95 transition-transform" onClick={() => modifyBoxes('box_agua', 1)}>
<span className="material-symbols-outlined text-[18px]">{"add"}</span>

</button>

</div>

</div>

</div>


<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>

<h3 className="font-headline-sm text-headline-sm text-on-surface">{"Caja Artesanal Crema (24 pzs)"}</h3>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n            Surtido: Coco Michoacano, Fresa con Crema, Cajeta Quemada, Nuez de Castilla.\n          "}</p>

</div>

<div className="text-right shrink-0">
<span className="font-headline-sm text-headline-sm text-primary-ink font-bold">{"Bs 216.00"}</span>

<span className="font-label-sm text-label-sm text-on-surface-variant block">{"Bs 9 / u"}</span>

</div>

</div>

<div className="flex items-center justify-between pt-2 border-t-0 bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-lg">
<div className="flex gap-1.5">
<button className="h-8 px-2.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container shadow-sm" onClick={() => modifyBoxes('box_crema', 5)}>{"+5"}</button>

<button className="h-8 px-2.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container shadow-sm" onClick={() => modifyBoxes('box_crema', 10)}>{"+10"}</button>

</div>


<div className="flex items-center gap-2 bg-surface-container-lowest rounded-full p-1 shadow-sm">
<button aria-label="Disminuir" className="w-9 h-9 rounded-full bg-surface-container-low text-primary-ink flex items-center justify-center active:scale-95 transition-transform" onClick={() => modifyBoxes('box_crema', -1)}>
<span className="material-symbols-outlined text-[18px]">{"remove"}</span>

</button>

<input className="w-10 text-center font-headline-sm text-headline-sm text-on-surface bg-transparent focus:outline-none" id="qty-box_crema" min="0" readOnly={true} type="number" aria-label="Cantidad de cajas de crema" value={quantities.box_crema}/>
<button aria-label="Aumentar" className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-95 transition-transform" onClick={() => modifyBoxes('box_crema', 1)}>
<span className="material-symbols-outlined text-[18px]">{"add"}</span>

</button>

</div>

</div>

</div>


<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-sm">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>

<h3 className="font-headline-sm text-headline-sm text-on-surface">{"Caja Gourmet Rellenas (24 pzs)"}</h3>

</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{"\n            Surtido: Zarzamora con Filadelfia, Maracuyá relleno de Lechera, Pistache Crunch.\n          "}</p>

</div>

<div className="text-right shrink-0">
<span className="font-headline-sm text-headline-sm text-primary-ink font-bold">{"Bs 216.00"}</span>

<span className="font-label-sm text-label-sm text-on-surface-variant block">{"Bs 9 / u"}</span>

</div>

</div>

<div className="flex items-center justify-between pt-2 border-t-0 bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-lg">
<div className="flex gap-1.5">
<button className="h-8 px-2.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container shadow-sm" onClick={() => modifyBoxes('box_premium', 5)}>{"+5"}</button>

<button className="h-8 px-2.5 rounded-full bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container shadow-sm" onClick={() => modifyBoxes('box_premium', 10)}>{"+10"}</button>

</div>


<div className="flex items-center gap-2 bg-surface-container-lowest rounded-full p-1 shadow-sm">
<button aria-label="Disminuir" className="w-9 h-9 rounded-full bg-surface-container-low text-primary-ink flex items-center justify-center active:scale-95 transition-transform" onClick={() => modifyBoxes('box_premium', -1)}>
<span className="material-symbols-outlined text-[18px]">{"remove"}</span>

</button>

<input className="w-10 text-center font-headline-sm text-headline-sm text-on-surface bg-transparent focus:outline-none" id="qty-box_premium" min="0" readOnly={true} type="number" aria-label="Cantidad de cajas de premium" value={quantities.box_premium}/>
<button aria-label="Aumentar" className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-95 transition-transform" onClick={() => modifyBoxes('box_premium', 1)}>
<span className="material-symbols-outlined text-[18px]">{"add"}</span>

</button>

</div>

</div>

</div>

</section>


<section className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary-ink text-[20px]">{"pin_drop"}</span>

<h3 className="font-headline-sm text-headline-sm text-on-surface">{"Instrucción para el Repartidor"}</h3>

</div>

<div className="relative">
<input className="w-full bg-surface rounded-DEFAULT py-3 px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Ej. Acceso por pasillo lateral de carga, timbrar al encargado..." type="text" aria-label="Instrucción para el repartidor" value={instructions} onChange={event => setInstructions(event.target.value)}/>
</div>

</section>


<div className="sticky bottom-20 z-40 bg-surface-container-lowest/95 backdrop-blur-xl rounded-lg p-space-md shadow-xl mt-space-lg space-y-space-sm">

<div className="grid grid-cols-3 gap-2 pb-space-sm border-b-0">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{"Cajas Totales"}</span>

<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold" id="summary-total-boxes">{count} Cajas</span>

<span className="font-body-sm text-body-sm text-on-surface-variant" id="summary-total-units">{count * 24} paletas</span>

</div>

<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{"Peso Aprox."}</span>

<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold" id="summary-total-weight">{(count * 24 * 0.11).toFixed(1)} kg</span>

<span className="font-body-sm text-body-sm text-secondary-ink flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">{"ac_unit"}</span>
{" Frío seco\n        "}</span>

</div>

<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{"Subtotal"}</span>

<span className="font-headline-sm text-headline-sm text-primary-ink font-extrabold" id="summary-total-price">{money(total)}</span>

<span className="font-label-sm text-label-sm text-secondary-ink font-bold " id="summary-discount-tag" hidden={count < 3}>{"Bs 9 por paleta"}</span>

</div>

</div>


<button className="w-full h-14 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all" onClick={confirmOrder}>
<span className="material-symbols-outlined text-[24px]">{"assignment_turned_in"}</span>

<span >{"Revisar Pedido Mayorista"}</span>

</button>

</div>

</div>

</div>

<div ref={formRef} className="mx-4 mt-4 mb-4 scroll-mt-20">
  <PedidoForm
    tipoInicial="Punto de venta / B2B"
    detallesIniciales={detallesPedido}
    totalPedido={count > 0 ? total : null}
    unidadesMayoristas={count*24}
    onSuccess={pedidoEnviado}
  />
</div>
</>
}
