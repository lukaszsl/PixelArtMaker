var gridHeight = $('#gridHeight');
var gridWidth = $('#gridWidth');
var button = $('#btnSubmit');
var colorPicker = $('#pickColor');
var tbl = $('#table');
const MAX_WIDTH = 100;
const MAX_HEIGHT = 100;

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

function colorCell() {
	$('td').on('click', function(evt) {
		let color = colorPicker.val();
		$(this).css('background', color);
	});
}

function makeGrid(height, width) {
	tbl.empty(); //delete old grid
	drawGrid(height, width); //draw new grid
	colorCell(); //color cell after click
}

//get height and width values from inputs after click button
button.click(function(){
	let gridHeightValue = gridHeight.val();
	let gridWidthValue = gridWidth.val();
	//set condition which check if size of the grid isn't too big
	if(gridHeightValue > MAX_HEIGHT || gridWidthValue > MAX_WIDTH) {
		window.alert("You have exceeded the maximum grid size!\nThe height MAX is: " + MAX_HEIGHT + "\nThe width MAX is: " + MAX_WIDTH);
	} else {
		makeGrid(gridHeightValue, gridWidthValue);
	}
});
