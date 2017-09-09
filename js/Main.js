// Strings
const version = "v2.0.2";

// Numbers
var pizzaNum = 5;

// Booleans
const isFunny = false;

// Arrays
var sizes = [ 5,12,10 ];

// Objects
var calc = new Calc();
var gfx = new Graphics();
var kbd = new Keyboard();
var ms = new Mouse();

window.onload = function()
{
	const fps = 30;
	setInterval( function()
	{
		Update();
		Draw();
	},1000 / fps );
	Init();
};

function Init()
{
	// Initialize things here.
	kbd.Init();
	ms.Init( gfx.canvas );
	
	gfx.SetSmoothing( true ); // Set false for pixel art.
	
	console.log( "JSJ Framework version " + version + " has loaded successfully!" );
}

function Update()
{
	// Update things here.
	
}

function Draw()
{
	gfx.Rect( 0,0,gfx.SCREEN_WIDTH,gfx.SCREEN_HEIGHT,"#000" );
	// Draw things here.
	
}
