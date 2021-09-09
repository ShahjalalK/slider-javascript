
const FormId = document.getElementById('form-id')
const itemsValue = document.getElementById('itemsValue')
const users = document.getElementById('users')
const filter = document.getElementById('filter')


FormId.addEventListener('submit', (e) => {
   e.preventDefault()
  const itemsValues = itemsValue.value
   if(itemsValue.value == ''){

   }else{
    const li = document.createElement('li')
    li.className = 'item'
    li.appendChild(document.createTextNode(itemsValues))
    users.appendChild(li)
    const i = document.createElement('i')
    i.className = 'fas fa-times delate'
    li.appendChild(i)
    itemsValue.value = ''
    li.addEventListener('click', (e) => {
        if(e.target.classList.contains('delate')){
            const items = e.target.parentElement;
           users.removeChild(items)
        }
    })
   }   
})


filter.addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase()
    const items = users.getElementsByTagName('li') 
    Array.from(items).forEach((item) => {
        const itemContent = item.firstChild.textContent
        if(itemContent.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
})
