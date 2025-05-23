const size = Number(process.argv[2]);

if (!isNaN(size)) {
  const row = 'X'.repeat(size);
  let i = 0;
  while (i < size) {
    console.log(row);
    i++;
  }
} else {
  console.log("Missing size");
}