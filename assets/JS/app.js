let inputEmail = document.getElementsByClassName('input-container')

inputEmail[0].addEventListener('click', () => {
    let send = document.getElementById('sendIcon')
    send.innerHTML = 'tspan { white-space:pre } .shp0 { fill: red }'
    inputEmail[0].addEventListener('mouseleave', () => {
        send.innerHTML = 'tspan { white-space:pre } .shp0 { fill: #6fb048 }'
    })
})

