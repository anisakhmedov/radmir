import ApiHandler from "./http.request";

const PUBLIC_URL = new ApiHandler(import.meta.env.VITE_PUBLIC_URL)

export function reload(arr, component, place) {

  place.innerHTML = ""


  for (let item of arr) {

    const elem = component(item);

    place.append(elem);
  }

}

export function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


export function CreateLeftSide(place) {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');


  const logo = document.createElement('div');
  logo.classList.add('logo');
  const logoImg = document.createElement('img');
  if (window.location.href.includes('/pages')) {
    logoImg.src = '../../img/Spotify logo.png';
  } else {
    logoImg.src = '../img/Spotify logo.png';
  }

  logoImg.onclick = () => {
    location.assign('/')
  }

  logoImg.alt = '';
  logo.append(logoImg);


  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('menu-item');
  const menuImg1 = document.createElement('img');
  if (window.location.href.includes('/pages')) {
    menuImg1.src = '../../img/fi-ss-home.png';
  } else {
    menuImg1.src = '../img/fi-ss-home.png';
  }
  menuImg1.alt = '';
  const menuText1 = document.createElement('p');
  menuText1.textContent = 'Главная';
  menuItem1.append(menuImg1, menuText1);


  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menu-item');
  const menuImg2 = document.createElement('img');
  if (window.location.href.includes('/pages')) {
    menuImg2.src = '../../img/fi-rs-search.png';
  } else {
    menuImg2.src = '../img/fi-rs-search.png';
  }
  menuImg2.alt = '';
  const menuText2 = document.createElement('p');
  menuText2.textContent = 'Поиск';
  menuItem2.append(menuImg2, menuText2);

  menu.append(menuItem1, menuItem2);

  const library = document.createElement('div');
  library.classList.add('library');
  const libraryTitle = document.createElement('h3');
  libraryTitle.textContent = 'Моя медиатека';
  library.append(libraryTitle);

  const libraryItem1 = document.createElement('div');
  libraryItem1.classList.add('library-item');
  const libraryItem1Title = document.createElement('h4');
  libraryItem1Title.textContent = 'Создай свой первый плейлист';
  const libraryItem1Text = document.createElement('p');
  libraryItem1Text.textContent = 'Это совсем не сложно! Мы поможем.';
  const libraryItem1Button = document.createElement('button');
  libraryItem1Button.textContent = 'Создать плейлист';
  libraryItem1.append(libraryItem1Title, libraryItem1Text, libraryItem1Button);


  const libraryItem2 = document.createElement('div');
  libraryItem2.classList.add('library-item');
  const libraryItem2Title = document.createElement('h4');
  libraryItem2Title.textContent = 'Подпишись на интересные подкасты';
  const libraryItem2Text = document.createElement('p');
  libraryItem2Text.textContent = 'Ты будешь узнавать о новых выпусках.';
  const libraryItem2Button = document.createElement('button');
  libraryItem2Button.textContent = 'Обзор';
  libraryItem2.append(libraryItem2Title, libraryItem2Text, libraryItem2Button);

  library.append(libraryItem1, libraryItem2);
  sidebar.append(logo, menu, library);

  place.append(sidebar)
}


export function createHeader(place) {
  const leftDiv = document.createElement('div');
  leftDiv.classList.add('left');



  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');

  const searchInput = document.createElement('input');

  searchInput.classList.add('search-input');
  searchInput.placeholder = 'Что хочешь включить?';



  if (window.location.href.includes('/pages/search/')) {
    searchInput.type = '';
  } else {
    searchInput.onclick = () => {

      location.assign('/pages/search/')
    }
  }

  searchContainer.append(searchInput);


  const rightDiv = document.createElement('div');
  rightDiv.classList.add('right');

  const premiumButton = document.createElement('button');
  premiumButton.classList.add('premium');
  premiumButton.textContent = 'Узнать больше о Premium';

  const installButton = document.createElement('button');
  installButton.classList.add('install');
  installButton.textContent = 'Установить приложение';



  const userImg = document.createElement('img');
  userImg.classList.add('user');
  userImg.alt = '';

  userImg.onclick = () => {
    location.assign('/pages/profile/')
  }

  rightDiv.append(premiumButton, installButton, userImg);



  place.append(leftDiv, searchContainer, rightDiv);

}


