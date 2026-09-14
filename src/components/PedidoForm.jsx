import { useRef, useState } from 'react'
import { supabase } from '../supabase'
import { buildPedido, dateLabel, deliveryDates, todayISO } from '../pedido'
import { PAYMENT_QR_URL, PAYMENT_QR_EXPIRES, PAYMENT_CURRENCY } from '../payment'

export default function PedidoForm({ tipoInicial = 'Delivery a domicilio', detallesIniciales = '', totalPedido = null, unidadesMayoristas = null, onSuccess }) {
  const nuevoFormulario = () => ({ nombre: '', telefono: '', tipo_pedido: tipoInicial, direccion: '', detalles: detallesIniciales, fecha_entrega: '', metodo_pago: '', referencia_pago: '', pago_declarado: false })
  const [formulario, setFormulario] = useState(nuevoFormulario)
  const [mensaje, setMensaje] = useState('')
  const [enviando, setEnviando] = useState(false)
  const envioEnCurso = useRef(false)
  const [qrLoaded, setQrLoaded] = useState(false)
  const [qrError, setQrError] = useState(false)
  const qrUrl = PAYMENT_QR_URL
  const currency = PAYMENT_CURRENCY
  const dates = deliveryDates(todayISO())
  const totalValido = Number.isFinite(totalPedido) && totalPedido > 0
  const minimoValido = unidadesMayoristas === null || unidadesMayoristas >= 71
  const qrExpired = todayISO() > PAYMENT_QR_EXPIRES
  const qrReady = Boolean(qrUrl) && qrLoaded && !qrError && !qrExpired && minimoValido
  const [lastTotal, setLastTotal] = useState(totalPedido)
  if (lastTotal !== totalPedido) {
    setLastTotal(totalPedido)
    setFormulario(previous => ({ ...previous, referencia_pago: '', pago_declarado: false }))
  }
  const manejarCambio = ({ target: { name, value } }) => {
    setFormulario(anterior => ({ ...anterior, [name]: value }))
  }
  const enviarPedido = async (event) => {
    event.preventDefault()
    if (envioEnCurso.current || !supabase) return
    let pedido
    try {
      pedido = buildPedido({ form: formulario, details: detallesIniciales, total: totalPedido, currency, qrReady, wholesaleUnits: unidadesMayoristas })
    } catch (error) {
      setMensaje(error.message)
      return
    }
    envioEnCurso.current = true
    setEnviando(true)
    setMensaje('')
    try {
      const { error } = await supabase.from('pedidos').insert([pedido])
      if (error) throw error
      setMensaje(formulario.metodo_pago === 'qr' ? 'Solicitud enviada. Verificaremos tu pago por QR para confirmar el pedido.' : '¡Solicitud enviada! Pagarás en efectivo al momento de la entrega.')
      setFormulario(nuevoFormulario())
      onSuccess?.()
    } catch {
      setMensaje('No se pudo confirmar el envío. Comprueba tu conexión antes de intentar nuevamente.')
    } finally {
      envioEnCurso.current = false
      setEnviando(false)
    }
  }
  return (
      <section className="rounded-3xl bg-white p-4 shadow-md">
  <h3 className="text-xl font-bold text-on-surface">
    Solicita tu pedido
  </h3>

  <p className="mt-1 text-sm text-on-surface-variant">
    Déjanos tus datos y te contactaremos para confirmar tu pedido.
  </p>

  {!supabase && <p role="alert" className="mt-4 text-sm">Los pedidos no están disponibles en este momento. Intenta más tarde.</p>}
  <form onSubmit={enviarPedido} className="mt-4 space-y-4">
    <div>
      <label htmlFor="pedido-nombre" className="mb-1 block text-sm font-bold">
        Nombre
      </label>

      <input
        type="text"
        id="pedido-nombre"
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        required
        placeholder="Tu nombre"
        className="w-full rounded-2xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-primary"
      />
    </div>

    <div>
      <label htmlFor="pedido-telefono" className="mb-1 block text-sm font-bold">
        Teléfono
      </label>

      <input
        type="tel"
        id="pedido-telefono"
        name="telefono"
        value={formulario.telefono}
        onChange={manejarCambio}
        required
        placeholder="Tu número"
        className="w-full rounded-2xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-primary"
      />
    </div>

    <div>
      <label htmlFor="pedido-tipo_pedido" className="mb-1 block text-sm font-bold">
        Tipo de pedido
      </label>

      <select
        id="pedido-tipo_pedido"
        name="tipo_pedido"
        value={formulario.tipo_pedido}
        onChange={manejarCambio}
        className="w-full rounded-2xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-primary"
      >
        <option>Delivery a domicilio</option>
        <option>Punto de venta / B2B</option>
        <option>Evento</option>
      </select>
    </div>

    <div>
      <label htmlFor="pedido-direccion" className="mb-1 block text-sm font-bold">
        Dirección
      </label>

      <input
        type="text"
        id="pedido-direccion"
        name="direccion"
        value={formulario.direccion}
        onChange={manejarCambio}
        required
        placeholder="Dirección de entrega"
        className="w-full rounded-2xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-primary"
      />
    </div>

    <div>
      <label htmlFor="pedido-fecha" className="mb-1 block text-sm font-bold">Fecha de entrega</label>
      <select id="pedido-fecha" name="fecha_entrega" value={formulario.fecha_entrega} onChange={manejarCambio} required aria-describedby="dias-entrega" className="w-full rounded-2xl border border-outline-variant bg-surface px-4 py-3">
        <option value="">Selecciona una fecha</option>
        {dates.map(date => <option key={date} value={date}>{dateLabel(date)}</option>)}
      </select>
      <p id="dias-entrega" className="mt-1 text-sm text-on-surface-variant">Entregamos únicamente lunes, miércoles y viernes.</p>
    </div>

    {!minimoValido && <p role="alert" className="text-sm font-bold text-primary-ink">El precio mayorista de Bs 9 por paleta requiere más de 70 unidades. Selecciona al menos 3 cajas (72 paletas).</p>}
    <fieldset className="space-y-3 rounded-2xl border border-outline-variant p-4">
      <legend className="px-1 font-bold">Forma de pago</legend>
      {totalValido && <p className="font-bold text-primary-ink">Total: {totalPedido.toFixed(2)} {currency}</p>}
      <label className="flex items-center gap-2">
        <input type="radio" name="metodo_pago" value="efectivo" checked={formulario.metodo_pago === 'efectivo'} onChange={manejarCambio} required />
        Efectivo al momento de la entrega
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="metodo_pago" value="qr" checked={formulario.metodo_pago === 'qr'} onChange={manejarCambio} required />
        Pagar el total por QR
      </label>
      {formulario.metodo_pago === 'efectivo' && <p className="text-sm">Paga al repartidor cuando recibas tu pedido.</p>}
      {formulario.metodo_pago === 'qr' && <div className="space-y-3">
        {qrExpired ? <p role="alert">El QR de pago venció. Selecciona efectivo al recibir.</p> : !qrUrl ? <p role="alert" className="text-sm">El pago por QR todavía no está disponible. Puedes seleccionar efectivo al recibir.</p> : <>
          {totalValido ? <p>Escanea el QR y paga el total de <strong>{totalPedido.toFixed(2)} {currency}</strong>.</p> : <p role="alert">Selecciona productos del catálogo para calcular el total antes de pagar por QR.</p>}
          {totalValido && minimoValido && <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-white" style={{aspectRatio: '716 / 1096'}}><img src={qrUrl} alt="Código QR de pago de la paletería" onLoad={() => {setQrLoaded(true); setQrError(false)}} onError={() => {setQrLoaded(false); setQrError(true)}} className="absolute left-0 h-auto w-full max-w-none" style={{top: '-22.99%'}} /></div>}
          {totalValido && minimoValido && <a href={qrUrl} target="_blank" rel="noopener noreferrer" className="block text-center underline text-secondary-ink">Abrir QR en tamaño completo</a>}
          {qrError && <p role="alert">No se pudo cargar el QR. Intenta más tarde o selecciona efectivo.</p>}
          <label htmlFor="pedido-referencia" className="block text-sm font-bold">Referencia o número de transacción</label>
          <input id="pedido-referencia" name="referencia_pago" value={formulario.referencia_pago} onChange={manejarCambio} required className="w-full rounded-xl border border-outline-variant p-3" />
          <label className="flex items-start gap-2 text-sm"><input type="checkbox" checked={formulario.pago_declarado} onChange={event => setFormulario(previous => ({...previous, pago_declarado: event.target.checked}))} required />Ya pagué el total indicado por QR.</label>
          <p className="text-sm text-on-surface-variant">Verificaremos la transferencia antes de confirmar el pedido.</p>
        </>}
      </div>}
    </fieldset>

    <div>
      <label htmlFor="pedido-detalles" className="mb-1 block text-sm font-bold">
        Detalles del pedido
      </label>

      <textarea
        rows="4"
        id="pedido-detalles"
        name="detalles"
        value={detallesIniciales || formulario.detalles}
        readOnly={Boolean(detallesIniciales)}
        onChange={manejarCambio}
        placeholder="Ejemplo: 12 paletas de mango, 6 de fresa..."
        className="w-full rounded-2xl border border-outline-variant bg-surface px-4 py-3 outline-none focus:border-primary"
      />
    </div>

    <button
      type="submit"
      disabled={enviando || !supabase || !minimoValido || (formulario.metodo_pago === 'qr' && (!qrReady || !totalValido))}
      className="w-full rounded-full bg-primary px-4 py-3 font-bold text-on-primary disabled:opacity-50"
    >
      {enviando ? 'Enviando...' : 'Enviar pedido'}
    </button>

    {mensaje && (
      <p role="status" className="text-center text-sm font-bold text-on-surface">
        {mensaje}
      </p>
    )}
  </form>
</section>

  )
}
