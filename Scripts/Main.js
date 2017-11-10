"use strict"
const version = "v2.1.6";
var pizzaNum = 3;
const funny = false;
var shoeSizes = [ 3,12,6 ];
var pl = new Player();

// 
var calc = new Calc();
var gfx  = new Graphics();
var kbd  = new Keyboard();
var ms   = new Mouse();
var ajax = new AJAX();
var sfx = new Audio();

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
	
	gfx.SetSmoothing( true ); // Set false for pixel perfect.
	// \/ Initialize things! \/
	
}

function Update()
{
	// \/ Update things here. \/
	pl.Update();
	
}

function Draw()
{
	gfx.DrawRect( 0,0,gfx.ScreenWidth,gfx.ScreenHeight,"#000" );
	// \/ Draw things here. \/
	pl.Draw();
	
}
