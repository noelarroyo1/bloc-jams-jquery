$(document).ready(function() {
  album.songs.forEach((song, index) => {
    const betterTime = player.prettyTime(song.duration);
    song.element = $(
      `
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>` +
        betterTime +
        `</td>
      </tr>
    `
    );

    song.element.click(event => {
      player.playPause(song);
      $("button#play-pause").attr("playState", player.playState);
    });

    $("#song-list").append(song.element);
  });
});
