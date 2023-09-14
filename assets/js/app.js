

let wel = document.getElementById('spread01')

let wel01 = [...wel.textContent];
console.log(wel01)

let wel02 = wel01.map(add=>
     {
        return  `<span>${add}</span>`
    })

wel.innerHTML = wel02.join('')
















