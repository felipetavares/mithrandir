function drawBolt (d,t) {
	var ctx = html5.context;
	var w = html5.canvas.width;
	var h = html5.canvas.height;
	var hh = html5.canvas.height/2;
	var hw = html5.canvas.width/2;

	// Red bolts
	ctx.strokeStyle = "cyan";

	ctx.beginPath();

	// Bolt position
	var bp = 0;
	var bh = hh;

	// Distortion point
	var dp = w/3*2;

	do {
		// Set coordenaties
		ctx.moveTo (bp, bh);

		bp += 20*Math.random();

		// Ray freedom, 1 over distance to ray center
		var freedom = 1-(Math.abs(dp-bp)/dp);

		// Linearly interpolated point
		var lp = (hh-t)*(bp/w)+hh;

		bh += d*freedom*Math.random()-d/2*freedom;
		// Error
		var e = bh-t;
		freedom = 1/freedom;
		bh += e*freedom*Math.random()-e/2*freedom;

		ctx.lineTo (bp, bh);
	} while (bp < w);

	// Draw everything
	ctx.stroke();
}

function update () {
	// Clear screen
	html5.context.clearRect (0,0, html5.canvas.width, html5.canvas.height);

//	if (Math.random() > 0.9) {
		// Draw our bolt
		for (var i=0;i<8;i++)
			drawBolt(32/(i+1), html5.canvas.height/2);
//	}

	// Call update again
	setTimeout (update, 17);
}

function begin () {
	html5.getCanvas2dContext();
	
	if (html5.canvas && html5.context)
		setTimeout (update, 0);
}
