var ovals = document.querySelectorAll('.oval')
ovals.forEach(oval => {
    let radius = oval.clientWidth / 2,
        icons = oval.querySelectorAll('.anim_icon'),
        fixed_radian = (Math.PI * (360 / icons.length)) / 180,
        radian = fixed_radian
        icons.forEach(icon => {
            let x = radius + Math.cos(radian) * radius,
                y = radius - Math.sin(radian) * radius,
                w = icon.clientWidth / 2,
                h = icon.clientHeight / 2

            icon.style.left = x - w + 'px'
            icon.style.top = y - h + 'px'
            radian += fixed_radian
        })
})