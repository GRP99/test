
async function waitOneMinute() {
  return new Promise(resolve => {
    setTimeout(resolve, 60000); // 60,000 milliseconds = 1 minute
  });
}

async function main() {
  console.log('Starting wait...');
  await waitOneMinute();
  console.log('One minute has passed! Proceeding...');
}

await main();
