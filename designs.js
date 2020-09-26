var tool = 0; // 0 for pen, 1 for eraser.
var mouseStat = 0;//0 for up,1 for pressed

// Select color input(Listener)
function getColorValue() {  
	let colorValue = $('#colorPicker').val(); // Like "#FFFFFF"
	return colorValue
}
	
// Select size input
function getSize() {
	let inputHeight = document.getElementById("inputHeight").value;
	let inputWidth =document.getElementById("inputWidth").value;
	return [inputHeight,inputWidth]
}

// When size is submitted by the user, call makeGrid()
function makeGrid(inputHeight,inputWidth) {
	$('tbody').children().remove();
	for (let y = 0; y < inputHeight; y++) {
		let row = $('<tr></tr>');
		$('#pixelCanvas').append(row);
		for (let x = 0; x < inputWidth; x++) {
			row.append($('<td></td>'));
		}
	}
}
function onSubmit() {
	let a = getSize();
	makeGrid(a[0], a[1]);
}
// Tools
function onSetPen() {
	tool = 0;
}
function onSetRubber() {
	tool = 1
}

/* Initialize */
makeGrid(getSize()[0], getSize()[1]);

/* Listeners */
$('tbody').on('mousedown', 'tr td', function (e) {
	mouseStat = 1; 
		if (tool == 0) {	// tool is pen
			$(e.target).css('background-color', getColorValue);
		}else{				//tool is rubber
			$(e.target).removeAttr('style');
		}
});

$('body').on('mouseup', function () {
	mouseStat = 0;
});

$('tbody').on('mouseover', 'tr td', function (e) {
	if (mouseStat === 1) {
		if (tool == 0) {	// tool is pen
			$(e.target).css('background-color', getColorValue);
		}else{				//tool is rubber
			$(e.target).removeAttr('style');
		}
	}
});


