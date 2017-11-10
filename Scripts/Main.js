"use strict";
// Create variables.
const version = "v2.1.6";
let pizzaNum = 3;
const funny = false;
let shoeSizes = [ 3,12,6 ];
let pl = new Player();

//
let calc = new Calc();
let gfx  = new Graphics();
let kbd  = new Keyboard();
let ms   = new Mouse();
let ajax = new AJAX();
let sfx = new Audio();

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
	pl.Init();

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
