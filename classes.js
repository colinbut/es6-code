class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
  }

  start() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = true;
  }

}

var song = new Song("Last Christmas", "Wham!", "2.45");
song.start();