export function createPlayer(place) {
  const footerPlayerLeft = document.createElement('div');
  footerPlayerLeft.classList.add('footer-player-left');

  const footerPlayerLeftSong = document.createElement('div');
  footerPlayerLeftSong.classList.add('footer-player-left-song');

  const songName = document.createElement('div');
  songName.classList.add('footer-player-left-song-name');
  songName.textContent = "rammior"

  const songArtist = document.createElement('div');
  songArtist.classList.add('footer-player-left-song-artist');
  songArtist.textContent = 'Passenger';

  footerPlayerLeftSong.appendChild(songName, songArtist);


  const footerPlayerLeftLike = document.createElement('div');
  footerPlayerLeftLike.classList.add('footer-player-left-like');

  const likeImg = document.createElement('img');
  likeImg.src = '../img/FiiledLike.svg';
  likeImg.alt = '';
  likeImg.classList.add('spotify-color');
  likeImg.style.height = '18px';
  likeImg.style.width = '18px';

  footerPlayerLeftLike.append(likeImg);

  footerPlayerLeft.append(footerPlayerLeftSong, footerPlayerLeftLike);



  const footerPlayerMiddle = document.createElement('div');
  footerPlayerMiddle.classList.add('footer-player-middle');

  const footerPlayerMiddleButtons = document.createElement('div');
  footerPlayerMiddleButtons.classList.add('footer-player-middle-buttons');

  const shuffleImg = document.createElement('img');
  shuffleImg.src = '../img/Shuffle.svg';
  shuffleImg.alt = '';
  shuffleImg.classList.add('gray-filtered');

  const previousImg = document.createElement('img');
  previousImg.src = '../img/Previous.svg';
  previousImg.alt = '';
  previousImg.classList.add('gray-filtered');

  const pauseButton = document.createElement('span');
  pauseButton.classList.add('pause-button');
  const pauseImg = document.createElement('img');
  pauseImg.src = '../img/Pause.svg ';

  pauseImg.alt = '';
  pauseButton.append(pauseImg);

  const nextImg = document.createElement('img');
  nextImg.src = '../img/Next.svg';
  nextImg.alt = '';
  nextImg.classList.add('gray-filtered');

  const repeatImg = document.createElement('img');
  repeatImg.src = '../img/Repeat.svg';
  repeatImg.alt = '';
  repeatImg.classList.add('gray-filtered');

  footerPlayerMiddleButtons.append(shuffleImg, previousImg, pauseButton, nextImg, repeatImg);

  const footerPlayerMiddleSlider = document.createElement('div');
  footerPlayerMiddleSlider.classList.add('footer-player-middle-slider');

  const currentTime = document.createElement('div');
  currentTime.classList.add('player-time');
  currentTime.textContent = '0:00';

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('player-slider');
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = '1';
  slider.max = '100';
  slider.value = '1';
  sliderContainer.append(slider);

  const totalTime = document.createElement('div');
  totalTime.classList.add('player-time');
  totalTime.textContent = '0:00';

  footerPlayerMiddleSlider.append(currentTime, sliderContainer, totalTime);


  footerPlayerMiddle.append(footerPlayerMiddleButtons, footerPlayerMiddleSlider);


  const footerPlayerRight = document.createElement('div');
  footerPlayerRight.classList.add('footer-player-right');

  const footerPlayerRightButtons = document.createElement('div');
  footerPlayerRightButtons.classList.add('footer-player-right-buttons');

  const lyricsImg = document.createElement('img');
  lyricsImg.src = '../img/Lyrics.svg';
  lyricsImg.alt = '';

  const queueImg = document.createElement('img');
  queueImg.src = '../img/Queue.svg';
  queueImg.classList.add('filtered-img');
  queueImg.alt = '';

  const connectImg = document.createElement('img');
  connectImg.src = '../img/Connect to a device.svg';
  connectImg.classList.add('filtered-img');
  connectImg.alt = '';

  const volumeImg = document.createElement('img');
  volumeImg.src = '../img/Volume.svg';
  volumeImg.classList.add('filtered-img');
  volumeImg.alt = '';

  const volumeSliderContainer = document.createElement('div');
  volumeSliderContainer.classList.add('player-slider');
  volumeSliderContainer.style.marginRight = '20px';
  volumeSliderContainer.style.width = '200px';
  const volumeSlider = document.createElement('input');
  volumeSlider.type = 'range';
  volumeSlider.min = '1';
  volumeSlider.max = '100';
  volumeSlider.value = '0';
  volumeSlider.style.width = '75px';
  volumeSlider.style.position = 'relative';
  volumeSlider.style.top = '-5px';
  volumeSliderContainer.append(volumeSlider);

  const fullscreenImg = document.createElement('img');
  fullscreenImg.src = '../img/Full screen.svg';
  fullscreenImg.classList.add('filtered-img');
  fullscreenImg.alt = '';

  footerPlayerRightButtons.append(lyricsImg, queueImg, connectImg, volumeImg, volumeSliderContainer, fullscreenImg);
  footerPlayerRight.append(footerPlayerRightButtons);


  place.append(footerPlayerLeft, footerPlayerMiddle, footerPlayerRight);

}



