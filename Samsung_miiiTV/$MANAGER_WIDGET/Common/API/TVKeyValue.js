/**
 *@file            TVKeyValue.js
 *@brief         TV key 값을 저장한 파일
 *@author      삼성 SDS, ESDM개발, 김성태선임
 *@date         2009.02.18
 */
if (this.Common == null) {
    this.Common = new Object();
}
if (this.Common.API == null) {
    this.Common.API = new Object();
}

Common.API.TVKeyValue = function(){
    var $THIS$ = this;

	// 위젯에서 키 처리시 실제 사용하는 값
    this.KEY_TOOLS = 75;
    this.KEY_MUTE = 27;
    this.KEY_RETURN = 88;
    this.KEY_UP = 38;
    this.KEY_DOWN = 40;
    this.KEY_LEFT = 37;
    this.KEY_RIGHT = 39;
    this.KEY_WHEELDOWN = 29469;
    this.KEY_WHEELUP = 29468;
    this.KEY_ENTER = 13;
    this.KEY_INFO = 31;
    this.KEY_EXIT = 45;
    this.KEY_RED = 82;      //r
    this.KEY_GREEN = 71;    //g
    this.KEY_YELLOW = 89;   //y
    this.KEY_BLUE = 66;     //b
    this.KEY_INFOLINK = 147;
    this.KEY_RW = 69;
    this.KEY_PAUSE = 74;
    this.KEY_FF = 72;
    this.KEY_PLAY = 71;
    this.KEY_STOP = 70;
    this.KEY_1 = 49;
    this.KEY_2 = 50;
    this.KEY_3 = 51;
    this.KEY_4 = 52;
    this.KEY_5 = 53;
    this.KEY_6 = 54;
    this.KEY_7 = 55;
    this.KEY_8 = 56;
    this.KEY_9 = 57;
    this.KEY_0 = 48;
    this.KEY_EMPTY = 0;

    this.KEY_PRECH = 259;
    this.KEY_SOURCE = 222;
    this.KEY_CHLIST = 84;
    this.KEY_MENU = 262;
    this.KEY_WLINK = 115;
    this.KEY_CC = 118;
    this.KEY_CONTENT = 261;
    this.KEY_FAVCH = 256;
    this.KEY_REC = 192;
    this.KEY_EMODE = 148;
    this.KEY_DMA = 260;

    this.KEY_PANEL_CH_UP= 105;
    this.KEY_PANEL_CH_DOWN = 106;
    this.KEY_PANEL_VOL_UP = 203;
    this.KEY_PANEL_VOL_DOWN = 204;
    this.KEY_PANEL_ENTER = 309;
    this.KEY_PANEL_SOURCE = 612;
    this.KEY_PANEL_MENU = 613;
    this.KEY_PANEL_POWER = 614;

	// Added by ck1.seo@samsung.com
	// For all key regist
	// 3 April 2009
	this.KEY_POWER = 76;
	this.KEY_TV = 77;
	this.KEY_VOL_UP = 7;
	this.KEY_VOL_DOWN = 11;
	this.KEY_CH_UP = 68;
	this.KEY_CH_DOWN = 65;
	this.KEY_TTX_MIX = 650;
	this.KEY_GUIDE = 651;
	this.KEY_SUBTITLE = 652;
	this.KEY_ASPECT = 653;
	this.KEY_DOLBY_SRR = 654;
	this.KEY_MTS = 655;
	this.KEY_12 = 1057;
	this.KEY_DISC_MENU = 1086;
	this.KEY_3D = 1219;
	this.KEY_PIP_ONOFF = 1032;
	this.KEY_AD = 1039;
	this.KEY_PMODE = 1040;
	this.KEY_SMODE = 1043;
	this.KEY_PIP_CHUP = 1050;
	this.KEY_PIP_CHDOWN = 1051;
	this.KEY_FF_ = 1078;
	this.KEY_REWIND_ = 1080;
	this.KEY_SUB_TITLE = 1089;
	this.KEY_SLEEP = 1097;
	this.KEY_D_AUDIO = 1236;
	this.KEY_D_VIEW_MODE = 1249;
	this.KEY_STEP = 1023;			// REC PAUSE(BD)
	this.KEY_CALLER_ID = 1128;		// FULL SCREEN (BD)
	this.KEY_ZOOM1 = 1083;
}

