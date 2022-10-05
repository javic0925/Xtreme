$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];
    var vinyl =document.getElementById('vinyl');
    console.log(vinyl);

    sourceMp3.src = 'https://c17.radioboss.fm:8162/stream';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://c17.radioboss.fm:8162/stream'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('src') == './assets/Icons/Play.svg')
            $('#playback').attr('src', './assets/Icons/Pause.svg'),
            $('#vinyl').attr('class', 'animate');
        else
            $('#playback').attr('src', './assets/Icons/Play.svg'),
            $('#vinyl').attr('class', '#');;
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://c17.radioboss.fm:8162/stream');
        song.currentTime = 0;
        $('#playback').attr('src', './assets/Icons/Play.svg'),
        $('#vinyl').attr('class', '#');;
    });

    

    



    
});


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "XtremeVibes",
      artist: "Otras Vibras",
      album: "Radio",
      artwork: [{src: "../assets/images/cover.jpg"}]
    });}
