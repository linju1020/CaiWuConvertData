// 添加新产品需要69开头的码，成本价，规格型号
// Code:商品编码
// GoodsId:货品ID
var productCorrespond = {
    HAPE40LCHJM: { Barcode: '6943478014411', Code: '582437030867', GoodsId: '582439414629' }, //德国hape积木玩具进口榉木40粒益智积木早教益智拼搭拼插玩具	
    HAPE60KYZJM: { Barcode: '6943478020023', Code: '583339787045', GoodsId: '583205630479' }, //hape积木进口益智玩具木制积木60粒装益智早教亲子互动3-8周岁	
    HAPE80LJMTZ: { Barcode: '6943478022515', Code: '611492292778', GoodsId: '583035792234' }, //hape积木益智玩具木头木制80粒早教益智亲子互动3-4-5-6-7男女	
    KLYCQZT24STGZ: { Barcode: '6950164806571', Code: '611492300742', GoodsId: '581526565920' }, //卡乐优亲子早教益智超轻粘土24色糖果装手工diy环保无毒彩泥玩具	
    KLYCQZT100GBCZHS: { Barcode: '6950164804805', Code: '', GoodsId: '582296115810' }, //卡乐优早教玩具益智亲子互动超轻黏土100g超大安全无毒彩泥儿童	
    KLYCQZT100GLSBCZ: { Barcode: '6950164804850', Code: '582161678681', GoodsId: '582162538436' }, //卡乐优早教玩具益智亲子互动超轻黏土100g超大安全无毒彩泥儿童	
    KLYCQZT100GHSBCZ: { Barcode: '6950164804836', Code: '', GoodsId: '582296199361' }, //卡乐优早教玩具益智亲子互动超轻黏土100g超大安全无毒彩泥儿童	
    KLYCQZT24SLSSNH: { Barcode: '6950164802627', Code: '611761849229', GoodsId: '581972905723' }, //卡乐优早教益智安全超轻粘土24色收纳盒装幼儿园推荐日本进口原料	
    KLY8SSZH: { Barcode: '6950164806366', Code: '581899976549', GoodsId: '582096593424' }, //卡乐优儿童颜料早教益智手指画宝宝涂鸦套装手印画安全无毒可水洗	
    CRYPZDB: { Barcode: '6972267561881', Code: '589700131786', GoodsId: '589174844094' }, //MZHA震动棒成人用品自慰器女用高潮性工具按摩棒情趣玩具阴蒂刺激	
    CRYPFJBFS: { Barcode: '6972267563113', Code: '', GoodsId: '590969391215' }, //MZHA成人用品男用飞机杯自慰杯手动撸管神器情趣用性工具	
    HAPESTWJ: { Barcode: 'SUIT0079', Code: '591538781110', GoodsId: '591857787059' }, //hape沙滩玩具桶 铲子套装9件套1-2-3-4-5-6岁儿童沙漏组合男女孩	
    CRYPFJBZS: { Barcode: '6972267565285', Code: '590928187562', GoodsId: '590394024044' }, //MZHA成人用品男用手动飞机杯撸管神器情趣用品性工具锻炼成人	
    HAPE50LJMPZWJ: { Barcode: '6943478019263', Code: '592157763291', GoodsId: '591579424581' }, //hape积木拼装玩具50粒礼盒装1岁23456岁幼儿益智积木交通场景数字	
    KLYCQZTCNTZWJ: { Barcode: '6950164808711', Code: '612245123153', GoodsId: '594361061133' }, //"【超定制】卡乐优益智亲子互动早教超轻粘土无毒儿童彩泥套装玩具"
    KLYLJFLWJ: { Barcode: '6950164809688', Code: '614205966116', GoodsId: '600750140034' }, //"卡乐优游戏道具儿童益智早教亲子玩具卡脑力大作战分类桌面拉圾筒"
    HAPEDMNGPETDKJMPD: { Barcode: '6943478023925', Code: '614205742356', GoodsId: '604014421084' }, //"德国Hape多米诺骨牌儿童大块积木拼搭创意机关宝宝智力益智玩具"
    HAPEBPTXSH: { Barcode: '6943478018587', Code: '603752472107', GoodsId: '603753588141' }, //Hape拼插板拼图丁种蘑菇百变像素画插珠儿童益智玩具逻辑兴趣艺术
    KLYETLB12S: { Barcode: '6950164801224', Code: '605462763042', GoodsId: '605463419498' }, //"卡乐优儿童蜡笔12色水溶性安全无毒小滑环保可水洗旋转炫彩油画棒	"
    KLYETLB24S: { Barcode: '6950164801194', Code: '604831464007', GoodsId: '604830096973' }, //"卡乐优儿童蜡笔24色丝滑油画棒水溶性炫彩棒安全环保可水洗蜡笔	"
    HAPEQMCZT: { Barcode: '6943478013131', Code: '521605286189', GoodsId: '521544761635' }, //【天猫超市】德国Hape奇妙串珠套 儿童玩具宝宝启蒙智力益智积木	
    HAPEGQHCGDYLJM: { Barcode: '6943478021747', Code: '612756938317', GoodsId: '612998659303' }, //德国hape早教益智男女孩钢琴火车轨道音乐积木生日礼物婴幼儿玩具	
    HAPEJM65LNCXZCB: { Barcode: '6943478016316', Code: '612225456413', GoodsId: '612499265257' }, //德国hape拼搭拼装积木早教益智65粒农场小镇城堡123岁男女孩玩具	
    KLYZT100GBCZ: { Barcode: '6950164809909', Code: '612931233625', GoodsId: '612931221970' }, //卡乐优超轻粘土橡皮泥无毒太空水晶彩泥儿童手工di100g大包装套装	
    HAPESTWJWSCXSL11JT: { Barcode: 'suit00265', Code: '613591826949', GoodsId: '613073500565' }, //德国hape沙滩玩具挖沙铲雪沙漏11件套礼盒袋男女孩儿童礼物工具
    HAPETCETHBCSHY: { Barcode: '6943478030725', Code: '617835886848', GoodsId: '617578549947' }, //德国hape童车儿童滑板车三合一1-6岁宝宝可坐溜溜车小孩平衡车
    HAPEHSSLWSXZWJ: { Barcode: '20200428', Code: '617360114905', GoodsId: '617617663153' }, //德国hape花式水漏玩水洗澡玩具123宝宝男女孩戏水婴幼洗澡玩具
    KLYCQZT8SDGGBCZ: { Barcode: '6950164804867', Code: '616193777169', GoodsId: '616703183359' }, //卡乐优超轻粘土8色大规格补充装彩泥橡皮泥黏土diy手工制作大包装
    HAPEETXZYYEBBYSXSWJ: { Barcode: 'suit00266', Code: '617191146259', GoodsId: '617191670402' }, //德国hape儿童洗澡婴幼儿宝宝浴室戏水玩具泰迪鲸鱼男女孩玩偶套装
    HAPEETETDDLJMPHWJ: { Barcode: '6943478030879', Code: '619592978104', GoodsId: '619593522436' }, //德国hape儿童儿童叠叠乐积木平衡玩具男女孩早教益智亲子互动礼物
    HAPEGXHLC: { Barcode: '6943478025318', Code: '624883599304', GoodsId: '624005216241' }, //德国惯性回力车滑行车儿童益智男女孩发条木制模型玩具
    LFCQZTCNKLZT: { Barcode: '6939219081576', Code: '624677134176', GoodsId: '624082984994' }, //罗弗超轻粘土彩泥无毒恐龙主题玩具diy手办工黏土儿童益智套装

};

var productSPirce = {
    P6943478014411: 52,
    P6943478020023: 62,
    P6943478022515: 88,
    P6950164806571: 6.1,
    P6950164804805: 3,
    P6950164804850: 3,
    P6950164804836: 3,
    P6950164802627: 31.39,
    P6950164806366: 34,
    P6972267561881: 30,
    P6972267563113: 10,
    PSUIT0079: 43.5,
    P6972267565285: 12,
    P6943478019263: 40,
    P6950164808711: 32,
    P6950164809688: 23.73,
    P6943478023925: 86,
    P6943478018587: 66,
    P6950164801224: 18,
    P6950164801194: 34,
    P6943478013131: 52,
    P6943478021747: 101,
    P6943478016316: 62,
    P6950164809909: 17,
    Psuit00265: 58,
    P6943478030725: 198,
    P20200428: 32,
    P6950164804867: 23,
    Psuit00266: 58,
    P6943478030879: 0,
    P6943478025318:0,
    P6939219081576:0,
};