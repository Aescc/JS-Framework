// User created file!

class Player
{
constructor()
{
	const width = 55;
	const height = 55;
	let pos = new Vec2( 0,0 );
	const hitbox = new Rect( pos.x,pos.y,width,height );
	
	// 
	this.Init = function()
	{
		pos.x = gfx.ScreenWidth / 2;
		pos.y = gfx.ScreenHeight / 2;
	}
	this.Update = function()
	{
		hitbox.MoveTo( pos - new Vec2( width / 2,height / 2 ) );
		// if( !hitbox.Contains( new Vec2( ms.Pos().x,ms.Pos().y ) ) )
		if( calc.FindDist( ms.Pos().x,ms.Pos().y,pos.x,pos.y ) > 10 )
		{
			let moveDir = new Vec2( -( pos.x - ms.Pos().x ),-( pos.y - ms.Pos().y ) );
			moveDir.Normalize();
			moveDir.Multiply( 5 );
			pos.Add( moveDir );
		}
	}
	this.Draw = function()
	{
		gfx.DrawRect( pos.x - width / 2,pos.y - width / 2,width,height,"#FA0" );
	}
}
}
