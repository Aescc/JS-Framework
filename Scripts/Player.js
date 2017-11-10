// User created file!

class Player
{
constructor()
{
	const width = 55;
	const height = 55;
	let pos = { x: 0,y: 0 };

	//
	this.Init = function()
	{
		pos.x = gfx.ScreenWidth / 2;
		pos.y = gfx.ScreenHeight / 2;
	}
	this.Update = function()
	{
		pos.x = ms.Pos().x;
		pos.y = ms.Pos().y;
	}
	this.Draw = function()
	{
		gfx.DrawRect( pos.x - width / 2,pos.y - height / 2,width,height,"#FA0" );
	}
}
}
