// Strings!
const version = "v2.1.2";

// Numbers!
const SCR_WIDTH  = 500;
const SCR_HEIGHT = 500;

// Booleans!
const isFunny = false;

// Arrays!
const includeFiles =
[
	"js/your_file_name.js"
];

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
	gfx.Init( SCR_WIDTH,SCR_HEIGHT );
	kbd.Init();
	ms.Init( gfx.canvas );
	
	gfx.SetSmoothing( true ); // Set false for pixel art.
	
	for( var i in includeFiles )
	{
		var userFile = document.createElement( "script" );
		userFile.src = includeFiles[i];
		
		document.getElementById( "USER_SCRIPTS" ).appendChild( userFile );
	}
	
	// \/ Initialize things! \/
	
	// /\ Initialize!        /\
	
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
