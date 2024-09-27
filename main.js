import ApiHandler from "./lib/http.request.js"
import { CreateLeftSide, createFotter, createHeader, createPlayer, reload } from "./lib/ui.js"
import { CreateAlbum } from "./lib/components/alboms.js"
import { CreateActots } from "./lib/components/artist.js"

const PUBLIC_URL = new ApiHandler(import.meta.env.VITE_PUBLIC_URL)
const hash = location.hash
const token = localStorage.getItem('token')
const atists = document.querySelector('.atists')
const specialy_for = document.querySelector('.popular')
const specialy_music = document.querySelector('.music')
const top = document.querySelector('.top_play')
const left_side = document.querySelector('.left_side')
const header = document.querySelector('.header')
const player = document.querySelector('.footer-player')
const bottom = document.querySelector('footer')

CreateLeftSide(left_side)
createHeader(header)
createPlayer(player)
createFotter(bottom)

if (!token && hash) {
    let token = hash.split('=')[1]

    localStorage.setItem('token', token)
    location.href = ""
}

PUBLIC_URL.getData(`/browse/new-releases`)
    .then(res => {
        let albums = res.albums.items
        let sortedAlbums = []

        albums.forEach(album => {
            if (album.total_tracks >= 7) {
                sortedAlbums.push(album)
            }
        })

        reload(sortedAlbums.splice(2, 8), CreateAlbum, top)
    })

PUBLIC_URL.getData('/me')
    .then(me => {
        specialy_for.innerHTML = 'Made For ' + me.display_name
    })


PUBLIC_URL.getData(`/browse/new-releases`)
    .then(res => {
        let albums = res.albums.items
        let sortedAlbums = []

        albums.forEach(album => {
            if (album.total_tracks >= 10) {
                sortedAlbums.push(album)
            }
        })

        reload(sortedAlbums.splice(1, 4), CreateAlbum, specialy_music)
    })


PUBLIC_URL.getData(`/artists?ids=2CIMQHirSU0MQqyYHq0eOx,3TVXtAsR1Inumwj472S9r4,1vCWHaC5f2uS3yhpwWbIA6,1Xyo4u8uXC1ZmMpatF05PJ,3Nrfpe0tUJi4K4DXYWgMUX,6eUKZXaKkcviH0Ku9w2n3V`)
    .then(res => {
        reload(res.artists.slice(0, 4), CreateActots, atists);
    })



