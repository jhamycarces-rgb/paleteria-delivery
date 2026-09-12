import { useState } from 'react'
import { supabase } from './supabase'
const sabores = [
  {
    nombre: 'Mango Chamoy',
    detalle: '100% Pulpa',
    color: '#b70051',
    imagen:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfEukgu6nVktHGHs5oukXZublaxrZ4AG0OLWoFetSzdrCqj4ZLVPaLfIUHpYpVG6_3_AV5O0CRUyAJsE6S6D9XtaUZ-1hv2k70y8alZYBrf70DYM6EGvjQ1KsveFe1SuYUVQZ8FIdt34jQnht8BOi1OTrx-kvIbKVENTx2sYjFGKqjb4FbFYs3RbDur0bebEivG4c-vb8O_zWs9J3JMT7qwk7sxF3iQSePVHdBfxXyeqNsRtfM-012eA',
  },
  {
    nombre: 'Fresa de Leche',
    detalle: 'Base Cremosa',
    color: '#006a60',
    imagen:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgq9gjAI02nNXXtmuesrmuVpibTfJWsZ0HGrH-4m8awxetOtWHLRrwC7H-5oPEhFeC9J8JGZP29XPKgIWs_vYECVXuvhUUYAR-J563a6-jQ6AyGbfrqDNFmgAYZn1k_Qpi2wXkhg-CF1LCRefaMe3fxTnqf93IMWeZRxzUiLSp4XtGU-I4_ONDORr_OR6L9QV_6_-KoHsCVwBHU_SiyS_KuzqZ-RluMw5fS3PKz1F8Fwmcrj5uO2xk7Q',
  },
  {
    nombre: 'Maracuyá Real',
    detalle: 'Cítrico & Dulce',
    color: '#795600',
    imagen:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Iqb0_Wo3WUfBhprA2YPeL2DmpqXLQSLdigS-tjLk8M1lLW0m3irBBbXsVPUVJRHIVuYTg7r03T0Lus2NBt_Mg93OLKbeSMGnfVMRkqN_71z1zK903d6vH2uzg3GZgEVQ3qUiom5I9uDJMFGI1K_KTqyQP-MZnayKNDBDKruspcxELoEbmQziGeBgc3w7M6-3VbwAWuJIG0xAxXRqu0eItEcipREBDnvo-sfh5Sko2xp66N_wlUqiMg',
  },
]

const beneficiosB2B = [
  ['layers', 'Lotes y Cajas', 'Desde 40 pzas'],
  ['percent', 'Margen Alto', 'Tarifas B2B'],
  ['event_repeat', 'Reabastecimiento', 'Frecuencia fija'],
  ['local_shipping', 'Cadena de Frío', '-18°C garantizado'],
]

const beneficiosDelivery = [
  ['schedule', 'Entrega Rápida', '30 a 45 mins'],
  ['ac_unit', 'Hielo Seco', 'Cero derretidos'],
  ['diversity_1', 'Combos Mix', 'Pack 6, 12 o 24'],
  ['eco', '100% Natural', 'Sin conservadores'],
]

