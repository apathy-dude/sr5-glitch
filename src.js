(function roll() {
  const size = 14;
  const count = 10000;
  const sum = (t, v) => t + v;
  
  function isGlitch(num) {
    const glitch = 1/6;

    return new Array(num).fill(0)
      .map(i => Math.random() <= glitch)
      .reduce(sum, 0) > (num / 2);
  }
  
  new Array(size)
    .fill(0)
    .map((_, idx) => new Array(count)
      .fill(0)
      .map(_ => isGlitch(idx + 1))
      .reduce(sum, 0)
    )
    .map(v => v / count * 100)
    .forEach((v, i) => console.log(`${i + 1} => ${v}`));
})();
