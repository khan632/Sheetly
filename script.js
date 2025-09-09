$(document).ready(function () {
  let cellContainer = $(".input-cell-container");

  for (let i = 1; i <= 100; i++) {
    let ans = "";

    let num = i;

    while (num > 0) {
      let rem = num % 26;
      if (rem === 0) {
        ans = "Z" + ans;
        num = Math.floor(num / 26) - 1;
      } else {
        ans = String.fromCharCode(65 + rem - 1) + ans;
        num = Math.floor(num / 26);
      }
    }
    let column = $(`<div class="column-name" id="colCod-${ans}" colId="${i}">${ans}</div>`);
    $(".column-name-container").append(column);

    let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
    $(".row-name-container").append(row);
  }
});
