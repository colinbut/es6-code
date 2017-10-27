class Song {
  constructor(title = "Merry Christmas Everyone", artist = "Shakin Stevens", duration = "3.45", isPlaying = false) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = isPlaying;
  }

  start() {
    isPlaying = true;
  }

  stop() {
    isPlaying = false;
  }
}
