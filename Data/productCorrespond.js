// 添加新产品需要69开头的码，成本价，规格型号

var productCorrespond = {
    HAPE40LCHJM: '6943478014411', //德国hape积木玩具进口榉木40粒益智积木早教益智拼搭拼插玩具	
    HAPE60KYZJM: '6943478020023', //hape积木进口益智玩具木制积木60粒装益智早教亲子互动3-8周岁	
    HAPE80LJMTZ: '6943478022515', //hape积木益智玩具木头木制80粒早教益智亲子互动3-4-5-6-7男女	
    KLYCQZT24STGZ: '6950164806571', //卡乐优亲子早教益智超轻粘土24色糖果装手工diy环保无毒彩泥玩具	
    KLYCQZT100GBCZHS: '6950164804805', //卡乐优早教玩具益智亲子互动超轻黏土100g超大安全无毒彩泥儿童	
    KLYCQZT100GLSBCZ: '6950164804850', //卡乐优早教玩具益智亲子互动超轻黏土100g超大安全无毒彩泥儿童	
    KLYCQZT100GHSBCZ: '6950164804836', //卡乐优早教玩具益智亲子互动超轻黏土100g超大安全无毒彩泥儿童	
    KLYCQZT24SLSSNH: '6950164802627', //卡乐优早教益智安全超轻粘土24色收纳盒装幼儿园推荐日本进口原料	
    KLY8SSZH: '6950164806366', //卡乐优儿童颜料早教益智手指画宝宝涂鸦套装手印画安全无毒可水洗	
    CRYPZDB: '6972267561881', //MZHA震动棒成人用品自慰器女用高潮性工具按摩棒情趣玩具阴蒂刺激	
    CRYPFJBFS: '6972267563113', //MZHA成人用品男用飞机杯自慰杯手动撸管神器情趣用性工具	
    HAPESTWJ: 'SUIT0079', //hape沙滩玩具桶 铲子套装9件套1-2-3-4-5-6岁儿童沙漏组合男女孩	
    CRYPFJBZS: '6972267565285', //MZHA成人用品男用手动飞机杯撸管神器情趣用品性工具锻炼成人	
    HAPE50LJMPZWJ: '6943478019263', //hape积木拼装玩具50粒礼盒装1岁23456岁幼儿益智积木交通场景数字	
    KLYCQZTCNTZWJ: '6950164808711', //"【超定制】卡乐优益智亲子互动早教超轻粘土无毒儿童彩泥套装玩具"
    KLYLJFLWJ: '6950164809688', //"卡乐优游戏道具儿童益智早教亲子玩具卡脑力大作战分类桌面拉圾筒"
    HAPEDMNGPETDKJMPD: '6943478023925', //"德国Hape多米诺骨牌儿童大块积木拼搭创意机关宝宝智力益智玩具"
    HAPEBPTXSH: '6943478018587', //Hape拼插板拼图丁种蘑菇百变像素画插珠儿童益智玩具逻辑兴趣艺术
    KLYETLB12S: '6950164801224', //"卡乐优儿童蜡笔12色水溶性安全无毒小滑环保可水洗旋转炫彩油画棒	"
    KLYETLB24S: '6950164801194', //"卡乐优儿童蜡笔24色丝滑油画棒水溶性炫彩棒安全环保可水洗蜡笔	"
    HAPEQMCZT: '6943478013131', //【天猫超市】德国Hape奇妙串珠套 儿童玩具宝宝启蒙智力益智积木	
    HAPEGQHCGDYLJM: '6943478021747', //德国hape早教益智男女孩钢琴火车轨道音乐积木生日礼物婴幼儿玩具	
    HAPEJM65LNCXZCB: '6943478016316', //德国hape拼搭拼装积木早教益智65粒农场小镇城堡123岁男女孩玩具	
    KLYZT100GBCZ: '6950164809909', //卡乐优超轻粘土橡皮泥无毒太空水晶彩泥儿童手工di100g大包装套装	
    HAPESTWJWSCXSL11JT: 'suit00265', //德国hape沙滩玩具挖沙铲雪沙漏11件套礼盒袋男女孩儿童礼物工具
};

var productSPirce = {
    P6943478014411: 53.4,
    P6943478020023: 59.4,
    P6943478022515: 91,
    P6950164806571: 5.6,
    P6950164804805: 3,
    P6950164804850: 3,
    P6950164804836: 3,
    P6950164802627: 31.39,
    P6950164806366: 34,
    P6972267561881: 42,
    P6972267563113: 12,
    PSUIT0079: 47.8,
    P6972267565285: 12,
    P6943478019263: 40,
    P6950164808711: 29.6,
    P6950164809688: 23.73,
    P6943478023925: 94.8,
    P6943478018587: 66,
    P6950164801224: 18,
    P6950164801194: 34,
    P6943478013131: 52,
    P6943478021747: 118,
    P6943478016316: 62,
    P6950164809909: 15,
    Psuit00265: 0,
};