export function createFotter(place) {
  const footerContainer = document.createElement('div');
  footerContainer.className = 'footer-container';

  const companyColumn = document.createElement('div');
  companyColumn.className = 'footer-column';

  const companyHeader = document.createElement('h3');
  companyHeader.textContent = 'Компания';

  const companyList = document.createElement('ul');

  const companyItem1 = document.createElement('li');
  const companyLink1 = document.createElement('a');
  companyLink1.href = '#';
  companyLink1.textContent = 'О нас';
  companyItem1.append(companyLink1);

  const companyItem2 = document.createElement('li');
  const companyLink2 = document.createElement('a');
  companyLink2.href = '#';
  companyLink2.textContent = 'Вакансии';
  companyItem2.append(companyLink2);

  const companyItem3 = document.createElement('li');
  const companyLink3 = document.createElement('a');
  companyLink3.href = '#';
  companyLink3.textContent = 'For the Record';
  companyItem3.append(companyLink3);

  companyList.append(companyItem1, companyItem2, companyItem3);

  companyColumn.append(companyHeader, companyList);
  footerContainer.append(companyColumn);


  const communitiesColumn = document.createElement('div');
  communitiesColumn.className = 'footer-column';

  const communitiesHeader = document.createElement('h3');
  communitiesHeader.textContent = 'Сообщества';

  const communitiesList = document.createElement('ul');

  const communitiesItem1 = document.createElement('li');
  const communitiesLink1 = document.createElement('a');
  communitiesLink1.href = '#';
  communitiesLink1.textContent = 'Для исполнителей';
  communitiesItem1.append(communitiesLink1);

  const communitiesItem2 = document.createElement('li');
  const communitiesLink2 = document.createElement('a');
  communitiesLink2.href = '#';
  communitiesLink2.textContent = 'Для разработчиков';
  communitiesItem2.append(communitiesLink2);

  const communitiesItem3 = document.createElement('li');
  const communitiesLink3 = document.createElement('a');
  communitiesLink3.href = '#';
  communitiesLink3.textContent = 'Реклама';
  communitiesItem3.append(communitiesLink3);

  const communitiesItem4 = document.createElement('li');
  const communitiesLink4 = document.createElement('a');
  communitiesLink4.href = '#';
  communitiesLink4.textContent = 'Для инвесторов';
  communitiesItem4.append(communitiesLink4);

  const communitiesItem5 = document.createElement('li');
  const communitiesLink5 = document.createElement('a');
  communitiesLink5.href = '#';
  communitiesLink5.textContent = 'Для вендоров';
  communitiesItem5.append(communitiesLink5);

  communitiesList.append(communitiesItem1, communitiesItem2, communitiesItem3, communitiesItem4, communitiesItem5);
  communitiesColumn.append(communitiesHeader, communitiesList);
  footerContainer.append(communitiesColumn);


  const usefulLinksColumn = document.createElement('div');
  usefulLinksColumn.className = 'footer-column';

  const usefulLinksHeader = document.createElement('h3');
  usefulLinksHeader.textContent = 'Полезные ссылки';

  const usefulLinksList = document.createElement('ul');

  const usefulLinksItem1 = document.createElement('li');
  const usefulLinksLink1 = document.createElement('a');
  usefulLinksLink1.href = '#';
  usefulLinksLink1.textContent = 'Справка';
  usefulLinksItem1.append(usefulLinksLink1);

  const usefulLinksItem2 = document.createElement('li');
  const usefulLinksLink2 = document.createElement('a');
  usefulLinksLink2.href = '#';
  usefulLinksLink2.textContent = 'Бесплатное мобильное приложение';
  usefulLinksItem2.append(usefulLinksLink2);

  usefulLinksColumn.append(usefulLinksHeader, usefulLinksList)
  usefulLinksList.append(usefulLinksItem1, usefulLinksItem2);

  footerContainer.append(usefulLinksColumn);


  const plansColumn = document.createElement('div');
  plansColumn.className = 'footer-column';

  const plansHeader = document.createElement('h3');
  plansHeader.textContent = 'Планы Spotify';

  const plansList = document.createElement('ul');

  const plansItem1 = document.createElement('li');
  const plansLink1 = document.createElement('a');
  plansLink1.href = '#';
  plansLink1.textContent = 'Индивидуальная подписка';
  plansItem1.append(plansLink1);

  const plansItem2 = document.createElement('li');
  const plansLink2 = document.createElement('a');
  plansLink2.href = '#';
  plansLink2.textContent = 'Spotify Premium';
  plansItem2.append(plansLink2);

  const plansItem3 = document.createElement('li');
  const plansLink3 = document.createElement('a');
  plansLink3.href = '#';
  plansLink3.textContent = 'Premium для двоих';
  plansItem3.append(plansLink3);

  const plansItem4 = document.createElement('li');
  const plansLink4 = document.createElement('a');
  plansLink4.href = '#';
  plansLink4.textContent = 'Premium для семьи';
  plansItem4.append(plansLink4);

  const plansItem5 = document.createElement('li');
  const plansLink5 = document.createElement('a');
  plansLink5.href = '#';
  plansLink5.textContent = 'Premium для студентов';
  plansItem5.append(plansLink5);

  const plansItem6 = document.createElement('li');
  const plansLink6 = document.createElement('a');
  plansLink6.href = '#';
  plansLink6.textContent = 'Бесплатная версия Spotify';
  plansItem6.append(plansLink6);

  plansList.append(plansItem1, plansItem2, plansItem3, plansItem4, plansItem5, plansItem6);

  plansColumn.append(plansHeader, plansList);
  footerContainer.append(plansColumn);




  place.append(footerContainer)
}




