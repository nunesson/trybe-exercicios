const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = (min, dano) => {
  min = 15;
  dano = Math.round(Math.random() * (dragon.strength - min) + min);
  return dano;
}

console.log(`O dragão causou ${danoDragon()} de dano!`);

const danoWarrior = (min, dano) => {
  min = warrior.strength;
  dano = warrior.strength * warrior.weaponDmg;
  const danoTotal = Math.round(Math.random(dano - min) + min);
  return danoTotal;
}

console.log(`O Guerreiro causou ${danoWarrior()} de dano!`);

const danoMago = (danoMana) => {
  danoMana = {
    
  }
}