function Beneficio({ icono, titulo, texto, color }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-[#fff0f2] p-2">
      <span
        className="material-symbols-outlined text-[20px]"
        style={{ color }}
      >
        {icono}
      </span>

      <div className="min-w-0">
        <p className="truncate text-xs font-bold text-[#24181b]">
          {titulo}
        </p>
        <p className="truncate text-xs text-[#5a4045]">{texto}</p>
      </div>
    </div>
  )
}

  function App() {
    const [formulario, setFormulario] = useState({
      nombre: '',
      telefono: '',
      tipo_pedido: 'Delivery a domicilio',
      direccion: '',
      detalles: '',
    })
  
    const [mensaje, setMensaje] = useState('')
    const [enviando, setEnviando] = useState(false)
  
    const manejarCambio = (e) => {
      const { name, value } = e.target
  
      setFormulario((anterior) => ({
        ...anterior,
        [name]: value,
      }))
    }
  
    const enviarPedido = async (e) => {
      e.preventDefault()
  
      setEnviando(true)
      setMensaje('')
  
      const { error } = await supabase
        .from('pedidos')
        .insert([
          {
            nombre: formulario.nombre,
            telefono: formulario.telefono,
            tipo_pedido: formulario.tipo_pedido,
            direccion: formulario.direccion,
            detalles: formulario.detalles,
          },
        ])
  
      if (error) {
        console.error(error)
        setMensaje('No se pudo enviar el pedido. Intenta nuevamente.')
      } else {
        setMensaje('¡Pedido enviado correctamente!')
  
        setFormulario({
          nombre: '',
          telefono: '',
          tipo_pedido: 'Delivery a domicilio',
          direccion: '',
          detalles: '',
        })
      }
  
      setEnviando(false)
    }
  
    return (
      <>
      <section className="rounded-3xl bg-white p-4 shadow-md">
  <h3 className="text-xl font-bold text-[#24181b]">
    Solicita tu pedido
  </h3>

  <p className="mt-1 text-sm text-[#5a4045]">
    Déjanos tus datos y te contactaremos para confirmar tu pedido.
  </p>

  <form onSubmit={enviarPedido} className="mt-4 space-y-4">
    <div>
      <label className="mb-1 block text-sm font-bold">
        Nombre
      </label>

      <input
        type="text"
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        required
        placeholder="Tu nombre"
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Teléfono
      </label>

      <input
        type="tel"
        name="telefono"
        value={formulario.telefono}
        onChange={manejarCambio}
        required
        placeholder="Tu número"
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Tipo de pedido
      </label>

      <select
        name="tipo_pedido"
        value={formulario.tipo_pedido}
        onChange={manejarCambio}
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      >
        <option>Delivery a domicilio</option>
        <option>Punto de venta / B2B</option>
        <option>Evento</option>
      </select>
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Dirección
      </label>

      <input
        type="text"
        name="direccion"
        value={formulario.direccion}
        onChange={manejarCambio}
        required
        placeholder="Dirección de entrega"
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Detalles del pedido
      </label>

      <textarea
        rows="4"
        name="detalles"
        value={formulario.detalles}
        onChange={manejarCambio}
        placeholder="Ejemplo: 12 paletas de mango, 6 de fresa..."
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <button
      type="submit"
      disabled={enviando}
      className="w-full rounded-full bg-[#b70051] px-4 py-3 font-bold text-white disabled:opacity-50"
    >
      {enviando ? 'Enviando...' : 'Enviar pedido'}
    </button>

    {mensaje && (
      <p className="text-center text-sm font-bold text-[#006a60]">
        {mensaje}
      </p>
    )}
  </form>
</section>
<div
  translate="no"
  className="min-h-screen bg-[#fff8f8] font-sans text-[#24181b]"
>      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-pink-100 bg-[#fff8f8]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-md items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd9df]">
              <span className="material-symbols-outlined text-[#b70051]">
                icecream
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-[#b70051]">
                  Paletería Pop
                </h1>
                <span className="text-xs text-[#5a4045]">• Inicio</span>
              </div>

              <button className="flex items-center gap-1 text-xs font-bold text-[#006a60]">
                <span className="material-symbols-outlined text-[15px]">
                  location_on
                </span>
                Sucursal Roma Norte
                <span className="material-symbols-outlined text-[15px]">
                  expand_more
                </span>
              </button>
            </div>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f2]">
            <span className="material-symbols-outlined text-[#006a60]">
              person
            </span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-md space-y-6 px-4 pb-28 pt-20">
        {/* SABORES DE TEMPORADA */}
        <section className="overflow-hidden rounded-3xl bg-[#fff0f2] p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <span className="flex items-center gap-1 rounded-full bg-[#b70051] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              <span className="material-symbols-outlined text-[16px]">
                local_fire_department
              </span>
              Sabores de Temporada
            </span>

            <span className="flex items-center gap-1 text-xs text-[#5a4045]">
              <span className="h-2 w-2 rounded-full bg-[#006a60]" />
              Recién batidos
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {sabores.map((sabor) => (
              <div
                key={sabor.nombre}
                className="flex shrink-0 items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 shadow-sm"
              >
                <img
                  src={sabor.imagen}
                  alt={sabor.nombre}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs font-bold">{sabor.nombre}</p>
                  <p
                    className="text-xs font-bold"
                    style={{ color: sabor.color }}
                  >
                    {sabor.detalle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#b70051]">
            ¿Cómo deseas comprar hoy?
          </p>

          <h2 className="text-2xl font-extrabold leading-tight">
            Tradición artesanal para tu negocio o antojo
          </h2>
        </section>

        {/* PUNTO DE VENTA */}
        <article className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-md">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#74f8e5]/30" />

          <div className="relative">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#74f8e5] text-[#007166]">
                <span className="material-symbols-outlined">
                  inventory_2
                </span>
              </div>

              <span className="rounded-full bg-[#f9e3e7] px-3 py-1 text-xs font-bold">
                Franquicias y Tiendas
              </span>
            </div>

            <h3 className="text-xl font-bold">
              Pedidos Puntos de Venta
            </h3>

            <p className="mt-2 text-sm leading-5 text-[#5a4045]">
              Abastece tu congelador comercial con cajas maestras,
              precios mayoristas escalonados y despacho refrigerado
              prioritario.
            </p>

            <div className="my-4 grid grid-cols-2 gap-2">
              {beneficiosB2B.map(([icono, titulo, texto]) => (
                <Beneficio
                  key={titulo}
                  icono={icono}
                  titulo={titulo}
                  texto={texto}
                  color="#006a60"
                />
              ))}
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#006a60] font-bold text-white">
              Ingresar como Punto de Venta
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </article>

        {/* DELIVERY */}
        <article className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-md">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffd9df]/60" />

          <div className="relative">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#df1e68] text-white">
                <span className="material-symbols-outlined">moped</span>
              </div>

              <span className="rounded-full bg-[#ffd9df] px-3 py-1 text-xs font-bold text-[#3f0017]">
                Para Casa y Eventos
              </span>
            </div>

            <h3 className="text-xl font-bold">
              Pedidos Delivery a Domicilio
            </h3>

            <p className="mt-2 text-sm leading-5 text-[#5a4045]">
              Tus paletas y helados favoritos directo a tu puerta,
              protegidos con hielo seco para llegar perfectamente
              congelados.
            </p>

            <div className="my-4 grid grid-cols-2 gap-2">
              {beneficiosDelivery.map(([icono, titulo, texto]) => (
                <Beneficio
                  key={titulo}
                  icono={icono}
                  titulo={titulo}
                  texto={texto}
                  color="#b70051"
                />
              ))}
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#b70051] font-bold text-white">
              Pedir a Domicilio Ahora
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </article>

        {/* GARANTÍA */}
        <section className="rounded-3xl bg-[#f9e3e7] p-4">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#5a4045]">
            Garantía Paletería Pop
          </p>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b70051]">
                <span className="material-symbols-outlined">
                  nutrition
                </span>
              </div>
              <p className="text-xs font-bold">Fruta Real</p>
              <p className="text-[11px] text-[#5a4045]">Cero jarabes</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#006a60]">
                <span className="material-symbols-outlined">
                  thermostat
                </span>
              </div>
              <p className="text-xs font-bold">Firmeza Total</p>
              <p className="text-[11px] text-[#5a4045]">O te reponemos</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#795600]">
                <span className="material-symbols-outlined">
                  support_agent
                </span>
              </div>
              <p className="text-xs font-bold">Soporte 24/7</p>
              <p className="text-[11px] text-[#5a4045]">
                Canal B2B & App
              </p>
            </div>
          </div>
        </section>

        {/* ALIADOS */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-bold">Puntos Aliados y Franquicias</h3>
            <span className="text-xs font-bold text-[#006a60]">
              +120 tiendas activas
            </span>
          </div>

          <div className="space-y-2">
            {[
              ['Pop Corner • Mercado Roma', 'Surtido semanal • 320 piezas/semana', 'Abastecido'],
              ['Gourmet Deli • Condesa', 'Cajas mixtas frutales y crema', 'Abastecido'],
              ['Kiosco Parque México', 'Reabastecimiento express en curso', 'En ruta'],
            ].map(([nombre, detalle, estado]) => (
              <div
                key={nombre}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3 shadow-sm"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffe8ec] text-[#b70051]">
                    <span className="material-symbols-outlined">
                      storefront
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold">{nombre}</p>
                    <p className="truncate text-xs text-[#5a4045]">
                      {detalle}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-[#74f8e5] px-2 py-1 text-[10px] font-bold text-[#007166]">
                  {estado}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RESEÑA */}
        <section className="rounded-3xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <div className="text-[#ffba20]">★★★★★</div>
            <span className="text-xs font-bold">4.9 de 5</span>
            <span className="text-xs text-[#5a4045]">
              • Más de 4,000 pedidos
            </span>
          </div>

          <p className="text-sm italic leading-5">
            “Las paletas llegaron impecables a mi fiesta con el hielo
            seco intacto. En nuestro mini-market, el lote de fresa con
            crema se vende el primer fin de semana.”
          </p>

          <p className="mt-3 text-xs font-bold">
            Mariana C. — Administradora de Sucursal & Cliente Frecuente
          </p>
        </section>
      </main>

      {/* NAVEGACIÓN INFERIOR */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-pink-100 bg-[#fff8f8]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-md items-center justify-around">
          <button className="flex flex-col items-center rounded-full bg-[#ffd9df]/70 px-4 py-2 font-bold text-[#b70051]">
            <span className="material-symbols-outlined">icecream</span>
            <span className="text-[11px]">Inicio</span>
          </button>

          <button className="flex flex-col items-center px-2 py-2 text-[#5a4045]">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-[11px]">Puntos B2B</span>
          </button>

          <button className="flex flex-col items-center px-2 py-2 text-[#5a4045]">
            <span className="material-symbols-outlined">moped</span>
            <span className="text-[11px]">Delivery</span>
          </button>

          <button className="flex flex-col items-center px-2 py-2 text-[#5a4045]">
            <span className="material-symbols-outlined">
              receipt_long
            </span>
            <span className="text-[11px]">Mis Pedidos</span>
          </button>
        </div>
      </nav>
    </div>
    <section className="rounded-3xl bg-white p-4 shadow-md">
  <h3 className="text-xl font-bold text-[#24181b]">
    Solicita tu pedido
  </h3>

  <p className="mt-1 text-sm text-[#5a4045]">
    Déjanos tus datos y te contactaremos para confirmar tu pedido.
  </p>

  <form onSubmit={enviarPedido} className="mt-4 space-y-4">
    <div>
      <label className="mb-1 block text-sm font-bold">
        Nombre
      </label>

      <input
        type="text"
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        required
        placeholder="Tu nombre"
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Teléfono
      </label>

      <input
        type="tel"
        name="telefono"
        value={formulario.telefono}
        onChange={manejarCambio}
        required
        placeholder="Tu número"
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Tipo de pedido
      </label>

      <select
        name="tipo_pedido"
        value={formulario.tipo_pedido}
        onChange={manejarCambio}
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      >
        <option>Delivery a domicilio</option>
        <option>Punto de venta / B2B</option>
        <option>Evento</option>
      </select>
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Dirección
      </label>

      <input
        type="text"
        name="direccion"
        value={formulario.direccion}
        onChange={manejarCambio}
        required
        placeholder="Dirección de entrega"
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <div>
      <label className="mb-1 block text-sm font-bold">
        Detalles del pedido
      </label>

      <textarea
        rows="4"
        name="detalles"
        value={formulario.detalles}
        onChange={manejarCambio}
        placeholder="Ejemplo: 12 paletas de mango, 6 de fresa..."
        className="w-full rounded-2xl border border-[#e3bdc3] bg-[#fff8f8] px-4 py-3 outline-none focus:border-[#b70051]"
      />
    </div>

    <button
      type="submit"
      disabled={enviando}
      className="w-full rounded-full bg-[#b70051] px-4 py-3 font-bold text-white disabled:opacity-50"
    >
      {enviando ? 'Enviando...' : 'Enviar pedido'}
    </button>

    {mensaje && (
      <p className="text-center text-sm font-bold text-[#006a60]">
        {mensaje}
      </p>
    )}
  </form>
</section>

{}
</>
  )
}

export default App