export function createAlbumMus(arr, place) {
  const audio = document.createElement('audio')



  for (let item of arr) {
    const trackItem = document.createElement('div');
    const trackNumber = document.createElement('div');
    const trackPause = document.createElement('img');
    const trackDetails = document.createElement('div');
    const trackTitle = document.createElement('div');
    const trackArtist = document.createElement('div');
    const trackAlbum = document.createElement('div');
    const trackDuration = document.createElement('div');

    trackItem.className = 'track-item';
    trackNumber.className = 'track-number';
    trackNumber.textContent = '';
    audio.src = item.uri
 


    trackPause.classList.add('track-photo');
    trackPause.src = '../../img/play-green.svg'
    trackItem.append(trackPause);

    let pause = false;


    trackPause.onclick = () => {
      if (!pause) {
        audio.src = item.preview_url
        audio.play();
        trackPause.src = "../../img/Pause.svg";
        pause = true;
      } else {
        audio.pause();
        trackPause.src = '../../img/play-green.svg';
        pause = false;
      }
    };


    trackDetails.className = 'track-details';

    trackTitle.className = 'track-title';
    trackTitle.textContent = item.name


    trackArtist.className = 'track-artist';
    trackArtist.textContent = item.artists[0].name

    trackArtist.onclick = () => {
      location.assign(`/pages/artist/?${item.artists[0].id}`)
    }

    trackDetails.append(trackTitle, trackArtist);



    trackAlbum.className = 'track-album';
    trackAlbum.textContent = item.name




    trackDuration.className = 'track-duration';
    trackDuration.textContent = millisToMinutesAndSeconds(item.duration_ms)


    trackItem.append(audio, trackNumber, trackPause, trackDetails, trackDetails, trackAlbum, trackDuration);

    place.append(trackItem)
  }

}