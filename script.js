var randomColourMode = false;

$(document).ready(function() {
	newGrid(16);
	$(document).on("mouseenter", ".square", function() {
		$(this).addClass("square-active");
		if(randomColourMode) {
			$(this).css("background-color", randomColour());
		}
		else if(gradualMode) {
			$(this).fadeTo(0, 0.1);
		}
	});
	$("#container #new_grid").click(function() {
		$("#grid").empty();
		var side = prompt("How many squares per side?");
		newGrid(side);
	});
	$("#container #random_colour").click(function() {
		if(randomColourMode) {
			randomColourMode = false;
		}
		else {
			randomColourMode = true;
		}
	});
});

function newGrid(side) {
	var dimPctg = 100 / side;
	//console.log(dimPctg + "%");
	//console.log("hi" * 10);
	var fragment = "";
	var add;
	// rows
	for(var i = 0; i < side; i++) {
		// columns
		add = "<div class=\"square\" style=\"width: " + dimPctg + "%; height: " + dimPctg + "%;\"></div>";
		fragment += add.repeat(side);
	}
	$("#grid").append(fragment);
}

function randomColour() {
	var colour = "#";
	var possible = "abcdef0123456789";

	for(var i = 0; i < 6; i++) {
		colour += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	//console.log("Colour generated: " + colour);
	return colour;
}