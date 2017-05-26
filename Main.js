const canvas = document.getElementById( 'gc' );
const context = canvas.getContext( '2d' );

// Strings

// Numbers

// Booleans

// Arrays
var keyMap = [];

// Objects
var mouse = { x: 0,y: 0 }

window.onload = function()
{
	Init();
	const fps = 30;
	setInterval(function()
	{
		Update();
		Draw();
	}, 1000/fps);
	onkeydown = onkeyup = function(e)
	{
		keyMap[e.keyCode] = e.type == "keydown";
	}
	canvas.addEventListener( 'mousedown',CheckClick );
	canvas.addEventListener( 'mousemove',function( e )
	{
			mouse.x = CheckMousePos( e ).x;
			mouse.y = CheckMousePos( e ).y;
	} );
};

function CheckClick()
{
	// When you click, this happens.
}

function CheckMousePos( e )
{
	const rect = canvas.getBoundingClientRect();
	const root = document.documentElement;
	const mouseX = e.clientX - rect.left - root.scrollLeft;
	const mouseY = e.clientY - rect.top - root.scrollTop;
	return { x: mouseX,y: mouseY };
}

function Init()
{
	
}

function Update()
{
	// Update things here
	if( keyMap[87] )
	{
		// W
	}
	else if( keyMap[83] )
	{
		// S
	}
	if( keyMap[65] )
	{
		// A
	}
	else if( keyMap[68] )
	{
		// D
	}
}

function Draw()
{
	// Draw things here
}
