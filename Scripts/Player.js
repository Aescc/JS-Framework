// User created file!

class Player
{
constructor()
{
	const width = 55;
	const height = 55;
	var pos = { x: 0,y: 0 };
	
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
		gfx.DrawRect( pos.x,pos.y,width,height,"#FA0" );
	}
}
}
