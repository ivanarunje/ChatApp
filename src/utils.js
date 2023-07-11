const availableRooms = [
  "DataGeeks",
  "WebDevs",
  "BackendHeroes",
  "MobileAppDev",
  "UX/UI",
];

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export { availableRooms, getRandomColor };
