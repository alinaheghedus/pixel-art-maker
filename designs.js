$(document).ready(function() {
	console.log('ok');

	

	function makeGrid(h, w) {
		console.log('test');

		var table = $('#pixel_canvas');
		$('#pixel_canvas').empty();
		// Select color input
		const color = $('#colorPicker').val();
		// Select size input
		const height = $('#input_height').val();
		const width = $('#input_width').val();
		console.log(color, height, width);

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
		$(table).append(updateGrid(height, width));
	}

	// When size is submitted by the user, call makeGrid()
	$('#sizePicker').on('submit', function(e){
		e.preventDefault();
		makeGrid();
	});	


	//var canvas = $('#pixel_canvas');
	//$(canvas).on('click', makeGrid());

});
