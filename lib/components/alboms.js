export function CreateAlbum(item) {

    
    const div = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('p')
    const actors = document.createElement('p')

    div.onclick = () => {
        location.assign(`/pages/album/?${item.id}` )
    }

    
    div.classList.add('item')
    name.classList.add('name')
    actors.classList.add('actor_name')

    name.innerHTML =  item.name
    actors.innerHTML  = item.type

    img.src = item.images[0].url

    div.append(img , name , actors)
    
    return div
}