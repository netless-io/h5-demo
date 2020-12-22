window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","pageview3":"resource/eui_skins/pageview3.exml","pageView6":"resource/eui_skins/pageView6.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/load/loadingViewSkin.exml'] = window.LoadingViewSkin = (function (_super) {
	__extends(LoadingViewSkin, _super);
	function LoadingViewSkin() {
		_super.call(this);
		this.skinParts = ["aniGroup","progress"];
		
		this.height = 576;
		this.width = 1024;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LoadingViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.aniGroup_i(),this._Image2_i(),this._Group1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "launcher_png";
		t.top = 0;
		return t;
	};
	_proto.aniGroup_i = function () {
		var t = new eui.Group();
		this.aniGroup = t;
		t.horizontalCenter = 0;
		t.top = 150;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 74;
		t.horizontalCenter = 13.8;
		t.source = "title_png";
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 379;
		t.elementsContent = [this.progress_i()];
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Label();
		this.progress = t;
		t.bold = true;
		t.fontFamily = "pfzt";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "0%";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.alpha = 0.6;
		t.fontFamily = "pfzt";
		t.horizontalCenter = 6;
		t.text = "Loading…";
		t.textColor = 0x000000;
		t.y = 434.02;
		return t;
	};
	return LoadingViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/load/tips.exml'] = window.tips = (function (_super) {
	__extends(tips, _super);
	function tips() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 576;
		this.width = 1024;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = tips.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "resource/assets/kejian/index.png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 300;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Label2_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x1ab24d;
		t.strokeWeight = 2;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "pfzt";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "温馨提示";
		t.textColor = 0x000000;
		t.top = 15;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "pfzt";
		t.size = 20;
		t.text = "横屏体验更佳哦~";
		t.textColor = 0x000000;
		t.x = 28;
		t.y = 60;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 20;
		t.height = 30;
		t.horizontalCenter = 0;
		t.width = 80;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 10;
		t.fillColor = 0x0097ff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "pfzt";
		t.size = 20;
		t.text = "确定";
		t.verticalCenter = 0;
		t.x = 21;
		return t;
	};
	return tips;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/pageView/mainView.exml'] = window.mainView = (function (_super) {
	__extends(mainView, _super);
	var mainView$Skin1 = 	(function (_super) {
		__extends(mainView$Skin1, _super);
		function mainView$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","last_jpg"),
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = mainView$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "last_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainView$Skin1;
	})(eui.Skin);

	var mainView$Skin2 = 	(function (_super) {
		__extends(mainView$Skin2, _super);
		function mainView$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","replay_png"),
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = mainView$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainView$Skin2;
	})(eui.Skin);

	var mainView$Skin3 = 	(function (_super) {
		__extends(mainView$Skin3, _super);
		function mainView$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","nextup_png"),
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = mainView$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nextup_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainView$Skin3;
	})(eui.Skin);

	function mainView() {
		_super.call(this);
		this.skinParts = ["viewGroup","fastPage","resetPage","lastPage","pageNumber","controlGroup","mainGroup"];
		
		this.height = 576;
		this.width = 1024;
		this.elementsContent = [this.mainGroup_i()];
	}
	var _proto = mainView.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.viewGroup_i(),this.controlGroup_i()];
		return t;
	};
	_proto.viewGroup_i = function () {
		var t = new eui.Group();
		this.viewGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.controlGroup_i = function () {
		var t = new eui.Group();
		this.controlGroup = t;
		t.bottom = 10;
		t.x = 630;
		t.elementsContent = [this._Image1_i(),this.fastPage_i(),this.resetPage_i(),this.lastPage_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "pagecontrolbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.fastPage_i = function () {
		var t = new eui.Button();
		this.fastPage = t;
		t.label = "";
		t.left = 10;
		t.verticalCenter = 0;
		t.skinName = mainView$Skin1;
		return t;
	};
	_proto.resetPage_i = function () {
		var t = new eui.Button();
		this.resetPage = t;
		t.horizontalCenter = 48;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = mainView$Skin2;
		return t;
	};
	_proto.lastPage_i = function () {
		var t = new eui.Button();
		this.lastPage = t;
		t.label = "";
		t.right = 10;
		t.verticalCenter = 0;
		t.skinName = mainView$Skin3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 65;
		t.x = 97.6;
		t.y = 20.4;
		t.elementsContent = [this.pageNumber_i()];
		return t;
	};
	_proto.pageNumber_i = function () {
		var t = new eui.Label();
		this.pageNumber = t;
		t.fontFamily = "pfzt";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "1/12";
		t.verticalCenter = 0;
		return t;
	};
	return mainView;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/pageView/pageView1.exml'] = window.pageView1 = (function (_super) {
	__extends(pageView1, _super);
	function pageView1() {
		_super.call(this);
		this.skinParts = ["videoGroup"];
		
		this.height = 576;
		this.width = 1024;
		this.elementsContent = [this.videoGroup_i()];
	}
	var _proto = pageView1.prototype;

	_proto.videoGroup_i = function () {
		var t = new eui.Group();
		this.videoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return pageView1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/pageView/pageView2.exml'] = window.pageview3Skin = (function (_super) {
	__extends(pageview3Skin, _super);
	function pageview3Skin() {
		_super.call(this);
		this.skinParts = ["btn0Select","btn0","btn1Select","btn1","btn2Select","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","zhenbang","buttonGroup"];
		
		this.height = 580;
		this.width = 1024;
		this.elementsContent = [this.buttonGroup_i()];
	}
	var _proto = pageview3Skin.prototype;

	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.height = 580;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.zhenbang_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 580;
		t.source = "bg_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Group();
		this.btn0 = t;
		t.height = 140;
		t.left = 203;
		t.top = 105;
		t.width = 104;
		t.elementsContent = [this._Image2_i(),this.btn0Select_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "biao_png";
		t.touchEnabled = false;
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn0Select_i = function () {
		var t = new eui.Image();
		this.btn0Select = t;
		t.height = 58;
		t.source = "dui_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 70;
		t.x = 17;
		t.y = 41;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Group();
		this.btn1 = t;
		t.height = 140;
		t.width = 104;
		t.x = 332;
		t.y = 105;
		t.elementsContent = [this._Image3_i(),this.btn1Select_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "qing_png";
		t.touchEnabled = false;
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn1Select_i = function () {
		var t = new eui.Image();
		this.btn1Select = t;
		t.height = 58;
		t.source = "dui_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 70;
		t.x = 17;
		t.y = 41;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Group();
		this.btn2 = t;
		t.height = 140;
		t.width = 104;
		t.x = 461;
		t.y = 105;
		t.elementsContent = [this._Image4_i(),this.btn2Select_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "shan_png";
		t.touchEnabled = false;
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn2Select_i = function () {
		var t = new eui.Image();
		this.btn2Select = t;
		t.height = 58;
		t.source = "dui_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 70;
		t.x = 17;
		t.y = 41;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Group();
		this.btn3 = t;
		t.height = 140;
		t.width = 104;
		t.x = 590;
		t.y = 105;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "shui_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Group();
		this.btn4 = t;
		t.height = 140;
		t.width = 104;
		t.x = 719;
		t.y = 105;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "kai_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Group();
		this.btn5 = t;
		t.height = 140;
		t.width = 104;
		t.x = 202;
		t.y = 275;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "xin_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Group();
		this.btn6 = t;
		t.height = 140;
		t.width = 104;
		t.x = 332;
		t.y = 275;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "shou_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Group();
		this.btn7 = t;
		t.height = 140;
		t.width = 104;
		t.x = 461;
		t.y = 275;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "zu_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Group();
		this.btn8 = t;
		t.height = 140;
		t.width = 104;
		t.x = 591;
		t.y = 275;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "er_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Group();
		this.btn9 = t;
		t.height = 140;
		t.width = 104;
		t.x = 720;
		t.y = 275;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "mu_png";
		t.width = 104;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhenbang_i = function () {
		var t = new eui.Group();
		this.zhenbang = t;
		t.alpha = 0;
		t.height = 580;
		t.touchChildren = false;
		t.visible = false;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 580;
		t.source = "bg_png";
		t.touchEnabled = false;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 378;
		t.source = "bangBg_png";
		t.touchEnabled = false;
		t.width = 538;
		t.x = 243;
		t.y = 83;
		return t;
	};
	return pageview3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/pageView/pageView22.exml'] = window.pageView2 = (function (_super) {
	__extends(pageView2, _super);
	function pageView2() {
		_super.call(this);
		this.skinParts = ["btn0Select","btn0","btn1Select","btn1","btn2Select","btn2","btn3Select","btn3","btn4Select","btn4","btn5Select","btn5","btn6Select","btn6","btn7Select","btn7","btn8Select","btn8","btn9Select","btn9","gongxi"];
		
		this.height = 580;
		this.width = 1024;
		this.elementsContent = [this._Group1_i(),this.gongxi_i()];
	}
	var _proto = pageView2.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 580;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page22_bg_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Group();
		this.btn0 = t;
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 101;
		t.elementsContent = [this._Image2_i(),this.btn0Select_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "mu_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn0Select_i = function () {
		var t = new eui.Image();
		this.btn0Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Group();
		this.btn1 = t;
		t.left = 235;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 101;
		t.elementsContent = [this._Image3_i(),this.btn1Select_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "qu_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn1Select_i = function () {
		var t = new eui.Image();
		this.btn1Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Group();
		this.btn2 = t;
		t.left = 355;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 101;
		t.elementsContent = [this._Image4_i(),this.btn2Select_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sen_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn2Select_i = function () {
		var t = new eui.Image();
		this.btn2Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Group();
		this.btn3 = t;
		t.left = 596.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 101;
		t.elementsContent = [this._Image5_i(),this.btn3Select_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "lin_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn3Select_i = function () {
		var t = new eui.Image();
		this.btn3Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Group();
		this.btn4 = t;
		t.left = 727;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 101;
		t.elementsContent = [this._Image6_i(),this.btn4Select_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "hei_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn4Select_i = function () {
		var t = new eui.Image();
		this.btn4Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Group();
		this.btn5 = t;
		t.left = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 275;
		t.elementsContent = [this._Image7_i(),this.btn5Select_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "guai_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn5Select_i = function () {
		var t = new eui.Image();
		this.btn5Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Group();
		this.btn6 = t;
		t.left = 235;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 275;
		t.elementsContent = [this._Image8_i(),this.btn6Select_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ren_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn6Select_i = function () {
		var t = new eui.Image();
		this.btn6Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Group();
		this.btn7 = t;
		t.left = 355;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 275;
		t.elementsContent = [this._Image9_i(),this.btn7Select_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "you_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn7Select_i = function () {
		var t = new eui.Image();
		this.btn7Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Group();
		this.btn8 = t;
		t.left = 596.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 275;
		t.elementsContent = [this._Image10_i(),this.btn8Select_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ben_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn8Select_i = function () {
		var t = new eui.Image();
		this.btn8Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Group();
		this.btn9 = t;
		t.left = 727;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 275;
		t.elementsContent = [this._Image11_i(),this.btn9Select_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ling_page21_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn9Select_i = function () {
		var t = new eui.Image();
		this.btn9Select = t;
		t.horizontalCenter = 0;
		t.source = "enter_select_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.gongxi_i = function () {
		var t = new eui.Image();
		this.gongxi = t;
		t.alpha = 0;
		t.left = 0;
		t.source = "zhenbang_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return pageView2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/kejian/pageView/pageView4.exml'] = window.pageView6Skin = (function (_super) {
	__extends(pageView6Skin, _super);
	function pageView6Skin() {
		_super.call(this);
		this.skinParts = ["btn0","btn1","btn2","zhenbang"];
		
		this.height = 580;
		this.width = 1024;
		this.elementsContent = [this._Image1_i(),this.btn0_i(),this.btn1_i(),this.btn2_i(),this.zhenbang_i()];
	}
	var _proto = pageView6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 580;
		t.source = "bg_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Group();
		this.btn0 = t;
		t.height = 207;
		t.width = 209;
		t.x = 189;
		t.y = 144;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 207;
		t.source = "a1_png";
		t.touchEnabled = false;
		t.width = 209;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Group();
		this.btn1 = t;
		t.height = 207;
		t.width = 209;
		t.x = 409;
		t.y = 145;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 207;
		t.source = "a2_png";
		t.touchEnabled = false;
		t.width = 209;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Group();
		this.btn2 = t;
		t.height = 207;
		t.width = 209;
		t.x = 629;
		t.y = 143;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 207;
		t.source = "a3_png";
		t.touchEnabled = false;
		t.width = 209;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhenbang_i = function () {
		var t = new eui.Group();
		this.zhenbang = t;
		t.alpha = 1;
		t.height = 580;
		t.touchChildren = false;
		t.visible = false;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 580;
		t.source = "bg_png";
		t.touchEnabled = false;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 378;
		t.source = "bangBg_png";
		t.touchEnabled = false;
		t.width = 538;
		t.x = 243;
		t.y = 83;
		return t;
	};
	return pageView6Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);