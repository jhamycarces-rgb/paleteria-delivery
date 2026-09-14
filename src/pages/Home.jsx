import { useNavigate } from 'react-router-dom'

export default function Home() {
const navigate = useNavigate()
return <>
<div className="stitch-screen"><div className="flex flex-col w-full px-margin pb-space-lg gap-space-lg">

<section className="relative w-full rounded-lg bg-surface-container-low overflow-hidden shadow-sm">
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary-fixed/40 pointer-events-none blur-2xl"></div>

<div className="p-space-md flex flex-col gap-space-sm relative z-10">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary">
<span className="material-symbols-outlined text-[16px]">{"local_fire_department"}</span>

<span className="font-label-sm text-label-sm uppercase tracking-wider">{"Sabores de Temporada"}</span>

</div>

<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
{"\n          Recién batidos\n        "}</span>

</div>

<div className="flex items-center gap-space-md overflow-x-auto py-1 no-scrollbar">

<div className="flex items-center gap-2 bg-surface-container-lowest rounded-full py-1.5 pl-1.5 pr-3 shadow-sm shrink-0">
<img className="w-9 h-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfEukgu6nVktHGHs5oukXZublaxrZ4AG0OLWoFetSzdrCqj4ZLVPaLfIUHpYpVG6_3_AV5O0CRUyAJsE6S6D9XtaUZ-1hv2k70y8alZYBrf70DYM6EGvjQ1KsveFe1SuYUVQZ8FIdt34jQnht8BOi1OTrx-kvIbKVENTx2sYjFGKqjb4FbFYs3RbDur0bebEivG4c-vb8O_zWs9J3JMT7qwk7sxF3iQSePVHdBfxXyeqNsRtfM-012eA" alt="Vibrant tropical Mexican paleta ice pop made with fresh mango and swirls of authentic red chamoy, garnished with chili powder flecks on natural bamboo stick, warm golden sunlit food photography on pastel cream surface" loading="lazy"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">{"Mango Chamoy"}</span>

<span className="font-body-sm text-body-sm text-primary-ink font-bold">{"100% Pulpa"}</span>

</div>

</div>


<div className="flex items-center gap-2 bg-surface-container-lowest rounded-full py-1.5 pl-1.5 pr-3 shadow-sm shrink-0">
<img className="w-9 h-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgq9gjAI02nNXXtmuesrmuVpibTfJWsZ0HGrH-4m8awxetOtWHLRrwC7H-5oPEhFeC9J8JGZP29XPKgIWs_vYECVXuvhUUYAR-J563a6-jQ6AyGbfrqDNFmgAYZn1k_Qpi2wXkhg-CF1LCRefaMe3fxTnqf93IMWeZRxzUiLSp4XtGU-I4_ONDORr_OR6L9QV_6_-KoHsCVwBHU_SiyS_KuzqZ-RluMw5fS3PKz1F8Fwmcrj5uO2xk7Q" alt="Artisanal creamy strawberry milk paleta mexican ice pop, rich natural pink tone with real strawberry chunks visible inside, fresh dairy condensation drops, clean bright lighting in contemporary neo-pop aesthetic" loading="lazy"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">{"Fresa de Leche"}</span>

<span className="font-body-sm text-body-sm text-secondary-ink font-bold">{"Base Cremosa"}</span>

</div>

</div>


<div className="flex items-center gap-2 bg-surface-container-lowest rounded-full py-1.5 pl-1.5 pr-3 shadow-sm shrink-0">
<img className="w-9 h-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Iqb0_Wo3WUfBhprA2YPeL2DmpqXLQSLdigS-tjLk8M1lLW0m3irBBbXsVPUVJRHIVuYTg7r03T0Lus2NBt_Mg93OLKbeSMGnfVMRkqN_71z1zK903d6vH2uzg3GZgEVQ3qUiom5I9uDJMFGI1K_KTqyQP-MZnayKNDBDKruspcxELoEbmQziGeBgc3w7M6-3VbwAWuJIG0xAxXRqu0eItEcipREBDnvo-sfh5Sko2xp66N_wlUqiMg" alt="Gourmet passion fruit maracuya artisanal mexican paleta with glossy golden pulp and delicate dark seeds suspended in frozen crystal, warm tropical aesthetic with refreshing mint leaf garnish" loading="lazy"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">{"Maracuyá Real"}</span>

<span className="font-body-sm text-body-sm text-tertiary-container font-bold">{"Cítrico & Dulce"}</span>

</div>

</div>

</div>

</div>

</section>


<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-primary-ink tracking-wide uppercase">{"¿Cómo deseas comprar hoy?"}</span>

<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight">{"\n      Tradición artesanal para tu negocio o antojo\n    "}</h2>

</div>


<div className="flex flex-col gap-space-md">

<article className="relative w-full rounded-lg bg-surface-container-lowest p-space-md shadow-md flex flex-col gap-space-md overflow-hidden transition-all active:scale-[0.99]">
<div className="absolute top-0 right-0 w-36 h-36 bg-secondary-container/30 rounded-bl-full pointer-events-none -mr-4 -mt-4"></div>

<div className="flex items-start justify-between relative z-10">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm">
<span className="material-symbols-outlined text-[26px]">{"inventory_2"}</span>

</div>

<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">{"\n          Franquicias y Tiendas\n        "}</span>

</div>

<div className="flex flex-col gap-1 relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface">{"\n          Pedidos Puntos de Venta\n        "}</h3>

<p className="font-body-md text-body-md text-on-surface-variant">{"\n          Abastece tu congelador comercial con cajas maestras, precio mayorista de Bs 9 por paleta en pedidos de más de 70 unidades y despacho refrigerado prioritario.\n        "}</p>

</div>


<div className="grid grid-cols-2 gap-2 relative z-10">
<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary-ink text-[20px]">{"layers"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Lotes y Cajas"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Más de 70 paletas"}</span>

</div>

</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary-ink text-[20px]">{"percent"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Margen Alto"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Bs 9 por paleta"}</span>

</div>

</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary-ink text-[20px]">{"event_repeat"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Reabastecimiento"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Frecuencia fija"}</span>

</div>

</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary-ink text-[20px]">{"local_shipping"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Cadena de Frío"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"-18°C garantizado"}</span>

