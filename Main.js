const canvas = document.getElementById( 'gc' );
const context = canvas.getContext( '2d' );

// Strings
const version = "v1.0 or something";

// Numbers
var pizzaNum = 5;

// Booleans
const isFunny = false;

// Arrays
var keyMap = [];

// Objects
var mouse = { x: 0,y: 0 };

window.onload = function()
{
	const fps = 30;
	setInterval(function()
	{
		Update();
		Draw();
	}, 1000 / fps );
	onkeydown = onkeyup = function( e )
	{
		keyMap[e.keyCode] = e.type == "keydown";
	}
	canvas.addEventListener( 'mousedown',CheckClick );
	canvas.addEventListener( 'mousemove',function( e )
	{
			mouse.x = CheckMousePos( e ).x;
			mouse.y = CheckMousePos( e ).y;
	} );
	Init();
};

function CheckMousePos( e )
{
	const rect = canvas.getBoundingClientRect();
	const root = document.documentElement;
	const mouseX = e.clientX - rect.left - root.scrollLeft;
	const mouseY = e.clientY - rect.top - root.scrollTop;
	return { x: mouseX,y: mouseY };
}

function CheckClick()
{
	// When you click, this happens.
}

function Init()
{
	console.log( "Version " + version + " has been loaded successfully!" );
}

function Update()
{
	// Update things here
	if( keyMap[87] || keyMap[38] )
	{
		// W or UP ARROW
	}
	else if( keyMap[83] || keyMap[40] )
	{
		// S or DOWN ARROW
	}
	if( keyMap[65] || keyMap[37] )
	{
		// A or LEFT ARROW
	}
	else if( keyMap[68] || keyMap[39] )
	{
		// D or RIGHT ARROW
	}
}

function Draw()
{
	// Draw things here
	Rect( 0,0,canvas.width,canvas.height,"#000" );
}
