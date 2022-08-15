const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => response.json())
//     .then((object) => console.log(object.slip.advice));
//   // console.log(request);
// };

// getRandomAdvice();

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => response.json())
//     .then((object) => {
//       const { slip } = object;
//       const { id, advice } = slip;
//       console.log(advice);
//     });
//   // console.log(request);
// };

// getRandomAdvice();

const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';
  const request = fetch(url)
    .then((response) => response.json())
    .then(({ slip: {id, advice} }) => console.log(advice))
    .catch((error) => console.log('Ops, algo deu errado', error.errno));
  // console.log(request);
};

getRandomAdvice();