</div>

</div>

</div>


<button className="w-full h-12 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all" onClick={() => navigate('/b2b')}>
<span >{"Ingresar como Punto de Venta"}</span>

<span className="material-symbols-outlined text-[20px]">{"arrow_forward"}</span>

</button>

</article>


<article className="relative w-full rounded-lg bg-surface-container-lowest p-space-md shadow-md flex flex-col gap-space-md overflow-hidden transition-all active:scale-[0.99]">
<div className="absolute top-0 right-0 w-36 h-36 bg-primary-fixed/40 rounded-bl-full pointer-events-none -mr-4 -mt-4"></div>

<div className="flex items-start justify-between relative z-10">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm">
<span className="material-symbols-outlined text-[26px]">{"moped"}</span>

</div>

<span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">{"\n          Para Casa y Eventos\n        "}</span>

</div>

<div className="flex flex-col gap-1 relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface">{"\n          Pedidos Delivery a Domicilio\n        "}</h3>

<p className="font-body-md text-body-md text-on-surface-variant">{"\n          Tus paletas y helados favoritos directo a tu puerta, protegidos con hielo seco para llegar perfectamente congelados.\n        "}</p>

</div>


<div className="grid grid-cols-2 gap-2 relative z-10">
<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"schedule"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Días de entrega"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Lun, mié y vie"}</span>

</div>

</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"ac_unit"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Hielo Seco"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Cero derretidos"}</span>

</div>

</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"diversity_1"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"Combos Mix"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Pack 6, 12 o 24"}</span>

</div>

</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-primary-ink text-[20px]">{"eco"}</span>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface leading-none truncate">{"100% Natural"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Sin conservadores"}</span>

</div>

</div>

</div>


<button className="w-full h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all" onClick={() => navigate('/delivery')}>
<span >{"Pedir a Domicilio Ahora"}</span>

<span className="material-symbols-outlined text-[20px]">{"arrow_forward"}</span>

</button>

</article>

</div>


<section className="rounded-lg bg-surface-container-high p-space-md flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{"\n      Garantía Helados Krem\n    "}</span>

<div className="grid grid-cols-3 gap-2 text-center">
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary-ink">
<span className="material-symbols-outlined text-[20px]">{"nutrition"}</span>

</div>

<span className="font-label-sm text-label-sm text-on-surface leading-tight">{"Fruta Real"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant leading-none">{"Cero jarabes"}</span>

</div>

<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary-ink">
<span className="material-symbols-outlined text-[20px]">{"thermostat"}</span>

</div>

<span className="font-label-sm text-label-sm text-on-surface leading-tight">{"Firmeza Total"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant leading-none">{"O te reponemos"}</span>

</div>

<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">{"support_agent"}</span>

</div>

<span className="font-label-sm text-label-sm text-on-surface leading-tight">{"Soporte 24/7"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant leading-none">{"Canal B2B & App"}</span>

</div>

</div>

</section>


<section className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-headline-sm text-on-surface">{"Puntos Aliados y Franquicias"}</h4>

<span className="font-label-sm text-label-sm text-secondary-ink font-bold">{"+120 tiendas activas"}</span>

</div>

<div className="flex flex-col gap-2">

<div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-ink shrink-0">
<span className="material-symbols-outlined text-[22px]">{"storefront"}</span>

</div>

<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">{"Pop Corner • Mercado Roma"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Surtido semanal • 320 piezas/semana"}</span>

</div>

</div>

<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm shrink-0">{"\n          Abastecido\n        "}</span>

</div>


<div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-ink shrink-0">
<span className="material-symbols-outlined text-[22px]">{"storefront"}</span>

</div>

<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">{"Gourmet Deli • Condesa"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Cajas mixtas frutales y crema"}</span>

</div>

</div>

<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm shrink-0">{"\n          Abastecido\n        "}</span>

</div>


<div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-ink shrink-0">
<span className="material-symbols-outlined text-[22px]">{"storefront"}</span>

</div>

<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">{"Kiosco Parque México"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant truncate">{"Reabastecimiento express en curso"}</span>

</div>

</div>

<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0">{"\n          En ruta\n        "}</span>

</div>

</div>

</section>


<section className="rounded-lg bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-2">
<div className="flex text-tertiary-fixed-dim">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"star"}</span>

<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"star"}</span>

<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"star"}</span>

<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"star"}</span>

<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"star"}</span>

</div>

<span className="font-label-sm text-label-sm text-on-surface font-bold">{"4.9 de 5"}</span>

<span className="font-body-sm text-body-sm text-on-surface-variant">{"• Más de 4,000 pedidos"}</span>

</div>

<p className="font-body-md text-body-md text-on-surface italic">{"\n      \"Las paletas llegaron impecables a mi fiesta con el hielo seco intacto. En nuestro mini-market, el lote de fresa con crema se vende el primer fin de semana.\"\n    "}</p>

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center font-label-sm text-label-sm text-on-primary-fixed">{"\n        M\n      "}</div>

<span className="font-label-sm text-label-sm text-on-surface">{"Mariana C. — Administradora de Sucursal & Cliente Frecuente"}</span>

</div>

</section>

</div>

</div>

</>
}
