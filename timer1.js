const timer1 = (alarmTimes) => {
  if (!alarmTimes) {
    return;
  }
  

  const times = alarmTimes.sort((a,b) => a - b); //sort user inputs in asscending order, because I want the queue to be stacked in that order
  for (const index in times) {
    if (!Number(times[index])){
      continue;
    }
    setTimeout(() => {
      console.log(times[index])
      process.stdout.write('\x07')
    },Number(times[index])*1000);
  }
}

timer1(process.argv.slice(2));