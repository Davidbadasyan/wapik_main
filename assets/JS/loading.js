window.onload = function(){
    setTimeout(() => {
        let header = document.getElementsByTagName('header')
        let main = document.getElementsByTagName('main')
        let footer = document.getElementsByTagName('footer')
        let loader = document.getElementsByClassName('loader')
        loader[0].style.display = 'none'

        header[0].style.visibility = 'visible'
        header[0].style.opacity = '1'

        main[0].style.visibility = 'visible'
        main[0].style.opacity = '1'

        footer[0].style.visibility = 'visible'
        footer[0].style.opacity = '1'
    }, 2000)
}