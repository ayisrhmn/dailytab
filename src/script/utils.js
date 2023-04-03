const Utils = {
  seconds: n => {
    return n * 1000;
  },
  fetch: url => {
    const controller = new AbortController();
    return fetch(url, {signal: controller.signal});
  },
  getRandomItemFromArray: arr => {
    let alreadyDone = [];
    if (alreadyDone.length === 0) {
      for (let i = 0; i < arr.length; i++) alreadyDone.push(i);
    }
    const randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
    const indexOfItemInMyArray = alreadyDone[randomValueIndex];

    alreadyDone.splice(randomValueIndex, 1);

    return arr[indexOfItemInMyArray];
  },
};
