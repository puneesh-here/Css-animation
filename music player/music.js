const musicContanier = document.querySelector('.music-contaner')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContaner = document.querySelector('.progresscontaner')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['hope', 'fun']

//keep track of songs
let songIndex = 1

//initally load song info DOM
loadsong(songs[songIndex])

//update song details
function loadsong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `Photo/${song}.jpg`


}