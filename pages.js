/* Nuan Retreat — inner pages (dining, spa, experiences, weddings, gallery, contact).
   Each page is described as data in TH/EN and drawn by renderPage(id). */
const LINE_URL="https://line.me/";
const hero=(img,crumb,h,lead)=>`<section class="ph"><img src="${U(img,2000)}" alt="" fetchpriority="high"><div class="wrap"><p class="crumb"><a href="index.html">${t().nav.home}</a> / ${crumb}</p><h1>${h}</h1><p class="lead">${lead}</p></div></section>`;
const rows=a=>`<ul class="rows">${a.map(r=>`<li><span>${r[0]}</span><span>${r[1]}</span></li>`).join("")}</ul>`;
const fig=(id,w,cls="")=>`<figure class="${cls}"><img loading="lazy" src="${U(id,w)}" alt=""></figure>`;
const lineBtn=(label,cls="btn")=>`<a class="${cls}" href="${LINE_URL}" target="_blank" rel="noopener">${label}</a>`;
const head=(h,lead,c="")=>`<div class="sh ${c}"><div${c?' style="margin:0 auto"':""}><span class="mark"></span><h2>${h}</h2>${lead?`<p class="lead">${lead}</p>`:""}</div></div>`;

const IMG={dinner:"photo-1760533536461-714a23877e2d",dish:"photo-1674216645383-afc4e42c227f",table:"photo-1679541946014-a47f1ec0dc1a",fish:"photo-1533959938354-70634c231c21",noodle:"photo-1717072355019-7d993397d0a4",cocktail:"photo-1681579289916-af960b852352",roof:"photo-1753032507946-14ad6832b102",bf:"photo-1568853810078-71e3a4868f61",juice:"photo-1650201777491-c5baae006026",
 spa1:"photo-1600334089648-b0d9d3028eb2",spa2:"photo-1712725213051-8d7d6a52edaf",spa3:"photo-1787651343620-8d5303006ecb",spa4:"photo-1600334129128-685c5582fd35",
 islands:"photo-1483683804023-6ccdb62f86ef",railay:"photo-1648648777033-c833d650aea7",kayak:"photo-1516750445633-f290238745d2",cook:"photo-1794930590840-c8eae6ea25b6",longtail:"photo-1708820760437-5a5020e8e50d",boats:"photo-1504214208698-ea1916a2195a",rock:"photo-1520961810802-7f0a32de665a",sunset:"photo-1722483537725-3807a1bb78c7",
 wed:"photo-1718152219044-edc915854e70",pool:"photo-1511265753106-52a8e3488b70",path:"photo-1762425430465-0d9f08d64147",lobby:"photo-1596436891234-ab1fbd9353e5",poolroom:"photo-1669741043336-36eb9c3db071",
 garden:"photo-1750271334785-4f6008035021",deluxe:"photo-1617325247661-675ab4b64ae2",suite:"photo-1729606188713-814d1b7bf893"};

