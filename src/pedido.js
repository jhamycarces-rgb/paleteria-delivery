const DELIVERY_DAYS = new Set([1, 3, 5])

export function todayISO(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/La_Paz', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now)
  const value = type => parts.find(part => part.type === type).value
  return `${value('year')}-${value('month')}-${value('day')}`
}

export function validDeliveryDate(value, today = todayISO()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T12:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
    && value >= today && DELIVERY_DAYS.has(date.getUTCDay())
}

export function deliveryDates(today = todayISO()) {
  const first = new Date(`${today}T12:00:00Z`)
  return Array.from({ length: 90 }, (_, offset) => {
    const date = new Date(first)
    date.setUTCDate(first.getUTCDate() + offset)
    return date.toISOString().slice(0, 10)
  }).filter(date => validDeliveryDate(date, today))
}

export function dateLabel(value) {
  return new Intl.DateTimeFormat('es-BO', {
    timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(`${value}T12:00:00Z`))
}

// Keep the existing pedidos table contract: scheduling and payment metadata
// are included in detalles until dedicated database columns are configured.
export function buildPedido({ form, details = '', total, currency = 'Bs', qrReady = false, wholesaleUnits = null, today = todayISO() }) {
  const required = ['nombre', 'telefono', 'direccion']
  if (required.some(key => !form[key]?.trim())) throw new Error('Completa nombre, teléfono y dirección.')
  if (!validDeliveryDate(form.fecha_entrega, today)) throw new Error('Elige una fecha vigente de lunes, miércoles o viernes.')
  if (!['efectivo', 'qr'].includes(form.metodo_pago)) throw new Error('Selecciona una forma de pago.')
  if (wholesaleUnits !== null && (!Number.isInteger(wholesaleUnits) || wholesaleUnits < 71)) throw new Error('El pedido mayorista requiere más de 70 paletas: selecciona al menos 3 cajas de 24.')
  const knownTotal = Number.isFinite(total) && total > 0
  if (form.metodo_pago === 'qr') {
    if (!qrReady) throw new Error('El QR no está disponible. Selecciona efectivo o intenta más tarde.')
    if (!knownTotal) throw new Error('Selecciona productos para calcular el total antes de pagar por QR.')
    if (!form.referencia_pago?.trim()) throw new Error('Ingresa la referencia de tu transferencia.')
    if (!form.pago_declarado) throw new Error('Confirma que realizaste el pago completo por QR.')
  }
  const metadata = [
    `Fecha de entrega: ${form.fecha_entrega} (${dateLabel(form.fecha_entrega)})`,
    `Forma de pago: ${form.metodo_pago === 'qr' ? 'QR' : 'Efectivo al momento de la entrega'}`,
    knownTotal ? `Total del pedido: ${total.toFixed(2)} ${currency}` : 'Total: pendiente de cotización',
    form.metodo_pago === 'qr'
      ? `Estado de pago: declarado por el cliente, pendiente de verificación. Referencia: ${form.referencia_pago.trim()}`
      : 'Estado de pago: pendiente de cobro al entregar',
  ]
  return {
    nombre: form.nombre.trim(), telefono: form.telefono.trim(),
    tipo_pedido: form.tipo_pedido.trim(), direccion: form.direccion.trim(),
    detalles: [(details || form.detalles || '').trim(), ...metadata].filter(Boolean).join('\n'),
  }
}
