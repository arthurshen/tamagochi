
// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
// 		zog("pages");
		
 		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";	
 		p.main.setBounds(0,0,stageW,stageH);

 		var rect = new zim.Rectangle(stageW, stageH, "orange");
 		p.main.addChild(rect);

		var gData; 
		var gSpritesheet;
		var goodPumpkin;

		gData = {

			"images": ["images/pixel.jpg"],
			"frames": [

				[2, 2, 40, 40],
				[44, 2, 40, 40],
				[86, 2, 40, 40]
			
			],
			"animations": {
				"goodAnimation":[0,1,2],
				"speed": 0.1
			},
				"framerate": 1

		};

		gSpritesheet = new createjs.SpriteSheet(gData);
		goodPumpkin = new createjs.Sprite(gSpritesheet,'goodAnimation');
		goodPumpkin.regY = goodPumpkin.getBounds().height/2;
		goodPumpkin.regX = goodPumpkin.getBounds().width/2;
		goodPumpkin.y = 20;
		goodPumpkin.x = 20;

		p.main.addChild(goodPumpkin);

		createjs.Ticker.addEventListener("tick", stage);
		//createjs.Ticker.setFPS(1);
		
		
		// var logo = new zim.Rectangle(100, 100, "orange");	
		// logo.setBounds(0,0,100,100);
		// p.main.addChild(logo);
		
		// var content = p.main.content = new createjs.Container();
		// content.setBounds(0,0,600,600);
		// var thing = p.mainThing = new zim.Rectangle(200,200,"red");
		// thing.x = 100;
		// thing.y = 100;		
		// content.addChild(thing);
		// p.main.addChild(content);
		
		// var related = new zim.Rectangle(200, 500, "pink");	
		// related.setBounds(0,0,200,500);
		// p.main.addChild(related);
		
		
		// gridManager.add( new zim.Grid(content) );
		// guideManager.add( new zim.Guide(content) );
		// guideManager.add( new zim.Guide(content, false) );
		
		// zog(layoutManager);
		
		// var mainParts = [
// {object:logo, marginLeft:5, maxHeight:100, width:20, valign:"top"},
// {object:content, marginLeft:5, maxHeight:100, valign:"top", align:"middle", backgroundColor:"beige"}, 
// {object:related, marginLeft:5, maxHeight:100, minWidth:20, align:"left", valign:"top"}
// 			];
		
		// var mainLayout = new zim.Layout(p.main, mainParts, 5, "black", false, new createjs.Shape(), stage);
		
		// layoutManager.add(mainLayout);	
		
		
		
		
 		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new createjs.Bitmap("images/art-auction.jpg");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
				
		return p;
		
	}
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";	
 		p.main.setBounds(0,0,stageW,stageH);

 		var rect = new zim.Rectangle(stageW, stageH, "orange");
 		p.main.addChild(rect);
 		
		var gData; 
		var gSpritesheet;
		var goodPumpkin;

		gData = {

			"images": ["images/pixel.jpg"],
			"frames": [

				[2, 2, 40, 40],
				[44, 2, 40, 40],
				[86, 2, 40, 40]
			
			],
			"animations": {
				"goodAnimation":[0,1,2],
				"speed": 0.1,
				
			},
			"framerate": 1

		};

		gSpritesheet = new createjs.SpriteSheet(gData);
		goodPumpkin = new createjs.Sprite(gSpritesheet,'goodAnimation');
		goodPumpkin.regY = goodPumpkin.getBounds().height/2;
		goodPumpkin.regX = goodPumpkin.getBounds().width/2;
		goodPumpkin.y = 20;
		goodPumpkin.x = 20;

		p.main.addChild(goodPumpkin);

		createjs.Ticker.addEventListener("tick", stage);
		//createjs.Ticker.setFPS(30);
		
		// var logo = new zim.Rectangle(100, 100, "orange");	
		// logo.setBounds(0,0,100,100);
		// p.main.addChild(logo);
		
		// var content = p.main.content = new createjs.Container();
		// content.setBounds(0,0,600,600);
		// var thing = p.mainThing = new zim.Rectangle(200,200,"red");
		// thing.x = 100;
		// thing.y = 100;		
		// content.addChild(thing);
		//p.main.addChild(content);
		
		// var related = new zim.Rectangle(500, 200, "pink");	
		// related.setBounds(0,0,500,200);
		// p.main.addChild(related);
		
		// gridManager.add( new zim.Grid(content) );
		// guideManager.add( new zim.Guide(content) );
		// guideManager.add( new zim.Guide(content, false) );
		
		// zog(layoutManager);
		
		// var mainParts = [ 
	// {object:logo, marginTop:10, maxWidth:80, minHeight:20, align:"left", valign:"top"},
	// {object:content, marginTop:5, maxWidth:90, backgroundColor:"beige"}, 
	// {object:related, marginTop:5, maxWidth:80, height:20, backgroundColor:"red"} ];
		
		// var mainLayout = new zim.Layout(p.main, mainParts, 5, "black", true, new createjs.Shape(), stage);
		
		// layoutManager.add(mainLayout);
		
	 	p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new createjs.Bitmap("images/art-auction.jpg");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
				
		return p;
		
	}	
	
	
	return app;
	
}(app || {});