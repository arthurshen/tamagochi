
// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
// 		zog("pages");
		
 		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";	
 		p.main.setBounds(0,0,stageW,stageH);

 		p.rect = new zim.Rectangle(stageW, stageH, "black");
 		p.main.addChild(p.rect);

		var gData; 
		var gSpritesheet;
		p.goodPumpkin;

		gData = {

			"images": ["images/pixel.jpg"],
			"frames": [

				[2, 2, 40, 40],
				[44, 2, 40, 40],
				[86, 2, 40, 40],
				[128, 2, 40, 40],
				[170, 2, 40, 40],
				[212, 2, 40, 40],
				[2, 44, 40, 40],
				[44, 44, 40, 40],
				[86, 44, 40, 40],
				[128, 44, 40, 40],
				[170, 44, 40, 40],
				[212, 44, 40, 40],
				
			
			],
			"animations": {
				"goodAnimation":[0,1,2,3,4,5,6,7,8,9,10,11],
				"speed": 0.1,
				
			},
			"framerate": 1

		};

		gSpritesheet = new createjs.SpriteSheet(gData);
		p.goodPumpkin = new createjs.Sprite(gSpritesheet,'goodAnimation');
		p.goodPumpkin.regY = p.goodPumpkin.getBounds().height/2;
		p.goodPumpkin.regX = p.goodPumpkin.getBounds().width/2;
		p.goodPumpkin.y = zim.rand(p.goodPumpkin.getBounds().height/2, stageH-p.goodPumpkin.getBounds().height/2);
		p.goodPumpkin.x = zim.rand(p.goodPumpkin.getBounds().width/2, stageW-p.goodPumpkin.getBounds().width/2);

		p.main.addChild(p.goodPumpkin);

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
		p.infoBacking = new zim.Rectangle(stageW, stageH, "white");
		p.infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(p.infoBacking);

		p.goodPumpkin2;

		gData = {

			"images": ["images/pixel.jpg"],
			"frames": [

				[2, 2, 40, 40],
				[44, 2, 40, 40],
				[86, 2, 40, 40],
				[128, 2, 40, 40],
				[170, 2, 40, 40],
				[212, 2, 40, 40],
				[2, 44, 40, 40],
				[44, 44, 40, 40],
				[86, 44, 40, 40],
				[128, 44, 40, 40],
				[170, 44, 40, 40],
				[212, 44, 40, 40],
				
			
			],
			"animations": {
				"goodAnimation":[0,1,2,3,4,5,6,7,8,9,10,11],
				"speed": 0.1,
				
			},
			"framerate": 1

		};

		gSpritesheet = new createjs.SpriteSheet(gData);
		p.goodPumpkin2 = new createjs.Sprite(gSpritesheet,'goodAnimation');
		p.goodPumpkin2.regY = p.goodPumpkin2.getBounds().height/2;
		p.goodPumpkin2.regX = p.goodPumpkin2.getBounds().width/2;
		p.goodPumpkin2.y = zim.rand(p.goodPumpkin2.getBounds().height/2, stageH-p.goodPumpkin2.getBounds().height/2);
		p.goodPumpkin2.x = zim.rand(p.goodPumpkin2.getBounds().width/2, stageW-p.goodPumpkin2.getBounds().width/2);

		p.info.addChild(p.goodPumpkin2);
				
		return p;
		
	}
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";	
 		p.main.setBounds(0,0,stageW,stageH);

 		p.rect = new zim.Rectangle(stageW, stageH, "black");
 		p.main.addChild(p.rect);
 		
		var gData; 
		var gSpritesheet;
		p.goodPumpkin;

		gData = {

			"images": ["images/pixel.jpg"],
			"frames": [

				[2, 2, 40, 40],
				[44, 2, 40, 40],
				[86, 2, 40, 40],
				[128, 2, 40, 40],
				[170, 2, 40, 40],
				[212, 2, 40, 40],
				[2, 44, 40, 40],
				[44, 44, 40, 40],
				[86, 44, 40, 40],
				[128, 44, 40, 40],
				[170, 44, 40, 40],
				[212, 44, 40, 40],
				
			
			],
			"animations": {
				"goodAnimation":[0,1,2,3,4,5,6,7,8,9,10,11],
				"speed": 0.1,
				
			},
			"framerate": 1

		};

		gSpritesheet = new createjs.SpriteSheet(gData);
		p.goodPumpkin = new createjs.Sprite(gSpritesheet,'goodAnimation');
		p.goodPumpkin.regY = p.goodPumpkin.getBounds().height/2;
		p.goodPumpkin.regX = p.goodPumpkin.getBounds().width/2;
		p.goodPumpkin.y = zim.rand(p.goodPumpkin.getBounds().height/2, stageH-p.goodPumpkin.getBounds().height/2);
		p.goodPumpkin.x = zim.rand(p.goodPumpkin.getBounds().width/2, stageW-p.goodPumpkin.getBounds().width/2);

		p.main.addChild(p.goodPumpkin);

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
		p.infoBacking = new zim.Rectangle(stageW, stageH, "white");
		p.infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(p.infoBacking);

		var gData; 
		var gSpritesheet;
		p.goodPumpkin;

		gData = {

			"images": ["images/pixel.jpg"],
			"frames": [

				[2, 2, 40, 40],
				[44, 2, 40, 40],
				[86, 2, 40, 40],
				[128, 2, 40, 40],
				[170, 2, 40, 40],
				[212, 2, 40, 40],
				[2, 44, 40, 40],
				[44, 44, 40, 40],
				[86, 44, 40, 40],
				[128, 44, 40, 40],
				[170, 44, 40, 40],
				[212, 44, 40, 40],
				
			
			],
			"animations": {
				"goodAnimation":[0,1,2,3,4,5,6,7,8,9,10,11],
				"speed": 0.1,
				
			},
			"framerate": 1

		};

		gSpritesheet = new createjs.SpriteSheet(gData);
		p.goodPumpkin = new createjs.Sprite(gSpritesheet,'goodAnimation');
		p.goodPumpkin.regY = p.goodPumpkin.getBounds().height/2;
		p.goodPumpkin.regX = p.goodPumpkin.getBounds().width/2;
		p.goodPumpkin.y = zim.rand(p.goodPumpkin.getBounds().height/2, stageH-p.goodPumpkin.getBounds().height/2);
		p.goodPumpkin.x = zim.rand(p.goodPumpkin.getBounds().width/2, stageW-p.goodPumpkin.getBounds().width/2);

		p.info.addChild(p.goodPumpkin);
				
		return p;
		
	}	
	
	
	return app;
	
}(app || {});