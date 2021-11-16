$(document).ready(() => {
    const config = {
        animate: 'slow',
        value: 130,
        range: 'max',
        max: 255,
    }
    let red = config.value
    let green = config.value
    let blue = config.value

    let currentEvent = 'background'

    const changeColor = (element, color) => {
        let value = $(element).slider('value')
        if (color === 'blue') {
            blue = value
        } else if (color === 'green') {
            green = value
        } else {
            red = value
        }
        let style = `rgb(${red}, ${green}, ${blue})`
        $('.content-result__field').css({[currentEvent]: style}) 
    }
    
    const addActiveBtn = (currentElem, removeElem, event) => {
        $(currentElem).addClass('active')
        $(removeElem).removeClass('active')
        currentEvent = event
    }

    $('.select-setting__color').on('click', function() {
        addActiveBtn(this, '.select-setting__background-color', 'color')
    })
    $('.select-setting__background-color').on('click', function() {
        addActiveBtn(this, '.select-setting__color', 'background')
    })

    $('#polzunok-red').slider({
        ...config,
        change: function(e, ui) {
            changeColor(this, 'red')
        }
    })
    $('#polzunok-green').slider({
        ...config,
        change: function(e, ui) {
            changeColor(this, 'green')
        }  
    })
    $('#polzunok-blue').slider({
        ...config,
        change: function(e, ui) {
            changeColor(this, 'blue')
        }
    })
})
