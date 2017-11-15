class Graphics
{
constructor()
{
	this.canvas = document.getElementById( "gc" );
	this.context = this.canvas.getContext( "2d" );

	let images = [];
	let curImage = 0;
	let curLoadedImage = 0;
	
	let anim =
	[
		new Image(),new Image(),new Image()
	];
	for( let i in anim )
	{
		anim[i].src = "Images/Loading/Throw" + i + ".png";
	}
	let curFrame = 0.0;
	//
	this.Init = function( width,height )
	{
		this.ScreenWidth  = this.canvas.width;
		this.ScreenHeight = this.canvas.height;
	}
	
	this.PlayIntro = function()
	{
		this.context.fillStyle = "#29F";
		this.context.fillRect( 0,0,this.ScreenWidth,this.ScreenHeight );
		{
			this.context.fillStyle = "#23C";
			this.context.font = "50PX Tahoma";
			this.context.textAlign = "center";
			this.context.fillText( "Loading...",this.ScreenWidth / 2,this.ScreenHeight / 2 );
		}
		
		{
			const animPlaySpeed = 0.08;
			this.context.drawImage( anim[Math.floor( curFrame += animPlaySpeed )],
			                        this.ScreenWidth / 2 - 128 / 2,this.ScreenHeight / 2 + 64 / 2 );
			if( curFrame > anim.length - animPlaySpeed )
			{
				curFrame = 0.0;
			}
		}
	}
	
	this.Loaded = function()
	{
		return( curLoadedImage === curImage );
	}
	
	this.LoadImage = function( source,async = false )
	{
		for( let i in images )
		{
			if( images[i] === source )
			{
				return i;
			}
		}
		
		const nowImage = curImage;
		++curImage;
		images[nowImage] = new Image();
		images[nowImage].src = source;
		// TODO: Make this prettier.
		if( !async )
		{
			images[nowImage].onload = function()
			{
				++curLoadedImage;
				// console.log( "Image " + nowImage + " loaded successfully!" );
			}
		}
		else
		{
			++curLoadedImage;
		}
		return nowImage;
	}
	
	this.DrawImage = function( id,x = 0,y = 0,width,height )
	{
		if( width == undefined || height == undefined )
		{
			this.context.drawImage( images[id],x,y );
		}
		else
		{
			this.context.drawImage( images[id],x,y,width,height );
		}
	}
	
	this.DrawLine = function( x0,y0,x1,y1,size,color )
	{
		this.context.strokeStyle = color;
		this.context.beginPath();
		this.context.moveTo( x0,y0 );
		this.context.lineTo( x1,y1 );
		this.context.lineWidth = size;
		this.context.stroke();
	}

	this.DrawCircle = function( x,y,size,color )
	{
		this.context.fillStyle = color;
		this.context.beginPath();
		this.context.arc( x,y,size,0,2 * Math.PI );
		this.context.fill();
	}

	this.DrawRect = function( x,y,width,height,color )
	{
		this.context.fillStyle = color;
		this.context.fillRect( x,y,width,height );
	}

	this.DrawText = function( x,y,message,color )
	{
		this.context.fillStyle = color;
		this.context.fillText( message,x,y );
	}

	this.Alpha = function( alpha )
	{
		this.context.globalAlpha = alpha;
	}

	this.SetSmoothing = function( willSmooth )
	{
		this.context.imageSmoothingEnabled       = willSmooth;
		this.context.webkitImageSmoothingEnabled = willSmooth;
		this.context.mozImageSmoothingEnabled    = willSmooth;
	}
}
}
