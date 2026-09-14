import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useShop } from '../ShopContext'
import { money } from '../shop'

export default function Delivery() {
const navigate = useNavigate(); const {cart, addItem} = useShop(); const [category,setCategory] = useState('populares'); const items=cart.filter(i=>i.mode==='delivery'); const count=items.reduce((s,i)=>s+i.qty,0); const total=items.reduce((s,i)=>s+i.price*i.qty,0)
return <>
<div className="stitch-screen"><div className="flex flex-col w-full pb-20">

<section className="px-margin pt-space-xs pb-space-sm">
<div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] flex flex-col gap-space-xs">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs min-w-0">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary-ink text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"moped"}</span>

</div>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{"Destino de antojo"}</span>

<div className="flex items-center gap-1">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Indica tu dirección al pedir</span>

<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0">{"expand_more"}</span>

</div>

</div>

</div>

<div className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary-ink shrink-0">
<span className="material-symbols-outlined text-[16px]">{"schedule"}</span>

<span className="font-label-sm text-label-sm font-bold">{"35-45 min"}</span>

</div>

</div>


<div className="flex items-center gap-2 mt-1 pt-2 bg-surface-container-lowest/80 rounded px-3 py-1.5">
<span className="material-symbols-outlined text-secondary-ink text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"ac_unit"}</span>

<p className="font-body-sm text-body-sm text-on-surface-variant truncate">{"\n          Garantía "}<span className="font-bold text-secondary-ink">{"Hielera Sellada"}</span>
{": Llegan 100% firmes a tu congelador\n        "}</p>

</div>

</div>

</section>


<section className="px-margin py-space-xs">
<div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary via-primary-container to-tertiary-container text-on-primary p-space-md shadow-[0_10px_24px_-4px_rgba(255,85,165,0.18)]">
<div className="relative z-10 flex items-center justify-between gap-space-sm">
<div className="flex flex-col gap-1 max-w-[70%]">
<div className="inline-flex items-center gap-1 w-fit bg-on-primary/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-surface-container-lowest">
<span className="material-symbols-outlined text-[14px]">{"local_shipping"}</span>

<span className="font-label-sm text-label-sm tracking-wide">{"PRECIO POR PALETA"}</span>

</div>

<h3 className="font-headline-sm text-headline-sm text-on-primary leading-snug">{"\n            Todas las paletas a Bs 12\n          "}</h3>

<p className="font-body-sm text-body-sm text-on-primary/90">{"\n            El mismo precio por unidad, sin importar la cantidad.\n          "}</p>

</div>

<div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-on-primary/15 backdrop-blur-md">
<span className="material-symbols-outlined text-[36px] text-surface-container-lowest" style={{"fontVariationSettings": "'FILL' 1"}}>{"celebration"}</span>

</div>

</div>


<div className="absolute -right-4 -bottom-6 w-32 h-32 rounded-full bg-on-primary/10 pointer-events-none blur-xl"></div>

</div>

</section>


<section className="py-space-sm">
<div className="flex items-center justify-between px-margin mb-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">{"Explora por Antojo"}</span>

<span className="font-label-sm text-label-sm text-primary-ink font-bold">Catálogo de muestra</span>

</div>

