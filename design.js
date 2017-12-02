const gridHeight = $('#gridHeight');
const gridWidth = $('#gridWidth');
const button = $('#btnSubmit');
const colorPicker = $('#pickColor');
const tbl = $('#table');
const MAX_WIDTH = 60;
const MAX_HEIGHT = 60;

//Draw a grid based on parameters: height and width.
//height: the number of cells vertically
//width: the number of cells horizontally
function drawGrid(height, width) {
	tbl.append('<table class="grid" id="grid" border="1"></table>');
	const grid = $('#grid');
	for(let row = 0; row < height; row++) {
		grid.append('<tr class="row"></tr>');
		const tr = $('tr');
		for(let column = 0; column < width; column++) {
			$('<td class="column"></td>').appendTo(tr[row]);
		}
	}
}

function colorCell() {
	$('td').on('click', function() { //TODO: change it to shorthand click
		const color = colorPicker.val();
		$(this).css('background', color);
	});
}

function uncolorCell() {
	$('td').contextmenu(function() {
		$(this).css('background', '#ffffff');
	});
}

function makeGrid(height, width) {
	tbl.empty(); //delete old grid
	tbl.append('<p class="tableInfo">Rigth click clear the cell</p>');
	drawGrid(height, width); //draw new grid
	colorCell(); //color cell after click
	uncolorCell(); //uncolor cell after right click
	tbl.attr('oncontextmenu', 'return false;'); // disable context menu after right click
}
//TODO: create drawCanvas function which copy the grid
//test drawing canvas function
function drawCanvas(height, width) {
	var c = document.getElementById('myCanvas');
	var ctx = c.getContext('2d');
	var img = document.getElementById('table');
	ctx.drawImage(img, 10, 10);
}

//get height and width values from inputs after click button
//create a grid
button.click(() => {
	const gridHeightValue = gridHeight.val();
	const gridWidthValue = gridWidth.val();
	//set condition which check if size of the grid isn't too big or too small
	if(gridHeightValue > MAX_HEIGHT || gridWidthValue > MAX_WIDTH) {
		window.alert("You have exceeded the maximum grid size!\nThe height MAX is: " + MAX_HEIGHT + "\nThe width MAX is: " + MAX_WIDTH);
	} else if(gridHeightValue == 0 || gridWidthValue == 0) {
		window.alert("Joker haha! ;-)\nYou can't build the grid when the values are 0!\nSorry but this is just not possible :-)");
	} else {
		makeGrid(gridHeightValue, gridWidthValue);
		drawCanvas(gridHeightValue, gridWidthValue);
	}
});
