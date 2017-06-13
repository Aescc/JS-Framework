const canvas = document.getElementById( 'gc' );
const context = canvas.getContext( '2d' );

// Strings
const version = "v1.1.4";

// Numbers
var pizzaNum = 5;

// Booleans
const willSmooth = true; // Disable if using pixel art.

// Arrays
var keyMap = [];

// Objects
var mouse = { x: 0,y: 0 };

window.onload = function()
{
	const fps = 30;
	setInterval( function()
	{
		Update();
		Draw();
	},1000 / fps );
	onkeydown = onkeyup = function( e )
	{
		keyMap[e.keyCode] = ( e.type == "keydown" );
	}
	canvas.addEventListener( 'mousedown',OnPress );
	canvas.addEventListener( 'mouseup',OnRelease );
	canvas.addEventListener( 'mousemove',function( e )
	{
		const rect = canvas.getBoundingClientRect();
		const root = document.documentElement;
		mouse.x = e.clientX - rect.left - root.scrollLeft;
		mouse.y = e.clientY - rect.top - root.scrollTop;
	} );
	Init();
};

function Init()
{
	// Initialize things here.
	context.imageSmoothingEnabled = willSmooth;
	context.webkitImageSmoothingEnabled = willSmooth;
	context.mozImageSmoothingEnabled = willSmooth;
	console.log( "Version " + version + " has been loaded successfully!" );
}

function OnPress()
{
	// When the mouse is pressed, this happens.
}

function OnRelease()
{
	// When the mouse is released, this happens.	
}

function Update()
{
	// Update things here.
	if( keyMap[87] || keyMap[38] )
	{
		// When W or UP ARROW is pressed.
	}
	else if( keyMap[83] || keyMap[40] )
	{
		// When S or DOWN ARROW is pressed.
	}
	if( keyMap[65] || keyMap[37] )
	{
		// When A or LEFT ARROW is pressed.
	}
	else if( keyMap[68] || keyMap[39] )
	{
		// When D or RIGHT ARROW is pressed.
	}
}

function Draw()
{
	// Draw things here.
	Rect( 0,0,canvas.width,canvas.height,"#000" );
}
