const games = {
  crazycattle3d: {
    name: "Crazy Cattle 3D",
    url: "https://crazycattle3d.github.io"
  }
};

function launchGame(gameId) {
  const game = games[gameId];
  if (game) {
    document.getElementById('play-menu').classList.remove('hidden');
    window.currentGame = gameId;
  }
}

function playGame() {
  const gameId = window.currentGame;
  const game = games[gameId];
  if (game) {
    document.getElementById('play-menu').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    document.getElementById('game-frame').src = game.url;
  }
}

function closePlayMenu() {
  document.getElementById('play-menu').classList.add('hidden');
  window.currentGame = null;
}

function closeGame() {
  document.getElementById('game-container').classList.add('hidden');
  document.getElementById('game-frame').src = '';
  window.currentGame = null;
}
