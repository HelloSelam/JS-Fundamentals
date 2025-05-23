const arg = process.argv[2];
const count = Number(arg);

if (!isNaN(count)) {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
} else {
  console.log("Missing number of occurrences");
}