<div className="flex gap-space-xs overflow-x-auto px-margin scrollbar-none snap-x" id="categoryTabs">
<button data-cat="populares" onClick={() => setCategory('populares')} aria-pressed={category === 'populares'} className={"snap-start shrink-0 h-10 px-4 rounded-full flex items-center gap-1.5 " + (category === 'populares' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="text-base">{"✨"}</span>

<span className="font-label-md text-label-md">{"Más Populares"}</span>

</button>

<button data-cat="agua" onClick={() => setCategory('agua')} aria-pressed={category === 'agua'} className={"snap-start shrink-0 h-10 px-4 rounded-full flex items-center gap-1.5 " + (category === 'agua' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="text-base">{"🍓"}</span>

<span className="font-label-md text-label-md">{"De Agua & Fruta Natural"}</span>

</button>

<button data-cat="leche" onClick={() => setCategory('leche')} aria-pressed={category === 'leche'} className={"snap-start shrink-0 h-10 px-4 rounded-full flex items-center gap-1.5 " + (category === 'leche' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="text-base">{"🥛"}</span>

<span className="font-label-md text-label-md">{"Base Leche & Crema"}</span>

</button>

<button data-cat="gourmet" onClick={() => setCategory('gourmet')} aria-pressed={category === 'gourmet'} className={"snap-start shrink-0 h-10 px-4 rounded-full flex items-center gap-1.5 " + (category === 'gourmet' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="text-base">{"🍫"}</span>

<span className="font-label-md text-label-md">{"Gourmet Rellenas"}</span>

</button>

<button data-cat="packs" onClick={() => setCategory('packs')} aria-pressed={category === 'packs'} className={"snap-start shrink-0 h-10 px-4 rounded-full flex items-center gap-1.5 " + (category === 'packs' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface')}>
<span className="text-base">{"🎉"}</span>

<span className="font-label-md text-label-md">{"Packs Fiesta (12 und)"}</span>

</button>

</div>

</section>


<section className="px-margin py-space-xs flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-on-surface">{"Sabores Populares"}</h2>

<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">{"tune"}</span>

<span className="font-label-sm text-label-sm">{"Filtros"}</span>

</div>

</div>

<div className="grid grid-cols-2 gap-gutter">

<article className="bg-surface-container-lowest rounded-lg p-space-sm shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] flex flex-col justify-between relative group hover:shadow-[0_10px_24px_-4px_rgba(255,85,165,0.12)] transition-shadow" hidden={category !== 'populares' && category !== 'gourmet'}>
<div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden mb-2 bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjFCqDN4Pn2vEOztCtOmLF7afniuDl-p7arAWFedjCdMlimrbcjqTK3i4r0FGL9nfkU7VzFJy8W_XsaH_mZ2HbuDCM5aRn9kcYWHoa5wPO8jZtQQmvjGLkMq9hqoexRNlp681DctoPDvHVyM2IerenFfgkTaQPBkQ1Z5RswTRoJluJ6SgIpr7R97ZInNMBKFIYK_3cQRXU2pntGIXMnB8et3td2MntC6qSuzMugbGn8Sz4YzbceHD_Lg" alt="Close up mouth-watering artisan strawberry ice pop filled with sweet condensed milk, condensation glistening on fruit texture, Mexican neo-pop paleteria aesthetic, creamy swirl visible, vibrant pastel and magenta studio lighting, hyper-detailed commercial food photography." loading="lazy"/>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm">{"\n            Top #1\n          "}</span>

</div>

<div className="flex flex-col flex-1">
<div className="mb-1">
<span className="inline-block px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-1">{"\n              Rellena de Leche Condensada\n            "}</span>

</div>

<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">{"Fresa Salvaje Rellena"}</h3>

<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">{"Frutillas orgánicas con centro cremoso irresistible."}</p>

</div>

<div className="flex items-center justify-between mt-3 pt-2">
<div >


<span className="font-headline-sm text-headline-sm text-primary-ink">{"Bs 12"}</span>

</div>

<button aria-label="Agregar Fresa Salvaje al carrito" className="add-btn w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform" data-item="Fresa Salvaje Rellena" data-price="12" onClick={() => addItem({"id": "Fresa Salvaje Rellena", "name": "Fresa Salvaje Rellena", "price": 12.0, "mode": "delivery"})}>
<span className="material-symbols-outlined text-[20px]">{"add"}</span>

</button>

</div>

</article>


<article className="bg-surface-container-lowest rounded-lg p-space-sm shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] flex flex-col justify-between relative group hover:shadow-[0_10px_24px_-4px_rgba(255,85,165,0.12)] transition-shadow" hidden={category !== 'populares' && category !== 'agua'}>
<div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden mb-2 bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_zRxe9r5adsihhNaoilTNkXECU4qQ1akNyF_EdGups_U2wZL63W6QcMi4y-5OdaE8slOz7eNBj-hV5SnVdnI4wM42WH9o3wCn-Mzf-Nx_hq2Qu0oGhuRcjnFJvtxu-DYLKqbDHJ3W8evaZOTKfMZAoGFFj2Hn6G3kK_3D5RMAyzKlrjdbv8ss3JG2CpwOFoYiKYF8eC3qPgzZpEQCjJMs91h9cNAJG280mEVayTbr7bC1zvJ2UgK0pg" alt="Gourmet Mexican mango paleta coated with artisanal spicy chamoy glaze and chili flakes, frozen condensation drops, bright tropical yellow and deep crimson red colors, vibrant sunlight studio setting, delicious popsicle stick presentation." loading="lazy"/>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm shadow-sm">{"\n            Picocita\n          "}</span>

</div>

<div className="flex flex-col flex-1">
<div className="mb-1">
<span className="inline-block px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm mb-1">{"\n              100% Natural\n            "}</span>

</div>

<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">{"Mango Ataúlfo Chamoy"}</h3>

<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">{"Pulpa real de mango bañado en escarchado de tamarindo."}</p>

</div>

<div className="flex items-center justify-between mt-3 pt-2">
<div >
<span className="font-headline-sm text-headline-sm text-on-surface">{"Bs 12"}</span>

</div>

<button aria-label="Agregar Mango Ataúlfo al carrito" className="add-btn w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform" data-item="Mango Ataúlfo Chamoy" data-price="12" onClick={() => addItem({"id": "Mango Ataúlfo Chamoy", "name": "Mango Ataúlfo Chamoy", "price": 12.0, "mode": "delivery"})}>
<span className="material-symbols-outlined text-[20px]">{"add"}</span>

</button>

</div>

</article>


<article className="bg-surface-container-lowest rounded-lg p-space-sm shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] flex flex-col justify-between relative group hover:shadow-[0_10px_24px_-4px_rgba(255,85,165,0.12)] transition-shadow" hidden={category !== 'populares' && category !== 'agua'}>
<div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden mb-2 bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPk0_tl9zHaQJXWMTMQGdD8SR4MggwBQ8gylJF2F9ZMKBvhsNBFO5jvEpChxT2WP71b1iTSqvLnRd-XeioCTgOnoZYiySwRqNTDQarv_2TsDIzZjNxFiFcyhMIQpElT5qyQzjH-RWMIBybQ5054G1eu-6bLugPqx40Xtd8V30wIxa9q61xO-te8RGwURoKFQFX_Zy_LLeU_MYdxeypoGpkIK_pmMf-ALsjkjjLDfDsDeZKGJJ0IA81kA" alt="Artisanal passion fruit paleta on wooden stick with fresh passion fruit seeds visible through natural iced fruit bar, warm cream background, tropical refreshing aesthetic, clean studio lighting, droplet textures." loading="lazy"/>
</div>

<div className="flex flex-col flex-1">
<div className="mb-1">
<span className="inline-block px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm mb-1">{"\n              Sin Azúcar\n            "}</span>

</div>

<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">{"Maracuyá Tropical Fit"}</h3>

<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">{"Endulzado con fruta del monje y semilla fresca crujiente."}</p>

</div>

<div className="flex items-center justify-between mt-3 pt-2">
<div >
<span className="font-headline-sm text-headline-sm text-on-surface">{"Bs 12"}</span>

</div>

<button aria-label="Agregar Maracuyá al carrito" className="add-btn w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform" data-item="Maracuyá Tropical" data-price="12" onClick={() => addItem({"id": "Maracuyá Tropical", "name": "Maracuyá Tropical", "price": 12.0, "mode": "delivery"})}>
<span className="material-symbols-outlined text-[20px]">{"add"}</span>

</button>

</div>

</article>


<article className="bg-surface-container-lowest rounded-lg p-space-sm shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] flex flex-col justify-between relative group hover:shadow-[0_10px_24px_-4px_rgba(255,85,165,0.12)] transition-shadow" hidden={category !== 'populares' && category !== 'leche'}>
<div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden mb-2 bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCoCvPOxJx-gzTeqq1Rv4OOW7dC3fpBoWPL_pIJwH4fa78Z4eVVzxaO5lKG9-hvSlJ8-YAoUdS9Y9CwCxzBIUV3s1SGewMSD-PBqLuUC0oVuPlYDtDE_JSWe6V93N-D9xirCdV47o_PBxfc0NN027zKweS7Fx99itpIXjOfTHKq54qn7OJShAe5lS8ocY_TkM3yNKljwHh5urCdILfWKICi0WbD6QD2u_ZRcj1vAa7UKuEt_V6mYXS1A" alt="Creamy artisan Mexican avocado and pistachio frozen paleta bar, light mint green cream color, chopped roasted pistachios sprinkled on top edge, warm pastel background, elegant food magazine styling." loading="lazy"/>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm">{"\n            Crema\n          "}</span>

</div>

<div className="flex flex-col flex-1">
<div className="mb-1">
<span className="inline-block px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm mb-1">{"\n              100% Natural\n            "}</span>

</div>

<h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">{"Aguacate Crema & Pistache"}</h3>

<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">{"Suavidad artesanal con trocitos tostados salpicados."}</p>

</div>

<div className="flex items-center justify-between mt-3 pt-2">
<div >
<span className="font-headline-sm text-headline-sm text-on-surface">{"Bs 12"}</span>

</div>

<button aria-label="Agregar Aguacate Pistache al carrito" className="add-btn w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-90 transition-transform" data-item="Aguacate Pistache" data-price="12" onClick={() => addItem({"id": "Aguacate Pistache", "name": "Aguacate Pistache", "price": 12.0, "mode": "delivery"})}>
<span className="material-symbols-outlined text-[20px]">{"add"}</span>

</button>

</div>

</article>

</div>

</section>


<section className="px-margin py-space-sm">
<article className="bg-surface-container rounded-lg p-space-md shadow-[0_4px_14px_-2px_rgba(36,24,27,0.05)] flex flex-col gap-space-sm relative overflow-hidden" hidden={category !== 'populares' && category !== 'packs'}>
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">{"\n          Pack Fiesta (12 Paletas)\n        "}</span>

<span className="font-headline-sm text-headline-sm text-primary-ink">{"Bs 144 "}
</span>

</div>

<div className="flex gap-space-sm items-center">
<div className="w-24 h-24 rounded-DEFAULT overflow-hidden shrink-0 bg-surface-container-low">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCif6qMq-sjkw43XyaZSSN4S68YIFp_GcXjLO5rl9j76OT_w4lcC-WO8_hHyf0WMrkS9UupI6pSTqV30YrJx_4nS_DQcg_5CYAazGacHwobOacTqS1MG9F7lnXNNPWLJGYLkjtcqv87CKY-LdU92JJOB89-Jqb0o5uJw_acn6vixBmXDgGvxUddNGWcVFXw7bGE90tpZwbLUyl01xTzszOkFWJeeq0V2nazNyzCG0Zt5cf3pZzLl_51tw" alt="An open insulated white party cooler box packed with 12 colorful artisan Mexican ice pops nestled in dry ice vapor, colorful wrappers, mint, strawberry, chocolate, and mango varieties visible, high end commercial photography." loading="lazy"/>
</div>

<div className="flex flex-col min-w-0">
<h4 className="font-headline-sm text-headline-sm text-on-surface truncate">{"Caja Surtida Fiesta Pop"}</h4>

<p className="font-body-sm text-body-sm text-on-surface-variant">{"4 Gourmet + 4 De Fruta + 4 Crema Tradicional. Incluye stickers y hielera portátil."}</p>

<div className="flex items-center gap-1 mt-1 text-secondary-ink">
<span className="material-symbols-outlined text-[16px]">{"verified"}</span>

<span className="font-label-sm text-label-sm font-bold">{"12 paletas × Bs 12"}</span>

</div>

</div>

</div>

<button className="add-btn w-full h-11 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform" data-item="Pack Fiesta 12 Paletas" data-price="144" onClick={() => addItem({"id": "Pack Fiesta 12 Paletas", "name": "Pack Fiesta 12 Paletas", "price": 144.0, "units": 12, "mode": "delivery"})}>
<span className="material-symbols-outlined text-[18px]">{"add_shopping_cart"}</span>

<span >{"Armar Caja de 12 Paletas"}</span>

</button>

</article>

</section>


<aside className="fixed bottom-24 inset-x-margin z-40 bg-inverse-surface text-inverse-on-surface rounded-full shadow-[0_20px_36px_-6px_rgba(36,24,27,0.28)] p-2.5 flex items-center justify-between transition-all duration-300" id="cartBar">
<div className="flex items-center gap-space-sm pl-2 min-w-0">
<div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-on-primary shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>{"shopping_bag"}</span>

<span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary-container text-on-secondary-fixed text-[11px] font-bold flex items-center justify-center shadow" id="cartCount">{count}</span>

</div>

<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-inverse-on-surface/70 truncate">Hielera activa ({count} artículos)</span>

<span className="font-headline-sm text-headline-sm text-inverse-on-surface leading-tight" id="cartTotal">{money(total)}</span>

</div>

</div>

<button aria-label="Ver Carrito de Helados" className="h-11 px-5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center gap-1.5 shadow-[0_4px_14px_rgba(255,85,165,0.35)] shrink-0 active:scale-95 transition-transform" id="viewCartBtn" onClick={() => navigate('/carrito')}>
<span >{"Ver Carrito"}</span>

<span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>

</button>

</aside>

</div>

</div>

</>
}
