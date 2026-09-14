import test from 'node:test'
import assert from 'node:assert/strict'
import {boxes,totals,money,RETAIL_PRICE} from '../src/shop.js'
test('cada caja de 24 cuesta Bs 216',()=>{assert.ok(boxes.every(box=>box.price===216))})
test('3 cajas cuestan Bs 648 sin descuento adicional',()=>{assert.equal(totals([{...boxes[0],qty:3,mode:'b2b'}]).total,648)})
test('10 cajas mantienen el precio de Bs 9 por paleta',()=>{assert.equal(totals([{...boxes[0],qty:10,mode:'b2b'}]).total,2160)})
test('precio minorista fijo incluso por encima de 70 unidades',()=>{assert.equal(totals([{price:RETAIL_PRICE,qty:71,mode:'delivery'}]).total,852)})
test('todos los totales se expresan en Bs',()=>{assert.equal(money(648),'Bs 648.00')})
