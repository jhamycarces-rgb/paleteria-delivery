import test from 'node:test'
import assert from 'node:assert/strict'
import { buildPedido, validDeliveryDate, deliveryDates, todayISO } from '../src/pedido.js'
const form = {nombre:' Ana ',telefono:' 123 ',direccion:' Calle 1 ',tipo_pedido:'Punto de venta / B2B',detalles:'Una caja',fecha_entrega:'2026-09-14',metodo_pago:'efectivo'}
const options = {form,total:100,today:'2026-09-13'}
test('solo lunes, miércoles y viernes vigentes',()=>{
  for(const day of ['14','16','18']) assert.equal(validDeliveryDate(`2026-09-${day}`,'2026-09-13'),true)
  for(const day of ['13','15','17','19','20']) assert.equal(validDeliveryDate(`2026-09-${day}`,'2026-09-13'),false)
  assert.equal(validDeliveryDate('2026-09-11','2026-09-13'),false)
  assert.equal(validDeliveryDate('2026-02-30','2026-01-01'),false)
  assert.equal(validDeliveryDate('', '2026-09-13'),false)
})
test('fechas cruzan mes y año sin incluir días inválidos',()=>{
  const dates=deliveryDates('2026-12-31');assert.ok(dates.length>30)
  assert.equal(dates[0],'2027-01-01')
  assert.ok(dates.every(d=>validDeliveryDate(d,'2026-12-31')))
})
test('fecha comercial no cambia prematuramente con UTC',()=>{
  assert.equal(todayISO(new Date('2026-09-14T02:00:00Z')),'2026-09-13')
})
test('efectivo conserva contrato de tabla y guarda fecha y pago',()=>{
 const pedido=buildPedido(options)
 assert.deepEqual(Object.keys(pedido).sort(),['nombre','telefono','tipo_pedido','direccion','detalles'].sort())
 assert.equal(pedido.nombre,'Ana');assert.match(pedido.detalles,/2026-09-14/)
 assert.match(pedido.detalles,/Efectivo al momento/);assert.match(pedido.detalles,/pendiente de cobro/)
})
test('rechaza fecha y método inválidos',()=>{
 assert.throws(()=>buildPedido({...options,form:{...form,fecha_entrega:'2026-09-15'}}))
 assert.throws(()=>buildPedido({...options,form:{...form,metodo_pago:''}}))
})
test('QR requiere código, total, referencia y declaración',()=>{
 const qr={...options,form:{...form,metodo_pago:'qr',referencia_pago:'TX-1',pago_declarado:true},qrReady:true}
 assert.throws(()=>buildPedido({...qr,qrReady:false}))
 assert.throws(()=>buildPedido({...qr,total:null}))
 assert.throws(()=>buildPedido({...qr,total:0}))
 assert.throws(()=>buildPedido({...qr,form:{...qr.form,referencia_pago:' '}}))
 assert.throws(()=>buildPedido({...qr,form:{...qr.form,pago_declarado:false}}))
 assert.match(buildPedido(qr).detalles,/pendiente de verificación/)
})

test('mayoristas exige más de 70 unidades también al enviar',()=>{
  assert.throws(()=>buildPedido({...options,wholesaleUnits:0}))
  assert.throws(()=>buildPedido({...options,wholesaleUnits:70}))
  assert.doesNotThrow(()=>buildPedido({...options,wholesaleUnits:71}))
  assert.doesNotThrow(()=>buildPedido({...options,wholesaleUnits:72}))
})
