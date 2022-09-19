function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Get_Key1State */
	this.urlHashMap["MotorControl:8"] = "SystickTask.c:99";
	/* <Root>/Get_Key2State */
	this.urlHashMap["MotorControl:9"] = "SystickTask.c:120";
	/* <Root>/Get_HallAState */
	this.urlHashMap["MotorControl:220"] = "HallExtiTask.c:31&SystickTask.c:143";
	/* <Root>/Get_HallBState */
	this.urlHashMap["MotorControl:221"] = "HallExtiTask.c:32&SystickTask.c:144";
	/* <Root>/Get_HallCState */
	this.urlHashMap["MotorControl:222"] = "HallExtiTask.c:33&SystickTask.c:145";
	/* <Root>/Function-Call
Generator */
	this.urlHashMap["MotorControl:245"] = "MotorControl.c:100,105,139,144";
	/* <Root>/Function-Call
Generator1 */
	this.urlHashMap["MotorControl:247"] = "MotorControl.c:107,112";
	/* <Root>/HallExtiTask */
	this.urlHashMap["MotorControl:15"] = "MotorControl.c:108&HallExtiTask.c:22";
	/* <Root>/SystickTask */
	this.urlHashMap["MotorControl:1"] = "MotorControl.c:101,140&SystickTask.c:83,91";
	/* <Root>/TestState */
	this.urlHashMap["MotorControl:269"] = "msg=&block=MotorControl:269";
	/* <S2>/Chart */
	this.urlHashMap["MotorControl:74"] = "MotorControl.c:27&MotorControl.h:42,48,49,163&SystickTask.c:22,86,150,311";
	/* <S2>/Data Type Conversion */
	this.urlHashMap["MotorControl:259"] = "MotorControl.c:21&MotorControl.h:157&SystickTask.c:98";
	/* <S2>/Data Type Conversion1 */
	this.urlHashMap["MotorControl:260"] = "MotorControl.c:23&MotorControl.h:159&SystickTask.c:119";
	/* <S2>/Data Type Conversion2 */
	this.urlHashMap["MotorControl:270"] = "MotorControl.c:26&MotorControl.h:162&SystickTask.c:313";
	/* <S2>/Subsystem1 */
	this.urlHashMap["MotorControl:116"] = "SystickTask.c:29,187,193,296,302";
	/* <S2>/Subsystem3 */
	this.urlHashMap["MotorControl:119"] = "SystickTask.c:215,223,260,268";
	/* <S2>/TestState */
	this.urlHashMap["MotorControl:268"] = "msg=&block=MotorControl:268";
	/* <S3>/Add */
	this.urlHashMap["MotorControl:162"] = "HallExtiTask.c:28";
	/* <S3>/Shift
Arithmetic */
	this.urlHashMap["MotorControl:163"] = "HallExtiTask.c:29";
	/* <S3>/Shift
Arithmetic1 */
	this.urlHashMap["MotorControl:164"] = "HallExtiTask.c:30";
	/* <S3>/Signal
Conversion */
	this.urlHashMap["MotorControl:165"] = "msg=rtwMsg_reducedBlock&block=MotorControl:165";
	/* <S3>/Signal
Conversion1 */
	this.urlHashMap["MotorControl:166"] = "msg=rtwMsg_reducedBlock&block=MotorControl:166";
	/* <S3>/Signal
Conversion2 */
	this.urlHashMap["MotorControl:167"] = "msg=rtwMsg_notTraceable&block=MotorControl:167";
	/* <S4>/Add */
	this.urlHashMap["MotorControl:200"] = "HallExtiTask.c:98";
	/* <S4>/Constant */
	this.urlHashMap["MotorControl:172"] = "MotorControl.c:32&MotorControl.h:175&HallExtiTask.c:50";
	/* <S4>/Constant1 */
	this.urlHashMap["MotorControl:173"] = "MotorControl.c:33&MotorControl.h:176&HallExtiTask.c:65";
	/* <S4>/Constant2 */
	this.urlHashMap["MotorControl:174"] = "MotorControl.c:34&MotorControl.h:177&HallExtiTask.c:80";
	/* <S4>/Constant3 */
	this.urlHashMap["MotorControl:258"] = "HallExtiTask.c:39";
	/* <S4>/Data Store
Write */
	this.urlHashMap["MotorControl:175"] = "HallExtiTask.c:49";
	/* <S4>/Data Store
Write1 */
	this.urlHashMap["MotorControl:176"] = "HallExtiTask.c:58";
	/* <S4>/Data Store
Write2 */
	this.urlHashMap["MotorControl:177"] = "HallExtiTask.c:64";
	/* <S4>/Data Store
Write3 */
	this.urlHashMap["MotorControl:178"] = "HallExtiTask.c:73";
	/* <S4>/Data Store
Write4 */
	this.urlHashMap["MotorControl:179"] = "HallExtiTask.c:79";
	/* <S4>/Data Store
Write5 */
	this.urlHashMap["MotorControl:180"] = "HallExtiTask.c:88";
	/* <S4>/Data Type Conversion */
	this.urlHashMap["MotorControl:181"] = "msg=rtwMsg_reducedBlock&block=MotorControl:181";
	/* <S4>/Data Type Conversion1 */
	this.urlHashMap["MotorControl:182"] = "msg=rtwMsg_reducedBlock&block=MotorControl:182";
	/* <S4>/Data Type Conversion2 */
	this.urlHashMap["MotorControl:183"] = "msg=rtwMsg_reducedBlock&block=MotorControl:183";
	/* <S4>/Data Type Conversion3 */
	this.urlHashMap["MotorControl:230"] = "HallExtiTask.c:66";
	/* <S4>/Data Type Conversion4 */
	this.urlHashMap["MotorControl:231"] = "HallExtiTask.c:81";
	/* <S4>/Data Type Conversion6 */
	this.urlHashMap["MotorControl:219"] = "MotorControl.c:20&MotorControl.h:156&HallExtiTask.c:94";
	/* <S4>/Data Type Conversion7 */
	this.urlHashMap["MotorControl:229"] = "HallExtiTask.c:51";
	/* <S4>/Delay */
	this.urlHashMap["MotorControl:203"] = "MotorControl.h:43&HallExtiTask.c:96,103";
	/* <S4>/Multiport
Switch */
	this.urlHashMap["MotorControl:238"] = "HallExtiTask.c:38,47";
	/* <S4>/Product1 */
	this.urlHashMap["MotorControl:232"] = "HallExtiTask.c:68";
	/* <S4>/Product2 */
	this.urlHashMap["MotorControl:186"] = "HallExtiTask.c:83";
	/* <S4>/Product3 */
	this.urlHashMap["MotorControl:233"] = "HallExtiTask.c:53";
	/* <S4>/turn */
	this.urlHashMap["MotorControl:193"] = "MotorControl.h:96,102&HallExtiTask.c:52&MotorControl_data.c:63,69";
	/* <S4>/turn1 */
	this.urlHashMap["MotorControl:194"] = "MotorControl.h:103,112&HallExtiTask.c:59&MotorControl_data.c:70,79";
	/* <S4>/turn2 */
	this.urlHashMap["MotorControl:195"] = "MotorControl.h:104,117&HallExtiTask.c:67&MotorControl_data.c:71,84";
	/* <S4>/turn3 */
	this.urlHashMap["MotorControl:196"] = "MotorControl.h:105,122&HallExtiTask.c:74&MotorControl_data.c:72,89";
	/* <S4>/turn4 */
	this.urlHashMap["MotorControl:197"] = "MotorControl.h:106,127&HallExtiTask.c:82&MotorControl_data.c:73,94";
	/* <S4>/turn5 */
	this.urlHashMap["MotorControl:198"] = "MotorControl.h:107,132&HallExtiTask.c:89&MotorControl_data.c:74,99";
	/* <S5>/Compare */
	this.urlHashMap["MotorControl:206:2"] = "HallExtiTask.c:97";
	/* <S5>/Constant */
	this.urlHashMap["MotorControl:206:3"] = "HallExtiTask.c:95";
	/* <S6>:1 */
	this.urlHashMap["MotorControl:74:1"] = "SystickTask.c:161,173";
	/* <S6>:3 */
	this.urlHashMap["MotorControl:74:3"] = "SystickTask.c:204,240";
	/* <S6>:2 */
	this.urlHashMap["MotorControl:74:2"] = "SystickTask.c:180,233,289";
	/* <S6>:4 */
	this.urlHashMap["MotorControl:74:4"] = "SystickTask.c:211,256,282";
	/* <S6>:5 */
	this.urlHashMap["MotorControl:74:5"] = "SystickTask.c:158";
	/* <S6>:6 */
	this.urlHashMap["MotorControl:74:6"] = "SystickTask.c:177";
	/* <S6>:10 */
	this.urlHashMap["MotorControl:74:10"] = "SystickTask.c:286";
	/* <S6>:9 */
	this.urlHashMap["MotorControl:74:9"] = "SystickTask.c:253";
	/* <S6>:7 */
	this.urlHashMap["MotorControl:74:7"] = "SystickTask.c:237";
	/* <S6>:8 */
	this.urlHashMap["MotorControl:74:8"] = "SystickTask.c:208";
	/* <S6>:16 */
	this.urlHashMap["MotorControl:74:16"] = "SystickTask.c:220,265";
	/* <S6>:15 */
	this.urlHashMap["MotorControl:74:15"] = "SystickTask.c:190,299";
	/* <S6>:1:1 */
	this.urlHashMap["MotorControl:74:1:1"] = "SystickTask.c:162,165";
	/* <S6>:6:1 */
	this.urlHashMap["MotorControl:74:6:1"] = "SystickTask.c:174,175";
	/* <S6>:2:1 */
	this.urlHashMap["MotorControl:74:2:1"] = "SystickTask.c:181,290";
	/* <S6>:2:2 */
	this.urlHashMap["MotorControl:74:2:2"] = "SystickTask.c:184,293";
	/* <S6>:2:3 */
	this.urlHashMap["MotorControl:74:2:3"] = "SystickTask.c:189,195,272,298,304";
	/* <S6>:8:1 */
	this.urlHashMap["MotorControl:74:8:1"] = "SystickTask.c:205,206";
	/* <S6>:4:1 */
	this.urlHashMap["MotorControl:74:4:1"] = "SystickTask.c:212,219,257,264";
	/* <S6>:4:3 */
	this.urlHashMap["MotorControl:74:4:3"] = "SystickTask.c:224,269";
	/* <S6>:7:1 */
	this.urlHashMap["MotorControl:74:7:1"] = "SystickTask.c:234,235";
	/* <S6>:3:1 */
	this.urlHashMap["MotorControl:74:3:1"] = "SystickTask.c:241,244";
	/* <S6>:3:3 */
	this.urlHashMap["MotorControl:74:3:3"] = "SystickTask.c:247";
	/* <S6>:9:1 */
	this.urlHashMap["MotorControl:74:9:1"] = "SystickTask.c:250,251";
	/* <S6>:10:1 */
	this.urlHashMap["MotorControl:74:10:1"] = "SystickTask.c:283,284";
	/* <S7>/Add */
	this.urlHashMap["MotorControl:82"] = "MotorControl.c:25&MotorControl.h:161&SystickTask.c:140";
	/* <S7>/Shift
Arithmetic */
	this.urlHashMap["MotorControl:80"] = "SystickTask.c:141";
	/* <S7>/Shift
Arithmetic1 */
	this.urlHashMap["MotorControl:81"] = "SystickTask.c:142";
	/* <S7>/Signal
Conversion */
	this.urlHashMap["MotorControl:75"] = "msg=rtwMsg_reducedBlock&block=MotorControl:75";
	/* <S7>/Signal
Conversion1 */
	this.urlHashMap["MotorControl:78"] = "msg=rtwMsg_reducedBlock&block=MotorControl:78";
	/* <S7>/Signal
Conversion2 */
	this.urlHashMap["MotorControl:79"] = "msg=rtwMsg_reducedBlock&block=MotorControl:79";
	/* <S8>/Constant */
	this.urlHashMap["MotorControl:96"] = "MotorControl.c:35&MotorControl.h:178&SystickTask.c:38";
	/* <S8>/Constant1 */
	this.urlHashMap["MotorControl:102"] = "MotorControl.c:36&MotorControl.h:179&SystickTask.c:53";
	/* <S8>/Constant2 */
	this.urlHashMap["MotorControl:109"] = "MotorControl.c:37&MotorControl.h:180&SystickTask.c:68";
	/* <S8>/Constant3 */
	this.urlHashMap["MotorControl:254"] = "SystickTask.c:33";
	/* <S8>/Data Store
Write */
	this.urlHashMap["MotorControl:267"] = "SystickTask.c:32";
	/* <S8>/Data Store
Write1 */
	this.urlHashMap["MotorControl:101"] = "SystickTask.c:37";
	/* <S8>/Data Store
Write2 */
	this.urlHashMap["MotorControl:100"] = "SystickTask.c:46";
	/* <S8>/Data Store
Write3 */
	this.urlHashMap["MotorControl:103"] = "SystickTask.c:52";
	/* <S8>/Data Store
Write4 */
	this.urlHashMap["MotorControl:104"] = "SystickTask.c:61";
	/* <S8>/Data Store
Write5 */
	this.urlHashMap["MotorControl:110"] = "SystickTask.c:67";
	/* <S8>/Data Store
Write6 */
	this.urlHashMap["MotorControl:111"] = "SystickTask.c:76";
	/* <S8>/Data Type Conversion */
	this.urlHashMap["MotorControl:98"] = "msg=&block=MotorControl:98";
	/* <S8>/Data Type Conversion1 */
	this.urlHashMap["MotorControl:105"] = "msg=&block=MotorControl:105";
	/* <S8>/Data Type Conversion2 */
	this.urlHashMap["MotorControl:112"] = "msg=&block=MotorControl:112";
	/* <S8>/Data Type Conversion3 */
	this.urlHashMap["MotorControl:227"] = "SystickTask.c:54";
	/* <S8>/Data Type Conversion4 */
	this.urlHashMap["MotorControl:228"] = "SystickTask.c:69";
	/* <S8>/Data Type Conversion6 */
	this.urlHashMap["MotorControl:226"] = "SystickTask.c:39";
	/* <S8>/Display */
	this.urlHashMap["MotorControl:253"] = "msg=&block=MotorControl:253";
	/* <S8>/Product1 */
	this.urlHashMap["MotorControl:234"] = "SystickTask.c:56";
	/* <S8>/Product2 */
	this.urlHashMap["MotorControl:113"] = "SystickTask.c:71";
	/* <S8>/Product3 */
	this.urlHashMap["MotorControl:235"] = "SystickTask.c:41";
	/* <S8>/turn */
	this.urlHashMap["MotorControl:89"] = "MotorControl.h:55,61&SystickTask.c:40&MotorControl_data.c:22,28";
	/* <S8>/turn1 */
	this.urlHashMap["MotorControl:90"] = "MotorControl.h:62,71&SystickTask.c:47&MotorControl_data.c:29,38";
	/* <S8>/turn2 */
	this.urlHashMap["MotorControl:91"] = "MotorControl.h:63,76&SystickTask.c:55&MotorControl_data.c:30,43";
	/* <S8>/turn3 */
	this.urlHashMap["MotorControl:92"] = "MotorControl.h:64,81&SystickTask.c:62&MotorControl_data.c:31,48";
	/* <S8>/turn4 */
	this.urlHashMap["MotorControl:93"] = "MotorControl.h:65,86&SystickTask.c:70&MotorControl_data.c:32,53";
	/* <S8>/turn5 */
	this.urlHashMap["MotorControl:94"] = "MotorControl.h:66,91&SystickTask.c:77&MotorControl_data.c:33,58";
	/* <S10>/Constant3 */
	this.urlHashMap["MotorControl:256"] = "SystickTask.c:217,262";
	/* <S10>/Data Store
Write6 */
	this.urlHashMap["MotorControl:257"] = "SystickTask.c:216,261";
	/* <S11>/Constant */
	this.urlHashMap["MotorControl:26"] = "SystickTask.c:107";
	/* <S11>/Constant1 */
	this.urlHashMap["MotorControl:32"] = "SystickTask.c:108";
	/* <S11>/Constant2 */
	this.urlHashMap["MotorControl:33"] = "SystickTask.c:109";
	/* <S11>/Data Type Conversion */
	this.urlHashMap["MotorControl:50"] = "MotorControl.c:22&MotorControl.h:158&SystickTask.c:106";
	/* <S11>/Delay */
	this.urlHashMap["MotorControl:261"] = "MotorControl.h:44&SystickTask.c:103,316";
	/* <S11>/Delay1 */
	this.urlHashMap["MotorControl:262"] = "MotorControl.h:45&SystickTask.c:110,319";
	/* <S11>/Logical
Operator */
	this.urlHashMap["MotorControl:29"] = "SystickTask.c:111";
	/* <S11>/Relational
Operator */
	this.urlHashMap["MotorControl:28"] = "SystickTask.c:112";
	/* <S11>/Relational
Operator1 */
	this.urlHashMap["MotorControl:30"] = "SystickTask.c:113";
	/* <S11>/Relational
Operator2 */
	this.urlHashMap["MotorControl:31"] = "SystickTask.c:114";
	/* <S12>/Constant */
	this.urlHashMap["MotorControl:53"] = "SystickTask.c:128";
	/* <S12>/Constant1 */
	this.urlHashMap["MotorControl:54"] = "SystickTask.c:129";
	/* <S12>/Constant2 */
	this.urlHashMap["MotorControl:55"] = "SystickTask.c:130";
	/* <S12>/Data Type Conversion */
	this.urlHashMap["MotorControl:56"] = "MotorControl.c:24&MotorControl.h:160&SystickTask.c:127";
	/* <S12>/Logical
Operator */
	this.urlHashMap["MotorControl:57"] = "SystickTask.c:131";
	/* <S12>/Relational
Operator */
	this.urlHashMap["MotorControl:58"] = "SystickTask.c:132";
	/* <S12>/Relational
Operator1 */
	this.urlHashMap["MotorControl:59"] = "SystickTask.c:133";
	/* <S12>/Relational
Operator2 */
	this.urlHashMap["MotorControl:60"] = "SystickTask.c:134";
	/* <S12>/Unit Delay */
	this.urlHashMap["MotorControl:61"] = "MotorControl.h:47&SystickTask.c:135,325";
	/* <S12>/Unit Delay1 */
	this.urlHashMap["MotorControl:62"] = "MotorControl.h:46&SystickTask.c:124,322";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "MotorControl"};
	this.sidHashMap["MotorControl"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "MotorControl:15"};
	this.sidHashMap["MotorControl:15"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "MotorControl:1"};
	this.sidHashMap["MotorControl:1"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "MotorControl:158"};
	this.sidHashMap["MotorControl:158"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "MotorControl:169"};
	this.sidHashMap["MotorControl:169"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "MotorControl:206"};
	this.sidHashMap["MotorControl:206"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "MotorControl:74"};
	this.sidHashMap["MotorControl:74"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "MotorControl:83"};
	this.sidHashMap["MotorControl:83"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "MotorControl:116"};
	this.sidHashMap["MotorControl:116"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "MotorControl:69"};
	this.sidHashMap["MotorControl:69"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "MotorControl:119"};
	this.sidHashMap["MotorControl:119"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "MotorControl:35"};
	this.sidHashMap["MotorControl:35"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "MotorControl:51"};
	this.sidHashMap["MotorControl:51"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<Root>/Get_Key1State"] = {sid: "MotorControl:8"};
	this.sidHashMap["MotorControl:8"] = {rtwname: "<Root>/Get_Key1State"};
	this.rtwnameHashMap["<Root>/Get_Key2State"] = {sid: "MotorControl:9"};
	this.sidHashMap["MotorControl:9"] = {rtwname: "<Root>/Get_Key2State"};
	this.rtwnameHashMap["<Root>/Get_HallAState"] = {sid: "MotorControl:220"};
	this.sidHashMap["MotorControl:220"] = {rtwname: "<Root>/Get_HallAState"};
	this.rtwnameHashMap["<Root>/Get_HallBState"] = {sid: "MotorControl:221"};
	this.sidHashMap["MotorControl:221"] = {rtwname: "<Root>/Get_HallBState"};
	this.rtwnameHashMap["<Root>/Get_HallCState"] = {sid: "MotorControl:222"};
	this.sidHashMap["MotorControl:222"] = {rtwname: "<Root>/Get_HallCState"};
	this.rtwnameHashMap["<Root>/From"] = {sid: "MotorControl:5"};
	this.sidHashMap["MotorControl:5"] = {rtwname: "<Root>/From"};
	this.rtwnameHashMap["<Root>/From1"] = {sid: "MotorControl:6"};
	this.sidHashMap["MotorControl:6"] = {rtwname: "<Root>/From1"};
	this.rtwnameHashMap["<Root>/From2"] = {sid: "MotorControl:7"};
	this.sidHashMap["MotorControl:7"] = {rtwname: "<Root>/From2"};
	this.rtwnameHashMap["<Root>/From3"] = {sid: "MotorControl:10"};
	this.sidHashMap["MotorControl:10"] = {rtwname: "<Root>/From3"};
	this.rtwnameHashMap["<Root>/From4"] = {sid: "MotorControl:242"};
	this.sidHashMap["MotorControl:242"] = {rtwname: "<Root>/From4"};
	this.rtwnameHashMap["<Root>/From5"] = {sid: "MotorControl:243"};
	this.sidHashMap["MotorControl:243"] = {rtwname: "<Root>/From5"};
	this.rtwnameHashMap["<Root>/From6"] = {sid: "MotorControl:244"};
	this.sidHashMap["MotorControl:244"] = {rtwname: "<Root>/From6"};
	this.rtwnameHashMap["<Root>/From7"] = {sid: "MotorControl:20"};
	this.sidHashMap["MotorControl:20"] = {rtwname: "<Root>/From7"};
	this.rtwnameHashMap["<Root>/From8"] = {sid: "MotorControl:21"};
	this.sidHashMap["MotorControl:21"] = {rtwname: "<Root>/From8"};
	this.rtwnameHashMap["<Root>/Function-Call Generator"] = {sid: "MotorControl:245"};
	this.sidHashMap["MotorControl:245"] = {rtwname: "<Root>/Function-Call Generator"};
	this.rtwnameHashMap["<Root>/Function-Call Generator1"] = {sid: "MotorControl:247"};
	this.sidHashMap["MotorControl:247"] = {rtwname: "<Root>/Function-Call Generator1"};
	this.rtwnameHashMap["<Root>/Goto"] = {sid: "MotorControl:11"};
	this.sidHashMap["MotorControl:11"] = {rtwname: "<Root>/Goto"};
	this.rtwnameHashMap["<Root>/Goto1"] = {sid: "MotorControl:239"};
	this.sidHashMap["MotorControl:239"] = {rtwname: "<Root>/Goto1"};
	this.rtwnameHashMap["<Root>/Goto2"] = {sid: "MotorControl:240"};
	this.sidHashMap["MotorControl:240"] = {rtwname: "<Root>/Goto2"};
	this.rtwnameHashMap["<Root>/Goto3"] = {sid: "MotorControl:241"};
	this.sidHashMap["MotorControl:241"] = {rtwname: "<Root>/Goto3"};
	this.rtwnameHashMap["<Root>/Goto4"] = {sid: "MotorControl:246"};
	this.sidHashMap["MotorControl:246"] = {rtwname: "<Root>/Goto4"};
	this.rtwnameHashMap["<Root>/Goto5"] = {sid: "MotorControl:248"};
	this.sidHashMap["MotorControl:248"] = {rtwname: "<Root>/Goto5"};
	this.rtwnameHashMap["<Root>/HallExtiTask"] = {sid: "MotorControl:15"};
	this.sidHashMap["MotorControl:15"] = {rtwname: "<Root>/HallExtiTask"};
	this.rtwnameHashMap["<Root>/SystickTask"] = {sid: "MotorControl:1"};
	this.sidHashMap["MotorControl:1"] = {rtwname: "<Root>/SystickTask"};
	this.rtwnameHashMap["<Root>/HallExtiFlag"] = {sid: "MotorControl:22"};
	this.sidHashMap["MotorControl:22"] = {rtwname: "<Root>/HallExtiFlag"};
	this.rtwnameHashMap["<Root>/TestState"] = {sid: "MotorControl:269"};
	this.sidHashMap["MotorControl:269"] = {rtwname: "<Root>/TestState"};
	this.rtwnameHashMap["<S1>/MotorState"] = {sid: "MotorControl:16"};
	this.sidHashMap["MotorControl:16"] = {rtwname: "<S1>/MotorState"};
	this.rtwnameHashMap["<S1>/HallAState"] = {sid: "MotorControl:155"};
	this.sidHashMap["MotorControl:155"] = {rtwname: "<S1>/HallAState"};
	this.rtwnameHashMap["<S1>/HallBState"] = {sid: "MotorControl:156"};
	this.sidHashMap["MotorControl:156"] = {rtwname: "<S1>/HallBState"};
	this.rtwnameHashMap["<S1>/HallCState"] = {sid: "MotorControl:157"};
	this.sidHashMap["MotorControl:157"] = {rtwname: "<S1>/HallCState"};
	this.rtwnameHashMap["<S1>/function"] = {sid: "MotorControl:17"};
	this.sidHashMap["MotorControl:17"] = {rtwname: "<S1>/function"};
	this.rtwnameHashMap["<S1>/Subsystem"] = {sid: "MotorControl:158"};
	this.sidHashMap["MotorControl:158"] = {rtwname: "<S1>/Subsystem"};
	this.rtwnameHashMap["<S1>/Subsystem1"] = {sid: "MotorControl:169"};
	this.sidHashMap["MotorControl:169"] = {rtwname: "<S1>/Subsystem1"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "MotorControl:18"};
	this.sidHashMap["MotorControl:18"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Key1State"] = {sid: "MotorControl:2"};
	this.sidHashMap["MotorControl:2"] = {rtwname: "<S2>/Key1State"};
	this.rtwnameHashMap["<S2>/Key2State"] = {sid: "MotorControl:23"};
	this.sidHashMap["MotorControl:23"] = {rtwname: "<S2>/Key2State"};
	this.rtwnameHashMap["<S2>/HallAState"] = {sid: "MotorControl:64"};
	this.sidHashMap["MotorControl:64"] = {rtwname: "<S2>/HallAState"};
	this.rtwnameHashMap["<S2>/HallBState"] = {sid: "MotorControl:65"};
	this.sidHashMap["MotorControl:65"] = {rtwname: "<S2>/HallBState"};
	this.rtwnameHashMap["<S2>/HallCState"] = {sid: "MotorControl:67"};
	this.sidHashMap["MotorControl:67"] = {rtwname: "<S2>/HallCState"};
	this.rtwnameHashMap["<S2>/function"] = {sid: "MotorControl:3"};
	this.sidHashMap["MotorControl:3"] = {rtwname: "<S2>/function"};
	this.rtwnameHashMap["<S2>/Chart"] = {sid: "MotorControl:74"};
	this.sidHashMap["MotorControl:74"] = {rtwname: "<S2>/Chart"};
	this.rtwnameHashMap["<S2>/Data Type Conversion"] = {sid: "MotorControl:259"};
	this.sidHashMap["MotorControl:259"] = {rtwname: "<S2>/Data Type Conversion"};
	this.rtwnameHashMap["<S2>/Data Type Conversion1"] = {sid: "MotorControl:260"};
	this.sidHashMap["MotorControl:260"] = {rtwname: "<S2>/Data Type Conversion1"};
	this.rtwnameHashMap["<S2>/Data Type Conversion2"] = {sid: "MotorControl:270"};
	this.sidHashMap["MotorControl:270"] = {rtwname: "<S2>/Data Type Conversion2"};
	this.rtwnameHashMap["<S2>/Subsystem"] = {sid: "MotorControl:83"};
	this.sidHashMap["MotorControl:83"] = {rtwname: "<S2>/Subsystem"};
	this.rtwnameHashMap["<S2>/Subsystem1"] = {sid: "MotorControl:116"};
	this.sidHashMap["MotorControl:116"] = {rtwname: "<S2>/Subsystem1"};
	this.rtwnameHashMap["<S2>/Subsystem2"] = {sid: "MotorControl:69"};
	this.sidHashMap["MotorControl:69"] = {rtwname: "<S2>/Subsystem2"};
	this.rtwnameHashMap["<S2>/Subsystem3"] = {sid: "MotorControl:119"};
	this.sidHashMap["MotorControl:119"] = {rtwname: "<S2>/Subsystem3"};
	this.rtwnameHashMap["<S2>/MotorState"] = {sid: "MotorControl:4"};
	this.sidHashMap["MotorControl:4"] = {rtwname: "<S2>/MotorState"};
	this.rtwnameHashMap["<S2>/TestState"] = {sid: "MotorControl:268"};
	this.sidHashMap["MotorControl:268"] = {rtwname: "<S2>/TestState"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "MotorControl:159"};
	this.sidHashMap["MotorControl:159"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/In2"] = {sid: "MotorControl:160"};
	this.sidHashMap["MotorControl:160"] = {rtwname: "<S3>/In2"};
	this.rtwnameHashMap["<S3>/In3"] = {sid: "MotorControl:161"};
	this.sidHashMap["MotorControl:161"] = {rtwname: "<S3>/In3"};
	this.rtwnameHashMap["<S3>/Add"] = {sid: "MotorControl:162"};
	this.sidHashMap["MotorControl:162"] = {rtwname: "<S3>/Add"};
	this.rtwnameHashMap["<S3>/Shift Arithmetic"] = {sid: "MotorControl:163"};
	this.sidHashMap["MotorControl:163"] = {rtwname: "<S3>/Shift Arithmetic"};
	this.rtwnameHashMap["<S3>/Shift Arithmetic1"] = {sid: "MotorControl:164"};
	this.sidHashMap["MotorControl:164"] = {rtwname: "<S3>/Shift Arithmetic1"};
	this.rtwnameHashMap["<S3>/Signal Conversion"] = {sid: "MotorControl:165"};
	this.sidHashMap["MotorControl:165"] = {rtwname: "<S3>/Signal Conversion"};
	this.rtwnameHashMap["<S3>/Signal Conversion1"] = {sid: "MotorControl:166"};
	this.sidHashMap["MotorControl:166"] = {rtwname: "<S3>/Signal Conversion1"};
	this.rtwnameHashMap["<S3>/Signal Conversion2"] = {sid: "MotorControl:167"};
	this.sidHashMap["MotorControl:167"] = {rtwname: "<S3>/Signal Conversion2"};
	this.rtwnameHashMap["<S3>/HallState"] = {sid: "MotorControl:168"};
	this.sidHashMap["MotorControl:168"] = {rtwname: "<S3>/HallState"};
	this.rtwnameHashMap["<S4>/MotorState"] = {sid: "MotorControl:199"};
	this.sidHashMap["MotorControl:199"] = {rtwname: "<S4>/MotorState"};
	this.rtwnameHashMap["<S4>/HallState"] = {sid: "MotorControl:170"};
	this.sidHashMap["MotorControl:170"] = {rtwname: "<S4>/HallState"};
	this.rtwnameHashMap["<S4>/Add"] = {sid: "MotorControl:200"};
	this.sidHashMap["MotorControl:200"] = {rtwname: "<S4>/Add"};
	this.rtwnameHashMap["<S4>/Compare To Constant1"] = {sid: "MotorControl:206"};
	this.sidHashMap["MotorControl:206"] = {rtwname: "<S4>/Compare To Constant1"};
	this.rtwnameHashMap["<S4>/Constant"] = {sid: "MotorControl:172"};
	this.sidHashMap["MotorControl:172"] = {rtwname: "<S4>/Constant"};
	this.rtwnameHashMap["<S4>/Constant1"] = {sid: "MotorControl:173"};
	this.sidHashMap["MotorControl:173"] = {rtwname: "<S4>/Constant1"};
	this.rtwnameHashMap["<S4>/Constant2"] = {sid: "MotorControl:174"};
	this.sidHashMap["MotorControl:174"] = {rtwname: "<S4>/Constant2"};
	this.rtwnameHashMap["<S4>/Constant3"] = {sid: "MotorControl:258"};
	this.sidHashMap["MotorControl:258"] = {rtwname: "<S4>/Constant3"};
	this.rtwnameHashMap["<S4>/Data Store Write"] = {sid: "MotorControl:175"};
	this.sidHashMap["MotorControl:175"] = {rtwname: "<S4>/Data Store Write"};
	this.rtwnameHashMap["<S4>/Data Store Write1"] = {sid: "MotorControl:176"};
	this.sidHashMap["MotorControl:176"] = {rtwname: "<S4>/Data Store Write1"};
	this.rtwnameHashMap["<S4>/Data Store Write2"] = {sid: "MotorControl:177"};
	this.sidHashMap["MotorControl:177"] = {rtwname: "<S4>/Data Store Write2"};
	this.rtwnameHashMap["<S4>/Data Store Write3"] = {sid: "MotorControl:178"};
	this.sidHashMap["MotorControl:178"] = {rtwname: "<S4>/Data Store Write3"};
	this.rtwnameHashMap["<S4>/Data Store Write4"] = {sid: "MotorControl:179"};
	this.sidHashMap["MotorControl:179"] = {rtwname: "<S4>/Data Store Write4"};
	this.rtwnameHashMap["<S4>/Data Store Write5"] = {sid: "MotorControl:180"};
	this.sidHashMap["MotorControl:180"] = {rtwname: "<S4>/Data Store Write5"};
	this.rtwnameHashMap["<S4>/Data Type Conversion"] = {sid: "MotorControl:181"};
	this.sidHashMap["MotorControl:181"] = {rtwname: "<S4>/Data Type Conversion"};
	this.rtwnameHashMap["<S4>/Data Type Conversion1"] = {sid: "MotorControl:182"};
	this.sidHashMap["MotorControl:182"] = {rtwname: "<S4>/Data Type Conversion1"};
	this.rtwnameHashMap["<S4>/Data Type Conversion2"] = {sid: "MotorControl:183"};
	this.sidHashMap["MotorControl:183"] = {rtwname: "<S4>/Data Type Conversion2"};
	this.rtwnameHashMap["<S4>/Data Type Conversion3"] = {sid: "MotorControl:230"};
	this.sidHashMap["MotorControl:230"] = {rtwname: "<S4>/Data Type Conversion3"};
	this.rtwnameHashMap["<S4>/Data Type Conversion4"] = {sid: "MotorControl:231"};
	this.sidHashMap["MotorControl:231"] = {rtwname: "<S4>/Data Type Conversion4"};
	this.rtwnameHashMap["<S4>/Data Type Conversion6"] = {sid: "MotorControl:219"};
	this.sidHashMap["MotorControl:219"] = {rtwname: "<S4>/Data Type Conversion6"};
	this.rtwnameHashMap["<S4>/Data Type Conversion7"] = {sid: "MotorControl:229"};
	this.sidHashMap["MotorControl:229"] = {rtwname: "<S4>/Data Type Conversion7"};
	this.rtwnameHashMap["<S4>/Delay"] = {sid: "MotorControl:203"};
	this.sidHashMap["MotorControl:203"] = {rtwname: "<S4>/Delay"};
	this.rtwnameHashMap["<S4>/Multiport Switch"] = {sid: "MotorControl:238"};
	this.sidHashMap["MotorControl:238"] = {rtwname: "<S4>/Multiport Switch"};
	this.rtwnameHashMap["<S4>/Product1"] = {sid: "MotorControl:232"};
	this.sidHashMap["MotorControl:232"] = {rtwname: "<S4>/Product1"};
	this.rtwnameHashMap["<S4>/Product2"] = {sid: "MotorControl:186"};
	this.sidHashMap["MotorControl:186"] = {rtwname: "<S4>/Product2"};
	this.rtwnameHashMap["<S4>/Product3"] = {sid: "MotorControl:233"};
	this.sidHashMap["MotorControl:233"] = {rtwname: "<S4>/Product3"};
	this.rtwnameHashMap["<S4>/turn"] = {sid: "MotorControl:193"};
	this.sidHashMap["MotorControl:193"] = {rtwname: "<S4>/turn"};
	this.rtwnameHashMap["<S4>/turn1"] = {sid: "MotorControl:194"};
	this.sidHashMap["MotorControl:194"] = {rtwname: "<S4>/turn1"};
	this.rtwnameHashMap["<S4>/turn2"] = {sid: "MotorControl:195"};
	this.sidHashMap["MotorControl:195"] = {rtwname: "<S4>/turn2"};
	this.rtwnameHashMap["<S4>/turn3"] = {sid: "MotorControl:196"};
	this.sidHashMap["MotorControl:196"] = {rtwname: "<S4>/turn3"};
	this.rtwnameHashMap["<S4>/turn4"] = {sid: "MotorControl:197"};
	this.sidHashMap["MotorControl:197"] = {rtwname: "<S4>/turn4"};
	this.rtwnameHashMap["<S4>/turn5"] = {sid: "MotorControl:198"};
	this.sidHashMap["MotorControl:198"] = {rtwname: "<S4>/turn5"};
	this.rtwnameHashMap["<S4>/HallExtiFlag"] = {sid: "MotorControl:205"};
	this.sidHashMap["MotorControl:205"] = {rtwname: "<S4>/HallExtiFlag"};
	this.rtwnameHashMap["<S5>/u"] = {sid: "MotorControl:206:1"};
	this.sidHashMap["MotorControl:206:1"] = {rtwname: "<S5>/u"};
	this.rtwnameHashMap["<S5>/Compare"] = {sid: "MotorControl:206:2"};
	this.sidHashMap["MotorControl:206:2"] = {rtwname: "<S5>/Compare"};
	this.rtwnameHashMap["<S5>/Constant"] = {sid: "MotorControl:206:3"};
	this.sidHashMap["MotorControl:206:3"] = {rtwname: "<S5>/Constant"};
	this.rtwnameHashMap["<S5>/y"] = {sid: "MotorControl:206:4"};
	this.sidHashMap["MotorControl:206:4"] = {rtwname: "<S5>/y"};
	this.rtwnameHashMap["<S6>:1"] = {sid: "MotorControl:74:1"};
	this.sidHashMap["MotorControl:74:1"] = {rtwname: "<S6>:1"};
	this.rtwnameHashMap["<S6>:3"] = {sid: "MotorControl:74:3"};
	this.sidHashMap["MotorControl:74:3"] = {rtwname: "<S6>:3"};
	this.rtwnameHashMap["<S6>:2"] = {sid: "MotorControl:74:2"};
	this.sidHashMap["MotorControl:74:2"] = {rtwname: "<S6>:2"};
	this.rtwnameHashMap["<S6>:4"] = {sid: "MotorControl:74:4"};
	this.sidHashMap["MotorControl:74:4"] = {rtwname: "<S6>:4"};
	this.rtwnameHashMap["<S6>:5"] = {sid: "MotorControl:74:5"};
	this.sidHashMap["MotorControl:74:5"] = {rtwname: "<S6>:5"};
	this.rtwnameHashMap["<S6>:6"] = {sid: "MotorControl:74:6"};
	this.sidHashMap["MotorControl:74:6"] = {rtwname: "<S6>:6"};
	this.rtwnameHashMap["<S6>:10"] = {sid: "MotorControl:74:10"};
	this.sidHashMap["MotorControl:74:10"] = {rtwname: "<S6>:10"};
	this.rtwnameHashMap["<S6>:9"] = {sid: "MotorControl:74:9"};
	this.sidHashMap["MotorControl:74:9"] = {rtwname: "<S6>:9"};
	this.rtwnameHashMap["<S6>:7"] = {sid: "MotorControl:74:7"};
	this.sidHashMap["MotorControl:74:7"] = {rtwname: "<S6>:7"};
	this.rtwnameHashMap["<S6>:8"] = {sid: "MotorControl:74:8"};
	this.sidHashMap["MotorControl:74:8"] = {rtwname: "<S6>:8"};
	this.rtwnameHashMap["<S6>:16"] = {sid: "MotorControl:74:16"};
	this.sidHashMap["MotorControl:74:16"] = {rtwname: "<S6>:16"};
	this.rtwnameHashMap["<S6>:15"] = {sid: "MotorControl:74:15"};
	this.sidHashMap["MotorControl:74:15"] = {rtwname: "<S6>:15"};
	this.rtwnameHashMap["<S6>:1:1"] = {sid: "MotorControl:74:1:1"};
	this.sidHashMap["MotorControl:74:1:1"] = {rtwname: "<S6>:1:1"};
	this.rtwnameHashMap["<S6>:6:1"] = {sid: "MotorControl:74:6:1"};
	this.sidHashMap["MotorControl:74:6:1"] = {rtwname: "<S6>:6:1"};
	this.rtwnameHashMap["<S6>:2:1"] = {sid: "MotorControl:74:2:1"};
	this.sidHashMap["MotorControl:74:2:1"] = {rtwname: "<S6>:2:1"};
	this.rtwnameHashMap["<S6>:2:2"] = {sid: "MotorControl:74:2:2"};
	this.sidHashMap["MotorControl:74:2:2"] = {rtwname: "<S6>:2:2"};
	this.rtwnameHashMap["<S6>:2:3"] = {sid: "MotorControl:74:2:3"};
	this.sidHashMap["MotorControl:74:2:3"] = {rtwname: "<S6>:2:3"};
	this.rtwnameHashMap["<S6>:8:1"] = {sid: "MotorControl:74:8:1"};
	this.sidHashMap["MotorControl:74:8:1"] = {rtwname: "<S6>:8:1"};
	this.rtwnameHashMap["<S6>:4:1"] = {sid: "MotorControl:74:4:1"};
	this.sidHashMap["MotorControl:74:4:1"] = {rtwname: "<S6>:4:1"};
	this.rtwnameHashMap["<S6>:4:3"] = {sid: "MotorControl:74:4:3"};
	this.sidHashMap["MotorControl:74:4:3"] = {rtwname: "<S6>:4:3"};
	this.rtwnameHashMap["<S6>:7:1"] = {sid: "MotorControl:74:7:1"};
	this.sidHashMap["MotorControl:74:7:1"] = {rtwname: "<S6>:7:1"};
	this.rtwnameHashMap["<S6>:3:1"] = {sid: "MotorControl:74:3:1"};
	this.sidHashMap["MotorControl:74:3:1"] = {rtwname: "<S6>:3:1"};
	this.rtwnameHashMap["<S6>:3:3"] = {sid: "MotorControl:74:3:3"};
	this.sidHashMap["MotorControl:74:3:3"] = {rtwname: "<S6>:3:3"};
	this.rtwnameHashMap["<S6>:9:1"] = {sid: "MotorControl:74:9:1"};
	this.sidHashMap["MotorControl:74:9:1"] = {rtwname: "<S6>:9:1"};
	this.rtwnameHashMap["<S6>:10:1"] = {sid: "MotorControl:74:10:1"};
	this.sidHashMap["MotorControl:74:10:1"] = {rtwname: "<S6>:10:1"};
	this.rtwnameHashMap["<S7>/In1"] = {sid: "MotorControl:84"};
	this.sidHashMap["MotorControl:84"] = {rtwname: "<S7>/In1"};
	this.rtwnameHashMap["<S7>/In2"] = {sid: "MotorControl:85"};
	this.sidHashMap["MotorControl:85"] = {rtwname: "<S7>/In2"};
	this.rtwnameHashMap["<S7>/In3"] = {sid: "MotorControl:86"};
	this.sidHashMap["MotorControl:86"] = {rtwname: "<S7>/In3"};
	this.rtwnameHashMap["<S7>/Add"] = {sid: "MotorControl:82"};
	this.sidHashMap["MotorControl:82"] = {rtwname: "<S7>/Add"};
	this.rtwnameHashMap["<S7>/Shift Arithmetic"] = {sid: "MotorControl:80"};
	this.sidHashMap["MotorControl:80"] = {rtwname: "<S7>/Shift Arithmetic"};
	this.rtwnameHashMap["<S7>/Shift Arithmetic1"] = {sid: "MotorControl:81"};
	this.sidHashMap["MotorControl:81"] = {rtwname: "<S7>/Shift Arithmetic1"};
	this.rtwnameHashMap["<S7>/Signal Conversion"] = {sid: "MotorControl:75"};
	this.sidHashMap["MotorControl:75"] = {rtwname: "<S7>/Signal Conversion"};
	this.rtwnameHashMap["<S7>/Signal Conversion1"] = {sid: "MotorControl:78"};
	this.sidHashMap["MotorControl:78"] = {rtwname: "<S7>/Signal Conversion1"};
	this.rtwnameHashMap["<S7>/Signal Conversion2"] = {sid: "MotorControl:79"};
	this.sidHashMap["MotorControl:79"] = {rtwname: "<S7>/Signal Conversion2"};
	this.rtwnameHashMap["<S7>/HallState"] = {sid: "MotorControl:87"};
	this.sidHashMap["MotorControl:87"] = {rtwname: "<S7>/HallState"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "MotorControl:117"};
	this.sidHashMap["MotorControl:117"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/function"] = {sid: "MotorControl:118"};
	this.sidHashMap["MotorControl:118"] = {rtwname: "<S8>/function"};
	this.rtwnameHashMap["<S8>/Constant"] = {sid: "MotorControl:96"};
	this.sidHashMap["MotorControl:96"] = {rtwname: "<S8>/Constant"};
	this.rtwnameHashMap["<S8>/Constant1"] = {sid: "MotorControl:102"};
	this.sidHashMap["MotorControl:102"] = {rtwname: "<S8>/Constant1"};
	this.rtwnameHashMap["<S8>/Constant2"] = {sid: "MotorControl:109"};
	this.sidHashMap["MotorControl:109"] = {rtwname: "<S8>/Constant2"};
	this.rtwnameHashMap["<S8>/Constant3"] = {sid: "MotorControl:254"};
	this.sidHashMap["MotorControl:254"] = {rtwname: "<S8>/Constant3"};
	this.rtwnameHashMap["<S8>/Data Store Write"] = {sid: "MotorControl:267"};
	this.sidHashMap["MotorControl:267"] = {rtwname: "<S8>/Data Store Write"};
	this.rtwnameHashMap["<S8>/Data Store Write1"] = {sid: "MotorControl:101"};
	this.sidHashMap["MotorControl:101"] = {rtwname: "<S8>/Data Store Write1"};
	this.rtwnameHashMap["<S8>/Data Store Write2"] = {sid: "MotorControl:100"};
	this.sidHashMap["MotorControl:100"] = {rtwname: "<S8>/Data Store Write2"};
	this.rtwnameHashMap["<S8>/Data Store Write3"] = {sid: "MotorControl:103"};
	this.sidHashMap["MotorControl:103"] = {rtwname: "<S8>/Data Store Write3"};
	this.rtwnameHashMap["<S8>/Data Store Write4"] = {sid: "MotorControl:104"};
	this.sidHashMap["MotorControl:104"] = {rtwname: "<S8>/Data Store Write4"};
	this.rtwnameHashMap["<S8>/Data Store Write5"] = {sid: "MotorControl:110"};
	this.sidHashMap["MotorControl:110"] = {rtwname: "<S8>/Data Store Write5"};
	this.rtwnameHashMap["<S8>/Data Store Write6"] = {sid: "MotorControl:111"};
	this.sidHashMap["MotorControl:111"] = {rtwname: "<S8>/Data Store Write6"};
	this.rtwnameHashMap["<S8>/Data Type Conversion"] = {sid: "MotorControl:98"};
	this.sidHashMap["MotorControl:98"] = {rtwname: "<S8>/Data Type Conversion"};
	this.rtwnameHashMap["<S8>/Data Type Conversion1"] = {sid: "MotorControl:105"};
	this.sidHashMap["MotorControl:105"] = {rtwname: "<S8>/Data Type Conversion1"};
	this.rtwnameHashMap["<S8>/Data Type Conversion2"] = {sid: "MotorControl:112"};
	this.sidHashMap["MotorControl:112"] = {rtwname: "<S8>/Data Type Conversion2"};
	this.rtwnameHashMap["<S8>/Data Type Conversion3"] = {sid: "MotorControl:227"};
	this.sidHashMap["MotorControl:227"] = {rtwname: "<S8>/Data Type Conversion3"};
	this.rtwnameHashMap["<S8>/Data Type Conversion4"] = {sid: "MotorControl:228"};
	this.sidHashMap["MotorControl:228"] = {rtwname: "<S8>/Data Type Conversion4"};
	this.rtwnameHashMap["<S8>/Data Type Conversion6"] = {sid: "MotorControl:226"};
	this.sidHashMap["MotorControl:226"] = {rtwname: "<S8>/Data Type Conversion6"};
	this.rtwnameHashMap["<S8>/Display"] = {sid: "MotorControl:253"};
	this.sidHashMap["MotorControl:253"] = {rtwname: "<S8>/Display"};
	this.rtwnameHashMap["<S8>/Product1"] = {sid: "MotorControl:234"};
	this.sidHashMap["MotorControl:234"] = {rtwname: "<S8>/Product1"};
	this.rtwnameHashMap["<S8>/Product2"] = {sid: "MotorControl:113"};
	this.sidHashMap["MotorControl:113"] = {rtwname: "<S8>/Product2"};
	this.rtwnameHashMap["<S8>/Product3"] = {sid: "MotorControl:235"};
	this.sidHashMap["MotorControl:235"] = {rtwname: "<S8>/Product3"};
	this.rtwnameHashMap["<S8>/turn"] = {sid: "MotorControl:89"};
	this.sidHashMap["MotorControl:89"] = {rtwname: "<S8>/turn"};
	this.rtwnameHashMap["<S8>/turn1"] = {sid: "MotorControl:90"};
	this.sidHashMap["MotorControl:90"] = {rtwname: "<S8>/turn1"};
	this.rtwnameHashMap["<S8>/turn2"] = {sid: "MotorControl:91"};
	this.sidHashMap["MotorControl:91"] = {rtwname: "<S8>/turn2"};
	this.rtwnameHashMap["<S8>/turn3"] = {sid: "MotorControl:92"};
	this.sidHashMap["MotorControl:92"] = {rtwname: "<S8>/turn3"};
	this.rtwnameHashMap["<S8>/turn4"] = {sid: "MotorControl:93"};
	this.sidHashMap["MotorControl:93"] = {rtwname: "<S8>/turn4"};
	this.rtwnameHashMap["<S8>/turn5"] = {sid: "MotorControl:94"};
	this.sidHashMap["MotorControl:94"] = {rtwname: "<S8>/turn5"};
	this.rtwnameHashMap["<S9>/In1"] = {sid: "MotorControl:70"};
	this.sidHashMap["MotorControl:70"] = {rtwname: "<S9>/In1"};
	this.rtwnameHashMap["<S9>/In2"] = {sid: "MotorControl:71"};
	this.sidHashMap["MotorControl:71"] = {rtwname: "<S9>/In2"};
	this.rtwnameHashMap["<S9>/Subsystem"] = {sid: "MotorControl:35"};
	this.sidHashMap["MotorControl:35"] = {rtwname: "<S9>/Subsystem"};
	this.rtwnameHashMap["<S9>/Subsystem1"] = {sid: "MotorControl:51"};
	this.sidHashMap["MotorControl:51"] = {rtwname: "<S9>/Subsystem1"};
	this.rtwnameHashMap["<S9>/StartMotorReq"] = {sid: "MotorControl:72"};
	this.sidHashMap["MotorControl:72"] = {rtwname: "<S9>/StartMotorReq"};
	this.rtwnameHashMap["<S9>/StopMotorReq"] = {sid: "MotorControl:73"};
	this.sidHashMap["MotorControl:73"] = {rtwname: "<S9>/StopMotorReq"};
	this.rtwnameHashMap["<S10>/function"] = {sid: "MotorControl:121"};
	this.sidHashMap["MotorControl:121"] = {rtwname: "<S10>/function"};
	this.rtwnameHashMap["<S10>/Constant3"] = {sid: "MotorControl:256"};
	this.sidHashMap["MotorControl:256"] = {rtwname: "<S10>/Constant3"};
	this.rtwnameHashMap["<S10>/Data Store Write6"] = {sid: "MotorControl:257"};
	this.sidHashMap["MotorControl:257"] = {rtwname: "<S10>/Data Store Write6"};
	this.rtwnameHashMap["<S11>/In1"] = {sid: "MotorControl:36"};
	this.sidHashMap["MotorControl:36"] = {rtwname: "<S11>/In1"};
	this.rtwnameHashMap["<S11>/Constant"] = {sid: "MotorControl:26"};
	this.sidHashMap["MotorControl:26"] = {rtwname: "<S11>/Constant"};
	this.rtwnameHashMap["<S11>/Constant1"] = {sid: "MotorControl:32"};
	this.sidHashMap["MotorControl:32"] = {rtwname: "<S11>/Constant1"};
	this.rtwnameHashMap["<S11>/Constant2"] = {sid: "MotorControl:33"};
	this.sidHashMap["MotorControl:33"] = {rtwname: "<S11>/Constant2"};
	this.rtwnameHashMap["<S11>/Data Type Conversion"] = {sid: "MotorControl:50"};
	this.sidHashMap["MotorControl:50"] = {rtwname: "<S11>/Data Type Conversion"};
	this.rtwnameHashMap["<S11>/Delay"] = {sid: "MotorControl:261"};
	this.sidHashMap["MotorControl:261"] = {rtwname: "<S11>/Delay"};
	this.rtwnameHashMap["<S11>/Delay1"] = {sid: "MotorControl:262"};
	this.sidHashMap["MotorControl:262"] = {rtwname: "<S11>/Delay1"};
	this.rtwnameHashMap["<S11>/Logical Operator"] = {sid: "MotorControl:29"};
	this.sidHashMap["MotorControl:29"] = {rtwname: "<S11>/Logical Operator"};
	this.rtwnameHashMap["<S11>/Relational Operator"] = {sid: "MotorControl:28"};
	this.sidHashMap["MotorControl:28"] = {rtwname: "<S11>/Relational Operator"};
	this.rtwnameHashMap["<S11>/Relational Operator1"] = {sid: "MotorControl:30"};
	this.sidHashMap["MotorControl:30"] = {rtwname: "<S11>/Relational Operator1"};
	this.rtwnameHashMap["<S11>/Relational Operator2"] = {sid: "MotorControl:31"};
	this.sidHashMap["MotorControl:31"] = {rtwname: "<S11>/Relational Operator2"};
	this.rtwnameHashMap["<S11>/Out1"] = {sid: "MotorControl:37"};
	this.sidHashMap["MotorControl:37"] = {rtwname: "<S11>/Out1"};
	this.rtwnameHashMap["<S12>/In1"] = {sid: "MotorControl:52"};
	this.sidHashMap["MotorControl:52"] = {rtwname: "<S12>/In1"};
	this.rtwnameHashMap["<S12>/Constant"] = {sid: "MotorControl:53"};
	this.sidHashMap["MotorControl:53"] = {rtwname: "<S12>/Constant"};
	this.rtwnameHashMap["<S12>/Constant1"] = {sid: "MotorControl:54"};
	this.sidHashMap["MotorControl:54"] = {rtwname: "<S12>/Constant1"};
	this.rtwnameHashMap["<S12>/Constant2"] = {sid: "MotorControl:55"};
	this.sidHashMap["MotorControl:55"] = {rtwname: "<S12>/Constant2"};
	this.rtwnameHashMap["<S12>/Data Type Conversion"] = {sid: "MotorControl:56"};
	this.sidHashMap["MotorControl:56"] = {rtwname: "<S12>/Data Type Conversion"};
	this.rtwnameHashMap["<S12>/Logical Operator"] = {sid: "MotorControl:57"};
	this.sidHashMap["MotorControl:57"] = {rtwname: "<S12>/Logical Operator"};
	this.rtwnameHashMap["<S12>/Relational Operator"] = {sid: "MotorControl:58"};
	this.sidHashMap["MotorControl:58"] = {rtwname: "<S12>/Relational Operator"};
	this.rtwnameHashMap["<S12>/Relational Operator1"] = {sid: "MotorControl:59"};
	this.sidHashMap["MotorControl:59"] = {rtwname: "<S12>/Relational Operator1"};
	this.rtwnameHashMap["<S12>/Relational Operator2"] = {sid: "MotorControl:60"};
	this.sidHashMap["MotorControl:60"] = {rtwname: "<S12>/Relational Operator2"};
	this.rtwnameHashMap["<S12>/Unit Delay"] = {sid: "MotorControl:61"};
	this.sidHashMap["MotorControl:61"] = {rtwname: "<S12>/Unit Delay"};
	this.rtwnameHashMap["<S12>/Unit Delay1"] = {sid: "MotorControl:62"};
	this.sidHashMap["MotorControl:62"] = {rtwname: "<S12>/Unit Delay1"};
	this.rtwnameHashMap["<S12>/Out1"] = {sid: "MotorControl:63"};
	this.sidHashMap["MotorControl:63"] = {rtwname: "<S12>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
