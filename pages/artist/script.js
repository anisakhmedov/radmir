import { CreateAlbum } from "../../lib/components/alboms"
import { createMusic } from "../../lib/components/music"
import ApiHandler from "../../lib/http.request"
import { CreateLeftSide, createFotter, createHeader, createPlayer, reload } from "../../lib/ui"

const PUBLIC_URL = new ApiHandler(import.meta.env.VITE_PUBLIC_URL)

const left_side = document.querySelector('.left_side')
const header = document.querySelector('.header')
const artistImg = document.querySelector('.img_artist')
const artistFollowers = document.querySelector('.popularity')
const artistName = document.querySelector('.name')
const container_music = document.querySelector('.container_music')
const more = document.querySelector('.more')
const music_albums = document.querySelector('.music_albums')
const foote = document.querySelector('footer')
const player = document.querySelector('.footer-player')

CreateLeftSide(left_side)
createHeader(header)
createFotter(foote)
createPlayer(player)

const url = location.href;
const id = url.split('?').at(-1);



PUBLIC_URL.getData(`/artists/${id}`)
    .then(artist => {
        const imageUrl = artist.images[2].url
        artistName.innerHTML = artist.name
        artistFollowers.innerHTML = `${artist.followers.total.toLocaleString()} ${'Слушателей'}`;
        artistImg.style.backgroundImage = `url(${imageUrl})`
    })

PUBLIC_URL.getData(`/artists/${id}/top-tracks`)
    .then(res => {
        reload(res.tracks.slice(0, 5), createMusic, container_music)
    })


let open = false

more.onclick = () => {
    if (open === false) {

        PUBLIC_URL.getData(`/artists/${id}/top-tracks`)
            .then(res => {

                reload(res.tracks, createMusic, container_music)
                open = true;
            })
    } else {
        PUBLIC_URL.getData(`/artists/${id}/top-tracks`)
            .then(res => {
                reload(res.tracks.slice(0, 5), createMusic, container_music)
                open = false;
            })
    }
}


PUBLIC_URL.getData(`/artists/${id}/albums`)
    .then(res => {
        reload(res.items.slice(0, 4), CreateAlbum, music_albums)
    })