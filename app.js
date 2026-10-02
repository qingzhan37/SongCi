const authors = [
 {id:'wen',name:'溫庭筠',date:'約 812–866',year:812,period:'唐末・五代',role:'點檢官・方城尉',life:'屢試不第，曾依附政要，晚年任方城尉。',school:'花間派鼻祖',style:'詞風穠麗濃艷，多寫閨情，開啟詞的「艷科」傳統。',color:'#b66e58',hair:'#34302d',hat:'#59483d',tag:'花間詞祖'},
 {id:'liyu',name:'李煜',date:'937–978',year:937,period:'唐末・五代',role:'南唐後主',life:'亡國被俘，受封違命侯，後被毒死。',school:'詞中之帝',style:'由早期宮廷享樂轉為悲涼的亡國之痛，擴大了詞的意境。',color:'#867e9b',hair:'#25262f',hat:'#45434c',tag:'亡國之音'},
 {id:'liu',name:'柳永',date:'約 984–1053',year:984,period:'北宋',role:'屯田員外郎',life:'仕途坎坷，流連市井娼寮，世稱柳七。',school:'婉約派・慢詞開創者',style:'大量創作慢詞，語言通俗，描寫羈旅行役與都市繁華。',color:'#bd805f',hair:'#302d29',hat:'#393d37',tag:'市井長調'},
 {id:'fan',name:'范仲淹',date:'989–1052',year:989,period:'北宋',role:'參知政事・副宰相',life:'主持慶曆新政，曾戍守西北邊疆，功勳卓著。',school:'豪放派先驅',style:'打破花間婉約傳統，率先將邊塞風光與家國情懷寫入詞中。',color:'#6e8490',hair:'#282d30',hat:'#48575d',tag:'先憂後樂'},
 {id:'yan',name:'晏殊',date:'991–1055',year:991,period:'北宋',role:'同平章事・宰相',life:'神童出身，仕途平穩，政治富貴顯達；與子晏幾道並稱「二晏」。',school:'婉約派',style:'詞風溫潤秀潔、雍容華貴，多表現富貴閒愁。',color:'#9d8067',hair:'#332f2b',hat:'#675749',tag:'珠玉詞章'},
 {id:'ouyang',name:'歐陽修',date:'1007–1072',year:1007,period:'北宋',role:'參知政事・副宰相',life:'北宋文壇盟主，主持古文運動。',school:'婉約派',style:'詞風清麗深婉、柔中帶骨，多寫自然風光與男女戀情。',color:'#87947f',hair:'#30312b',hat:'#555b4e',tag:'六一風神'},
 {id:'su',name:'蘇軾',date:'1037–1101',year:1037,period:'北宋',role:'禮部尚書',life:'因烏台詩案屢遭貶謫，曾居黃州、嶺南、海南。',school:'豪放派開創者',style:'以詩入詞，擴大詞的題材與境界，改變詞為「艷科」的命運。',color:'#748b81',hair:'#2d302c',hat:'#454b44',tag:'東坡居士'},
 {id:'qin',name:'秦觀',date:'1049–1100',year:1049,period:'北宋',role:'太學博士・國史館編修',life:'蘇門四學士之一，受黨爭牽連而屢遭貶謫。',school:'婉約派',style:'詞風清麗婉轉、情調感傷，善於刻畫細緻深沉的愁緒。',color:'#948397',hair:'#302d32',hat:'#514653',tag:'淮海居士'},
 {id:'zhou',name:'周邦彥',date:'1056–1121',year:1056,period:'北宋',role:'秘書監・提舉大晟府',life:'精通音律，曾主管國家音樂機關。',school:'格律派・婉約正宗',style:'講究音律格律，章法結構嚴密，被尊為「詞家之冠」。',color:'#8d826d',hair:'#302e2b',hat:'#62594a',tag:'詞家之冠'},
 {id:'liqz',name:'李清照',date:'1084–約 1155',year:1084,period:'南宋',role:'閨秀・金石學家之妻',life:'經歷靖康之禍，流落南方，晚景淒涼。',school:'婉約派・閨怨詞代表',style:'前期清新明快，後期充滿國破家亡、漂泊孤獨之痛。',color:'#ad7969',hair:'#302c2b',hat:'#725047',tag:'易安居士',female:true},
 {id:'yue',name:'岳飛',date:'1103–1142',year:1103,period:'南宋',role:'樞密副使・抗金名將',life:'率領岳家軍北伐，後遭秦檜誣陷，以「莫須有」罪名遇害。',school:'豪放派・愛國詞代表',style:'詞作極少但影響深遠，充滿激昂的愛國熱忱與壯志難酬的悲憤。',color:'#7d8b7b',hair:'#262a28',hat:'#394741',tag:'精忠報國'},
 {id:'xin',name:'辛棄疾',date:'1140–1207',year:1140,period:'南宋',role:'樞密都承旨・安撫使',life:'曾率軍抗金，後遭排擠，長期閒居江西。',school:'豪放派・蘇辛並稱',style:'詞風雄奇豪邁，以文入詞，充滿抗金復國的抱負與現實悲憤。',color:'#ab7458',hair:'#302b27',hat:'#58453b',tag:'稼軒居士'}
];
const poems = [];
const addPoem = (author,title,scene,stanzas,options={}) => poems.push({author,title,scene,stanzas,...options});
addPoem('wen','更漏子','rain',[
 ['玉爐香，紅蠟淚，偏照畫堂秋思。眉翠薄，鬢雲殘，夜長衾枕寒。','玉爐中香煙裊裊，燭淚悄悄地流灑。偏偏照着悲秋的人，把她的愁思引發。沒有心思畫眉，亂髮也不想梳理。漫長的秋夜啊，孤單的人兒太悲淒。'],
 ['梧桐樹，三更雨，不道離情正苦。一葉葉，一聲聲，空階滴到明。','梧桐葉兒落，三更雨淅淅，不管離人的孤寂。雨打落葉一聲聲，害得她憂愁到天明。']
]);
addPoem('wen','菩薩蠻','boudoir',[
 ['小山重疊金明滅，鬢雲欲度香腮雪。懶起畫蛾眉，弄妝梳洗遲。','清晨金色的陽光照在屏風上，忽暗忽亮。蓬亂如雲的鬢髮，幾乎遮住了她雪白的臉腮，她懶洋洋地從床上爬起來，慢慢地洗臉、梳妝，再描畫那又細又長的雙眉。'],
 ['照花前後鏡，花面交相映。新帖繡羅襦，雙雙金鷓鴣。','她用兩面鏡子一前一後相對照，看到鏡中的臉和簪在頭上的花，交映生姿，像在爭妍鬥豔。而身上穿的絲綢短襖，上面用金線新繡上的鷓鴣，正成雙成對地相互依偎呢！']
]);
addPoem('liyu','浪淘沙','rain',[
 ['簾外雨潺潺，春意闌珊。羅衾不耐五更寒，夢裏不知身是客，一晌貪歡。','簾外雨水不斷，春天眼看就要過完。蓋着絲綢被，難耐早晨的清寒；夢中忘了自己已是流落異國的俘虜，還貪圖片刻的舊日歡樂。'],
 ['獨自莫憑闌，無限江山，別時容易見時難。流水落花春去也，天上人間！','不要獨自倚着欄杆遠望，祖國的無限大好河山，離別是那麼容易，想再見一眼，恐怕千難萬難。人事滄桑，有如流水，就像花兒凋謝，隨着春天過去，再也留不住。想我過去尊榮富貴，如在天堂；今天階下囚的生涯，簡直是地獄人間。']
]);
addPoem('liyu','虞美人','moon',[
 ['春花秋月何時了？往事知多少？小樓昨夜又東風，故國不堪回首月明中！','春天的花、秋天的月，甚麼時候才會完結？往日的事知道有多少嗎？昨夜小樓上又吹來了春風，在明朗月色中想起故國，回憶的傷痛叫人難以承受。'],
 ['雕闌玉砌應猶在，只是朱顏改。問君能有幾多愁？恰似一江春水向東流！','精雕細刻的欄杆、玉石砌成的臺階應該還在，只是美好的容顏已經改變。如問我心中有多少哀愁，就像那春天的江水，滔滔不斷向東流去。']
]);
addPoem('liyu','相見歡','moon',[
 ['無言獨上西樓，月如鈎，寂寞梧桐深院鎖清秋。','默默無語孤獨地登上西樓，此時初月像一把彎鈎。深深的庭院裏梧桐在清秋之季，也顯得格外寂寞。'],
 ['翦不斷，理還亂，是離愁。別是一般滋味在心頭。','像殘絲亂麻一樣剪也剪不斷，理也理不清，就是這種離別愁緒。是一種不同一般的滋味埋在心底。']
]);
addPoem('liu','蝶戀花','separation',[
 ['佇倚危樓風細細。望極春愁，黯黯生天際。草色煙光殘照裏，無言誰會憑闌意。','柔和的東風，吹過我倚欄已久的高高樓臺。黯黯的春愁，從天邊送來。碧草輕煙殘陽裏，默默靠着欄杆，誰能理解我的情懷？'],
 ['擬把疏狂圖一醉。對酒當歌，強樂還無味。衣帶漸寬終不悔，為伊消得人憔悴。','我要用狂放昏醉，把愁悶排遣趕開，勉強作樂，心情還是不歡快。人漸漸地消瘦，初衷依舊不改。就是為她憔悴盡，我也覺得應該。']
]);
addPoem('liu','雨霖鈴','farewell',[
 ['寒蟬淒切，對長亭晚，驟雨初歇。都門帳飲無緒，留戀處，蘭舟催發。執手相看淚眼，竟無語凝噎。念去去、千里煙波，暮靄沉沉楚天闊。','寒蟬的鳴聲淒涼急促，面對着長亭，已是傍晚時分，驟雨剛剛停住。在京都郊外設帳餞別，並沒有暢飲的心緒；正在依依不捨時，船上的人已經催促着要出發。彼此握手相看，眼流着淚，喉頭哽咽，竟說不出話來。想到這次遠去，迢迢千里，水路迷茫，傍晚夜霧厚重，只見南方天空廣闊無邊。'],
 ['多情自古傷離別，更那堪、冷落清秋節。今宵酒醒何處？楊柳岸、曉風殘月。此去經年，應是良辰好景虛設。便縱有、千種風情，更與何人說！','自古以來多情的人都為離別而傷感，更何況是這樣冷落的清秋時節。我今夜酒醒時身在何處？大概是在楊柳岸邊，吹着清晨的風，黎明殘月在天了。這一去要好些年，此後遇到良辰美景都形同虛設。即使有千萬種深情蜜意，又能向誰去訴說呢？']
]);
addPoem('liu','望海潮','river',[
 ['東南形勝，三吳都會，錢塘自古繁華。煙柳畫橋，風簾翠幕，參差十萬人家。雲樹繞堤沙，怒濤卷霜雪，天塹無涯。市列珠璣，戶盈羅綺，競豪奢。','東南地勢優越，三吳都會繁盛，錢塘自古以來便十分繁華。煙柳籠罩着彩繪橋梁，珠簾翠幕隨風輕揚，樓閣高低錯落，約有十萬人家。高聳的樹木環繞堤岸沙洲，洶湧波濤捲起雪白浪花，天然屏障浩瀚無邊。市場上珠玉羅列，家家滿是綾羅綢緞，競相展現富麗。'],
 ['重湖疊巘清嘉，有三秋桂子，十里荷花。羌管弄晴，菱歌泛夜，嬉嬉釣叟蓮娃。千騎擁高牙，乘醉聽簫鼓，吟賞煙霞。異日圖將好景，歸去鳳池誇。','湖面重重、山峰疊疊，景色清秀美好；秋日有桂花飄香，夏日有十里荷花。晴日裏羌笛悠揚，夜色中採菱歌聲飄蕩，釣魚的老人與採蓮的姑娘都愉快歡笑。成群騎兵簇擁着高牙大纛，酒後聽簫鼓、吟詩賞煙霞。將來把這番美景畫下來，回朝後向朝廷誇說。']
],{source:'https://zh.wikisource.org/zh-hant/Author:%E6%9F%B3%E6%B0%B8'});
addPoem('fan','蘇幕遮・懷舊','autumn',[
 ['碧雲天，黃葉地。秋色連波，波上寒煙翠。山映斜陽天接水，芳草無情，更在斜陽外。','秋空一片蔚藍，黃葉鋪滿大地。秋色連天天連水，水上寒煙蒼翠。遠山銜着夕陽，山外水天相連，無情的衰草，一直伸向天邊。'],
 ['黯鄉魂，追旅思，夜夜除非，好夢留人睡。明月樓高休獨倚，酒入愁腸，化作相思淚。','思鄉的憂傷，旅途的愁苦，天天夜裏，只有還家的好夢，才能使人安睡。月兒映照高樓，不要獨自憑倚。喝杯酒兒想解憂愁，都化為點點相思淚。']
]);
addPoem('fan','漁家傲・秋思','border',[
 ['塞下秋來風景異，衡陽雁去無留意。四面邊聲連角起，千嶂裏，長煙落日孤城閉。','秋風吹到邊塞，風景頓時變異。雁兒向衡陽飛去，連頭也不回。秋聲夾着畫角聲，從四面湧起。萬山深處，孤煙直上碧空，夕陽照着緊閉的孤城。'],
 ['濁酒一杯家萬里，燕然未勒歸無計。羌管悠悠霜滿地。人不寐，將軍白髮征夫淚。','舉起淡淡的濁酒，勾起思家的情意。燕然山上，還未勒石銘功，將士如何能歸返鄉里？笛曲幽幽怨怨，寒霜舖滿一地。不眠的邊塞秋夜啊，將軍白髮蒼蒼，征夫淚水汪汪。']
]);
addPoem('yan','浣溪沙','spring',[
 ['一曲新詞酒一杯。去年天氣舊亭臺。夕陽西下幾時回？','唱一曲新詞，飲一杯美酒，天氣和去年一樣，登臨的也是去年的亭臺。只是西下的夕陽，何時回過頭？'],
 ['無可奈何花落去，似曾相識燕歸來。小園香徑獨徘徊。','我無力挽留春天，任憑花兒凋殘。似乎相識的燕子，又飛回我的小園。我孤孤單單，在鋪滿落花的小徑上，久久地徘徊、悵嘆。']
]);
addPoem('yan','蝶戀花','autumn',[
 ['檻菊愁煙蘭泣露。羅幕輕寒，燕子雙飛去。明月不諳離恨苦，斜光到曉穿朱戶。','欄邊菊花籠着愁煙，蘭花沾着露珠，彷彿含淚。羅幕間透着微寒，燕子成雙飛去。明月不懂離別的苦，斜斜的月光直到天明，仍穿過朱紅窗戶。'],
 ['昨夜西風凋碧樹。獨上高樓，望盡天涯路。欲寄彩箋兼尺素，山長水闊知何處？','昨夜西風吹落了碧樹的葉子。我獨自登上高樓，望盡天涯的道路。想寄一封彩箋、一封書信，可山長水遠，你究竟在何處？']
],{source:'https://zh.wikisource.org/zh-hans/%E8%9D%B6%E6%88%80%E8%8A%B1_(%E6%99%8F%E6%AE%8A)'});
addPoem('ouyang','玉樓春','farewell',[
 ['尊前擬把歸期說，未語春容先慘咽。人生自是有情癡，此恨不關風與月。','宴席上想先說出歸期安慰她，話兒還沒有說出口，伊人的春容已經悲悲淒淒，害我也嗚咽傷情。癡情是人的本性，這和風月並沒關係。'],
 ['離歌且莫翻新闋，一曲能教腸寸結。直須看盡洛城花，始共春風容易別。','莫再唱新的離別歌，一曲就已夠使人悲痛。也許要到看盡了遍地迎風招展的洛陽花後，才放得下心和春風告別。']
]);
addPoem('ouyang','蝶戀花','garden',[
 ['庭院深深深幾許？楊柳堆煙，簾幕無重數。玉勒雕鞍遊冶處，樓高不見章臺路。','這座宅邸的庭院到底有多深、多廣呢？翠綠的楊柳宛如堆疊的濃煙迷濛不清，屋內更是掛着一層又一層、數不清的重重簾幕。佩帶着精美玉飾的馬勒、雕刻華麗的馬鞍，心愛的人如今正在那繁華的遊樂尋歡之處吧？我即便登上高樓眺望，也看不到他通往章臺（指風流遊樂之所）的歸路。'],
 ['雨橫風狂三月暮，門掩黃昏，無計留春住。淚眼問花花不語，亂紅飛過鞦韆去。','暮春三月裏，風狂雨暴，無情地摧殘着大地。在黃昏時分掩上大門，卻想不出任何辦法把春天（以及逝去的青春與愛情）留住。我含着淚水去問那枝頭的殘花，可是花兒卻默默無言、毫無回應。只見零落紛飛的片片紅花，淒清地飛越過空盪盪的鞦韆而去。']
]);
addPoem('su','卜算子・黃州定慧院寓居作','night',[
 ['缺月掛疏桐，漏斷人初靜。誰見幽人獨往來，縹緲孤鴻影。','彎彎的月亮掛在疏落的梧桐樹梢，漏壺滴盡，夜深人靜。有誰看到幽居的人獨自往來，隱約間像那縹緲的孤雁身影。'],
 ['驚起卻回頭，有恨無人省。揀盡寒枝不肯棲，寂寞沙洲冷。','忽然驚起回頭一看，心裏的怨恨無人能了解。選遍了凋零淒冷的樹木，卻不願隨便停歇在上面，寧可棲息在寂寞冷清的沙洲上。']
]);
addPoem('su','水調歌頭','moon',[
 ['丙辰中秋，歡飲達旦，大醉，作此篇，兼懷子由。','丙辰年的中秋節，高興地喝酒直到第二天早晨，喝到大醉，寫了這首詞，同時思念弟弟子由。'],
 ['明月幾時有？把酒問青天。不知天上宮闕，今夕是何年。我欲乘風歸去，又恐瓊樓玉宇，高處不勝寒。起舞弄清影，何似在人間！','皎潔的月亮是從甚麼時候開始出現的？我拿起酒杯問問清澈的天空。不知道在天上的宮殿，今天晚上是甚麼年頭。我想乘着清風回到天上，又恐怕在美玉砌成的亭臺樓閣內，抵受不了高聳雲端的寒意。在月殿翩翩起舞，玩賞舞動的冷清身影，怎比得上在人間呢！'],
 ['轉朱閣，低綺戶，照無眠。不應有恨，何事長向別時圓？人有悲歡離合，月有陰晴圓缺，此事古難全。但願人長久，千里共嬋娟。','月亮轉移到朱紅色的樓閣前，月光低低地投進雕花的門窗，照着不能成眠的人。月亮對人應該不會有怨恨吧，但為甚麼總是在人離別的時候才又圓又亮呢？人間有離別的痛苦、團聚的歡欣，月亮也會陰伏晴出、盈虧圓缺，自古以來就難以圓滿。但願我們都能長久平安地生活，雖然相隔千里，也能共同欣賞這美好的月光。']
]);
addPoem('su','江城子','night',[
 ['十年生死兩茫茫。不思量，自難忘。千里孤墳，無處話淒涼。縱使相逢應不識，塵滿面，鬢如霜。','你我生死永別，茫茫然之間已過了十年。即使我不去思念，也難以忘懷。你的墳墓孤零零地遠在千里之外，無處可以訴說心中淒苦。現在即使我們相逢，你也不會認識我，因為我已憔悴得風塵滿面，鬢髮白如霜。'],
 ['夜來幽夢忽還鄉。小軒窗，正梳妝。相顧無言，惟有淚千行。料得年年腸斷處，明月夜，短松岡。','昨夜我在朦朧夢中忽然回到了故鄉。看見你坐在小屋內窗邊，正在梳妝打扮。我們互相對望，一時說不出話來，只有眼淚不停地流着。想到每年令我傷心難過的地方，就是在明月之夜，你在松樹山岡的埋骨之處。']
]);
addPoem('su','定風波','rain',[
 ['三月七日，沙湖道中遇雨。雨具先去，同行皆狼狽，余獨不覺，已而遂晴，故作此。','三月七日在沙湖路上遇到一陣暴風雨，因為攜帶雨具的人已先走了，因此同行的人都狼狽不堪，我卻不以為意。不久天就放晴了，於是填了這闋詞。'],
 ['莫聽穿林打葉聲，何妨吟嘯且徐行。竹杖芒鞋輕勝馬，誰怕？一蓑煙雨任平生。','不要在意雨點穿過樹林敲打葉子的聲音，不妨低吟高嘯，唱着歌兒慢慢地前行。拄着手杖，穿着草鞋，比騎馬還要輕鬆，有甚麼好怕？披着蓑衣在煙雨迷漫中渡過一生也無所謂。'],
 ['料峭春風吹酒醒，微冷，山頭斜照卻相迎。回首向來蕭瑟處，歸去，也無風雨也無晴。','料峭的春風把酒意吹醒了，稍微有點寒意，這時山頭的落日照了過來，彷彿在迎接我。回頭看看剛才走過的林木蕭瑟、風雨不已之處，回去吧，既沒有風雨，也無所謂天晴。']
]);
addPoem('su','念奴嬌・赤壁懷古','river',[
 ['大江東去，浪淘盡，千古風流人物。故壘西邊，人道是：三國周郎赤壁。亂石穿空，驚濤拍岸，捲起千堆雪。江山如畫，一時多少豪傑！','浩大的長江滾滾向東流去，滔滔波浪沖洗盡了千古以來的英雄人物。在舊營壘的西面，人們說就是三國時代周瑜作戰的赤壁。那裏雜亂的石山高聳插入天空，駭人的浪濤不斷拍擊江岸，捲起了千堆雪白的浪花。美好的江山就像圖畫一般，這裏曾經湧現了多少英雄豪傑？'],
 ['遙想公瑾當年，小喬初嫁了，雄姿英發。羽扇綸巾，談笑間、檣櫓灰飛煙滅。故國神遊，多情應笑我，早生華髮。人生如夢，一尊還酹江月。','遙想周瑜在赤壁戰役的時候，剛剛娶了美麗的小喬，特別顯得英姿煥發。他手上輕搖着羽扇，頭上戴着絲質儒巾，在閒談笑語之間，就把強敵的戰船燒得灰飛煙滅了。如今我身臨古戰場神遊往昔，可笑我太多懷古柔情了，才會這麼早就生出滿頭白髮。人活在世上就像一場夢，不如灑一杯酒，祭奠這歷盡千古的江水和明月。']
]);
addPoem('su','蝶戀花','spring',[
 ['花褪殘紅青杏小，燕子飛時，綠水人家繞。枝上柳綿吹又少，天涯何處無芳草。','紅花凋殘了，青杏還沒成熟，空中燕子成群飛翔，地面綠水繞着住家流淌。枝頭上的柳絮被風吹得愈來愈少了，放眼天涯，何處不見青青芳草！'],
 ['牆裏鞦韆牆外道，牆外行人，牆裏佳人笑。笑漸不聞聲漸悄，多情卻被無情惱。','牆內是懸掛着鞦韆的院落，牆外是寂靜長遠的路途。牆內洋溢着佳人盪鞦韆的歡笑聲，牆外行走的卻是我這個滿懷憂傷的失意人。笑聲隨着距離逐漸變小，卻也勾起了我這多情的人一片煩惱！']
]);
addPoem('su','水龍吟・次韻章質夫楊花詞','petals',[
 ['似花還似非花，也無人惜從教墜。拋家傍路，思量卻是，無情有思。縈損柔腸，困酣嬌眼，欲開還閉。夢隨風萬里，尋郎去處，又還被、鶯呼起。','好像是花，又好像不是花，也沒有人憐惜，任憑它飄落。它離開了枝頭，墜落路旁，看似無情，細想卻是自有它的愁思。這愁思使柔腸糾纏不已，嬌媚的眼睛困倦極了，想睜開卻還閉起。在夢中隨風飛行萬里，尋覓郎君的去處，卻又被黃鶯啼聲驚醒喚起。'],
 ['不恨此花飛盡，恨西園、落紅難綴！曉來雨過，遺蹤何在？一池萍碎。春色三分：二分塵土，一分流水。細看來不是楊花，點點是、離人淚。','我不怨恨這花飄落盡，只恨西園的落花再難連綴到枝頭上！清晨一陣雨過後，楊花的遺蹤何處可尋？原來落入池中成了大片浮萍碎塊。滿園的春色分成三份，兩份委於塵土，一份隨流水而去。仔細看來，這不是楊花，點點都是分離之人的眼淚。']
]);
addPoem('qin','踏莎行','mist',[
 ['霧失樓臺，月迷津渡。桃源望斷無尋處。可堪孤館閉春寒，杜鵑聲裏斜陽暮。','濃霧隱沒了樓臺，朦朧的月夜，看不清渡口。望穿雙眼也找不到令人嚮往的桃花源。我獨自住在旅舍，正難忍早春的清寒，偏又在這夕陽慘淡的時節，傳來杜鵑淒切的叫喊。'],
 ['驛寄梅花，魚傳尺素。砌成此恨無重數。郴江幸自繞郴山，為誰流下瀟湘去？','遠方寄來的禮物和一封封書信，砌成無數重幽怨。郴江啊郴江，你本來繞着郴山，為甚麼現在丟下我，獨自流向瀟湘？']
]);
addPoem('qin','鵲橋仙','stars',[
 ['纖雲弄巧，飛星傳恨，銀漢迢迢暗度。金風玉露一相逢，便勝卻人間無數！','纖細的雲彩正變幻着奇巧的圖案，流星傳達牛女兩星分離的怨恨。銀河遼闊，今晚他們要偷偷渡河相逢。金風送爽、玉露洗塵的一次相見啊，已勝過人間千次萬次的聚首。'],
 ['柔情似水，佳期如夢，忍顧鵲橋歸路。兩情若是久長時，又豈在朝朝暮暮？','柔情像銀河裏的水一般溫柔，相聚如夢一般短暫飄渺，在這難捨難分的時候，又怎忍心回看那鵲橋上的歸路。只要兩人的愛情天長地久，又何必在乎朝朝暮暮的長相廝守？']
]);
addPoem('zhou','蘭陵王・柳','willow',[
 ['柳陰直。煙裏絲絲弄碧。隋堤上、曾見幾番，拂水飄綿送行色。登臨望故國。誰識、京華倦客？長亭路，年去歲來，應折柔條過千尺。','柳樹的陰影整齊筆直地伸展開去。絲絲垂柳在煙霧中賣弄着它嫩綠的姿色。在這古老的隋堤上，我曾經多少回看見柔條拂水、柳花飄綿，送別行色匆匆的旅人。我登上高處，眺望故鄉，有誰理解我這個京華倦客的心情？就在那十里長亭的路上，年去年來，我折贈行人的柳條，恐怕都要超過千尺了。'],
 ['閒尋舊蹤跡。又酒趁哀絃，燈照離席。梨花榆火催寒食。愁一箭風快，半篙波暖，回頭迢遞便數驛。望人在天北。','這次出來，本來是閒着無事，舊地重遊。不料又被拉到送別的酒筵上，燈光下大家在傷感哀怨的樂聲中舉起了酒杯。過幾天就是寒食節了。梨花盛開，將用榆柳取火。唉！行人起程了。多麼難受啊！順風而去的航船像箭一般快，加上竹篙在溫暖的綠波中不斷撐動，恐怕他一回頭就遠遠地過了好幾個驛站了。而我們只能引領北望，知道他大概就在那個方向。'],
 ['悽惻、恨堆積！漸別浦縈回，津堠岑寂。斜陽冉冉春無極。念月榭攜手，露橋聞笛。沈思前事，似夢裏，淚暗滴。','心情淒慘，愁恨堆積。河岸迂迴曲折，渡口變得冷冷清清。只剩下逐漸西沉的夕陽和無邊的春色。想起了在月色映照的水榭攜手同遊，在露水沾濕的橋上一起傾聽悠揚笛韻。現在回想起這些往事，都像夢裏一樣，我不禁偷偷地流下了眼淚。']
]);
addPoem('zhou','六醜・落花','petals',[
 ['正單衣試酒，恨客裏光陰虛擲。願春暫留，春歸如過翼，一去無跡！為問花何在，夜來風雨，葬楚宮傾國。釵鈿墮處遺香澤，亂點桃蹊，輕翻柳陌，多情更誰追惜？但蜂媒蝶使，時叩窗隔。','正想換上單衣，買酒陶醉，只恨我在客中空把光陰虛拋。巴望着春天還能留住些時，誰知她走得那樣快，像飛鳥一飛連個影兒都不見了！問問花兒在什麼地方吧，原來受不住夜間的風雨搖打，楚宮的美人已給埋葬了。那首飾掉落的地方還留有餘香。殘瓣兒胡亂點綴着桃徑，也有在柳行裏曼舞飄搖，如此多情，更有誰人追悼？只是那好做媒的蜂蝶兒們，還常常來叩着窗戶騷擾。'],
 ['東園岑寂，漸蒙籠暗碧。靜繞珍叢底，成嘆息。長條故惹行客，似牽衣待話，別情無極。殘英小，強簪巾幘，終不似一朵釵頭顫裊，向人欹側。漂流處，莫趁潮汐；恐斷紅尚有相思字，何由見得？','整個東園死一般靜寂，正迷漫着一層濃密的暗綠。靜靜地從花樹旁邊繞過，禁不住悲哀，發出了歎息。修長的枝條故意地引逗行人，好似牽着衣裳想要說話，說着無限深長的離情別意。殘瓣兒這麼小，勉強插到帽沿上，可是終不如一朵顫顫巍巍的花，戴上像側着身向人拜揖。隨水漂流吧，只要別趕上潮汐；怕的是殘瓣上寫着情書，怎麼能使情人見到拾起？']
]);
addPoem('zhou','蘇幕遮・般涉','lotus',[
 ['燎沈香，消溽暑。鳥雀呼晴，侵曉窺簷語。葉上初陽乾宿雨、水面清圓，一一風荷舉。','點燃沈香，消解悶熱潮濕的暑氣。天剛拂曉，鳥雀就在屋簷邊探頭探腦，歡呼着雨住天晴。剛升起的太陽，曬乾葉上殘留的雨滴。水面上荷葉清潤寬圓，一朵朵的風荷在晨風吹拂下亭亭玉立。'],
 ['故鄉遙，何日去。家住吳門，久作長安旅。五月漁郎相憶否？小楫輕舟，夢入芙蓉浦。','故鄉遙遠，甚麼時候才能夠回去呢？家本在江南錢塘，卻長期羈留在京師汴梁。仲夏五月一起遊湖的漁郎啊，還記得我嗎？我總是在夢中搖着小船，駛近開滿荷花的池塘。']
]);
addPoem('zhou','少年遊','intimate',[ 
 ['並刀如水，吳鹽勝雪，纖手破新橙。錦幄初溫，獸煙不斷，相對坐調笙。','並州產的刀鋒利如水，吳地的鹽潔白似雪，女子纖纖玉手剝開新橙。錦帳中剛暖起來，獸形香爐的煙氣不斷，兩人相對坐着調弄笙簧。'],
 ['低聲問：向誰行宿？城上已三更。馬滑霜濃，不如休去，直是少人行！','她低聲問情人：「今夜你要到哪裏留宿？」城上已經敲過三更。外頭霜濃路滑，馬兒難行，不如留下別走了，夜深街上行人稀少。']
],{source:'https://m.gushiwen.cn/shiwenv_2738530cf5cf.aspx'});
addPoem('liqz','一翦梅','separation',[
 ['紅藕香殘玉簟秋。輕解羅裳，獨上蘭舟。雲中誰寄錦書來？雁字回時，月滿西樓。','紅荷已經凋謝，香氣已消失，冷滑如玉的竹蓆透出秋天的涼意。輕輕脫下絲質外裳，獨自登上精緻的小船。仰望天空，白雲間誰會寄來書信？排成人字形的雁群回歸時，圓滿的月亮掛在西樓之上。'],
 ['花自飄零水自流。一種相思，兩處閒愁。此情無計可消除，才下眉頭，卻上心頭。','花自顧地飄落，水自顧地流淌，同一種思念之情，牽動了兩處的離愁。這無法排遣的相思之苦，剛從微蹙的眉頭消失，卻又湧上心頭。']
]);
addPoem('liqz','鳳凰臺上憶吹簫','boudoir',[
 ['香冷金猊，被翻紅浪，起來慵自梳頭。任寶奩塵滿，日上簾鉤。生怕離懷別苦，多少事欲說還休。新來瘦，非干病酒，不是悲秋。','獅子造型的銅香爐裏，薰香已經冷卻；掀起牀上紅色的錦被，像翻起紅色波浪。早晨起來，懶洋洋的不想梳頭。任憑華貴的梳妝鏡匣鋪滿灰塵，朝陽的日光照在簾鉤上。我害怕離別的痛苦，多少心事想說卻又難以開口。最近漸漸消瘦起來，不是因為喝酒過量，也不是因為蕭瑟秋景而傷感。'],
 ['休休！這回去也，千萬遍陽關也則難留。念武陵人遠，煙鎖秦樓。惟有樓前流水，應念我終日凝眸。凝眸處，從今又添一段新愁！','罷了，罷了，這次他要離去，即使唱上千萬遍〈陽關三疊〉離別曲，也無法挽留。想到良人離開赴遠方，剩下我獨守被煙塵封鎖的空樓。只有在小樓前的流水，應顧念我整天定睛注目地盼望。就在注目盼望之處，從今而後，又添加一段新的愁思。']
]);
addPoem('liqz','醉花陰','autumn',[
 ['薄霧濃雲愁永晝，瑞腦消金獸。佳節又重陽，玉枕紗廚，半夜涼初透。','薄霧瀰漫，濃雲滿天，日子又長又悶人，只好對着金獸香爐，看那瑞腦香氣升騰飄散。已經是重陽佳節，枕着瓷枕，躺在碧紗帳裏；夜半時候，已感到些秋涼的氣息。'],
 ['東籬把酒黃昏後，有暗香盈袖。莫道不消魂，簾捲西風，人似黃花瘦。','黃昏後，對着東籬的菊花喝酒，幽微的香氣，侵滿了衣袖。別說這樣的天氣不會使人煩惱惆悵啊！當西風吹起簾子時，發覺屋子裏的人比屋外的黃花還要消瘦呢！']
]);
addPoem('liqz','聲聲慢','rain',[
 ['尋尋覓覓，冷冷清清，悽悽慘慘戚戚。乍暖還寒時候，最難將息。三杯兩盞淡酒，怎敵他晚來風急！雁過也，正傷心，卻是舊時相識。','我苦苦地到處尋找，但四周只是冷冷清清，令人感到淒涼哀傷。在冷暖不定的時節，最難調養休息。喝下三兩杯淡酒，怎能抵禦傍晚急吹的冷風！大雁飛過，使人傷心，原來是舊日的相識。'],
 ['滿地黃花堆積，憔悴損，如今有誰堪摘？守著窗兒，獨自怎生得黑！梧桐更兼細雨，到黃昏、點點滴滴。這次第，怎一箇愁字了得！','園中菊花堆積地上，卻已是憔悴不堪，現在還有誰來採摘？冷清地守着窗戶，獨自一人怎麼熬得到天黑？細雨淋漓灑在梧桐葉上，到黃昏時分，仍是點點滴滴地響。這般光景，怎能用一個愁字說得清楚！']
]);
addPoem('yue','滿江紅','battle',[
 ['怒髮衝冠！憑闌處、瀟瀟雨歇。抬望眼，仰天長嘯，壯懷激烈。三十功名塵與土，八千里路雲和月。莫等閒、白了少年頭，空悲切！','憤怒激起了我的頭髮，直欲衝開帽簷。倚着欄杆，那瀟瀟微雨已經休歇。我抬起頭來，仰望青天長嘯，一片壯烈胸懷使得我這麼激越！虛度了三十年華，功業和聲名等同微塵賤土；走遍了八千里路，空對着浮雲和明月。不要隨便讓青春溜走，白了少年頭，只是空空地迫切！'],
 ['靖康恥，猶未雪；臣子恨，何時滅？駕長車，踏破賀蘭山缺。壯志飢餐胡虜肉，笑談渴飲匈奴血。待從頭收拾舊山河，朝天闕。','靖康被虜的恥辱，還不曾昭雪，我這作臣子的憤恨究竟要幾時才能消滅？我要駕長車去遠征，直踏破賀蘭山的山坡。我有那樣的壯志，飢餓時拿胡虜的肉來作點心；談笑間若口渴就飲着匈奴人的血。等到徹底收復了舊日的山河，再回來朝拜天子的宮闕。']
]);
addPoem('yue','小重山','night',[
 ['昨夜寒蛩不住鳴。驚回千里夢，已三更。起來獨自繞階行。人悄悄，簾外月朧明。','昨夜寒蟬不停地鳴叫，驚醒了我千里馳騁的夢，已是三更。起身後獨自在臺階旁徘徊，四下悄然無聲，簾外的月色朦朧明亮。'],
 ['白首為功名。舊山松竹老，阻歸程。欲將心事付瑤琴。知音少，弦斷有誰聽？','為了功名，已熬到白頭。故鄉山中的松竹都老了，歸去的道路卻仍被阻隔。想把滿腹心事託付瑤琴，只可惜知音太少；即使琴弦彈斷，又有誰會聽？']
],{source:'https://zh.wikisource.org/zh-hant/%E5%B0%8F%E9%87%8D%E5%B1%B1_(%E5%B2%B3%E9%A3%9B)'});
addPoem('xin','青玉案・元夕','lanterns',[
 ['東風夜放花千樹，更吹落、星如雨。寶馬雕車香滿路。鳳簫聲動，玉壺光轉，一夜魚龍舞。','城裏花燈像東風吹散千樹繁花一樣，煙火燦爛有如被吹落的流星雨。寶馬拉着華麗的車子，路上飄着芳香。悠揚的簫聲四處迴蕩，像玉壺般的月亮升起，月光在人群中流轉，魚龍花燈整夜飛舞。'],
 ['蛾兒雪柳黃金縷，笑語盈盈暗香去。眾裏尋他千百度；驀然回首，那人卻在、燈火闌珊處。','戴着蛾兒、雪柳等亮麗頭飾的婦女，面露微笑，儀態優雅地在人群中走過，散發着淡淡香氣。我在人群中尋找他千百回，猛然一回頭，卻見那個人站在燈火零落的地方。']
]);
addPoem('xin','破陣子・為陳同甫賦壯詞以寄之','battle',[
 ['醉裏挑燈看劍，夢回吹角連營。八百里分麾下炙，五十絃翻塞外聲。沙場秋點兵。','乘着酒興，剔亮銀燈，把心愛的寶劍看了又看。嗚嗚的號角聲在軍營之間迴響，驚醒了征人的好夢。把燒得香噴噴的大塊牛肉分賞部下將士，讓熱烈動人的塞外旋律在五十根瑟絃上跳蕩、騰躍。軍隊在秋天舉行出征前的閱兵！'],
 ['馬作的盧飛快，弓如霹靂弦驚。了卻君王天下事，贏得生前身後名。可憐白髮生。','我們騎戰馬，快似「的盧」；拉響弓弦，聲如霹靂！待替皇上完成恢復中原的大業，為生前身後爭得不朽的美名，到那時，我們也該白髮蒼蒼、英雄垂老了吧！']
]);
addPoem('xin','賀新郎','mountain',[
 ['邑中園亭，僕皆為賦此詞。一日，獨坐停雲，水聲山色，競來相娛。意溪山欲援例者。遂作數語，庶幾彷彿淵明思親友之意云。','縣城裏的園林亭閣，我都為它們寫過〈賀新郎〉這首詞。有一天，我獨自坐在停雲堂中，流水聲與山色爭相前來陪伴、娛樂我。我想這山水也是想讓我援例為它們作詞吧，於是寫下了這幾句，大約彷彿陶淵明〈停雲〉詩中思念親友的意思。'],
 ['甚矣吾衰矣！悵平生、交遊零落，只今餘幾？白髮空垂三千丈，一笑人間萬事。問何物能令公喜？我見青山多嫵媚，料青山、見我應如是。情與貌，略相似。','我真是老得太嚴重了。惆悵的是，平生交好的朋友紛紛離散零落，如今還剩下幾個人呢？徒然留下三千白髮，可笑的人間萬事。試問有甚麼事能令你高興？我見青山覺得它嫵媚可愛，想來青山見我，也應如此。因為我與它們，從內心到外表都相似呀！'],
 ['一尊搔首東窗裏，想淵明、停雲詩就，此時風味。江左沉酣求名者，豈識濁醪妙理？回首叫雲飛風起。不恨古人吾不見，恨古人、不見吾狂耳。知我者，二三子。','想從前陶淵明對着東窗搔首期待，舉杯獨飲，寫作思念親友的〈停雲〉詩時的感受，大概就跟我此時一樣。不過東晉同時期那些沉醉酒鄉卻又追求名利的俗子，又哪知道淵明酣飲濁酒的妙理！回頭叫風雲飛起來，我不恨自己見不到陶淵明般的古人，只恨古人見不到我的清狂豁達。了解我的，只是幾位知心朋友。']
]);
addPoem('xin','醜奴兒・書博山道中壁','autumn',[
 ['少年不識愁滋味，愛上層樓，愛上層樓，為賦新詞強說愁。','年少時不知道愁是甚麼，閒來喜歡登高遠眺。登高遠眺，只為填寫新詞，勉強說自己煩惱。'],
 ['而今識盡愁滋味，欲說還休，欲說還休，卻道天涼好個秋。','如今嘗盡了愁苦的味道，想說卻又咽了下去。怎能說清楚呢？只好嘆道：「天氣涼爽，秋天真好。」']
]);
addPoem('xin','永遇樂・京口北固亭懷古','river',[
 ['千古江山，英雄無覓，孫仲謀處。舞榭歌臺，風流總被，雨打風吹去。斜陽草樹，尋常巷陌，人道寄奴曾住。想當年，金戈鐵馬，氣吞萬里如虎。','對着這聞名千古的江山，再也找不到像孫權般的英雄人物。從前的歌舞遊樂，和那名士豪傑的風流文采，已全在風吹雨打中隨歲月逝去。夕陽斜照下冷漠的草樹地帶，現在是尋常百姓的居處，有人說宋武帝劉裕就曾住在這裏。不覺想起他當年躍馬橫戈，氣概勇往，志在橫掃天下。'],
 ['元嘉草草，封狼居胥，贏得倉皇北顧。四十三年，望中猶記，烽火揚州路。可堪回首，佛狸祠下，一片神鴉社鼓。憑誰問：廉頗老矣，尚能飯否？','宋文帝君臣準備不足，卻草率想學霍去病遠征，結果落得倉皇敗逃。我南歸到現在已經四十三年，腦海中還記得揚州當年兵荒馬亂的景象，又怎堪回首祭祀胡人君主的佛狸祠下，竟是一片神鴉與社鼓。有誰問：廉頗年紀大了，飯量還好嗎？你辛棄疾年紀大了，還能為國效勞嗎？']
]);
const sceneNames={border:"塞下秋色",rain:'雨打梧桐',moon:'月照故國',boudoir:'深閨曉妝',separation:'倚樓望遠',farewell:'長亭送別',river:'大江東流',autumn:'秋色入詞',spring:'春水芳草',garden:'庭院深深',night:'夜色如墨',petals:'落花逐水',mist:'霧鎖津渡',stars:'銀漢迢迢',willow:'隋堤折柳',lotus:'風荷舉',intimate:'錦幄燈影',battle:'邊聲角起',lanterns:'元夕燈火',mountain:'停雲山色'};
const sceneText={border:"長煙落日，孤城緊閉",rain:'疏雨、殘燭與深院',moon:'月色照見離愁',boudoir:'晨光落在妝鏡前',separation:'春風裡的遠望',farewell:'煙波之外，長亭一別',river:'浪花淘盡千古',autumn:'雲天、黃葉與歸雁',spring:'落花、燕子與芳草',garden:'重簾深院，春暮無人',night:'孤月清影，萬籟俱寂',petals:'花瓣零落，隨水飄遠',mist:'迷濛樓臺與遠渡',stars:'星河相會，鵲橋微光',willow:'垂柳依依，送盡行人',lotus:'雨過天青，荷葉初舉',intimate:'暖帳、香煙與夜色',battle:'烽火孤城，秋日點兵',lanterns:'千燈如晝，流光不歇',mountain:'青山相看，流水相娛'};
const sceneColors={border:["#424b4a","#9a6850","#d5a06b"],rain:['#283d49','#6a6471','#c79676'],moon:['#172d43','#756483','#ddb37a'],boudoir:['#4d5258','#bd9b74','#f0d2a1'],separation:['#49655f','#b08778','#e8c59a'],farewell:['#324c58','#86756d','#d49f6b'],river:['#17394b','#5e7472','#d2a87b'],autumn:['#344b52','#9c755b','#d99d68'],spring:['#4b6a61','#9c9571','#e1c898'],garden:['#263b37','#536951','#bc9b72'],night:['#18283e','#34465c','#e1c08a'],petals:['#415d65','#846e70','#eab59a'],mist:['#53676a','#828581','#ded1ae'],stars:['#101b37','#42425c','#edc588'],willow:['#324d48','#687653','#d9ad77'],lotus:['#315665','#477774','#e1bb83'],intimate:['#3e3033','#876451','#e2bc7c'],battle:['#4a3735','#8d5940','#dda86b'],lanterns:['#1d2c39','#745346','#f1bd62'],mountain:['#263d3b','#5a6d5a','#c7a36d']};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const authorFor=id=>authors.find(a=>a.id===id);
const poemId=p=>p.id||(p.id=`${p.author}-${poems.indexOf(p)+1}`);
function portrait(a,large=false){
 const skin='#e6bea0', robe=a.color, w=large?145:85, h=large?185:105;
 const female=!!a.female;
 return `<svg viewBox="0 0 120 150" role="img" aria-label="${esc(a.name)}的古風人偶插畫" xmlns="http://www.w3.org/2000/svg">
 <ellipse cx="60" cy="145" rx="51" ry="5" fill="#6c6454" opacity=".12"/>
 <path d="M18 148 Q20 104 45 98 L75 98 Q100 105 103 148Z" fill="${robe}"/>
 <path d="M45 103 L59 127 L74 103 L84 148 L36 148Z" fill="#f1e9d9" opacity=".78"/>
 <path d="M48 101 L60 113 L72 101 L67 130 L60 136 L53 130Z" fill="#bd9c69" opacity=".88"/>
 <path d="M43 53 Q40 27 60 26 Q80 27 77 54 L74 77 Q70 91 60 92 Q48 91 45 76Z" fill="${skin}"/>
 <path d="M43 57 Q36 29 52 22 Q70 14 80 36 L77 53 Q70 45 68 34 Q59 43 44 45Z" fill="${a.hair}"/>
 ${female?`<path d="M44 37 Q34 13 52 12 Q66 11 67 27 Q82 8 92 20 Q100 32 78 43 L75 36 Q62 31 44 45Z" fill="${a.hair}"/><circle cx="82" cy="23" r="5" fill="${a.hat}"/>`:`<path d="M36 37 Q40 17 60 17 Q81 17 85 37 L79 42 L42 42Z" fill="${a.hat}"/><path d="M32 38 Q59 33 88 38 L86 43 Q59 39 34 44Z" fill="${a.hat}"/>`}
 <path d="M49 59 Q53 57 56 59 M64 59 Q68 57 71 59" fill="none" stroke="#493a35" stroke-width="1.5" stroke-linecap="round"/>
 <path d="M57 72 Q60 74 63 72" fill="none" stroke="#a16458" stroke-width="1.5" stroke-linecap="round"/>
 <circle cx="49" cy="63" r="1.3" fill="#403a35"/><circle cx="70" cy="63" r="1.3" fill="#403a35"/>
 ${['liyu','su','yue','xin','wen'].includes(a.id)&&!female?`<path d="M48 77 Q60 83 72 77 Q69 94 60 96 Q51 93 48 77Z" fill="${a.hair}" opacity=".8"/>`:''}
 <path d="M42 101 Q59 114 78 101" fill="none" stroke="#fff7e9" stroke-width="2" opacity=".7"/>
 <circle cx="91" cy="105" r="3" fill="#c5aa73" opacity=".9"/>
 </svg>`;
}
function cardMarkup(a){return `<a class="author-card" href="#poet/${a.id}" aria-label="閱讀${esc(a.name)}介紹"><span class="card-arrow">↗</span><span class="portrait">${portrait(a)}</span><span class="author-copy"><span class="author-period">${esc(a.period)}</span><h3 class="author-name">${esc(a.name)}</h3><span class="author-date">${esc(a.date)}</span><span class="author-style">${esc(a.school)}</span></span></a>`}
function setNav(page){document.querySelectorAll('.top-nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav===page));}
function renderHome(){
 setNav('home');
 document.getElementById('app').innerHTML=`<section class="hero"><div class="eyebrow">A GALLERY OF SONG LYRICS</div><h1>詞中天地</h1><p>沿着詞人的生平與筆墨，走入宋詞裡的春愁、山河、明月與人間。</p><div class="hero-aside"><strong>12</strong>位詞人・38 闋作品</div></section>
 <section class="section-wrap" id="poets"><div class="timeline-rail"><span>唐末五代</span><span>—</span><span>北宋</span><span>—</span><span>南宋</span></div><div class="section-head"><div><h2>詞人長廊</h2><p>依生年排列 · 點選人偶，走近一位詞家</p></div><label class="search-box"><span>⌕</span><input id="authorSearch" type="search" placeholder="搜尋詞人" aria-label="搜尋詞人"></label></div><div class="author-grid" id="authorGrid">${authors.map(cardMarkup).join('')}</div><div class="quote-strip"><blockquote>「詞以境界為最上。有境界，則自成高格。」</blockquote><cite>— 王國維《人間詞話》</cite></div></section>`;
 const input=document.getElementById('authorSearch');input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();document.getElementById('authorGrid').innerHTML=authors.filter(a=>(a.name+a.date+a.period+a.school).toLowerCase().includes(q)).map(cardMarkup).join('')||'<p class="empty">沒有找到符合的詞人。</p>';});
}
function renderWorks(){
 setNav('works');
 const byAuthor=authors.map(a=>`<optgroup label="${esc(a.name)}">${poems.filter(p=>p.author===a.id).map(p=>`<option value="${poemId(p)}">${esc(p.title)}</option>`).join('')}</optgroup>`).join('');
 document.getElementById('app').innerHTML=`<section class="hero"><div class="eyebrow">THE POEMS</div><h1>作品選讀</h1><p>三十八闋詞，三十八種心境。選一闋慢慢讀，也可以聽它被念出來。</p><div class="hero-aside"><strong>${poems.length}</strong>首原文・譯文・動畫</div></section><section class="section-wrap"><div class="section-head"><div><h2>按詞人尋詞</h2><p>作品收錄依照提供資料整理</p></div><label class="search-box"><span>⌕</span><input id="poemSearch" type="search" placeholder="搜尋詞題／詞人" aria-label="搜尋作品"></label></div><div class="work-list" id="allWorkList">${poems.map(workRow).join('')}</div><div class="quote-strip"><blockquote>每一闋詞，都是一扇通往時代與心境的窗。</blockquote><cite>詞中天地・宋詞作品欣賞</cite></div></section>`;
 const input=document.getElementById('poemSearch');input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();document.getElementById('allWorkList').innerHTML=poems.filter(p=>(p.title+authorFor(p.author).name+sceneNames[p.scene]).toLowerCase().includes(q)).map(workRow).join('')||'<p class="empty">沒有找到符合的作品。</p>';});
}
function workRow(p){const a=authorFor(p.author);return `<a class="work-row" href="#poem/${poemId(p)}"><span><span class="work-title">〈${esc(p.title)}〉</span><span class="work-theme">${esc(a.name)}　·　${esc(sceneNames[p.scene]||'詞作')}</span></span><span class="work-arrow">→</span></a>`}
function renderAuthor(id){
 setNav('home');const a=authorFor(id);if(!a)return renderHome();const list=poems.filter(p=>p.author===id);
 document.getElementById('app').innerHTML=`<div class="page-shell"><div class="breadcrumbs"><button onclick="location.hash='#home'">詞人長廊</button><span>/</span>${esc(a.period)}<span>/</span>${esc(a.name)}</div><section class="profile-hero"><div class="profile-portrait">${portrait(a,true)}</div><div><div class="profile-period">${esc(a.period)} · ${esc(a.tag)}</div><div class="profile-title"><h1>${esc(a.name)}</h1><span>${esc(a.date)}</span></div><p class="profile-tagline">${esc(a.school)}</p><p class="profile-bio">${esc(a.style)}</p><span class="profile-seal">宋詞詞人</span></div></section><section class="profile-facts"><div class="fact"><div class="fact-label">官職與生平</div><div class="fact-text"><strong>${esc(a.role)}</strong>。${esc(a.life)}</div></div><div class="fact"><div class="fact-label">詞風流派與文學地位</div><div class="fact-text"><strong>${esc(a.school)}</strong>。${esc(a.style)}</div></div></section><section><div class="works-head"><h2>代表作品</h2><span>${list.length} 闋詞 · 點選篇名閱讀</span></div><div class="work-list">${list.map(workRow).join('')}</div></section><button class="back-link" onclick="location.hash='#home'">←　返回詞人長廊</button></div>`;
}
function renderPoem(id){
 setNav('works');const p=poems.find(x=>poemId(x)===id);if(!p)return renderWorks();const a=authorFor(p.author);
 const stanzas=p.stanzas.map((s,i)=>`<div class="stanza"><p class="original">${esc(s[0])}</p><p class="translation">${esc(s[1])}</p></div>`).join('');
 const source=p.source?`<div class="work-source">補充文本來源：<a href="${esc(p.source)}" target="_blank" rel="noopener">${p.source.includes('wikisource')?'維基文庫':'古文島／古詩文網'} ↗</a> · 白話譯文為本頁整理</div>`:'';
 const links=poems.filter(x=>x.author===a.id).map(x=>`<button class="next-work ${x===p?'active':''}" onclick="location.hash='#poem/${poemId(x)}'">${esc(x.title)}</button>`).join('');
 document.getElementById('app').innerHTML=`<div class="page-shell"><div class="breadcrumbs"><button onclick="location.hash='#works'">作品選讀</button><span>/</span><button onclick="location.hash='#poet/${a.id}'">${esc(a.name)}</button><span>/</span>${esc(p.title)}</div><section class="poem-top"><div><div class="poem-heading"><div class="profile-period">${esc(a.period)} · ${esc(sceneNames[p.scene])}</div><h1>〈${esc(p.title)}〉</h1><div class="poem-author">${esc(a.name)}　·　${esc(a.date)}</div><p class="poem-note">${esc(sceneText[p.scene]||'一闋詞，一段心境。')}。原文與白話譯文逐段對照，隨畫面與朗讀慢慢品味。</p><div class="reader-controls"><button class="control-button primary" id="readButton">▷　朗讀原文</button><button class="control-button" id="stopButton" disabled>■　停止</button><label class="voice-select-label" for="voiceSelect">網頁朗讀聲音</label><select id="voiceSelect" aria-label="選擇網頁中文朗讀聲音"></select></div><div class="voice-note" id="voiceNote">網頁朗讀使用瀏覽器中文語音；與影片配音分開控制。</div></div><div class="poem-paper"><div class="poem-seal"><span>原文</span><span>白話譯讀</span></div>${stanzas}</div></section><section class="animation-section"><div class="animation-head"><div><h2>詞境卡通動畫</h2></div><button class="stage-play" id="animationToggle">▷　播放動畫</button></div><div class="animation-stage"><canvas id="sceneCanvas" aria-label="${esc(p.title)}人物與景物卡通動畫畫面"></canvas><button class="video-play-overlay" id="videoPlayButton" aria-label="播放動畫"><span>▶</span><small>播放動畫</small></button><div class="stage-label" id="stageLabel">ANIMATED POEM · ${esc(sceneNames[p.scene]).toUpperCase()}</div><div class="video-subtitles" aria-live="polite"><div class="caption-window"><span id="captionOriginal">${esc(p.stanzas[0][0])}</span></div><div class="caption-window translation-window"><span id="captionTranslation">${esc(p.stanzas[0][1])}</span></div></div></div><div class="stage-bottom"><button class="animation-audio-toggle" id="animationAudioToggle" aria-pressed="true">🔊　影片配音：開</button><span>${String(poems.indexOf(p)+1).padStart(2,'0')} / ${poems.length}</span></div></section><div class="next-works">${links}</div>${source}<button class="back-link" onclick="location.hash='#poet/${a.id}'">←　返回${esc(a.name)}詞人頁</button></div>`;
 setupVoice(p);setupAnimation(p);
}
let animationFrame=null,animationResize=null,videoSpeechController=null;
function route(){
 if(animationFrame){cancelAnimationFrame(animationFrame);animationFrame=null;}if(animationResize){animationResize.disconnect();animationResize=null;}if(videoSpeechController){videoSpeechController.cancel();videoSpeechController=null;}if(window.speechSynthesis)speechSynthesis.cancel();
 const raw=decodeURIComponent(location.hash.slice(1)||'home');const [page,id]=raw.split('/');
 document.body.classList.toggle('home-page',page==='home');
 if(page==='poet'&&id)renderAuthor(id);else if(page==='poem'&&id)renderPoem(id);else if(page==='works')renderWorks();else renderHome();
 window.scrollTo({top:0,behavior:'smooth'});
}
window.addEventListener('hashchange',route);route();
function drawCartoonPerson(ctx,x,ground,size,t,options={}){
 const robe=options.robe||'#718276',trim=options.trim||'#d2b582',hair=options.hair||'#262925',skin='#edc59a',female=options.female||false,pose=options.pose||'look',phase=options.phase||0;
 const walk=pose==='walk'||pose==='run',step=walk?Math.sin(t*(pose==='run'?8:4.2)+phase)*8:Math.sin(t*1.6+phase)*1.5;
 ctx.save();ctx.translate(x+Math.sin(t*.45+phase)*(walk?8:1),ground+Math.sin(t*2.1+phase)*1.5);ctx.scale(size, size);
 ctx.fillStyle='rgba(14,20,22,.23)';ctx.beginPath();ctx.ellipse(0,2,18,4,0,0,Math.PI*2);ctx.fill();
 ctx.lineCap='round';ctx.lineJoin='round';
 // tiny stepping feet and trousers
 ctx.strokeStyle='#332f2b';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-6,-13);ctx.lineTo(-7-step,-2);ctx.moveTo(6,-13);ctx.lineTo(7+step,-2);ctx.stroke();
 ctx.strokeStyle=options.armor?'#54453b':robe;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-7-step,-2);ctx.lineTo(-12-step,-1);ctx.moveTo(7+step,-2);ctx.lineTo(12+step,-1);ctx.stroke();
 // flowing hanfu robe
 ctx.fillStyle=robe;ctx.strokeStyle='rgba(33,39,34,.55)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-12,-72);ctx.quadraticCurveTo(-17,-51,-20,-34);ctx.quadraticCurveTo(-25,-17,-18,0);ctx.quadraticCurveTo(0,5,18,0);ctx.quadraticCurveTo(25,-18,20,-35);ctx.quadraticCurveTo(16,-55,12,-72);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.strokeStyle=trim;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-11,-38);ctx.lineTo(0,-4);ctx.lineTo(12,-38);ctx.stroke();ctx.beginPath();ctx.moveTo(-14,-30);ctx.quadraticCurveTo(0,-25,14,-30);ctx.stroke();
 // sleeves, animated as the character walks or gestures
 const armSwing=walk?step*.62:Math.sin(t*1.8+phase)*4;
 ctx.fillStyle=robe;ctx.strokeStyle='rgba(33,39,34,.55)';ctx.lineWidth=1.4;
 ctx.beginPath();ctx.moveTo(-10,-69);ctx.quadraticCurveTo(-25,-63,-31,-50+armSwing);ctx.quadraticCurveTo(-24,-43,-13,-51);ctx.lineTo(-4,-61);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.moveTo(10,-69);ctx.quadraticCurveTo(25,-63,31,-49-armSwing);ctx.quadraticCurveTo(24,-42,13,-51);ctx.lineTo(4,-61);ctx.closePath();ctx.fill();ctx.stroke();
 // raised hand for looking, greeting, or lamenting poses
 ctx.strokeStyle=skin;ctx.lineWidth=5;ctx.beginPath();
 if(pose==='reach'){ctx.moveTo(24,-49);ctx.quadraticCurveTo(36,-63,40,-75+Math.sin(t*2+phase)*2);}
 else if(pose==='wave'||pose==='salute'){ctx.moveTo(24,-49);ctx.quadraticCurveTo(34,-62,30,-78+Math.sin(t*2+phase)*2);}
 else if(pose==='drink'){ctx.moveTo(24,-49);ctx.quadraticCurveTo(32,-54,22,-65);}
 else if(pose==='look'){ctx.moveTo(24,-49);ctx.quadraticCurveTo(33,-58,27,-68);}
 else{ctx.moveTo(24,-49);ctx.quadraticCurveTo(31,-45,25,-38+armSwing);}
 ctx.stroke();ctx.fillStyle=skin;ctx.beginPath();ctx.arc(pose==='reach'?40:pose==='wave'||pose==='salute'?30:pose==='drink'?22:pose==='look'?27:25,pose==='reach'?-75:pose==='wave'||pose==='salute'?-78:pose==='drink'?-65:pose==='look'?-68:-38+armSwing,4,0,Math.PI*2);ctx.fill();
 // collar and belt
 ctx.fillStyle=trim;ctx.beginPath();ctx.moveTo(-8,-72);ctx.lineTo(0,-59);ctx.lineTo(8,-72);ctx.lineTo(3,-50);ctx.lineTo(-2,-50);ctx.closePath();ctx.fill();
 if(options.armor){ctx.fillStyle='rgba(79,68,55,.82)';ctx.fillRect(-12,-54,24,18);ctx.strokeStyle='#c1a36e';ctx.lineWidth=1;for(let yy=-51;yy<-38;yy+=5){ctx.beginPath();ctx.moveTo(-11,yy);ctx.lineTo(11,yy);ctx.stroke();}}
 // head, hair, and a readable little cartoon face
 ctx.fillStyle=skin;ctx.strokeStyle='rgba(85,57,39,.7)';ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(0,-86,13,16,0,0,Math.PI*2);ctx.fill();ctx.stroke();
 ctx.fillStyle=hair;ctx.beginPath();ctx.ellipse(0,-96,14,7,-.08,Math.PI,Math.PI*2);ctx.fill();if(female){ctx.beginPath();ctx.arc(12,-98,5,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(10,-95);ctx.quadraticCurveTo(19,-84,14,-73);ctx.quadraticCurveTo(10,-83,8,-88);ctx.fill();}else{ctx.fillRect(-14,-98,28,5);ctx.fillRect(-7,-104,14,6);}
 ctx.fillStyle='#342f2b';ctx.beginPath();ctx.arc(-4,-87,1.3,0,Math.PI*2);ctx.arc(4,-87,1.3,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#9b5949';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-2,-80);ctx.quadraticCurveTo(0,-78,3,-80);ctx.stroke();
 if(options.helmet){ctx.fillStyle=options.helmet;ctx.beginPath();ctx.moveTo(-14,-91);ctx.quadraticCurveTo(-17,-108,0,-109);ctx.quadraticCurveTo(17,-108,14,-91);ctx.closePath();ctx.fill();ctx.fillRect(-19,-93,38,4);ctx.strokeStyle='#c9a260';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(0,-109);ctx.lineTo(0,-118-Math.sin(t*3+phase)*2);ctx.stroke();}
 if(options.fan){ctx.strokeStyle='#eee1bd';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(27,-54);ctx.lineTo(39,-73);ctx.moveTo(30,-54);ctx.lineTo(43,-68);ctx.moveTo(33,-54);ctx.lineTo(46,-72);ctx.stroke();}
 ctx.restore();
}
function drawCartoonHorse(ctx,x,y,s,t){
 ctx.save();ctx.translate(x,y+Math.sin(t*5)*2);ctx.scale(s,s);const leg=Math.sin(t*7)*5;
 ctx.fillStyle='#6d493a';ctx.beginPath();ctx.ellipse(0,-22,34,17,-.08,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(18,-30);ctx.quadraticCurveTo(31,-49,40,-52);ctx.lineTo(46,-44);ctx.lineTo(35,-27);ctx.closePath();ctx.fill();
 ctx.fillStyle='#44342e';ctx.beginPath();ctx.ellipse(47,-46,11,7,-.2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(40,-53);ctx.lineTo(39,-63);ctx.lineTo(45,-56);ctx.moveTo(48,-53);ctx.lineTo(53,-61);ctx.lineTo(54,-52);ctx.fill();
 ctx.strokeStyle='#3f332d';ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-22,-12);ctx.lineTo(-23+leg,5);ctx.moveTo(-7,-12);ctx.lineTo(-8-leg,5);ctx.moveTo(13,-12);ctx.lineTo(14-leg,5);ctx.moveTo(27,-12);ctx.lineTo(28+leg,5);ctx.stroke();
 ctx.strokeStyle='#322c29';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-31,-26);ctx.quadraticCurveTo(-49,-18,-45+Math.sin(t*4)*5,-5);ctx.stroke();ctx.fillStyle='#f0c77b';ctx.fillRect(18,-34,17,3);ctx.restore();
}
function drawTinyBoat(ctx,x,y,s,t,color='#292f30'){
 ctx.save();ctx.translate(x,y+Math.sin(t*1.6)*3);ctx.scale(s,s);ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(-48,-4);ctx.quadraticCurveTo(0,13,50,-4);ctx.lineTo(37,7);ctx.lineTo(-35,7);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(244,225,183,.6)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(0,-4);ctx.lineTo(0,-62);ctx.moveTo(3,-57);ctx.quadraticCurveTo(30,-45,30,-18);ctx.lineTo(3,-18);ctx.closePath();ctx.stroke();ctx.fillStyle='rgba(231,210,171,.54)';ctx.beginPath();ctx.moveTo(3,-56);ctx.quadraticCurveTo(30,-45,30,-19);ctx.lineTo(3,-19);ctx.closePath();ctx.fill();ctx.restore();
}
function drawCartoonStory(ctx,p,t,W,H){
 const scene=p.scene,a=authorFor(p.author),ground=H*.865,s=H*.0042,robe=a?.color||'#718276',dark=a?.hair||'#282a27',beat=Math.floor(t/3.1)%4,action=['look','reach','walk','wave'][beat],drift=Math.sin(t*.58)*W*.035,woman=(x,y,size,pose='look',extra={})=>drawCartoonPerson(ctx,x,y,size,t,{robe:'#bd8176',trim:'#e6c493',hair:'#302b2b',female:true,pose,...extra}),scholar=(x,y,size,pose='look',extra={})=>drawCartoonPerson(ctx,x,y,size,t,{robe,trim:'#d3b77f',hair:dark,pose,...extra});
 const window=(x,y,w,h)=>{ctx.fillStyle='rgba(31,36,34,.57)';ctx.fillRect(x,y,w,h);ctx.strokeStyle='rgba(213,190,149,.5)';ctx.lineWidth=3;ctx.strokeRect(x+7,y+7,w-14,h-14);for(let i=1;i<4;i++){ctx.beginPath();ctx.moveTo(x+8+w*i/4,y+7);ctx.lineTo(x+8+w*i/4,y+h-7);ctx.stroke()}ctx.beginPath();ctx.moveTo(x+7,y+h*.52);ctx.lineTo(x+w-7,y+h*.52);ctx.stroke()};
 const bench=(x,y,w)=>{ctx.fillStyle='rgba(63,48,38,.78)';ctx.fillRect(x,y,w,7);ctx.fillRect(x+8,y+7,5,18);ctx.fillRect(x+w-13,y+7,5,18)};
 if(['boudoir','intimate','garden'].includes(scene)){
  window(W*.16,H*.22,W*.24,H*.44);ctx.fillStyle='rgba(145,105,76,.55)';ctx.fillRect(W*.49,H*.55,W*.16,H*.02);ctx.fillRect(W*.51,H*.57,W*.012,H*.1);ctx.fillRect(W*.62,H*.57,W*.012,H*.1);
  // mirror and a small lamp
  ctx.strokeStyle='#c6a76e';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(W*.56,H*.48,H*.038,H*.08,-.1,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#f4c77a';ctx.beginPath();ctx.arc(W*.49,H*.48,4+Math.sin(t*5)*1.5,0,Math.PI*2);ctx.fill();
  woman(W*.72,ground,s,scene==='garden'?'reach':'look');
  if(scene==='garden'){scholar(W*.35,ground*.99,s*.78,'walk',{robe:'#637565'});ctx.strokeStyle='rgba(44,58,43,.6)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(W*.76,H*.54);ctx.lineTo(W*.88,H*.75);ctx.stroke();ctx.strokeStyle='#94785f';ctx.beginPath();ctx.moveTo(W*.72,H*.6);ctx.quadraticCurveTo(W*.78,H*.54+Math.sin(t*1.5)*8,W*.84,H*.6);ctx.stroke();}
  return;
 }
 if(scene==='rain'){
  window(W*.58,H*.18,W*.25,H*.4);
  if(p.author==='su'){
   // walking scholar under rain, holding a bamboo staff and straw hat
   scholar(W*.42,ground,s,'walk',{robe:'#987e58',trim:'#d3bd8d'});ctx.strokeStyle='#796144';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(W*.45,H*.57);ctx.lineTo(W*.49,H*.89);ctx.stroke();ctx.fillStyle='#c4a06e';ctx.beginPath();ctx.ellipse(W*.42,H*.49,W*.075,H*.018,-.07,0,Math.PI*2);ctx.fill();
  }else if(p.author==='wen')woman(W*(.7+Math.sin(t*.46)*.035),ground,s,action);else scholar(W*(.7+Math.sin(t*.46)*.035),ground,s,beat%2?'drink':action);
  return;
 }
 if(scene==='farewell'||scene==='willow'){
  const pierY=ground;ctx.fillStyle='rgba(73,59,43,.55)';ctx.fillRect(0,pierY,W*.47,H*.035);for(let i=0;i<5;i++)ctx.fillRect(W*(.04+i*.09),pierY,H*.014,H*.11);
  if(scene==='willow'){woman(W*(.24+Math.sin(t*.55)*.025),ground,s*.86,beat%2?'wave':'reach');drawTinyBoat(ctx,W*(.64+Math.sin(t*.2)*.12),H*.82,.62,t);scholar(W*(.64+Math.sin(t*.2)*.12),H*.81,s*.52,action,{robe:'#89907c'});}
  else{scholar(W*(.27+Math.sin(t*.6)*.025),ground,s*.9,beat%2?'wave':'reach');woman(W*.44,ground,s*.82,action);const bx=W*(.73+Math.sin(t*.19)*.11);drawTinyBoat(ctx,bx,H*.82,.7,t);scholar(bx,H*.81,s*.48,'wave',{robe:'#7d8a78'});}
  return;
 }
 if(scene==='border'||scene==='battle'){
  const march=W*(.03+((t*.035)% .25));drawCartoonHorse(ctx,W*(.32+Math.sin(t*.42)*.045),ground*.97,H*.00145,t);
  drawCartoonPerson(ctx,W*.34,ground*.99,s*.82,t,{robe:'#71614a',trim:'#d5ae70',hair:'#242522',armor:true,helmet:'#54453b',pose:beat%2?'salute':'wave'});
  drawCartoonPerson(ctx,W*(.57+Math.sin(t*.25)*.045),ground,s,t,{robe:'#76634e',trim:'#d7b06e',hair:'#272723',armor:true,helmet:'#4e4439',pose:action});
  for(let i=0;i<4;i++)drawCartoonPerson(ctx,W*(.61+i*.065)+march,ground*.99,H*.0024,t,{robe:'#6b5946',trim:'#b79a6c',hair:'#242522',armor:true,helmet:'#50453a',pose:'walk',phase:i});
  return;
 }
 if(scene==='river'){
  if(p.author==='su'){
   // cliff-side poet watches the Yangtze and an old warship
   ctx.fillStyle='rgba(45,40,35,.75)';ctx.beginPath();ctx.moveTo(0,H*.73);ctx.quadraticCurveTo(W*.12,H*.54,W*.3,H*.64);ctx.lineTo(W*.38,H);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
   scholar(W*(.2+Math.sin(t*.42)*.035),ground,s,action,{robe:'#d0ae78',fan:true});drawTinyBoat(ctx,W*(.69+Math.sin(t*.22)*.12),H*.79,.8,t,'rgba(28,35,38,.85)');
  }else{
   for(let i=0;i<3;i++){const bx=W*(.24+i*.25)+Math.sin(t*.25+i)*12;drawTinyBoat(ctx,bx,H*(.77+i*.035),.53,t,'rgba(30,43,42,.8)');}
   woman(W*.72,ground,s*.86,'wave',{robe:'#c38b65'});scholar(W*.36,ground,s*.72,'look',{robe:'#728273'});
  }
  return;
 }
 if(scene==='moon'){
  ctx.strokeStyle='rgba(214,190,148,.5)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,H*.78);ctx.lineTo(W,H*.78);ctx.moveTo(0,H*.87);ctx.lineTo(W,H*.87);ctx.stroke();
  scholar(W*(.48+Math.sin(t*.4)*.025),ground,s,beat%2?'drink':action,{fan:true});ctx.fillStyle='#d6ba83';ctx.beginPath();ctx.arc(W*.55,H*.66,5,0,Math.PI*2);ctx.fill();return;
 }
 if(scene==='night'){
  scholar(W*(.67+Math.sin(t*.38)*.025),ground,s,action,{robe:'#586c6a'});
  if(p.title==='江城子')woman(W*.36,ground,s*.86,'look',{robe:'rgba(209,177,158,.72)',trim:'rgba(243,219,183,.75)'});
  else{ctx.strokeStyle='rgba(25,27,29,.85)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(W*.3,H*.48);ctx.quadraticCurveTo(W*.36,H*.43,W*.4,H*.48);ctx.quadraticCurveTo(W*.45,H*.39,W*.51,H*.47);ctx.stroke();ctx.fillStyle='rgba(239,221,184,.85)';ctx.beginPath();ctx.ellipse(W*(.38+Math.sin(t*.4)*.03),H*(.46-Math.sin(t*.5)*.1),7,4,-.2,0,Math.PI*2);ctx.fill();}
  return;
 }
 if(scene==='stars'){
  // two animated lovers meet above an arched bridge
  ctx.strokeStyle='rgba(237,206,149,.75)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(W*.22,H*.78);ctx.quadraticCurveTo(W*.5,H*.47,W*.78,H*.78);ctx.stroke();
  woman(W*(.28+Math.sin(t*.55)*.09),ground,s*.82,beat%2?'wave':'reach',{robe:'#7180a0'});scholar(W*(.73-Math.sin(t*.55)*.09),ground,s*.82,beat%2?'wave':'reach',{robe:'#9e665e'});return;
 }
 if(scene==='lanterns'){
  for(let i=0;i<4;i++){const x=((t*15+i*W*.29)%(W+100))-30;drawCartoonPerson(ctx,x,ground,s*.62,t,{robe:i%2?'#a95f4f':'#9d7652',trim:'#e9c47d',hair:'#272522',female:i%2===0,pose:'walk',phase:i});}
  scholar(W*.38,ground,s*.9,'look',{robe:'#61766a'});return;
 }
 if(scene==='lotus'){
  const bx=W*(.42+((t*.018)% .25)+Math.sin(t*.18)*.025),by=H*.81;drawTinyBoat(ctx,bx,by,.86,t,'rgba(35,49,43,.88)');scholar(bx,by-2,s*.58,action,{robe:'#788a6f',fan:true});return;
 }
 if(scene==='mist'){
  ctx.strokeStyle='rgba(43,56,53,.48)';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(W*.5,H*.64);ctx.lineTo(W*.5,H*.82);ctx.moveTo(W*.33,H*.7);ctx.lineTo(W*.67,H*.7);ctx.stroke();scholar(W*(.48+Math.sin(t*.34)*.12),ground,s,beat%2?'look':'walk',{robe:'#687a78'});return;
 }
 if(scene==='mountain'){
  ctx.fillStyle='rgba(57,66,47,.8)';ctx.beginPath();ctx.ellipse(W*.58,H*.83,W*.23,H*.16,0,Math.PI,Math.PI*2);ctx.fill();scholar(W*(.48+Math.sin(t*.3)*.055),ground,s*.84,beat%2?'drink':action,{robe:'#8b7959',fan:true});return;
 }
 if(scene==='separation'){
  scholar(W*(.68-drift/W*.25),ground,s,action,{robe:'#728477'});woman(W*(.28+drift/W*.25),ground,s*.78,beat%2?'wave':'reach',{robe:'#b98472'});return;
 }
 // Spring, autumn, and falling-petal poems: let the speaker walk through a lived-in garden.
 if(scene==='spring'||scene==='autumn'||scene==='petals'){
  if(scene==='spring'){ctx.strokeStyle='rgba(57,73,57,.5)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(W*.76,H*.54);ctx.quadraticCurveTo(W*.81,H*.5+Math.sin(t*1.5)*12,W*.88,H*.56);ctx.stroke();}
  const who=p.author==='liqz'||(p.author==='su'&&p.title==='水龍吟・次韻章質夫楊花詞');
  if(who)woman(W*.6,ground,s,'reach');else scholar(W*.42,ground,s,'walk',{robe:'#8d795e'});
  return;
 }
 // Remaining courtyard scenes still include an animated human presence.
 woman(W*.65,ground,s,'look');
}
function setupVoice(p){
 const read=document.getElementById('readButton'),stop=document.getElementById('stopButton'),select=document.getElementById('voiceSelect'),note=document.getElementById('voiceNote');
 if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){read.disabled=true;select.disabled=true;note.textContent='此瀏覽器未提供語音朗讀功能。';return;}
 let voices=[];
 const loadVoices=()=>{voices=speechSynthesis.getVoices().filter(v=>/^zh(-|_)/i.test(v.lang)||/Chinese|中文|國語|普通話/i.test(v.name));const old=select.value;select.innerHTML='<option value="">系統中文語音</option>'+voices.map((v,i)=>`<option value="${i}">${esc(v.name)} · ${esc(v.lang)}</option>`).join('');if(old&&Number(old)<voices.length)select.value=old;};
 loadVoices();speechSynthesis.onvoiceschanged=loadVoices;
 note.textContent='朗讀使用裝置內建語音合成（非預錄人聲）；可依裝置選擇中文音色。';
 let current=0;
 read.addEventListener('click',()=>{speechSynthesis.cancel();current=0;read.disabled=true;stop.disabled=false;function speakNext(){if(current>=p.stanzas.length){read.disabled=false;stop.disabled=true;return;}const utterance=new SpeechSynthesisUtterance(p.stanzas[current][0]);utterance.lang=voices[Number(select.value)]?.lang||'zh-TW';utterance.rate=.86;utterance.pitch=1;const chosen=voices[Number(select.value)];if(chosen)utterance.voice=chosen;utterance.onend=()=>{current++;setTimeout(speakNext,420)};utterance.onerror=()=>{read.disabled=false;stop.disabled=true;note.textContent='網頁朗讀遇到問題；請確認裝置已安裝中文語音。';};speechSynthesis.speak(utterance);}speakNext();});
 stop.addEventListener('click',()=>{speechSynthesis.cancel();read.disabled=false;stop.disabled=true;});
}
function setupAnimation(p){
 const canvas=document.getElementById('sceneCanvas'),ctx=canvas.getContext('2d'),stage=document.querySelector('.animation-stage'),toggle=document.getElementById('animationToggle'),overlay=document.getElementById('videoPlayButton'),audioToggle=document.getElementById('animationAudioToggle'),label=document.getElementById('stageLabel');
 if(!ctx)return;const narrationFrame=document.createElement('iframe');narrationFrame.setAttribute('aria-hidden','true');narrationFrame.title='獨立的動畫配音語音通道';narrationFrame.style.cssText='position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;border:0';stage.appendChild(narrationFrame);const videoSynthesis=narrationFrame.contentWindow.speechSynthesis,VideoUtterance=narrationFrame.contentWindow.SpeechSynthesisUtterance;let width=stage.clientWidth,height=stage.clientHeight,lastWidth=0,lastHeight=0,dpr=1,playing=false,started=false,finished=false,soundOn=true,start=performance.now(),elapsed=0,currentStanza=0,previousShot=-1,transitionStarted=0,silentTimer=null,silentDeadline=0,silentRemaining=0;videoSpeechController={cancel:()=>{videoSynthesis?.cancel();if(silentTimer){clearTimeout(silentTimer);silentTimer=null;}}};
 const transitionCanvas=document.createElement('canvas'),transitionCtx=transitionCanvas.getContext('2d');
 const resize=()=>{const rect=stage.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,2);width=rect.width;height=rect.height;if(width===lastWidth&&height===lastHeight)return;lastWidth=width;lastHeight=height;canvas.width=Math.max(1,Math.round(width*dpr));canvas.height=Math.max(1,Math.round(height*dpr));transitionCanvas.width=canvas.width;transitionCanvas.height=canvas.height;ctx.setTransform(dpr,0,0,dpr,0,0);};
 resize();if('ResizeObserver' in window){animationResize=new ResizeObserver(()=>{resize();if(!playing)draw(performance.now())});animationResize.observe(stage);}else window.addEventListener('resize',resize,{passive:true});
 const seed=(n)=>{let x=Math.sin(n*78.233+poems.indexOf(p)*19.17)*43758.5453;return x-Math.floor(x)};
 const shotMap={rain:['rain','intimate','moon','garden'],boudoir:['boudoir','garden','intimate','moon'],moon:['moon','night','river','mist'],separation:['separation','mist','river','night'],farewell:['farewell','willow','river','autumn'],river:['river','battle','mountain','moon'],autumn:['autumn','mist','mountain','night'],spring:['spring','garden','petals','river'],garden:['garden','spring','rain','petals'],night:['night','moon','mist','river'],petals:['petals','spring','river','autumn'],mist:['mist','farewell','mountain','night'],stars:['stars','night','moon','river'],willow:['willow','farewell','river','spring'],lotus:['lotus','river','spring','mist'],intimate:['intimate','boudoir','moon','night'],border:['border','battle','mountain','river'],battle:['battle','border','river','mountain'],lanterns:['lanterns','intimate','moon','garden'],mountain:['mountain','river','spring','mist']};
 const shots=shotMap[p.scene]||[p.scene,'moon','river','garden'];
 const setCaption=(id,text)=>{const el=document.getElementById(id);el.textContent=text;el.classList.remove('caption-scroll');el.style.removeProperty('--caption-shift');el.style.removeProperty('--caption-duration');requestAnimationFrame(()=>{const distance=Math.max(0,el.scrollWidth-el.parentElement.clientWidth);if(distance){el.style.setProperty('--caption-shift',-distance+'px');el.style.setProperty('--caption-duration',Math.max(7,distance/95)+'s');el.classList.add('caption-scroll');}});};
 const showStanza=i=>{setCaption('captionOriginal',p.stanzas[i][0]);setCaption('captionTranslation',p.stanzas[i][1]);const status=document.getElementById('animationStatus');if(status)status.textContent='正在朗讀第 '+(i+1)+' 段 · 中文字幕同步顯示';};
 setCaption('captionOriginal',p.stanzas[0][0]);setCaption('captionTranslation',p.stanzas[0][1]);
 const showShot=i=>{label.textContent='ANIMATED POEM · '+(sceneNames[i]||'詞境').toUpperCase();};
 const draw=(now)=>{if(!document.body.contains(canvas))return;resize();const t=playing?Math.max(0,(now-start)/1000):elapsed,W=width,H=height,shotIndex=Math.floor(t/7.2)%shots.length,scene=shots[shotIndex],activePoem=scene===p.scene?p:{...p,scene},palette=sceneColors[scene]||sceneColors.moon;if(shotIndex!==previousShot){if(previousShot>=0){transitionCtx.setTransform(1,0,0,1,0,0);transitionCtx.clearRect(0,0,transitionCanvas.width,transitionCanvas.height);transitionCtx.drawImage(canvas,0,0);transitionStarted=now;}previousShot=shotIndex;showShot(scene);}ctx.clearRect(0,0,W,H);ctx.save();ctx.translate(Math.sin(t*.13)*W*.018,Math.sin(t*.17)*H*.007);
  const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,palette[0]);sky.addColorStop(.57,palette[1]);sky.addColorStop(1,palette[2]);ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
  const night=['night','moon','stars','rain','autumn','farewell','intimate','lanterns','mist','boudoir'].includes(scene);
  if(night||scene==='river'){for(let i=0;i<48;i++){const x=seed(i)*W,y=seed(i+77)*H*.55,twinkle=.22+.6*(.5+.5*Math.sin(t*(.7+seed(i+90)*1.2)+i));ctx.fillStyle=`rgba(255,238,202,${twinkle*.72})`;ctx.beginPath();ctx.arc(x,y,seed(i+9)*1.35+.35,0,Math.PI*2);ctx.fill();}}
  const moonX=W*(scene==='night'?.71:.78)+Math.sin(t*.08)*8,moonY=H*(scene==='battle'?.40:.23),moonR=Math.min(W,H)*.068;
  if(night||['stars','river','lanterns'].includes(scene)){const glow=ctx.createRadialGradient(moonX,moonY,2,moonX,moonY,moonR*3.5);glow.addColorStop(0,'rgba(255,226,173,.25)');glow.addColorStop(1,'rgba(255,226,173,0)');ctx.fillStyle=glow;ctx.fillRect(moonX-moonR*4,moonY-moonR*4,moonR*8,moonR*8);ctx.fillStyle='#f0dcb3';ctx.beginPath();ctx.arc(moonX,moonY,moonR,0,Math.PI*2);ctx.fill();if(scene==='moon'){ctx.fillStyle='rgba(125,107,109,.18)';ctx.beginPath();ctx.arc(moonX+moonR*.28,moonY-moonR*.08,moonR*.76,0,Math.PI*2);ctx.fill();}}
  if(['battle','autumn','spring','lotus'].includes(scene)){const sx=W*(scene==='battle'?.66:.17),sy=H*(scene==='battle'?.48:.32),r=Math.min(W,H)*.055;const sg=ctx.createRadialGradient(sx,sy,1,sx,sy,r*3);sg.addColorStop(0,'rgba(255,220,161,.3)');sg.addColorStop(1,'rgba(255,220,161,0)');ctx.fillStyle=sg;ctx.fillRect(sx-r*3,sy-r*3,r*6,r*6);ctx.fillStyle=scene==='battle'?'#e5ad72':'#ead0a1';ctx.beginPath();ctx.arc(sx,sy,r,0,Math.PI*2);ctx.fill();}
  // drifting clouds
  for(let i=0;i<4;i++){const x=((seed(i+240)*W+t*(5+i*2))%(W+180))-80,y=H*(.2+seed(i+250)*.28);ctx.fillStyle=`rgba(232,222,194,${.035+seed(i+230)*.035})`;ctx.beginPath();ctx.ellipse(x,y,70+seed(i+2)*42,8+seed(i+3)*8,-.04,0,Math.PI*2);ctx.fill();}
  const hill=(base,color,amp,phase)=>{ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(0,H*base);for(let x=0;x<=W;x+=12){let y=H*base-Math.sin(x/W*Math.PI*2+phase)*H*amp-Math.sin(x/W*Math.PI*4+phase*.7)*H*amp*.3;ctx.lineTo(x,y);}ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fill();};
  hill(.62,'rgba(25,43,47,.34)',.10,.9);hill(.69,'rgba(27,48,48,.55)',.06,2.3);
  const waterY=H*.67,waterScenes=['moon','night','river','farewell','willow','lotus','mist','stars'];if(waterScenes.includes(scene)){const water=ctx.createLinearGradient(0,waterY,0,H);water.addColorStop(0,'rgba(31,64,71,.32)');water.addColorStop(1,'rgba(12,32,40,.8)');ctx.fillStyle=water;ctx.fillRect(0,waterY,W,H-waterY);for(let j=0;j<15;j++){const y=waterY+8+j*(H-waterY-15)/15,x0=((t*(9+j*.8)+j*73)%(W+180))-90,len=18+seed(j+50)*90;ctx.strokeStyle=`rgba(232,205,158,${.05+seed(j+91)*.13})`;ctx.lineWidth=.7+seed(j+78);ctx.beginPath();ctx.moveTo(x0,y);ctx.quadraticCurveTo(x0+len*.5,y+Math.sin(t+j)*2,x0+len,y);ctx.stroke();}}else{const earth=ctx.createLinearGradient(0,H*.58,0,H);earth.addColorStop(0,'rgba(91,94,68,.82)');earth.addColorStop(1,'rgba(34,42,36,.96)');ctx.fillStyle=earth;ctx.fillRect(0,H*.61,W,H*.39);ctx.fillStyle='rgba(213,179,128,.14)';ctx.beginPath();ctx.moveTo(W*.32,H);ctx.quadraticCurveTo(W*.52,H*.75,W*.71,H*.66);ctx.lineTo(W*.83,H*.66);ctx.quadraticCurveTo(W*.59,H*.8,W*.47,H);ctx.closePath();ctx.fill();}
  // water shimmer / moon reflection
  if(waterScenes.includes(scene)&&(night||scene==='river')){ctx.save();ctx.globalCompositeOperation='screen';for(let i=0;i<17;i++){let y=waterY+15+i*7,x=moonX+Math.sin(t*1.4+i)*Math.min(i*3,W*.08);ctx.fillStyle=`rgba(244,213,160,${.05+seed(i+333)*.09})`;ctx.fillRect(x-(10+i*2),y,20+i*4,1.2);}ctx.restore();}
  if(scene==='willow'||scene==='garden'||scene==='boudoir'){ctx.strokeStyle='rgba(21,38,35,.66)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(W*.94,0);ctx.quadraticCurveTo(W*.7,H*.06,W*.74,H*.25);ctx.stroke();for(let i=0;i<11;i++){let bx=W*(.69+seed(i+20)*.3),by=H*(.08+seed(i+40)*.23),s=H*(.15+seed(i+60)*.12);ctx.strokeStyle='rgba(48,75,59,.6)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(bx,by);ctx.quadraticCurveTo(bx-15,by+s*.6+Math.sin(t+i)*5,bx-10+seed(i+80)*20,by+s);ctx.stroke();for(let k=0;k<4;k++){const yy=by+s*(.35+k*.14);ctx.fillStyle='rgba(149,157,111,.28)';ctx.beginPath();ctx.ellipse(bx-9,yy,3,8,-.4,0,Math.PI*2);ctx.fill();}}}
  if(scene==='lotus'){for(let i=0;i<7;i++){const x=W*(.08+i*.145),y=waterY+22+seed(i+4)*42;ctx.fillStyle='rgba(95,133,95,.5)';ctx.beginPath();ctx.ellipse(x,y,24,8,Math.sin(t+i)*.1,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(70,114,85,.6)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+Math.sin(t+i)*6,y-23,x+Math.sin(t+i)*9,y-40);ctx.stroke();if(i%2===0){ctx.fillStyle='rgba(234,193,173,.72)';ctx.beginPath();ctx.ellipse(x+Math.sin(t+i)*9,y-43,7,14,.1,0,Math.PI*2);ctx.fill();}}}
  if(scene==='battle'){// fortress and watch banners
   ctx.fillStyle='rgba(31,35,34,.68)';ctx.fillRect(0,H*.59,W*.25,H*.13);ctx.fillRect(W*.75,H*.58,W*.25,H*.14);for(let i=0;i<8;i++){const x=W*(.025+i*.031);ctx.fillRect(x,H*.55,7,H*.04);}for(let i=0;i<5;i++){const x=W*(.8+i*.045),phase=Math.sin(t*2+i)*5;ctx.strokeStyle='rgba(30,34,32,.8)';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(x,H*.58);ctx.lineTo(x,H*.39);ctx.stroke();ctx.fillStyle='#a84936';ctx.beginPath();ctx.moveTo(x,H*.4);ctx.quadraticCurveTo(x+19+phase,H*.42,x+2,H*.47);ctx.closePath();ctx.fill();}}
  if(scene==='lanterns'||scene==='intimate'||scene==='garden'){for(let i=0;i<(scene==='lanterns'?10:3);i++){const x=W*(.08+seed(i+500)*.84),y=H*(.2+seed(i+540)*.34)+Math.sin(t*1.5+i)*3,r=scene==='lanterns'?8:6;ctx.strokeStyle='rgba(46,37,31,.55)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y-r*2);ctx.lineTo(x,y-r);ctx.stroke();ctx.fillStyle=scene==='lanterns'?'rgba(244,171,76,.85)':'rgba(208,143,83,.65)';ctx.beginPath();ctx.rect(x-r,y-r,r*2,r*2.5);ctx.fill();const lg=ctx.createRadialGradient(x,y,r,x,y,r*5);lg.addColorStop(0,'rgba(255,190,96,.22)');lg.addColorStop(1,'rgba(255,190,96,0)');ctx.fillStyle=lg;ctx.fillRect(x-r*5,y-r*5,r*10,r*10);}}
  if(scene==='farewell'||scene==='river'){const x=W*(scene==='farewell'?.28:.52)+Math.sin(t*.32)*W*.035,y=waterY+21;ctx.fillStyle='rgba(20,33,37,.77)';ctx.beginPath();ctx.moveTo(x-50,y);ctx.quadraticCurveTo(x,y+12,x+56,y);ctx.lineTo(x+40,y+8);ctx.lineTo(x-40,y+8);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(29,39,40,.75)';ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,H*.44);ctx.stroke();ctx.fillStyle='rgba(220,190,145,.38)';ctx.beginPath();ctx.moveTo(x+2,H*.45);ctx.lineTo(x+33,H*.64);ctx.lineTo(x+4,H*.61);ctx.closePath();ctx.fill();}
  if(scene==='stars'){ctx.strokeStyle='rgba(230,210,166,.35)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(W*.08,H*.4);ctx.quadraticCurveTo(W*.5,H*.49,W*.92,H*.4);ctx.stroke();for(let i=0;i<12;i++){let x=W*(.15+i*.065),y=H*(.43+Math.sin(i*.7)*.015);ctx.fillStyle='rgba(240,222,180,.75)';ctx.beginPath();ctx.arc(x,y,1.3,0,Math.PI*2);ctx.fill();}}
  // rain, blossoms, leaves, and fireflies
  if(scene==='rain'){ctx.strokeStyle='rgba(191,210,218,.28)';ctx.lineWidth=1;for(let i=0;i<95;i++){let x=(seed(i+700)*W+t*(38+seed(i+710)*27))%W,y=(seed(i+720)*H+t*(120+seed(i+730)*80))%H;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-5,y+13);ctx.stroke();}}
  if(['petals','spring','autumn','willow'].includes(scene)){for(let i=0;i<35;i++){let x=(seed(i+800)*W+t*(scene==='autumn'?-9:10)+seed(i+810)*80)%W,y=(seed(i+820)*H+t*(9+seed(i+830)*18))%H,rot=t*(.45+seed(i+840)) + i;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.fillStyle=scene==='autumn'?'rgba(204,139,77,.64)':scene==='willow'?'rgba(169,187,128,.52)':'rgba(231,177,165,.72)';ctx.beginPath();ctx.ellipse(0,0,3.2,6,0,0,Math.PI*2);ctx.fill();ctx.restore();}}
  if(scene==='mist'){ctx.fillStyle='rgba(232,232,215,.11)';for(let i=0;i<4;i++){let x=((t*(8+i*2)+i*W*.31)%(W+220))-110;ctx.beginPath();ctx.ellipse(x,H*(.56+i*.045),W*.21,12+i*3,0,0,Math.PI*2);ctx.fill();}}
  if(scene==='mountain'){for(let i=0;i<8;i++){const x=W*(.05+i*.13),y=H*(.64+seed(i+901)*.1);ctx.fillStyle='rgba(20,38,36,.65)';ctx.beginPath();ctx.moveTo(x-17,y+30);ctx.lineTo(x,y-22-seed(i)*20);ctx.lineTo(x+17,y+30);ctx.closePath();ctx.fill();}}
  // Character-led scenes turn the moving scenery into short cartoon narratives.
  drawCartoonStory(ctx,activePoem,t,W,H);
  ctx.restore();
  // subtle frame vignette and edge texture
  const vg=ctx.createRadialGradient(W*.5,H*.48,Math.min(W,H)*.15,W*.5,H*.48,Math.max(W,H)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(8,13,16,.38)');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  const dissolve=Math.min(1,(now-transitionStarted)/900);if(previousShot>0&&dissolve<1){ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1-dissolve;ctx.drawImage(transitionCanvas,0,0,canvas.width,canvas.height);ctx.restore();}
  if(playing)animationFrame=requestAnimationFrame(draw);
 };
 const startLoop=()=>{if(animationFrame)cancelAnimationFrame(animationFrame);animationFrame=requestAnimationFrame(draw)};
 const stopSilentTimer=preserve=>{if(silentTimer){clearTimeout(silentTimer);silentTimer=null;if(preserve)silentRemaining=Math.max(0,silentDeadline-performance.now());}};
 const silentDuration=i=>Math.max(3500,Array.from(p.stanzas[i][0]).length*180);
 const scheduleSilent=(i,delay=silentDuration(i))=>{stopSilentTimer();silentRemaining=delay;silentDeadline=performance.now()+delay;silentTimer=setTimeout(()=>{silentTimer=null;if(playing&&!soundOn)beginStanza(i+1);},delay);};
 const speakStanza=()=>{if(!playing||!soundOn)return;videoSynthesis.cancel();const utterance=new VideoUtterance(p.stanzas[currentStanza][0]);utterance.lang='zh-TW';utterance.rate=.92;utterance.pitch=1;const voices=videoSynthesis.getVoices(),voice=voices.find(v=>/^zh-TW/i.test(v.lang))||voices.find(v=>/^zh/i.test(v.lang));if(voice)utterance.voice=voice;utterance.onend=()=>{if(playing&&soundOn)beginStanza(currentStanza+1);};utterance.onerror=()=>{if(playing&&soundOn)scheduleSilent(currentStanza);};videoSynthesis.speak(utterance);};
 const beginStanza=i=>{if(i>=p.stanzas.length){finished=true;pause();return;}currentStanza=i;showStanza(i);if(soundOn)speakStanza();else scheduleSilent(i);};
 const syncPlayer=()=>{toggle.textContent=playing?'Ⅱ　暫停動畫':'▷　播放動畫';overlay.hidden=playing;};
 const play=()=>{if(playing)return;const replay=finished;if(replay){finished=false;elapsed=0;previousShot=-1;currentStanza=0;stopSilentTimer();silentRemaining=0;showStanza(0);videoSynthesis.cancel();}playing=true;start=performance.now()-elapsed*1000;syncPlayer();startLoop();if(!started||replay){started=true;beginStanza(0);}else if(soundOn){videoSynthesis.resume();}else{scheduleSilent(currentStanza,silentRemaining||silentDuration(currentStanza));}};
 const pause=()=>{if(!playing)return;elapsed=Math.max(0,(performance.now()-start)/1000);playing=false;stopSilentTimer(true);videoSynthesis.pause();if(animationFrame)cancelAnimationFrame(animationFrame);animationFrame=null;draw(performance.now());syncPlayer();};
 const togglePlayer=()=>playing?pause():play();
 audioToggle.addEventListener('click',()=>{soundOn=!soundOn;audioToggle.setAttribute('aria-pressed',String(soundOn));audioToggle.textContent=soundOn?'🔊　影片配音：開':'🔇　影片配音：關';if(soundOn){stopSilentTimer();silentRemaining=0;if(playing)speakStanza();}else{videoSynthesis.cancel();scheduleSilent(currentStanza);}});
 syncPlayer();draw(performance.now());
 toggle.addEventListener('click',togglePlayer);overlay.addEventListener('click',togglePlayer);
}
// A restrained synthesized ambient drone, started only after the visitor opts in.
let audioContext=null,ambientNodes=[];
document.getElementById('soundToggle')?.addEventListener('click',async event=>{
 const button=event.currentTarget,enabled=button.getAttribute('aria-pressed')==='true';
 if(enabled){ambientNodes.forEach(n=>{try{n.stop?.();n.disconnect?.()}catch{}});ambientNodes=[];button.setAttribute('aria-pressed','false');button.title='環境音效：關閉';button.querySelector('.sound-label').textContent='靜聽';return;}
 try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();await audioContext.resume();const gain=audioContext.createGain();gain.gain.value=.012;gain.connect(audioContext.destination);[110,164.81,220].forEach((freq,i)=>{const o=audioContext.createOscillator(),g=audioContext.createGain();o.type='sine';o.frequency.value=freq;g.gain.value=i===0?.4:.18;o.connect(g);g.connect(gain);o.start();ambientNodes.push(o,g);});ambientNodes.push(gain);button.setAttribute('aria-pressed','true');button.title='環境音效：開啟（再按一次關閉）';button.querySelector('.sound-label').textContent='止音';}catch{button.title='此瀏覽器不支援環境音效';}
});
