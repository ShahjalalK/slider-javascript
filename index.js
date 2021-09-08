const form = document.querySelector('#form-id')
const item = document.querySelector('.item')
const users = document.getElementById('users')
const filter = document.getElementById('filter')


form.addEventListener('submit', addItem)

function addItem (e){
e.preventDefault()
const itemsValue = document.getElementById('itemsValue').value
if(itemsValue == ''){

}else{
    const li = document.createElement('li')
    li.className = 'item'
    li.appendChild(document.createTextNode(itemsValue))
    users.appendChild(li)
    const i = document.createElement('i')
    i.className = 'fas fa-times delete'
    li.appendChild(i)
   li.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        const items = e.target.parentElement;
        users.removeChild(items)
        console.log(li)
    }
   })
}
    
}

filter.addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase();
    const items = users.getElementsByTagName('li')
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
})


