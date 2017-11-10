class Mouse
{
constructor()
{
	let x = 0;
	let y = 0;
	let isDown = false;
	//
	this.Init = function( canvas )
	{
		canvas.addEventListener( "mousedown",function()
		{
			isDown = true;
		} );
		canvas.addEventListener( "mouseup",function()
		{
			isDown = false;
		} );
		canvas.addEventListener( "mousemove",function( e )
		{
			const rect = canvas.getBoundingClientRect();
			const root = document.documentElement;
			x = e.clientX - rect.left - root.scrollLeft;
			y = e.clientY - rect.top - root.scrollTop;
		} );

		x = gfx.ScreenWidth / 2;
		y = gfx.ScreenHeight / 2;
	}
	this.Pos = function()
	{
		return {
			x:	x,
			y:	y
		};
	}
	this.IsDown = function()
	{
		return isDown;
	}
}
}
