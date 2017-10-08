// Strings!
const version = "v2.1.3";

// Numbers!
var pizzaNum = 3;

// Booleans!
const isFunny = false;

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
	const FPS = 30;
	
	setInterval( function()
	{
		Update();
		Draw();
	},1000 / FPS );
	
	Init();
};

function Init()
{
	gfx.Init();
	kbd.Init();
	ms.Init( gfx.canvas );
	
	gfx.SetSmoothing( true ); // Set false for pixel art.
	// \/ Initialize things! \/
	
	// /\                    /\
	// 
	console.log( "JSJ Framework " + version + " has loaded successfully!" );
}

function Update()
{
	// \/ Update things here. \/
	
	// /\                     /\
}

function Draw()
{
	gfx.Rect( 0,0,gfx.SCREEN_WIDTH,gfx.SCREEN_HEIGHT,"#000" );
	// \/ Draw things here. \/
	
	// /\                   /\
}
