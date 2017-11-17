var gridHeight = $('#gridHeight');
var gridWidth = $('#gridWidth');
var gridHeightValue = gridHeight.attr('value'); //return grid height in string
var gridWidthValue = gridWidth.attr('value'); //return grid width in string
var button = $('#btnSubmit');
var colorPicker = $('#pickColor');
var grid = $('#grid');

// TODO: fix this function to append td as a child of tr
function makeGrid(height, width) {
	$('#table').append('<table class="grid" id="grid" border="1"></table>');
	var tbl = $('#grid');
	for(let row = 0; row <= height; row++) {
		var	tr = tbl.append('<tr class="row"></tr>');
		for(let column = 0; column <= width; column++) {
			if(row === height && column === width) {
				break;
			} else {
				var td = tbl.append('<td class="column"></td>');
				td.appendTo(tr);
			}
			grid.append('<div class="cell"></div>');
		}
	}
}

//get height and width values from inputs after click button
button.click(function(){
	gridHeightValue = $('#gridHeight').val();
	gridWidthValue = $('#gridWidth').val();
	makeGrid(gridHeightValue, gridWidthValue);
	console.log('height: ' + gridHeightValue + '\nwidth: ' + gridWidthValue); //delete after test
});
