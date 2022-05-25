var btn = document.createElement('input')
document.body.appendChild(btn)
btn.setAttribute('class', 'btn btn-info')
btn.style.width = '80px'
btn.style.height = '40px'
btn.value = 'click'
btn.readOnly = 'true'
btn.style.margin = '10px'
    // ========================
var x = document.createElement('div')
document.body.appendChild(x);

x.style.background = "#7D7DE5"
x.style.width = "200px"
x.style.height = "200px"
x.style.borderRadius = '50%'
x.style.padding = "25px"
x.setAttribute('class', 'div1')
console.log(x);
//=====================
var y = document.createElement('div')
document.body.appendChild(y);

y.style.background = "#7DE57D"
y.style.width = "200px"
y.style.height = "200px"
y.style.borderRadius = '50%'
y.style.padding = "25px"
y.setAttribute('class', 'div1')
console.log(x);
//======================
var z = document.createElement('div')
document.body.appendChild(z);

z.style.background = "#FF6347"
z.style.width = "200px"
z.style.height = "200px"
z.style.borderRadius = '50%'
z.style.padding = "25px"
z.setAttribute('class', 'div1')
console.log(x);

//======================================
btn.addEventListener(('click'), (e) => {
    x.style.position = 'absolute'
    x.style.top = `${Math.random() * 600}px`
    x.style.left = `${Math.random() * 600}px`
        //======
    y.style.position = 'absolute'
    y.style.top = `${Math.random() * 600}px`
    y.style.right = `${Math.random() * 600}px`
        //======
    z.style.position = 'absolute'
    z.style.top = `${Math.random() * 600}px`
    z.style.right = `${Math.random() * 1200}px`


})