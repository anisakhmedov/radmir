export function CreateActots(item) {

    const artistDiv = document.createElement('div');
    artistDiv.className = 'artist';

    artistDiv.onclick = () => {
        location.assign(`pages/artist/?${item.id}` )
    }

  
    const artistPhoto = document.createElement('img');
    artistPhoto.className = 'artist_photo';
    artistPhoto.src =item.images[0].url;
    artistPhoto.alt = '';

    const nameArtistDiv = document.createElement('div');
    nameArtistDiv.className = 'name_artist';

  
    const songerName = document.createElement('h1');
    songerName.className = 'songer_name';
    songerName.textContent = item.name;

    const songerRole = document.createElement('p');
    songerRole.className = 'songer';
    songerRole.textContent = item.type;

    const playingDiv = document.createElement('div');
    playingDiv.className = 'playing';

    const playIcon = document.createElement('img');
    playIcon.className = 'play';
    playIcon.src = './img/play-green.svg';
    playIcon.alt = '';
    
    
    nameArtistDiv.append(songerName , songerRole);
    playingDiv.append(playIcon);
    artistDiv.append(artistPhoto , nameArtistDiv , playingDiv);
  
   return artistDiv
}