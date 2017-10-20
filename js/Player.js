// User created file!

class Player
{
constructor()
{
	const width = 25;
	const height = 60;
	var pos = { x: 50,y: 50 };
	
	// 
	this.Init = function()
	{
		
	}
	this.Update = function()
	{
		pos.x = ms.Pos().x;
		pos.y = ms.Pos().y;
	}
	this.Draw = function()
	{
		gfx.Rect( pos.x,pos.y,width,height,"#FA0" );
	}
}
}
