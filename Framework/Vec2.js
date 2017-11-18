class Vec2
{
constructor( x,y )
{
	this.x = x;
	this.y = y;
	// 
	this.Add = function( otherVec )
	{
		this.x += otherVec.x;
		this.y += otherVec.y;
	}
	
	this.Subtract = function( otherVec )
	{
		this.x -= otherVec.x;
		this.y -= otherVec.y;
	}
	
	this.Multiply = function( amount )
	{
		this.x *= amount;
		this.y *= amount;
	}
	
	this.Divide = function( amount )
	{
		this.x /= amount;
		this.y /= amount;
	}
	
	this.Normalize = function()
	{
		const divAmount = Math.sqrt( this.x * this.x + this.y * this.y );
		if( divAmount === 0 )
		{
			return false;
		}
		this.x = this.x / divAmount;
		this.y = this.y / divAmount;
		return true;
	}
}
}