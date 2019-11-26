import { init, Sprite, GameLoop, initKeys, keyPressed } from "kontra";
import { reduce } from "rxjs/operator/reduce";
import { settings } from "./settings";
import './scss/main.scss';

const { canvas, context } = init();

initKeys();

const person = Sprite({
  x: 0,
  y: 175,
  color: reduce,
  width: 20,
  height: 40
});

const road = Sprite({
  x: 0,
  y: 175,
  width: 800,
  height: 60,
  color: "brown"
});

const gameButton = document.getElementById("game-button");
gameButton.addEventListener("click", () => {
  person.x += 10;
});

const movePlayerListener = () => {
  if (keyPressed("right")) {
    person.x += settings.playerSpeed;
  }
  if (keyPressed("left")) {
    person.x -= settings.playerSpeed;
  }
};

const loop = GameLoop({
  update: () => {
    movePlayerListener();
  },
  render: () => {
    road.render();
    person.render();
  }
});

loop.start();
