const { sleep } = require('..');

const start = async () => {
  console.log('going to sleep');
  await sleep(2000);
  console.log('awake!');
};

start();
