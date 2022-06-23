var html_gen = (resp) => {
    const display = document.getElementById('display')
    display.innerHTML = ``
    let response_list = document.createElement('UL')
    
    for (const key in resp) {
        let list_item = document.createElement('LI')
        list_item.innerText = `${key} : ${resp[key]}`
        response_list.appendChild(list_item)
    }
    display.appendChild(response_list)
    console.log("list updated")
}
export default html_gen