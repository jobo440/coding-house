function createBoard(cellNumber) {
  $('tbody').empty();
  // create array of tr and td
  var tableRows = [];
  var tableRow = $('<tr>');
  for(var i = 0; i < cellNumber; i++) {
    for(var j = 0; j < cellNumber; j++) {
      tableRow.append('<td>');
    }
    tableRows.push(tableRow);
    tableRow = $('<tr>');
  }

  $('tbody').append(tableRows);

  // color cells
  $('tr:odd').find(':even').css('background-color', 'blue');
  $('tr:even').find(':odd').css('background-color', 'blue');

  // set size
  var currentSize = $('#size option:selected').val();
  $('td').css('width', currentSize).css('height', currentSize);
}

// make dropdowns
var optionArr = [];
var numArr = [];
for(var i = 1; i < 11; i++) {
  optionArr.push('<option value="' + i * 10 + '">' + i * 10 + 'px' + '</option>')
  numArr.push('<option value="' + (i + 1) + '">' + (i + 1)+ '</option>')
}
$('#size').append(optionArr);
$('#number').append(numArr);

// change cells on change
$('#size').change(function(){
  $('td').css('width',this.value).css('height', this.value);
});
  
$('#number').change(function(){
  createBoard(this.value);
});

// set default selections to 50px && 8
$('#size option:contains("50px")').prop('selected', true);
$('#number option:contains("8")').prop('selected', true);

createBoard(8);