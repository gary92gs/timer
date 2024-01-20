const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf-8');


stdin.on('data', data => {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'b') {
    process.stdout.write('\x07');
  }

  data = Number(data);
  for (let i = data; i >= 0; i--) {
    let delay = 1000 * (data - i);
    setTimeout(() => {
      console.log(i)
      if (i === 0) {
        process.stdout.write('\x07');
      }
    }, delay);
  }

});


