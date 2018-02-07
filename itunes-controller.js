function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList){
    var songsContainer = document.getElementById('songs-container')
    var template = ''
    for (var song in songList){
      if (song == 9){break;}
      if (song%3 == 0){
        template += `<div class="row m-b-1">
                      <div class = "card-deck">`
      }
      template += `
          <div class="card bg-card text-center" style="width: 20rem">
            <img class="resize img-thumbnail" src="${songList[song].albumArt}" alt="">
            <div class="card-body">
              <h5 class="card-title">${songList[song].title}</h5>
              <p class="">Artist: ${songList[song].artist}</p>
              <p class="">Album: ${songList[song].collection}</p>
              <p class="">Price: $${songList[song].price}</p>
            </div>
            <div class="card-footer remove-padding">
              <audio controls>
                <source src="${songList[song].preview}">
              </audio>
            </div>
          </div>
      `
      if (song == 2 || song == 5 || song == 8){
        template += `</div>
                  </div>`
      }
    }
    songsContainer.innerHTML = template
  }




  
}
