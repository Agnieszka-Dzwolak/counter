// DOM
const dom = {
  counter: document.querySelector('.counter'),
  decrement: document.getElementById('decrement'),
  reset: document.getElementById('reset'),
  increment: document.getElementById('increment'),
  decrement2: document.getElementById('decrement2'),
  increment2: document.getElementById('increment2'),
};

//Data
const data = {
  counter: 0,
};

//Handlers
const decrementHandler = (par) => {
  data.counter -= par;
  dom.counter.innerText = data.counter;
};

const incrementHandler = (par) => {
  data.counter += par;
  dom.counter.innerText = data.counter;
};
const resetHandler = () => {
  data.counter = 0;
  dom.counter.innerText = 0;
};

// Event listeners
dom.decrement.addEventListener('click', () => {
  decrementHandler(1);
});

dom.decrement2.addEventListener('click', () => {
  decrementHandler(2);
});

dom.reset.addEventListener('click', resetHandler);

dom.increment.addEventListener('click', () => {
  incrementHandler(1);
});

dom.increment2.addEventListener('click', () => {
  incrementHandler(2);
});
