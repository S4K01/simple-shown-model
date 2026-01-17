//? BUGs: there few things u should be known like nodelist isnt like element its like array so u need to do the effect to inside of it
//? or ur code will not excuted

'use strict';

let btnModel = document.querySelectorAll('.show-modal');
let divModelsHidden = document.querySelectorAll('.hidden');
let xBtn = document.querySelector('.close-modal');

//! basic way to do it and take too much

// btnModel.addEventListener('click', function () {
//   for (let i = 0; i < divModel.length; i++) {
//     divModel[i].style.display = 'block';
//   }
// });

// xBtn.addEventListener('click', function () {
//   for (let i = 0; i < divModel.length; i++) {
//     divModel[i].style.display = 'none';
//   }
// });

//* better way to do it and easier to read

// btnModel.forEach(e =>
//   e.addEventListener('click', function () {
//     divModelsHidden.forEach(e => e.classList.toggle('hidden'));
//   })
// );

// xBtn.addEventListener('click', function () {
//   divModelsHidden.forEach(e => e.classList.toggle('hidden'));
// });

//* better way in read and in time of excuting

let toggleFunction = function () {
  divModelsHidden.forEach(e => e.classList.toggle('hidden'));
};

btnModel.forEach(e => e.addEventListener('click', toggleFunction));

xBtn.addEventListener('click', toggleFunction);

//* you will notice up here ⬆️ there is no forEach in xbtn bc we use same window for every modal
//* when we have more xbtn we will use same method (forEach)

//* keyboard function

document.addEventListener(
  'keydown',
  e => e.key === 'Escape' && toggleFunction()
);

// update