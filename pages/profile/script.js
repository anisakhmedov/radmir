    
import ApiHandler from "../../lib/http.request"
import { CreateLeftSide, createFotter, createHeader, createPlayer, reload } from "../../lib/ui"

const PUBLIC_URL = new ApiHandler(import.meta.env.VITE_PUBLIC_URL)


const left_side = document.querySelector('.left_side')
const header = document.querySelector('.header')
const exit = document.querySelector('.exit')
const artistImg = document.querySelector('.img_artist')
const artistName = document.querySelector('.name_user')
const foote = document.querySelector('footer')
const player = document.querySelector('.footer-player')

CreateLeftSide(left_side)
createHeader(header)
createFotter(foote)
createPlayer(player)

PUBLIC_URL.getData('/me')
    .then(me => {
        artistImg.src = me.images[1].url
        artistName.innerHTML = me.display_name
    })

exit.onclick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};