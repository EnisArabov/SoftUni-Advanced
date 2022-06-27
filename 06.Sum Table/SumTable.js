function sumTable() {
  // select all data rows
  let sum = 0;
  const rows = Array.from(document.querySelectorAll("tr")).slice(1, -1);
  //for each row
  for (let row of rows) {
    let value = Number(row.lastElementChild.textContent);
    sum += value;
  }
  //--select last column

  //--add content to sum

  //display in total sum
  document.getElementById("sum").textContent = sum;
}
