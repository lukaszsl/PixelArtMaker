var gridHeight = $('#gridHeight');
var gridWidth = $('#gridWidth');
var button = $('#btnSubmit');
var colorPicker = $('#pickColor');
var tbl = $('#table');

//Draw a grid based on parameters: height and width.
//height: the number of cells vertically
//width: the number of cells horizontally
function drawGrid(height, width) {
	tbl.append('<table class="grid" id="grid" border="1"></table>');
	let grid = $('#grid');
	for(let row = 0; row < height; row++) {
		grid.append('<tr class="row"></tr>');
		let tr = $('tr');
		for(let column = 0; column < width; column++) {
			$('<td class="column"></td>').appendTo(tr[row]);
		}
	}
}

function makeGrid(height, width) {
	tbl.empty(); //delete old grid
	drawGrid(height, width); //draw new grid
}

//get height and width values from inputs after click button
button.click(function(){
	let gridHeightValue = gridHeight.val();
	let gridWidthValue = gridWidth.val();
	makeGrid(gridHeightValue, gridWidthValue);
});

//TODO: create function colorCell whitch changing cell's background color 
