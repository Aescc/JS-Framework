class Rect
{
constructor( x,y,width,height )
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	// 
	this.Contains = function( pos )
	{
		return( pos.x > this.x && pos.x < this.x + this.width &&
		        pos.y > this.y && pos.y < this.y + this.height );
	}
	
	this.ContainsXY = function( x,y )
	{
		return( this.Contains( new Vec2( x,y ) ) );
	}
	
	this.Overlaps = function( otherRect )
	{
		return ( otherRect.x < this.x + this.width && otherRect.x + otherRect.width > this.x &&
		         otherRect.y < this.y + this.height && otherRect.y + otherRect.height > this.y );
	}
	
	this.OverlapsXYWH = function( x,y,width,height )
	{
		return ( x < this.x + this.width && x + width > this.x &&
		         y < this.y + this.height && y + height > this.y );
	}
	
	this.MoveTo = function( pos )
	{
		this.x = pos.x;
		this.y = pos.y;
	}
	
	this.MoveToXY = function( x,y )
	{
		this.x = x;
		this.y = y;
	}
}
}