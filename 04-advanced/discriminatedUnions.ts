interface Dragon {
  type: 'dragon';
  flySpeed: number;
}

interface Shark {
  type: 'shark';
  swimSpeed: number;
}

type Creature = Dragon | Shark;

const creatureMove = (ani: Creature) => {
  let speed;
  switch (ani.type) {
    case 'dragon':
      speed = ani.flySpeed;
      break;

    case 'shark':
      speed = ani.swimSpeed;
      break;
  }
};