const PG={
dining:{th:{
  h:"กินริมทะเล ดื่มบนดาดฟ้า",lead:"ห้องอาหาร Talay เสิร์ฟอาหารใต้และซีฟู้ดจากเรือประมงอ่าวนางทุกเช้า ส่วน Roof Bar คือที่นั่งที่ดีที่สุดสำหรับดูพระอาทิตย์ตก",
  t1:"Talay",p1:"ห้องอาหารเปิดโล่งริมสวน โต๊ะไม้ใต้ร่มลีลาวดี เมนูเปลี่ยนตามปลาที่ขึ้นจากเรือในเช้าวันนั้น พร้อมแกงใต้สูตรบ้านของเชฟที่เติบโตในกระบี่",
  r1:[["อาหารเช้า","07:00–11:00"],["อาหารกลางวันและค่ำ","12:00–22:00"],["การแต่งกาย","สบายๆ แบบรีสอร์ต"]],
  dH:"จานที่แขกสั่งซ้ำ",dL:"ราคาเป็นตัวอย่าง รวมภาษีและค่าบริการแล้ว",
  dishes:[[IMG.fish,"ปลากะพงทอดน้ำปลา","ปลาทั้งตัวจากท่าเรือ ราดน้ำปลาหวาน แกล้มมะม่วงเปรี้ยว","680 บาท"],[IMG.noodle,"หมี่ผัดกุ้งแม่น้ำ","เส้นหมี่ผัดกระทะร้อน กุ้งตัวโต และพริกเผาสูตรบ้าน","420 บาท"],[IMG.table,"สำรับใต้สำหรับสองท่าน","แกงไตปลา ผัดสะตอ ไข่เจียวปู และผักเหนาะ","1,250 บาท"]],
  t2:"Roof Bar",p2:"ดาดฟ้าบนสุดของนวล มองเห็นเกาะปอดะและผาหินปูน ค็อกเทลใช้สมุนไพรไทย เช่น อัญชัน ตะไคร้ และมะกรูด ดีเจเปิดเพลงเบาๆ ทุกคืนวันศุกร์",
  r2:[["เปิดทุกวัน","17:00–23:00"],["ซันเซ็ตอาวร์","17:00–18:30 ซื้อ 1 แถม 1"],["Butterfly Pea Sour","320 บาท"],["Lemongrass Mule","300 บาท"]],
  t3:"ดินเนอร์ส่วนตัวริมหาด",p3:"โต๊ะสำหรับคุณบนผืนทราย ใต้ไฟสายและแสงเทียน เมนูห้าคอร์สที่เชฟออกแบบให้ พร้อมพนักงานดูแลเฉพาะโต๊ะ เหมาะกับวันครบรอบหรือคืนขอแต่งงาน",
  r3:[["สำหรับสองท่าน","4,900 บาท"],["เพิ่มไวน์คู่เมนู","1,600 บาท"],["จองล่วงหน้า","อย่างน้อย 1 วัน"]],b1:"จองโต๊ะทาง LINE",b3:"จองดินเนอร์ริมหาด"},
 en:{h:"Eat by the sea, drink on the roof",lead:"Talay serves southern Thai food and seafood from Ao Nang's boats every morning. The Roof Bar is the best seat for sunset.",
  t1:"Talay",p1:"An open-air dining room by the garden, wooden tables under frangipani. The menu follows whatever came off the boats that morning, alongside the family curries of a chef who grew up in Krabi.",
  r1:[["Breakfast","07:00–11:00"],["Lunch and dinner","12:00–22:00"],["Dress","Relaxed resort wear"]],
  dH:"Dishes guests order again",dL:"Sample prices, tax and service included",
  dishes:[[IMG.fish,"Sea bass in fish sauce","A whole fish from the pier, sweet fish sauce and sour green mango","680 THB"],[IMG.noodle,"Wok-fried noodles with river prawns","Rice noodles from a hot wok, big prawns and house chilli jam","420 THB"],[IMG.table,"Southern set for two","Fish-kidney curry, stink beans, crab omelette and fresh herbs","1,250 THB"]],
  t2:"Roof Bar",p2:"Nuan's rooftop looks over Koh Poda and the limestone cliffs. Cocktails use Thai herbs like butterfly pea, lemongrass and kaffir lime, with a DJ playing quietly on Friday nights.",
  r2:[["Open daily","17:00–23:00"],["Sunset hour","17:00–18:30, two for one"],["Butterfly Pea Sour","320 THB"],["Lemongrass Mule","300 THB"]],
  t3:"Private dinner on the beach",p3:"A table on the sand for the two of you, under string lights and candles. Five courses designed by the chef, with your own server. Made for anniversaries and proposals.",
  r3:[["For two","4,900 THB"],["Paired wines","1,600 THB"],["Book ahead","At least one day"]],b1:"Book a table on LINE",b3:"Book a beach dinner"},
 img:IMG.dinner,
 draw:c=>`${hero(IMG.dinner,t().nav.dining,c.h,c.lead)}
 <section class="sec"><div class="wrap split rv"><div class="pics">${fig(IMG.dish,1100)}${fig(IMG.bf,600)}</div><div><span class="mark"></span><h2>${c.t1}</h2><p class="lead" style="margin-top:18px">${c.p1}</p>${rows(c.r1)}${lineBtn(c.b1)}</div></div></section>
 <section class="sec stoneb"><div class="wrap">${head(c.dH,c.dL)}<div class="card3">${c.dishes.map(d=>`<article class="xc rv">${fig(d[0],900)}<p class="meta">${d[3]}</p><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join("")}</div></div></section>
 <section class="sec dark"><div class="wrap split flip rv"><div class="pics">${fig(IMG.roof,1100)}${fig(IMG.cocktail,600)}</div><div><span class="mark"></span><h2>${c.t2}</h2><p class="lead" style="margin-top:18px">${c.p2}</p>${rows(c.r2)}</div></div></section>
 <section class="sec"><div class="wrap split rv">${fig(IMG.sunset,1200)}<div><span class="mark"></span><h2>${c.t3}</h2><p class="lead" style="margin-top:18px">${c.p3}</p>${rows(c.r3)}${lineBtn(c.b3,"btn gold")}</div></div></section>`},

spa:{th:{h:"นวดไทยในศาลาริมสวน",lead:"ทรีตเมนต์ใช้สมุนไพรไทยและน้ำมันมะพร้าวจากกระบี่ ทำโดยหมอนวดที่มีประสบการณ์กว่าสิบปี ในศาลาที่เปิดออกสู่สวนเงียบๆ",
  q:"ช่วงเวลาที่ดีที่สุดของวัน คือบ่ายสามโมงในศาลา ฟังเสียงใบไม้ และไม่ต้องรีบไปไหน",
  mH:"เมนูทรีตเมนต์",mL:"ราคาต่อท่าน รวมชาสมุนไพรและเวลาพักหลังนวด",
  groups:[["นวด",[["นวดไทยแผนโบราณ 60 นาที","1,200 บาท"],["นวดน้ำมันอโรมา 90 นาที","1,800 บาท"],["นวดหินร้อน 90 นาที","2,200 บาท"],["นวดเท้า 45 นาที","700 บาท"]]],["ทรีตเมนต์",[["ประคบสมุนไพร 90 นาที","1,900 บาท"],["ขัดผิวมะพร้าวและขมิ้น 60 นาที","1,500 บาท"],["พอกผิวหลังโดนแดด 45 นาที","1,100 บาท"]]],["แพ็กเกจ",[["สปาคู่ 120 นาที","4,200 บาท"],["ครึ่งวันที่นวล 3 ชั่วโมง","3,900 บาท"],["คุณแม่ตั้งครรภ์ 60 นาที","1,500 บาท"]]]],
  t2:"ก่อนมาสปา",r2:[["เปิดทุกวัน","10:00–21:00"],["จองล่วงหน้า","อย่างน้อย 3 ชั่วโมง"],["ยกเลิกฟรี","ก่อน 2 ชั่วโมง"],["แขกนอกรีสอร์ต","ยินดีต้อนรับ"]],p2:"มาถึงก่อนเวลาสัก 15 นาที เพื่อดื่มชาและเลือกน้ำมันที่ชอบ แจ้งเราได้เลยถ้ามีอาการบาดเจ็บหรือตั้งครรภ์",b:"จองสปาทาง LINE"},
 en:{h:"Thai massage in a garden pavilion",lead:"Treatments use Thai herbs and Krabi coconut oil, given by therapists with more than ten years' experience, in pavilions that open onto a quiet garden.",
  q:"The best hour of the day is three in the afternoon in the pavilion, listening to the leaves with nowhere to be.",
  mH:"Treatment menu",mL:"Per person, including herbal tea and time to rest afterwards",
  groups:[["Massage",[["Traditional Thai, 60 min","1,200 THB"],["Aroma oil, 90 min","1,800 THB"],["Hot stone, 90 min","2,200 THB"],["Foot massage, 45 min","700 THB"]]],["Treatments",[["Herbal compress, 90 min","1,900 THB"],["Coconut & turmeric scrub, 60 min","1,500 THB"],["After-sun wrap, 45 min","1,100 THB"]]],["Packages",[["Couples' spa, 120 min","4,200 THB"],["Half a day at Nuan, 3 hours","3,900 THB"],["Pregnancy massage, 60 min","1,500 THB"]]]],
  t2:"Before you come",r2:[["Open daily","10:00–21:00"],["Book ahead","At least 3 hours"],["Free cancellation","Up to 2 hours before"],["Outside guests","Welcome"]],p2:"Arrive 15 minutes early for tea and to choose your oil. Let us know about any injuries or a pregnancy.",b:"Book the spa on LINE"},
 draw:c=>`${hero(IMG.spa1,t().nav.spa,c.h,c.lead)}
 <section class="sec tight dark"><div class="wrap center rv"><span class="mark"></span><p class="quote">${c.q}</p></div></section>
 <section class="sec"><div class="wrap">${head(c.mH,c.mL)}<div class="card3">${c.groups.map(g=>`<div class="rv"><h3 style="margin-bottom:18px">${g[0]}</h3>${rows(g[1])}</div>`).join("")}</div></div></section>
 <section class="sec stoneb"><div class="wrap split rv"><div class="pics">${fig(IMG.spa2,1100)}${fig(IMG.spa4,600)}</div><div><span class="mark"></span><h2>${c.t2}</h2><p class="lead" style="margin-top:18px">${c.p2}</p>${rows(c.r2)}${lineBtn(c.b,"btn gold")}</div></div></section>`},

experiences:{th:{h:"ออกไปเจออันดามัน",lead:"ทีมงานของเราจองเรือ นัดรถ และเลือกคนนำทางที่ไว้ใจได้ให้ คุณแค่บอกว่าอยากทำอะไร",
  cH:"ทริปที่แขกชอบที่สุด",cL:"ราคาต่อท่าน รวมรถรับส่งจากรีสอร์ต",
  list:[[IMG.islands,"ทัวร์ 4 เกาะ","ครึ่งวัน · เรือหางยาว","ทะเลแหวก เกาะไก่ เกาะปอดะ และถ้ำพระนาง ไปเช้าก่อนเรือทัวร์ใหญ่","1,400 บาท"],[IMG.railay,"ไร่เลย์และถ้ำพระนาง","ตามใจคุณ · 15 นาทีด้วยเรือ","ปีนผากับไกด์ที่มีใบรับรอง หรือเดินเล่นริมหาดที่ไปได้ทางเรือเท่านั้น","ค่าเรือ 200 บาท"],[IMG.kayak,"พายคายัคอ่าวท่าเลน","ครึ่งวัน · เหมาะกับมือใหม่","พายลอดป่าโกงกางและหน้าผาหินปูน ช่วงน้ำขึ้นเงียบที่สุด","1,600 บาท"],[IMG.cook,"เรียนทำอาหารใต้","3 ชั่วโมง · กับเชฟของ Talay","เดินตลาดเช้ากับเชฟ แล้วทำแกง 3 อย่างกลับไปทำที่บ้านได้","2,200 บาท"],[IMG.longtail,"ล่องเรือดูพระอาทิตย์ตก","2 ชั่วโมง · เรือส่วนตัว","เรือหางยาวลำเล็กสำหรับคุณ พร้อมเครื่องดื่มและผลไม้บนเรือ","3,500 บาท ต่อลำ"],[IMG.rock,"เกาะห้อง","เต็มวัน · สปีดโบ๊ท","ลากูนน้ำเขียวใสล้อมด้วยหน้าผา ดำน้ำตื้นและแวะชายหาดลับ","2,600 บาท"]],
  sH:"จองทริปได้ใน 3 ขั้นตอน",steps:[["บอกเราทาง LINE","วันที่อยากไป และจำนวนคน"],["เรายืนยันและนัดรับ","ส่งเวลารับหน้ารีสอร์ตให้ภายในหนึ่งชั่วโมง"],["จ่ายตอนกลับมา","ลงบิลห้องพักได้ ไม่ต้องจ่ายล่วงหน้า"]],b:"วางแผนทริปทาง LINE"},
 en:{h:"Go out and meet the Andaman",lead:"Our team books the boat, the car and a guide we trust. Just tell us what you'd like to do.",
  cH:"Guests' favourite trips",cL:"Per person, including transfers from the resort",
  list:[[IMG.islands,"Four islands","Half day · longtail","Talay Waek, Chicken Island, Koh Poda and Phra Nang Cave, leaving before the big tour boats","1,400 THB"],[IMG.railay,"Railay and Phra Nang","Your pace · 15 min by boat","Climb with a certified guide, or walk a beach you can only reach by sea","Boat 200 THB"],[IMG.kayak,"Kayak at Ao Thalane","Half day · beginners welcome","Paddle through mangroves and under limestone cliffs, quietest at high tide","1,600 THB"],[IMG.cook,"Southern cooking class","3 hours · with Talay's chef","Walk the morning market with the chef, then cook three curries to take home","2,200 THB"],[IMG.longtail,"Sunset longtail","2 hours · private boat","A small longtail just for you, with drinks and fruit on board","3,500 THB per boat"],[IMG.rock,"Hong Island","Full day · speedboat","A clear green lagoon ringed by cliffs, snorkelling and a hidden beach","2,600 THB"]],
  sH:"Book a trip in three steps",steps:[["Message us on LINE","The day you'd like and how many of you"],["We confirm your pick-up","A time at the resort door within the hour"],["Pay when you're back","Add it to your room bill, nothing up front"]],b:"Plan a trip on LINE"},
 draw:c=>`${hero(IMG.boats,t().nav.experiences,c.h,c.lead)}
 <section class="sec"><div class="wrap">${head(c.cH,c.cL)}<div class="card3">${c.list.map((e,i)=>`<article class="xc rv${i%3===1?" arc":""}">${fig(e[0],900)}<p class="meta">${e[2]}</p><h3>${e[1]}</h3><p>${e[3]}</p><p style="margin-top:12px;color:var(--ink);font-weight:500">${e[4]}</p></article>`).join("")}</div></div></section>
 <section class="sec dark"><div class="wrap">${head(c.sH,"")}<ol class="steps3">${c.steps.map((s,i)=>`<li class="rv"><span>${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("")}</ol><div style="margin-top:48px">${lineBtn(c.b,"btn gold")}</div></div></section>`},

weddings:{th:{h:"แต่งงานริมหาดอันดามัน",lead:"พิธีบนผืนทรายตอนพระอาทิตย์ตก ตามด้วยงานเลี้ยงบนดาดฟ้า สำหรับงานเล็กที่อบอุ่น ไม่เกิน 60 ท่าน",
  t1:"เราดูแลทุกอย่าง",p1:"ผู้ประสานงานของนวลจะอยู่กับคุณตั้งแต่ข้อความแรกจนถึงเพลงสุดท้าย ดอกไม้ ช่างภาพ ช่างแต่งหน้า ดนตรี และห้องพักของแขก เราจัดการให้ทั้งหมด",
  r1:[["พิธีริมหาด","สูงสุด 60 ท่าน"],["งานเลี้ยงบนดาดฟ้า","สูงสุด 80 ท่าน"],["ห้องพักสำหรับแขก","ทั้ง 24 ห้อง"],["ช่วงที่แนะนำ","พฤศจิกายน–เมษายน"]],
  kH:"แพ็กเกจงานแต่ง",kL:"ราคาเริ่มต้น ปรับได้ตามความต้องการ",
  packs:[["Just us","2 ท่าน","พิธีเล็กๆ บนหาด ช่างภาพ 2 ชั่วโมง ดอกไม้ และดินเนอร์ริมหาด","45,000 บาท"],["Intimate","ไม่เกิน 30 ท่าน","พิธีริมหาด ดินเนอร์บุฟเฟต์ซีฟู้ด ดนตรีสด และเค้ก","180,000 บาท"],["Celebration","ไม่เกิน 60 ท่าน","พิธีริมหาด งานเลี้ยงบนดาดฟ้า ดีเจ ช่างภาพเต็มวัน และพักฟรี 2 คืน","390,000 บาท"]],
  q:"เราอยากให้วันนั้นรู้สึกเหมือนได้แต่งงานที่บ้านของเพื่อนสนิท ที่บังเอิญอยู่ริมทะเล",b:"ขอใบเสนอราคา",b2:"คุยกับผู้ประสานงาน"},
 en:{h:"Get married on the Andaman shore",lead:"A ceremony on the sand at sunset, then dinner on the roof. For small, warm weddings of up to 60 guests.",
  t1:"We take care of everything",p1:"Nuan's coordinator is with you from the first message to the last song: flowers, photographer, make-up, music and rooms for your guests.",
  r1:[["Beach ceremony","Up to 60 guests"],["Rooftop reception","Up to 80 guests"],["Rooms for guests","All 24 rooms"],["Best season","November to April"]],
  kH:"Wedding packages",kL:"Starting prices, shaped around you",
  packs:[["Just us","2 guests","A small ceremony on the sand, 2 hours of photos, flowers and a beach dinner","45,000 THB"],["Intimate","Up to 30 guests","Beach ceremony, seafood buffet, live music and cake","180,000 THB"],["Celebration","Up to 60 guests","Beach ceremony, rooftop party, DJ, full-day photographer and two free nights","390,000 THB"]],
  q:"We want the day to feel like getting married at a close friend's house that happens to be by the sea.",b:"Ask for a quote",b2:"Talk to our coordinator"},
 draw:c=>`${hero(IMG.wed,t().nav.events,c.h,c.lead)}
 <section class="sec"><div class="wrap split rv">${fig(IMG.sunset,1200)}<div><span class="mark"></span><h2>${c.t1}</h2><p class="lead" style="margin-top:18px">${c.p1}</p>${rows(c.r1)}${lineBtn(c.b2)}</div></div></section>
 <section class="sec dark"><div class="wrap">${head(c.kH,c.kL)}<div class="card3">${c.packs.map((p,i)=>`<article class="pk rv${i===1?" hi":""}"><p class="meta">${p[1]}</p><h3>${p[0]}</h3><p>${p[2]}</p><p class="pr">${L==="th"?"เริ่มต้น":"From"} <b>${p[3]}</b></p></article>`).join("")}</div></div></section>
 <section class="sec tight stoneb"><div class="wrap center rv"><span class="mark"></span><p class="quote">${c.q}</p><div style="margin-top:36px">${lineBtn(c.b,"btn gold")}</div></div></section>`},

gallery:{th:{h:"ภาพจากรอบนวล",lead:"ห้องพัก สระ อาหาร และทะเลรอบอ่าวนาง กดที่รูปเพื่อดูแบบเต็มจอ",cats:{all:"ทั้งหมด",rooms:"ห้องพัก",resort:"รีสอร์ต",food:"อาหารและบาร์",sea:"ทะเลและเกาะ",spa:"สปา"}},
 en:{h:"Pictures from around Nuan",lead:"Rooms, pool, food and the sea around Ao Nang. Tap any picture to see it full screen.",cats:{all:"All",rooms:"Rooms",resort:"Resort",food:"Food & bar",sea:"Sea & islands",spa:"Spa"}},
 draw:c=>`${hero(IMG.railay,t().nav.gallery,c.h,c.lead)}
 <section class="sec tight"><div class="wrap"><div class="gchips" id="gchips" role="group" aria-label="${t().nav.gallery}">${Object.keys(c.cats).map(k=>`<button type="button" data-g="${k}" aria-pressed="${k===GCAT}">${c.cats[k]}</button>`).join("")}</div><div class="masonry" id="mas"></div></div></section>`},

contact:{th:{h:"มาถึงนวลได้ง่าย",lead:"บอกเวลาเครื่องลงทาง LINE แล้วเราจะไปรับที่สนามบินกระบี่ หรือถ้าขับรถมาเอง มีที่จอดในรีสอร์ต",
  box:[["โทร","075-000-000"],["อีเมล","reservations@nuan-retreat.example"],["LINE","@nuanretreat (ตัวอย่าง)"],["แผนกต้อนรับ","ตลอด 24 ชั่วโมง"]],
  gH:"การเดินทาง",go:[["สนามบินนานาชาติกระบี่","30 นาที · รถรับส่ง 600 บาท"],["ตัวเมืองกระบี่","25 นาที · รถรับส่ง 500 บาท"],["หาดอ่าวนาง","เดิน 6 นาที"],["ท่าเรือไปไร่เลย์","เดิน 8 นาที"],["ภูเก็ต","2 ชั่วโมง 30 นาที · รถรับส่ง 3,200 บาท"]],
  fH:"คำถามที่พบบ่อย",faq:[["เช็กอินและเช็กเอาต์กี่โมง","เช็กอินตั้งแต่ 14:00 และเช็กเอาต์ภายใน 12:00 ถ้าจองตรงกับเรา ขอเช็กเอาต์ 14:00 ได้ตามห้องว่าง"],["ยกเลิกการจองได้ไหม","ยกเลิกฟรีก่อนวันเข้าพัก 7 วัน หลังจากนั้นคิดค่าห้อง 1 คืน แพ็กเกจจองล่วงหน้ายกเลิกฟรีก่อน 14 วัน"],["พาเด็กมาได้ไหม","ได้ เด็กอายุต่ำกว่า 6 ปีพักฟรีเมื่อใช้เตียงเดิม เตียงเสริม 900 บาทต่อคืน และมีเตียงเด็กอ่อนให้ยืมฟรี"],["มีรถรับส่งสนามบินไหม","มี 600 บาทต่อเที่ยวสำหรับไม่เกิน 3 ท่าน ส่งเที่ยวบินมาทาง LINE แล้วคนขับจะถือป้ายชื่อรอที่ทางออก"],["รับสัตว์เลี้ยงไหม","ขออภัย ตอนนี้เรายังไม่รับสัตว์เลี้ยง ยกเว้นสุนัขช่วยเหลือ"],["ชำระเงินด้วยอะไรได้บ้าง","บัตรเครดิต เดบิต พร้อมเพย์ และเงินสด ส่วนการจองบนเว็บชำระด้วยบัตรหรือพร้อมเพย์"]],b:"แชทกับเราทาง LINE",map:"แผนที่อ่าวนาง กระบี่"},
 en:{h:"Easy to reach",lead:"Send your flight time on LINE and we'll meet you at Krabi airport. Driving yourself? There's parking on site.",
  box:[["Phone","075-000-000"],["Email","reservations@nuan-retreat.example"],["LINE","@nuanretreat (sample)"],["Front desk","Open 24 hours"]],
  gH:"Getting here",go:[["Krabi International Airport","30 min · transfer 600 THB"],["Krabi Town","25 min · transfer 500 THB"],["Ao Nang beach","6 min on foot"],["Boats to Railay","8 min on foot"],["Phuket","2 h 30 min · transfer 3,200 THB"]],
  fH:"Frequently asked questions",faq:[["What time are check-in and check-out?","Check-in from 14:00 and check-out by 12:00. When you book direct you can ask for 14:00 check-out, subject to availability."],["Can I cancel?","Free cancellation up to 7 days before arrival, then one night is charged. The book-early package is free to cancel up to 14 days before."],["Can we bring children?","Yes. Under-6s stay free in existing beds, extra beds are 900 THB a night, and we lend cots for free."],["Do you offer airport transfers?","Yes, 600 THB each way for up to three people. Send your flight on LINE and the driver will wait at arrivals with your name."],["Do you accept pets?","Sorry, not at the moment, except assistance dogs."],["How can I pay?","Credit and debit cards, PromptPay and cash. Online bookings are paid by card or PromptPay."]],b:"Chat with us on LINE",map:"Map of Ao Nang, Krabi"},
 draw:c=>`${hero(IMG.sunset,t().nav.contact,c.h,c.lead)}
 <section class="sec"><div class="wrap ctg"><div class="rv"><span class="mark"></span><h2>${t().nav.contact}</h2><div class="cbox">${c.box.map(b=>`<div><span>${b[0]}</span><b>${b[1]}</b></div>`).join("")}</div><div style="margin-top:28px">${lineBtn(c.b,"btn lineb")}</div></div>
 <div class="map rv"><iframe title="${c.map}" src="https://www.google.com/maps?q=Ao+Nang+Beach,+Krabi&z=14&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></section>
 <section class="sec stoneb"><div class="wrap split rv">${fig(IMG.longtail,1100)}<div><span class="mark"></span><h2>${c.gH}</h2>${rows(c.go)}</div></div></section>
 <section class="sec" id="faq"><div class="wrap narrow">${head(c.fH,"","center")}<div class="faq rv">${c.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div></div></section>`}
};

/* gallery photos: [id, category, caption th, caption en] */
const GAL=[[IMG.pool,"resort","สระว่ายน้ำกลางสวน","The garden pool"],[IMG.suite,"rooms","Andaman Suite","Andaman Suite"],[IMG.railay,"sea","ไร่เลย์","Railay"],[IMG.dinner,"food","ดินเนอร์ริมทะเล","Dinner by the sea"],[IMG.deluxe,"rooms","Cliff View Deluxe","Cliff View Deluxe"],[IMG.spa1,"spa","นวดหินร้อน","Hot stone massage"],[IMG.islands,"sea","เกาะหน้าอ่าวนาง","Islands off Ao Nang"],[IMG.roof,"food","Roof Bar","Roof Bar"],[IMG.path,"resort","ทางเดินในรีสอร์ต","Garden paths"],[IMG.garden,"rooms","Garden Room","Garden Room"],[IMG.kayak,"sea","พายคายัคยามเย็น","Kayaking at dusk"],[IMG.dish,"food","อาหารใต้","Southern Thai food"],[IMG.spa2,"spa","ศาลานวด","Massage pavilion"],[IMG.poolroom,"rooms","Pool Access Room","Pool Access Room"],[IMG.sunset,"sea","พระอาทิตย์ตก","Sunset"],[IMG.cocktail,"food","ค็อกเทล","Cocktails"],[IMG.lobby,"resort","ล็อบบี้","The lobby"],[IMG.bf,"food","อาหารเช้า","Breakfast"],[IMG.boats,"sea","เรือหางยาว","Longtail boats"],[IMG.spa3,"spa","ทรีตเมนต์","Treatments"],[IMG.wed,"resort","งานแต่งริมหาด","Beach wedding"],[IMG.rock,"sea","เกาะห้อง","Hong Island"]];
let GCAT="all";
function drawGallery(){const list=GAL.filter(g=>GCAT==="all"||g[1]===GCAT);
  $("#mas").innerHTML=list.map((g,i)=>`<button type="button" class="gi" data-i="${i}"><img loading="lazy" src="${U(g[0],800)}" alt="${L==="th"?g[2]:g[3]}"><span>${L==="th"?g[2]:g[3]}</span></button>`).join("");
  $("#mas").querySelectorAll(".gi").forEach(b=>b.onclick=()=>viewer(list.map(g=>[g[0],L==="th"?g[2]:g[3]]),+b.dataset.i));
  $("#gchips").querySelectorAll("button").forEach(b=>{b.setAttribute("aria-pressed",b.dataset.g===GCAT);b.onclick=()=>{GCAT=b.dataset.g;drawGallery()}})}

function renderPage(id){
  const P=PG[id],c=P[L];
  header(id==="weddings"?"events":id,true);onLang(()=>renderPage(id));applyText();
  document.title=`${t().nav[id==="weddings"?"events":id]} · Nuan Retreat Krabi`;
  $("#page").innerHTML=P.draw(c);
  if(id==="gallery")drawGallery();
  reveal();
  if(location.hash){const el=document.getElementById(location.hash.slice(1));if(el)setTimeout(()=>el.scrollIntoView(),60)}
}
