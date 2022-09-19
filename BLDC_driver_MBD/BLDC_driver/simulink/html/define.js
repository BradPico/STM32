function CodeDefine() { 
this.def = new Array();
this.def["HallExtiFlag"] = {file: "MotorControl_c.html",line:20,type:"var"};
this.def["Key1State"] = {file: "MotorControl_c.html",line:21,type:"var"};
this.def["StartMotorReq"] = {file: "MotorControl_c.html",line:22,type:"var"};
this.def["Key2State"] = {file: "MotorControl_c.html",line:23,type:"var"};
this.def["StopMotorReq"] = {file: "MotorControl_c.html",line:24,type:"var"};
this.def["HallState"] = {file: "MotorControl_c.html",line:25,type:"var"};
this.def["TestState"] = {file: "MotorControl_c.html",line:26,type:"var"};
this.def["MotorState"] = {file: "MotorControl_c.html",line:27,type:"var"};
this.def["PWMValue"] = {file: "MotorControl_c.html",line:30,type:"var"};
this.def["MotorControl_DW"] = {file: "MotorControl_c.html",line:41,type:"var"};
this.def["MotorControl_M_"] = {file: "MotorControl_c.html",line:44,type:"var"};
this.def["MotorControl_M"] = {file: "MotorControl_c.html",line:45,type:"var"};
this.def["plook_u32u8_binckan"] = {file: "MotorControl_c.html",line:46,type:"fcn"};
this.def["binsearch_u32u8"] = {file: "MotorControl_c.html",line:73,type:"fcn"};
this.def["MotorControl_step"] = {file: "MotorControl_c.html",line:98,type:"fcn"};
this.def["MotorControl_initialize"] = {file: "MotorControl_c.html",line:116,type:"fcn"};
this.def["MotorControl_terminate"] = {file: "MotorControl_c.html",line:148,type:"fcn"};
this.def["DW_MotorControl_T"] = {file: "MotorControl_h.html",line:50,type:"type"};
this.def["ConstP_MotorControl_T"] = {file: "MotorControl_h.html",line:135,type:"type"};
this.def["Enum_MotorState"] = {file: "MotorControl_types_h.html",line:22,type:"type"};
this.def["RT_MODEL_MotorControl_T"] = {file: "MotorControl_types_h.html",line:31,type:"type"};
this.def["HallExtiTask"] = {file: "HallExtiTask_c.html",line:23,type:"fcn"};
this.def["MotorControl_Subsystem1"] = {file: "SystickTask_c.html",line:30,type:"fcn"};
this.def["SystickTask_Init"] = {file: "SystickTask_c.html",line:84,type:"fcn"};
this.def["SystickTask"] = {file: "SystickTask_c.html",line:92,type:"fcn"};
this.def["MotorControl_ConstP"] = {file: "MotorControl_data_c.html",line:20,type:"var"};
this.def["int8_T"] = {file: "rtwtypes_h.html",line:47,type:"type"};
this.def["uint8_T"] = {file: "rtwtypes_h.html",line:48,type:"type"};
this.def["int16_T"] = {file: "rtwtypes_h.html",line:49,type:"type"};
this.def["uint16_T"] = {file: "rtwtypes_h.html",line:50,type:"type"};
this.def["int32_T"] = {file: "rtwtypes_h.html",line:51,type:"type"};
this.def["uint32_T"] = {file: "rtwtypes_h.html",line:52,type:"type"};
this.def["real32_T"] = {file: "rtwtypes_h.html",line:53,type:"type"};
this.def["real64_T"] = {file: "rtwtypes_h.html",line:54,type:"type"};
this.def["real_T"] = {file: "rtwtypes_h.html",line:60,type:"type"};
this.def["time_T"] = {file: "rtwtypes_h.html",line:61,type:"type"};
this.def["boolean_T"] = {file: "rtwtypes_h.html",line:62,type:"type"};
this.def["int_T"] = {file: "rtwtypes_h.html",line:63,type:"type"};
this.def["uint_T"] = {file: "rtwtypes_h.html",line:64,type:"type"};
this.def["ulong_T"] = {file: "rtwtypes_h.html",line:65,type:"type"};
this.def["char_T"] = {file: "rtwtypes_h.html",line:66,type:"type"};
this.def["uchar_T"] = {file: "rtwtypes_h.html",line:67,type:"type"};
this.def["byte_T"] = {file: "rtwtypes_h.html",line:68,type:"type"};
this.def["creal32_T"] = {file: "rtwtypes_h.html",line:78,type:"type"};
this.def["creal64_T"] = {file: "rtwtypes_h.html",line:83,type:"type"};
this.def["creal_T"] = {file: "rtwtypes_h.html",line:88,type:"type"};
this.def["cint8_T"] = {file: "rtwtypes_h.html",line:95,type:"type"};
this.def["cuint8_T"] = {file: "rtwtypes_h.html",line:102,type:"type"};
this.def["cint16_T"] = {file: "rtwtypes_h.html",line:109,type:"type"};
this.def["cuint16_T"] = {file: "rtwtypes_h.html",line:116,type:"type"};
this.def["cint32_T"] = {file: "rtwtypes_h.html",line:123,type:"type"};
this.def["cuint32_T"] = {file: "rtwtypes_h.html",line:130,type:"type"};
this.def["pointer_T"] = {file: "rtwtypes_h.html",line:148,type:"type"};
}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["MotorControl_c.html"] = "../MotorControl.c";
	this.html2Root["MotorControl_c.html"] = "MotorControl_c.html";
	this.html2SrcPath["MotorControl_h.html"] = "../MotorControl.h";
	this.html2Root["MotorControl_h.html"] = "MotorControl_h.html";
	this.html2SrcPath["MotorControl_private_h.html"] = "../MotorControl_private.h";
	this.html2Root["MotorControl_private_h.html"] = "MotorControl_private_h.html";
	this.html2SrcPath["MotorControl_types_h.html"] = "../MotorControl_types.h";
	this.html2Root["MotorControl_types_h.html"] = "MotorControl_types_h.html";
	this.html2SrcPath["HallExtiTask_c.html"] = "../HallExtiTask.c";
	this.html2Root["HallExtiTask_c.html"] = "HallExtiTask_c.html";
	this.html2SrcPath["HallExtiTask_h.html"] = "../HallExtiTask.h";
	this.html2Root["HallExtiTask_h.html"] = "HallExtiTask_h.html";
	this.html2SrcPath["SystickTask_c.html"] = "../SystickTask.c";
	this.html2Root["SystickTask_c.html"] = "SystickTask_c.html";
	this.html2SrcPath["SystickTask_h.html"] = "../SystickTask.h";
	this.html2Root["SystickTask_h.html"] = "SystickTask_h.html";
	this.html2SrcPath["MotorControl_data_c.html"] = "../MotorControl_data.c";
	this.html2Root["MotorControl_data_c.html"] = "MotorControl_data_c.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "rtwtypes_h.html";
	this.html2SrcPath["rtmodel_h.html"] = "../rtmodel.h";
	this.html2Root["rtmodel_h.html"] = "rtmodel_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"MotorControl_c.html","MotorControl_h.html","MotorControl_private_h.html","MotorControl_types_h.html","HallExtiTask_c.html","HallExtiTask_h.html","SystickTask_c.html","SystickTask_h.html","MotorControl_data_c.html","rtwtypes_h.html","rtmodel_h.html"];
