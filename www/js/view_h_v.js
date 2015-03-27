
// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
// 		zog("pages");
		
 		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";
 		var w = (stageW > stageH) ? stageW : stageH;
		var h = (stageH > stageW) ? stageH : stageW;
 		p.main.setBounds(0,0,w,h);
 		p.rect = new zim.Rectangle(w, h, "black");
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
		
 		p.info = new createjs.Container();		
		p.info.name = "info";
		p.info.setBounds(0,0,w,h);
		p.infoBacking = new zim.Rectangle(w, h, "white");
		p.infoBacking.setBounds(0,0,w,h);
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
 		var w = (stageW > stageH) ? stageW : stageH;
		var h = (stageH > stageW) ? stageH : stageW;
 		p.main.setBounds(0,0,h,w);
 		p.rect = new zim.Rectangle(h, w, "black");
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
		
	 	p.info = new createjs.Container();		
		p.info.name = "info";
		p.info.setBounds(0,0,h,w);
		p.infoBacking = new zim.Rectangle(h, w, "white");
		p.infoBacking.setBounds(0,0,h,w);
		p.info.addChild(p.infoBacking);

		var gData; 
		var gSpritesheet;
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
	
	
	return app;
	
}(app || {});