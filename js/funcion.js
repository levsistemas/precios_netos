const BTN_CALCULO = document.getElementById('calculo')
const SPAN_DESCUENTO = document.getElementById('descuento')
const SPAN_PRECIO_NETO = document.getElementById('precio_neto')
const BTN_LIMPIAR = document.getElementById('limpiar')
const RESULTADO = document.getElementById('resultado')
const CONTAINER_DARKMODE = document.getElementById('container_dark')
const DARKMODE = document.getElementById('darkmode')

const LIGHT_DISABLED_COLOR = 'rgba(16, 16, 16, 0.3)'
const LIGHT_DISABLED_BACKGROUND = 'rgba(239, 239, 239, 0.3)'
const LIGHT_ENABLED_COLOR = 'rgb(0, 0, 0)'
const LIGHT_ENABLED_BACKGROUND = 'rgb(240, 240, 240)'

BTN_CALCULO.disabled=true
BTN_LIMPIAR.disabled=true

CONTAINER_DARKMODE.style.position = 'absolute'
CONTAINER_DARKMODE.style.top = '15%'
CONTAINER_DARKMODE.style.left = document.body.offsetWidth - CONTAINER_DARKMODE.offsetWidth - 20 + 'px'

document.getElementById('precio').addEventListener('input', () => {
    if(document.getElementById('precio').value!="" && document.getElementById('porcentaje').value!=""){
        BTN_CALCULO.disabled=false
        BTN_LIMPIAR.disabled=false
        analisisDarkMode()
    } else {
        BTN_CALCULO.disabled=true
        analisisDarkMode()
    }

    if(document.getElementById('precio').value=="" && document.getElementById('porcentaje').value==""){
        BTN_LIMPIAR.disabled=true
        analisisDarkMode()
    }

    if(document.getElementById('precio').value!="") {
        BTN_LIMPIAR.disabled=false
        analisisDarkMode()
    }

    if(document.getElementById('porcentaje').value!="") {
        BTN_LIMPIAR.disabled=false
        analisisDarkMode()
    }
})

document.getElementById('porcentaje').addEventListener('input', () => {
    if(document.getElementById('precio').value!="" && document.getElementById('porcentaje').value!=""){
        BTN_CALCULO.disabled=false
        BTN_LIMPIAR.disabled=false
        analisisDarkMode()
    } else {
        BTN_CALCULO.disabled=true
        analisisDarkMode()
    }

    if(document.getElementById('precio').value=="" && document.getElementById('porcentaje').value==""){
        BTN_LIMPIAR.disabled=true
        analisisDarkMode()
    }

    if(document.getElementById('precio').value!="") {
        BTN_LIMPIAR.disabled=false
        analisisDarkMode()
    }

    if(document.getElementById('porcentaje').value!="") {
        BTN_LIMPIAR.disabled=false
        analisisDarkMode()
    }
})

BTN_CALCULO.addEventListener('click', () => {
    const PRECIO = document.getElementById('precio')
    const PORCENTAJE = parseInt(document.getElementById('porcentaje').value)

    let precio_bruto = parseInt(PRECIO.value)
    let descuento = precio_bruto * (PORCENTAJE / 100)
    let precio_neto = precio_bruto - descuento

    SPAN_DESCUENTO.innerHTML = "$" + descuento
    SPAN_PRECIO_NETO.innerHTML = "$" + precio_neto
    RESULTADO.style.display = 'flex'
    RESULTADO.style.flexDirection = 'column'
    RESULTADO.style.alignItems = 'center'
})

document.getElementById('precio').addEventListener('keydown', (e) => {
    if(e.key == "Enter") {
        document.getElementById('porcentaje').focus()
    }
})

document.getElementById('porcentaje').addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        if(BTN_CALCULO.disabled==false && BTN_LIMPIAR.disabled==false) {
            if(document.getElementById('porcentaje').value.length >= 3) {
                const P = document.createElement('p')
                P.innerHTML = 'Verifica el porcentaje ingresado...' + document.getElementById('porcentaje').value
                P.style.backgroundColor = 'red'
                P.style.color = 'yellow'
                P.style.position = 'absolute'
                P.style.left = '10%'
                P.style.top = '55%'
                P.style.fontSize = '1.2em'
                document.body.appendChild(P)
                setTimeout(() => {
                    P.remove()
                }, 8000)
                document.getElementById('porcentaje').focus()
            } else {
                BTN_CALCULO.click()
            }
        }
    }
})

BTN_LIMPIAR.addEventListener('click', () => {
    borrarResultados()
    
})

DARKMODE.addEventListener('click', () => {
    analisisDarkMode()
})

function borrarResultados() {
    document.getElementById('precio').value=""
    document.getElementById('porcentaje').value=""
    SPAN_DESCUENTO.innerHTML=""
    SPAN_PRECIO_NETO.innerHTML=""
    RESULTADO.style.display = 'none'
    document.getElementById('precio').focus()
    BTN_CALCULO.disabled=true
    BTN_LIMPIAR.disabled=true
    analisisDarkMode()
}

function modoOscuro() {
    document.body.style.backgroundColor = 'black'

    document.querySelectorAll('h1').forEach(elemento => {
        elemento.style.color = 'white'
    })
    document.querySelectorAll('h2').forEach(elemento => {
        elemento.style.color = 'white'
    })
    document.querySelectorAll('h3').forEach(elemento => {
        elemento.style.color = 'white'
    })
    document.querySelectorAll('input[type="button"]').forEach(elemento => {
        elemento.style.backgroundColor = 'blue'
        if(elemento.disabled==true){
            elemento.style.color = 'red'
        } else {
            elemento.style.color = 'lightgreen'
        }
    })
    document.querySelectorAll('label').forEach(elemento => {
        elemento.style.color = 'white'
    })
    document.querySelectorAll('span').color = 'white'
    RESULTADO.style.backgroundColor = 'darkgoldenrod'
}

function modoClaro() {
    document.body.style.backgroundColor = 'white'
    
    document.querySelectorAll('h1').forEach(elemento => {
        elemento.style.color = 'black'
    })
    document.querySelectorAll('h2').forEach(elemento => {
        elemento.style.color = 'black'
    })
    document.querySelectorAll('h3').forEach(elemento => {
        elemento.style.color = 'black'
    })
    document.querySelectorAll('input[type="button"]').forEach(elemento => {
        elemento.style.backgroundColor = 'rgba(239, 239, 239, 0.3)'
        if(elemento.disabled==true){
            elemento.style.color = LIGHT_DISABLED_COLOR
            elemento.style.backgroundColor = LIGHT_DISABLED_BACKGROUND
        } else {
            elemento.style.color = 'black'
        }
    })
    document.querySelectorAll('label').forEach(elemento => {
        elemento.style.color = 'black'
    })
    document.querySelectorAll('span').color = 'black'
    RESULTADO.style.backgroundColor = 'lightblue'
}

function analisisDarkMode() {
    if(DARKMODE.checked==true) {
        modoOscuro()
    } else {
        modoClaro()
    }
}