document.addEventListener('DOMContentLoaded',function(){
    const header = document.getElementById('Place')

    const info = {
        SN: 'Пахомов Виктор Васильевич',
        group: '№231'
    }

    const infoElement = document.createElement('h1')
    infoElement.textContent = `${info.SN} ${info.group}`
    header.appendChild(infoElement)
})