$(document).ready(function() {
	console.log('ok');

	// When size is submitted by the user, call makeGrid()
	$('#sizePicker').on('submit', function(e){
		e.preventDefault();
		makeGrid();
	});	

	// makeGrid function
	function makeGrid(h, w) {
	
		// select canvas
		const canvas = $('#pixel_canvas');
		// Select size input
		const height = $('#input_height').val();
		const width = $('#input_width').val();

		console.log(height, width);
		$(canvas).empty();

		// update grid
		let updateGrid = function (height, width) {
			sketch = "";
			for (let i=0; i < height; i++) {
				sketch += "<tr>";
				for (let j=0; j < width; j++) {
					sketch += "<td></td>";
				}
				sketch += "</tr>";
			};
			return sketch;

		}

		// set color function
		let updateColor = function () {
			$('td').on('click', function() {
				// Select color input
				const color = $('#colorPicker').val();
				$(this).css('background', color);
			});		
		}

		$(canvas).append(updateGrid(height, width));
		updateColor();
	}

});
