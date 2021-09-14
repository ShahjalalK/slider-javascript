const textInput = document.getElementById('textInput')

class Search{
    static filter(){
        const text = textInput.value.toUpperCase()
        const listGroup = document.querySelector('.list-group')
        const li = listGroup.querySelectorAll('li.list-group-item')
        Array.from(li).forEach((item) => {
            const items = item.firstChild.textContent
           if(items.toUpperCase().indexOf(text) != -1){
               item.style.display = 'block'
           }else{
            item.style.display = 'none'
           }
            
        })
    }
}

textInput.addEventListener('keyup', () => {
    Search.filter()
})