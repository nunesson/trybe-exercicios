const wakeUP = () => 'Acordando!!';

const drinkCofee = () => 'Bora tomar café!!';

const goSleep = () => 'Partiu dormir!!';

const doingThings = (callBack) => console.log(callBack());

doingThings(wakeUP);
