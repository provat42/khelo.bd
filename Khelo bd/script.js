function buyGame(gameName) {
  const encodedGameName = encodeURIComponent(gameName);
  window.location.href = `order.html?game=${encodedGameName}`;
}
