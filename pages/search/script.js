import { CreateAlbum } from "../../lib/components/alboms"
import { CreateActots } from "../../lib/components/artist"
import ApiHandler from "../../lib/http.request"
import { CreateLeftSide, createAlbumMus, createFotter, createHeader, createPlayer, reload } from "../../lib/ui"

const PUBLIC_URL = new ApiHandler(import.meta.env.VITE_PUBLIC_URL)

const left_side = document.querySelector('.left_side')
const header = document.querySelector('.header')
const more = document.querySelector('.more')
const container_music = document.querySelector('.container_music')
const music_albums = document.querySelector('.music_albums')
const foote = document.querySelector('footer')
const player = document.querySelector('.footer-player')
const atists = document.querySelector('.atists')

CreateLeftSide(left_side)
createHeader(header)
createFotter(foote)
createPlayer(player)

const search = document.querySelector('.search-input')

search.onkeyup = () => {

    let searchTerm = search.value.trim();

    if (searchTerm !== '') {
        PUBLIC_URL.getData(`/search?q=${searchTerm}&type=artist%2Ctrack%2Calbum%2Caudiobook%2Cepisode%2Cshow`)
            .then(res => {


                reload(res.albums.items.slice(0, 4), CreateAlbum, music_albums)
                createAlbumMus(res.tracks.items.slice(0, 5), container_music)
                reload(res.artists.items.splice(0, 4), CreateActots, atists)

                let open = false

                more.onclick = () => {
                    if (open === false) {
                        reload(res.tracks.items, createAlbumMus, container_music)
                        open = true;

                    } else {
                        reload(res.tracks.items.slice(0, 5), createAlbumMus, container_music)
                        open = false;

                    }
                }
            })
    }
}




