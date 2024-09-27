import { millisToMinutesAndSeconds } from "../ui";

export function createMusic(item) {

    const trackItem = document.createElement('div');
    trackItem.classList.add('track-item');
    
    const trackPause = document.createElement('img');
    trackPause.classList.add('track-photo');
    trackPause.src =  '../../img/play-green.svg'
    trackItem.append(trackPause);

    let pause = false 

    trackPause.onclick = () => {
        if(pause === false) {

            trackPause.src = "../../img/Pause.svg"
            pause = true
        } else {
            trackPause.src =  '../../img/play-green.svg'
            pause = false
        }
    }
    
    const trackPhoto = document.createElement('img');
    trackPhoto.classList.add('track-photo');
    trackPhoto.src =  item.album.images[1].url
    trackItem.append(trackPhoto);
    
    
    const trackDetails = document.createElement('div');
    trackDetails.classList.add('track-details');
    
    
    const trackName = document.createElement('span');
    trackName.classList.add('track-name');
    trackName.textContent = item.name
    trackDetails.append(trackName);
    
    
    trackItem.append(trackDetails);
    
    
    const trackPlays = document.createElement('span');
    trackPlays.classList.add('track-plays');
    trackPlays.textContent = item.popularity + ' / 100'
    trackItem.append(trackPlays);
    
    
    const trackDuration = document.createElement('span');
    trackDuration.classList.add('track-duration');
    trackDuration.textContent = millisToMinutesAndSeconds(item.duration_ms)

    trackItem.append(trackDuration);
    
    
   return trackItem
}


