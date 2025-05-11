const fibs = (num) => {
  const sequence = [];
  if (num <= 0) {
    return sequence;
  }
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
  }
  return sequence;
};

const fibsRec = (num) => {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else if (num <= 0) {
    return [];
  } else {
    const seq = fibsRec(num - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }
};

console.log(fibs(8));
console.log(fibsRec(8));