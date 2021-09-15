
const counters = document.querySelectorAll('#count')
const speed = 200


counters.forEach((counter) => {
    const upDate = () => {
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        console.log(count)
        const inc = target / speed
        console.log(inc)
        if(count < target){
            counter.innerText = count + inc
            setTimeout(upDate, 1)
        }else{
            counter.innerText = target 
        }
    }
    
    upDate()
})












 

