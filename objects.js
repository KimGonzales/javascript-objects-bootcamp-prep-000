var meals = {};
var meals = new Object ();

var playlist = { artistNames : "songTitles" }

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName; return playlist
}