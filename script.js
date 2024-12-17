var screen=document.querySelector('.calculator .screen input')
var btn=document.querySelectorAll('.calculator .operation .action button')

btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData= screen.value
        prevData=prevData+button.getAttribute('data-attr').toString()
        screen.value=prevData
    })
})
var numberbuttons=document.querySelectorAll('.calculator .operation .numbers button')
numberbuttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData=screen.value
        prevData=prevData+button.getAttribute('data-attr').toString()
        screen.value=prevData
    })
})
var clearButton=document.querySelector('.calculator .operation .numbers .clear')
var equalButton=document.querySelector('.calculator .operation .numbers .equal')
var tanButton=document.querySelector('.calculator .operation .numbers .tan')
 clearButton.addEventListener('click',()=>{
    screen.value=""
 })

 equalButton.addEventListener('click',()=>{
    let expression=screen.value
    let result=eval(expression)
    screen.value=result
 })
tanButton.addEventListener('click',()=>{
    let expression=screen.value-1
    let result=eval(expression)
    screen.value=result
})



// var screen = document.querySelector('.calculator .screen input')
// var actionButtons = document.querySelectorAll('.calculator .operation .action button')

// actionButtons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         let prevData = screen.value
//         prevData=prevData+button.getAttribute('data-attr').toString()
//         screen.value = prevData
//     })

// })

// var numberButtons = document.querySelectorAll('.calculator .operation .number button')
// numberButtons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         let prevData = screen.value
//         prevData=prevData+button.getAttribute('data-attr').toString()
//         screen.value = prevData
//     })
// })

// var clearButton = document.querySelector('.calculator .operation .number .clear')
// var equalButton = document.querySelector('.calculator .operation .number .equal')

// clearButton.addEventListener('click',()=>{
//     screen.value=""
// })

// equalButton.addEventListener('click',()=>{
//     let expression = screen.value
//     let result = eval(expression)
//     screen.value=result
// })