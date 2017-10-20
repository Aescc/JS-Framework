// Strings!
const version = "v2.1.5";

// Numbers!
var pizzaNum = 3;

// Booleans!
const funny = false;

// Arrays!
var shoeSizes = [ 3,12,6 ];

// Objects!
var calc = new Calc();
var gfx  = new Graphics();
var kbd  = new Keyboard();
var ms   = new Mouse();
var ajax = new AJAX();

window.onload = function()
{
	Init();
	
	const FPS = 30;
	setInterval( function()
	{
		Update();
		Draw();
	},1000 / FPS );
	console.log( "JSJ Framework " + version + " has loaded successfully!" );
};

function Init()
{
	gfx.Init();
	kbd.Init();
	ms.Init( gfx.canvas );
	
	gfx.SetSmoothing( false ); // Set false for pixel perfect.
	// \/ Initialize things! \/
	
}

function Update()
{
	// \/ Update things here. \/
	
}

function Draw()
{
	gfx.DrawRect( 0,0,gfx.SCREEN_WIDTH,gfx.SCREEN_HEIGHT,"#000" );
	// \/ Draw things here. \/
	
}
