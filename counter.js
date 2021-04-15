let ct = document.createElement('div')
let bt = document.createElement('button')
let bt2 = document.createElement('button')
let rs = document.createElement('button')
ct.appendChild(document.createTextNode('0'))
bt.appendChild(document.createTextNode('+'))
bt2.appendChild(document.createTextNode('-'))
rs.appendChild(document.createTextNode('X'))
document.querySelector('body').appendChild(ct)
document.querySelector('body').appendChild(bt)
document.querySelector('body').appendChild(bt2)
document.querySelector('body').appendChild(rs)
ct.id = 'q'
bt.id = 'w'
bt2.id = 'e'
rs.id = 'r'
bt.className = 'button1'
bt2.className = 'button2'
rs.className = 'button3'
let q = document.getElementById('q')
let w = document.getElementById('w')
let e = document.getElementById('e')
let r = document.getElementById('r')
let number = 0
w.addEventListener('click',function(event) {
  number += 1
  ct.innerHTML = number
})
e.addEventListener('click',function(event) {
  number -= 1
  ct.innerHTML = number
})
r.addEventListener('click',function(event) {
  number = 0
  ct.innerHTML = number
})
