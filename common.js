/* Nuan Retreat — shared data, language, stay dates and checkout for rooms.html and room.html */
const U=(id,w)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const dp=p=>Math.round(p*.9);

const T={
th:{nav:{home:"หน้าแรก",about:"เกี่ยวกับเรา",facilities:"สิ่งอำนวยความสะดวกและบริการ",location:"ทำเลที่ตั้ง",book:"จองห้องพัก",rooms:"ห้องพักและสวีท",offers:"โปรโมชันและแพ็กเกจ",dining:"ห้องอาหารและบาร์",spa:"สปา",experiences:"กิจกรรมและทริป",events:"งานแต่งและอีเวนต์",gallery:"แกลเลอรี",contact:"ติดต่อเรา",faq:"คำถามที่พบบ่อย"},
navSub:{home:"ภาพรวมของนวล",about:"เรื่องราว แนวคิด และหนึ่งวันที่นวล",facilities:"ห้องอาหาร สระ ฟิตเนส ห้องประชุม รถรับส่ง",location:"แผนที่ การเดินทาง และที่เที่ยวใกล้ๆ",book:"เลือกวัน เลือกห้อง และชำระเงิน",rooms:"4 แบบ ดูรูปและจองได้ทันที",offers:"ส่วนลดเมื่อจองตรง",dining:"ริมทะเลและบาร์บนดาดฟ้า",spa:"นวดไทยในศาลาริมสวน",experiences:"เกาะ ไร่เลย์ พายเรือ ทำอาหาร",events:"พิธีริมหาดสำหรับไม่เกิน 60 ท่าน",gallery:"ภาพจากรอบรีสอร์ต",contact:"โทร อีเมล LINE และฟอร์มติดต่อ",faq:"เช็กอิน การยกเลิก เด็ก"},
navS:{about:"เกี่ยวกับเรา",rooms:"ห้องพัก",facilities:"บริการ",offers:"โปรโมชัน",location:"ทำเลที่ตั้ง",contact:"ติดต่อเรา"},gStay:"ห้องพักและสวีท",gExp:"สิ่งอำนวยความสะดวก",gPlan:"วางแผนการเดินทาง",gAbout:"เกี่ยวกับนวล",offSp:"ข้อเสนอพิเศษ",offSe:"โปรโมชันตามฤดูกาล",offSt:"แพ็กเกจที่พัก",oWithin:n=>`เข้าพักภายใน ${n} วันนับจากวันนี้`,fctaH:"พร้อมมาพักผ่อนที่อ่าวนางหรือยัง",fctaP:"จองตรงกับเรา ได้ราคาดีที่สุดและอาหารเช้าทุกเช้า",lineChat:"แชทกับเรา",allRooms:"ห้องพักทั้งหมด",more:"ดูเพิ่มเติม",
menu:"เมนู",closeMenu:"ปิดเมนู",bookNow:"จองเลย",ann:"จองตรงรับส่วนลด 10% และอาหารเช้าฟรีทุกห้อง",annLink:"ดูโปรโมชัน",annDemo:"(เว็บไซต์ตัวอย่าง ไม่มีการจองจริง)",
offOn:o=>`กำลังใช้แพ็กเกจ: ${o}`,offOff:"เลิกใช้แพ็กเกจ",offNo:"ห้องหรือวันที่นี้ไม่ตรงเงื่อนไขแพ็กเกจ ใช้ส่วนลดจองตรง 10% แทน",offPct:p=>`ลด ${p}%`,
oMin:n=>`พักขั้นต่ำ ${n} คืน`,oRooms:r=>`ใช้ได้กับ ${r}`,oAdv:n=>`จองล่วงหน้า ${n} วันขึ้นไป`,oAll:"ใช้ได้ทุกห้อง",oPick:"เลือกแพ็กเกจนี้",oValid:"เข้าพักได้ถึง 31 ต.ค. 2027",
demo:"เว็บไซต์ตัวอย่าง: รีสอร์ตสมมติเพื่อสาธิตงานออกแบบ ไม่มีการจองหรือตัดเงินจริง",navHome:"หน้าแรก",navRooms:"ห้องพัก",navBook:"จองห้องพัก",
addr:"ถนนตัวอย่าง ตำบลอ่าวนาง อำเภอเมือง กระบี่ (ที่อยู่สมมติ)",foot:"เว็บไซต์สาธิต ออกแบบและพัฒนาโดย [ชื่อสตูดิโอของคุณ] · ภาพถ่ายจาก Unsplash",
ci:"เช็กอิน",co:"เช็กเอาต์",gu:"ผู้เข้าพัก",guest:"ท่าน",night:"ต่อคืน",total:"รวม",nights:"คืน",sqm:"ตร.ม.",max:n=>`พักได้ ${n} ท่าน`,from:"เริ่มต้น",
stay:(n,a,b)=>`${a} – ${b} · ${n} คืน`,errDate:"วันเช็กเอาต์ต้องอยู่หลังวันเช็กอิน",
left:n=>`เหลือ ${n} ห้องในวันที่เลือก`,last:"ห้องสุดท้ายในวันที่เลือก",out:"ห้องเต็มในวันที่เลือก",tooMany:"รองรับผู้เข้าพักไม่ถึงจำนวนที่เลือก",
cats:{all:"ทั้งหมด",couple:"คู่รัก",family:"ครอบครัว",sea:"วิวทะเล",pool:"ติดสระ",value:"คุ้มค่า"},
listKick:"ห้องพักและราคา",listH:"เลือกห้องที่ใช่สำหรับคุณ",listP:"กดหมวดหมู่เพื่อกรองห้อง แล้วกดที่ห้องเพื่อดูรูปและรายละเอียดก่อนจอง ทุกราคาเป็นราคาจองตรงที่ลด 10% แล้ว",
count:n=>`${n} ห้องในหมวดนี้`,details:"ดูรายละเอียด",empty:"ยังไม่มีห้องในหมวดนี้",
perks:[["ลด 10% ทุกห้อง","ถูกกว่าเว็บเอเจนต์"],["อาหารเช้าสองท่าน","รวมในทุกการจองตรง"],["เช็กเอาต์ 14:00","ตามห้องว่าง"],["ยกเลิกฟรี","ก่อนเข้าพัก 7 วัน"]],
crumb:"ห้องพักทั้งหมด",pics:"รูป",photos:n=>`ดูรูปทั้งหมด ${n} รูป`,aboutH:"เกี่ยวกับห้องนี้",amH:"สิ่งที่มีในห้อง",specH:"ขนาดและการพัก",polH:"ข้อมูลก่อนจอง",moreH:"ห้องอื่นที่น่าสนใจ",
spec:{size:"ขนาดห้อง",bed:"เตียง",max:"ผู้เข้าพักสูงสุด",view:"วิว",floor:"ชั้น"},
bookH:"จองห้องนี้",rate:"ราคาปกติ",disc:"ส่วนลดจองตรง 10%",bookBtn:"จองห้องนี้",bookNote:"ยังไม่ตัดเงินจนกว่าจะยืนยันในขั้นถัดไป",notFound:"ไม่พบห้องนี้",backList:"กลับไปดูห้องทั้งหมด",
close:"ปิด",prev:"รูปก่อนหน้า",next2:"รูปถัดไป",
pol:[["เช็กอิน / เช็กเอาต์","เช็กอินตั้งแต่ 14:00 เช็กเอาต์ภายใน 12:00 (จองตรงขอเช็กเอาต์ 14:00 ได้)"],["การยกเลิก","ยกเลิกฟรีก่อนวันเข้าพัก 7 วัน หลังจากนั้นคิดค่าห้อง 1 คืน"],["เด็กและเตียงเสริม","เด็กอายุต่ำกว่า 6 ปีพักฟรีเมื่อใช้เตียงเดิม เตียงเสริม 900 บาทต่อคืน"]],
s1:"รายละเอียด",s2:"ชำระเงิน",s3:"ยืนยัน",sumTitle:"รายละเอียดการจอง",room:"ห้อง",dates:"วันที่",perN:"ราคาปกติต่อคืน",
name:"ชื่อ-นามสกุล",phone:"เบอร์โทร",email:"อีเมล",req:"คำขอพิเศษ (ถ้ามี)",cancel:"ยกเลิก",back:"ย้อนกลับ",next:"ไปหน้าชำระเงิน",errFill:"กรุณากรอกชื่อ เบอร์โทร และอีเมลให้ครบ",
payTitle:"ชำระเงิน",card:"บัตรเครดิต/เดบิต",pp:"พร้อมเพย์",test:"โหมดสาธิต: ใช้ได้เฉพาะเลขบัตรทดสอบ 4242 4242 4242 4242 ห้ามใส่บัตรจริง ข้อมูลไม่ถูกส่งไปที่ใด",
cno:"หมายเลขบัตร",cexp:"วันหมดอายุ (ดด/ปป)",ccvc:"CVC",cname:"ชื่อบนบัตร",pay:a=>`ชำระ ${a}`,
errCard:"เดโมนี้รับเฉพาะเลขบัตรทดสอบ 4242 4242 4242 4242",errExp:"วันหมดอายุไม่ถูกต้อง",errCvc:"CVC ต้องเป็นตัวเลข 3 หลัก",errName:"กรุณากรอกชื่อบนบัตร",
ppScan:"สแกนด้วยแอปธนาคารใดก็ได้",ppDemo:"QR ตัวอย่าง สแกนจ่ายไม่ได้",ppTime:t=>`QR หมดอายุใน ${t}`,ppPaid:"ฉันโอนเงินแล้ว",proc:"กำลังตรวจสอบการชำระเงิน…",
okH:"ชำระเงินและจองเรียบร้อย",okP:(e,a)=>`ได้รับชำระ ${a} แล้ว ส่งใบยืนยันการจองไปที่ ${e}`,okDemo:"นี่คือระบบสาธิต ไม่มีการจองหรือตัดเงินจริง",paidBy:"ชำระด้วย"},
en:{nav:{home:"Home",about:"About us",facilities:"Facilities & services",location:"Location",book:"Book a stay",rooms:"Rooms & suites",offers:"Offers & packages",dining:"Dining & bar",spa:"Spa",experiences:"Experiences",events:"Weddings & events",gallery:"Gallery",contact:"Contact us",faq:"FAQ"},
navSub:{home:"Nuan at a glance",about:"Our story, ideas and a day at Nuan",facilities:"Dining, pool, gym, meetings, transfers",location:"Map, getting here and places nearby",book:"Pick dates, a room and pay",rooms:"Four rooms, photos and instant booking",offers:"Savings when you book direct",dining:"By the sea and on the roof",spa:"Thai massage in a garden pavilion",experiences:"Islands, Railay, kayaks, cooking",events:"Beach ceremonies for up to 60",gallery:"Pictures from around the resort",contact:"Phone, email, LINE and a contact form",faq:"Check-in, cancellation, children"},
navS:{about:"About",rooms:"Rooms",facilities:"Facilities",offers:"Offers",location:"Location",contact:"Contact"},gStay:"Rooms & suites",gExp:"Facilities",gPlan:"Plan your trip",gAbout:"About Nuan",offSp:"Special offers",offSe:"Seasonal promotions",offSt:"Stay packages",oWithin:n=>`Stay within ${n} days of today`,fctaH:"Ready for a slower few days in Ao Nang?",fctaP:"Book direct for our best rate and breakfast every morning",lineChat:"Chat with us",allRooms:"All rooms",more:"Discover",
menu:"Menu",closeMenu:"Close menu",bookNow:"Book now",ann:"Book direct for 10% off and free breakfast in every room",annLink:"See offers",annDemo:"(Demo website, no real bookings)",
offOn:o=>`Package applied: ${o}`,offOff:"Remove package",offNo:"This room or these dates don't meet the package terms, so the 10% direct rate applies instead",offPct:p=>`${p}% off`,
oMin:n=>`Minimum ${n} night${n>1?"s":""}`,oRooms:r=>`For ${r}`,oAdv:n=>`Book at least ${n} days ahead`,oAll:"Any room",oPick:"Choose this package",oValid:"Stay by 31 Oct 2027",
demo:"Demo website: a fictional resort built to show the design. No real bookings or charges.",navHome:"Home",navRooms:"Rooms",navBook:"Book a stay",
addr:"Sample Road, Ao Nang, Mueang Krabi (fictional address)",foot:"Demo website designed and built by [your studio name] · Photographs from Unsplash",
ci:"Check-in",co:"Check-out",gu:"Guests",guest:"guests",night:"per night",total:"Total",nights:"nights",sqm:"m²",max:n=>`Sleeps ${n}`,from:"From",
stay:(n,a,b)=>`${a} – ${b} · ${n} night${n>1?"s":""}`,errDate:"Check-out must be after check-in",
left:n=>`${n} left for your dates`,last:"Last room for your dates",out:"Sold out for your dates",tooMany:"Too small for your group",
cats:{all:"All rooms",couple:"Couples",family:"Families",sea:"Sea view",pool:"Pool access",value:"Best value"},
listKick:"Rooms & rates",listH:"Choose the room that fits your stay",listP:"Pick a category to filter, then open a room to see its photos and details before you book. Every price is our direct rate, already 10% off.",
count:n=>`${n} room${n>1?"s":""} in this category`,details:"See details",empty:"No rooms in this category yet",
perks:[["10% off every room","Below travel-site prices"],["Breakfast for two","With every direct booking"],["Check-out at 14:00","Subject to availability"],["Free cancellation","Up to 7 days before"]],
crumb:"All rooms",pics:"photos",photos:n=>`See all ${n} photos`,aboutH:"About this room",amH:"In the room",specH:"Size & sleeping",polH:"Good to know",moreH:"Other rooms you may like",
spec:{size:"Room size",bed:"Beds",max:"Max guests",view:"View",floor:"Floor"},
bookH:"Book this room",rate:"Standard rate",disc:"Direct booking 10% off",bookBtn:"Book this room",bookNote:"You won't be charged until you confirm in the next step",notFound:"We couldn't find this room",backList:"Back to all rooms",
close:"Close",prev:"Previous photo",next2:"Next photo",
pol:[["Check-in / check-out","Check-in from 14:00, check-out by 12:00 (14:00 on request when you book direct)"],["Cancellation","Free up to 7 days before arrival, then one night is charged"],["Children & extra beds","Under-6s stay free in existing beds. Extra bed 900 THB per night"]],
s1:"Details",s2:"Payment",s3:"Confirmed",sumTitle:"Your booking",room:"Room",dates:"Dates",perN:"Standard rate per night",
name:"Full name",phone:"Phone",email:"Email",req:"Special requests (optional)",cancel:"Cancel",back:"Back",next:"Continue to payment",errFill:"Enter your name, phone and email to continue",
payTitle:"Payment",card:"Credit / debit card",pp:"PromptPay",test:"Demo mode: only the test card 4242 4242 4242 4242 works. Never enter a real card. Nothing is sent anywhere.",
cno:"Card number",cexp:"Expiry (MM/YY)",ccvc:"CVC",cname:"Name on card",pay:a=>`Pay ${a}`,
errCard:"This demo only accepts the test card 4242 4242 4242 4242",errExp:"Check the expiry date",errCvc:"CVC must be 3 digits",errName:"Enter the name on the card",
ppScan:"Scan with any Thai banking app",ppDemo:"Sample QR, cannot be paid",ppTime:t=>`QR expires in ${t}`,ppPaid:"I've paid",proc:"Confirming your payment…",
okH:"Paid and booked",okP:(e,a)=>`We received ${a}. Your confirmation was sent to ${e}.`,okDemo:"This is a demo. No booking or payment was made.",paidBy:"Paid by"}};

const CATS=["all","couple","family","sea","pool","value"];
/* shared resort photos used in every room gallery */
const SH={pool:["photo-1511265753106-52a8e3488b70",{th:"สระว่ายน้ำกลางสวน",en:"The garden pool"}],
 bf:["photo-1568853810078-71e3a4868f61",{th:"อาหารเช้าริมทะเล",en:"Breakfast by the sea"}],
 roof:["photo-1753032507946-14ad6832b102",{th:"ดริงก์บนดาดฟ้า",en:"Drinks on the roof"}],
 path:["photo-1762425430465-0d9f08d64147",{th:"ทางเดินในรีสอร์ต",en:"Paths around the resort"}],
 juice:["photo-1650201777491-c5baae006026",{th:"น้ำผลไม้สดยามเช้า",en:"Fresh juice in the morning"}]};
const ROOMS=[
{id:"garden",name:"Garden Room",price:3800,left:5,size:32,max:2,cats:["couple","value"],
 short:{th:"ห้องชั้นล่างเปิดออกสู่สวน ราคาเบาที่สุด",en:"Ground floor onto the garden, our lightest rate"},
 long:{th:["ห้องชั้นล่างที่ประตูบานเฟี้ยมเปิดออกสู่สวนหน้าห้อง มีระเบียงเล็กไว้นั่งดื่มกาแฟตอนเช้า ตกแต่งเรียบง่ายด้วยไม้และผ้าฝ้าย","เหมาะกับคู่รักหรือคนเดินทางคนเดียวที่ใช้เวลาข้างนอกทั้งวัน และอยากได้ห้องสะอาด เงียบ ในราคาที่คุ้มที่สุดของนวล"],en:["A ground-floor room whose folding doors open onto its own patch of garden, with a small terrace for morning coffee. Simply finished in wood and cotton.","For couples or solo travellers who are out all day and want a clean, quiet room at Nuan's lightest rate."]},
 bed:{th:"เตียงควีนไซซ์",en:"Queen bed"},vw:{th:"วิวสวน",en:"Garden view"},fl:{th:"ชั้น 1",en:"Ground floor"},
 am:{th:["ระเบียงหน้าห้อง","ฝักบัวเรนชาวเวอร์","เครื่องชงกาแฟ","Wi-Fi ความเร็วสูง","ตู้เย็นเล็ก","เครื่องปรับอากาศ","ตู้เซฟ","ผ้าเช็ดตัวและชุดคลุม","ไดร์เป่าผม"],en:["Garden terrace","Rain shower","Coffee machine","Fast Wi-Fi","Small fridge","Air conditioning","In-room safe","Towels and robes","Hairdryer"]},
 gal:[["photo-1750271334785-4f6008035021",{th:"ห้องนอน",en:"The bedroom"}],SH.path,SH.pool,SH.bf,SH.juice]},
{id:"deluxe",name:"Cliff View Deluxe",price:5200,left:2,size:40,max:2,cats:["couple"],
 short:{th:"ห้องชั้นบน หน้าต่างสูงมองเห็นผาหินปูน",en:"Upstairs, tall windows onto the limestone cliffs"},
 long:{th:["ห้องชั้นบนที่หน้าต่างสูงจรดเพดานเปิดออกไปเห็นผาหินปูนตั้งแต่ลืมตาตื่น เตียงไม้จริงตัวใหญ่ ผ้าปูลินินสีขาว และม่านทึบแสงสำหรับคนที่อยากนอนต่อ","ห้องที่คู่รักเลือกมากที่สุด เงียบเพราะอยู่ชั้นบนสุดด้านหลังรีสอร์ต"],en:["Upstairs, with floor-to-ceiling windows that show the limestone cliffs the moment you wake. A large solid-wood bed, white linen, and blackout curtains for a lie-in.","The room couples choose most, quiet because it sits on the top floor at the back of the resort."]},
 bed:{th:"เตียงคิงไซซ์",en:"King bed"},vw:{th:"วิวผาหิน",en:"Cliff view"},fl:{th:"ชั้น 3",en:"Third floor"},
 am:{th:["หน้าต่างสูงจรดเพดาน","ฝักบัวเรนชาวเวอร์","เครื่องชงกาแฟ","Wi-Fi ความเร็วสูง","มินิบาร์","ม่านทึบแสง","ผลิตภัณฑ์อาบน้ำออร์แกนิก","ตู้เซฟ","ลำโพงบลูทูธ"],en:["Floor-to-ceiling windows","Rain shower","Coffee machine","Fast Wi-Fi","Minibar","Blackout curtains","Organic bath products","In-room safe","Bluetooth speaker"]},
 gal:[["photo-1617325247661-675ab4b64ae2",{th:"ห้องนอน",en:"The bedroom"}],["photo-1648648777033-c833d650aea7",{th:"วิวผาหินจากห้อง",en:"Cliffs from the window"}],SH.roof,SH.pool,SH.bf,SH.path]},
{id:"suite",name:"Andaman Suite",price:8900,left:3,size:62,max:3,cats:["couple","family","sea"],
 short:{th:"สวีทระเบียงกว้าง มองเห็นทะเลและเกาะ",en:"A suite with a wide balcony over the sea"},
 long:{th:["ห้องสวีทที่มีมุมนั่งเล่นแยกจากห้องนอน ระเบียงกว้างพร้อมเก้าอี้นอนสองตัวมองออกไปเห็นทะเลอันดามันและเกาะหน้าอ่าว ห้องน้ำมีอ่างแช่ตัวริมหน้าต่าง","เหมาะกับการพักยาว ฮันนีมูน หรือครอบครัวเล็กที่มีเด็กหนึ่งคน (มีโซฟาเบด)"],en:["A suite with a living area separate from the bedroom and a wide balcony with two loungers facing the Andaman and the islands. The bathroom has a tub by the window.","Made for long stays, honeymoons or a small family with one child (there's a sofa bed)."]},
 bed:{th:"เตียงคิงไซซ์ + โซฟาเบด",en:"King bed + sofa bed"},vw:{th:"วิวทะเล",en:"Sea view"},fl:{th:"ชั้น 3",en:"Third floor"},
 am:{th:["ระเบียงพร้อมเก้าอี้นอน","อ่างแช่ตัว","มุมนั่งเล่นแยก","เครื่องชงกาแฟ","Wi-Fi ความเร็วสูง","มินิบาร์ฟรีวันแรก","สมาร์ททีวี","ชุดคลุมและรองเท้าแตะ","ลำโพงบลูทูธ"],en:["Balcony with loungers","Bathtub","Separate living area","Coffee machine","Fast Wi-Fi","Free minibar on day one","Smart TV","Robes and slippers","Bluetooth speaker"]},
 gal:[["photo-1729606188713-814d1b7bf893",{th:"ห้องนอนและระเบียง",en:"Bedroom and balcony"}],["photo-1483683804023-6ccdb62f86ef",{th:"เกาะหน้าอ่าวนาง",en:"The islands offshore"}],["photo-1722483537725-3807a1bb78c7",{th:"ทะเลยามเย็น",en:"The sea at dusk"}],SH.roof,SH.bf,SH.pool]},
{id:"pool",name:"Pool Access Room",price:11800,left:1,size:48,max:3,cats:["family","pool"],
 short:{th:"ก้าวจากระเบียงลงสระว่ายน้ำได้ทันที",en:"Step from your terrace straight into the pool"},
 long:{th:["ห้องชั้นล่างที่มีบันไดลงสระว่ายน้ำจากระเบียงของห้องเอง ล้อมด้วยต้นไม้ร่มรื่น มีฝักบัวกลางแจ้งไว้ล้างตัวก่อนเข้าห้อง","เหมาะกับครอบครัวที่มีเด็ก หรือคนที่อยากลงน้ำได้ตลอดวันโดยไม่ต้องเดินไปไหน"],en:["A ground-floor room with steps from its own terrace into the pool, shaded by trees, with an outdoor shower to rinse off before you come inside.","For families with children, or anyone who wants to be in the water all day without walking anywhere."]},
 bed:{th:"เตียงคิงไซซ์ + เตียงเดี่ยว",en:"King bed + single bed"},vw:{th:"วิวสระและสวน",en:"Pool & garden view"},fl:{th:"ชั้น 1",en:"Ground floor"},
 am:{th:["บันไดลงสระส่วนตัว","ฝักบัวกลางแจ้ง","ผ้าเช็ดตัวสระว่ายน้ำ","เครื่องชงกาแฟ","Wi-Fi ความเร็วสูง","มินิบาร์","ของเล่นน้ำสำหรับเด็ก","ตู้เซฟ","เตียงเด็กอ่อนตามคำขอ"],en:["Private pool steps","Outdoor shower","Pool towels","Coffee machine","Fast Wi-Fi","Minibar","Pool toys for kids","In-room safe","Cot on request"]},
 gal:[["photo-1669741043336-36eb9c3db071",{th:"ห้องติดสระ",en:"Rooms along the pool"}],SH.pool,SH.path,SH.bf,SH.roof]}];

/* packages: pct replaces the standard 10% direct discount when the stay meets the terms */
const OFFERS=[
{id:"stay3",type:"st",pct:.2,minN:3,img:"photo-1483683804023-6ccdb62f86ef",
 n:{th:"พัก 3 คืน ลด 20%",en:"Stay 3 nights, save 20%"},d:{th:"อยู่ยาวขึ้นอีกนิด ได้ส่วนลดมากขึ้น พร้อมอาหารเช้าทุกวัน",en:"Stay a little longer and save more, with breakfast every day"},perks:{th:["อาหารเช้าสำหรับสองท่าน","เช็กเอาต์ 14:00"],en:["Breakfast for two","Check-out at 14:00"]}},
{id:"honey",type:"st",pct:.15,minN:2,rooms:["suite","deluxe"],img:"photo-1760533536461-714a23877e2d",
 n:{th:"ฮันนีมูนริมอันดามัน",en:"Andaman honeymoon"},d:{th:"ดินเนอร์ใต้แสงเทียนริมทะเลหนึ่งคืน และสปาคู่ 60 นาที",en:"One candlelit dinner by the sea and a 60-minute couples' spa"},perks:{th:["ดินเนอร์ริมทะเล 1 คืน","สปาคู่ 60 นาที","ตกแต่งห้องวันแรก"],en:["One dinner by the sea","60-minute couples' spa","Room decorated on arrival"]}},
{id:"family",type:"st",pct:.15,minN:2,rooms:["pool","suite"],img:"photo-1669741043336-36eb9c3db071",
 n:{th:"ครอบครัวสุขสันต์",en:"Family time"},d:{th:"เด็กอายุต่ำกว่า 12 ปีทานอาหารฟรี พร้อมทริปเรือหางยาวครึ่งวัน",en:"Under-12s eat free, plus a half-day longtail trip"},perks:{th:["เด็กทานฟรี","ทริปเรือครึ่งวัน","เตียงเสริมฟรี"],en:["Kids eat free","Half-day boat trip","Free extra bed"]}},
{id:"early",type:"sp",pct:.18,minN:1,adv:30,img:"photo-1722483537725-3807a1bb78c7",
 n:{th:"จองล่วงหน้า ลด 18%",en:"Book early, save 18%"},d:{th:"วางแผนล่วงหน้า 30 วัน รับส่วนลดมากกว่าราคาจองตรงปกติ",en:"Plan 30 days ahead for more than the usual direct rate"},perks:{th:["อาหารเช้าสำหรับสองท่าน","ยกเลิกฟรีก่อน 14 วัน"],en:["Breakfast for two","Free cancellation up to 14 days before"]}},
{id:"last",type:"sp",pct:.15,minN:1,within:7,img:"photo-1549294413-26f195200c16",
 n:{th:"จองนาทีสุดท้าย ลด 15%",en:"Last minute, save 15%"},d:{th:"ตัดสินใจกะทันหันก็ยังคุ้ม เข้าพักภายใน 7 วันนับจากวันนี้",en:"Decided late? Still worth it for stays in the next 7 days"},perks:{th:["อาหารเช้าสำหรับสองท่าน","อัปเกรดห้องตามห้องว่าง"],en:["Breakfast for two","Room upgrade when available"]}},
{id:"green",type:"se",pct:.25,minN:2,img:"photo-1610641818989-c2051b5e2cfd",when:ci=>{const m=+ci.slice(5,7);return m>=5&&m<=10},start:()=>{const d=new Date(),m=d.getMonth()+1;return m>=5&&m<=10?addDays(null,3):`${d.getFullYear()+(m>10?1:0)}-05-15`},
 cond:{th:"เข้าพัก พ.ค.–ต.ค.",en:"Stays May to October"},
 n:{th:"กรีนซีซัน ลด 25%",en:"Green season, save 25%"},d:{th:"ช่วงฝนอันดามันที่ทะเลเงียบ ต้นไม้เขียว และราคาดีที่สุดของปี",en:"The Andaman's rainy months: quiet sea, green cliffs and the year's best rates"},perks:{th:["อาหารเช้าสำหรับสองท่าน","นวดเท้า 45 นาที 1 ครั้ง"],en:["Breakfast for two","One 45-minute foot massage"]}},
{id:"festive",type:"se",pct:.12,minN:3,img:"photo-1753032507946-14ad6832b102",when:ci=>{const md=ci.slice(5);return md>="12-20"||md<="01-05"},start:()=>{const d=new Date(),y=d.getFullYear(),c=`${y}-12-26`;return addDays(null,0)<=c?c:`${y+1}-12-26`},
 cond:{th:"เข้าพัก 20 ธ.ค.–5 ม.ค.",en:"Stays 20 Dec to 5 Jan"},
 n:{th:"ฉลองปีใหม่ริมอันดามัน",en:"New Year by the Andaman"},d:{th:"พักช่วงปีใหม่ 3 คืนขึ้นไป พร้อมดินเนอร์กาล่าบนดาดฟ้าคืนส่งท้ายปี",en:"Three nights or more over New Year, with a rooftop gala dinner on the 31st"},perks:{th:["ดินเนอร์กาล่าคืน 31 ธ.ค.","อาหารเช้าทุกวัน"],en:["Gala dinner on 31 December","Breakfast every day"]}}];
let OFF=null;
try{const q=new URLSearchParams(location.search).get("offer");if(q==="none")localStorage.removeItem("nuan-offer");else if(q)localStorage.setItem("nuan-offer",q);OFF=OFFERS.find(o=>o.id===(q||localStorage.getItem("nuan-offer")))||null}catch(e){}
function clearOffer(){OFF=null;try{localStorage.removeItem("nuan-offer")}catch(e){}}
function setOffer(id){OFF=OFFERS.find(o=>o.id===id)||null;try{localStorage.setItem("nuan-offer",id)}catch(e){}}
function offerOk(o,r){if(!o)return false;if(o.rooms&&!o.rooms.includes(r.id))return false;if(nights()<o.minN)return false;if(o.adv&&S.ci<addDays(null,o.adv))return false;if(o.within&&S.ci>addDays(null,o.within))return false;if(o.when&&!o.when(S.ci))return false;return true}
const pctOf=r=>offerOk(OFF,r)?OFF.pct:.1;
const rate=r=>Math.round(r.price*(1-pctOf(r)));
const discLabel=r=>offerOk(OFF,r)?`${OFF.n[L]} (${Math.round(OFF.pct*100)}%)`:t().disc;
function offTerms(o){const x=t(),a=[x.oMin(o.minN)];a.push(o.rooms?x.oRooms(o.rooms.map(id=>ROOMS.find(r=>r.id===id).name).join(", ")):x.oAll);if(o.adv)a.push(x.oAdv(o.adv));if(o.within)a.push(x.oWithin(o.within));if(o.cond)a.push(o.cond[L]);return a}
function offerBar(r){if(!OFF)return"";const x=t(),ok=r?offerOk(OFF,r):true;return `<div class="offbar"><b>${x.offOn(OFF.n[L])}</b><span>${offTerms(OFF).join(" · ")}</span>${ok?"":`<span class="no">${x.offNo}</span>`}<button type="button" data-clearoff>${x.offOff}</button></div>`}
document.addEventListener("click",e=>{if(e.target.closest("[data-clearoff]")){clearOffer();if(window.__rerender)window.__rerender()}});

/* language */
let L="th";try{L=localStorage.getItem("nuan-lang")||"th"}catch(e){}
const t=()=>T[L];
const baht=n=>(L==="th"?"฿":"THB ")+n.toLocaleString("en-US");
function applyText(){
  document.documentElement.lang=L;
  document.querySelectorAll("[data-t]").forEach(e=>{const v=T[L][e.dataset.t];if(typeof v==="string")e.textContent=v});
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===L));
}
function onLang(fn){document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{L=b.dataset.l;try{localStorage.setItem("nuan-lang",L)}catch(e){}fn()})}

/* stay dates, remembered between pages */
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays=(s,n)=>{const d=s?new Date(s+"T00:00"):new Date();d.setDate(d.getDate()+n);return iso(d)};
let S={ci:addDays(null,21),co:addDays(null,23),g:2};
try{const v=JSON.parse(localStorage.getItem("nuan-stay")||"null");if(v&&v.ci>=addDays(null,0)&&v.co>v.ci)S=v}catch(e){}
const saveS=()=>{try{localStorage.setItem("nuan-stay",JSON.stringify(S))}catch(e){}};
const nights=()=>Math.round((new Date(S.co+"T00:00")-new Date(S.ci+"T00:00"))/864e5);
const fmt=s=>new Date(s+"T00:00").toLocaleDateString(L==="th"?"th-TH":"en-GB",{day:"numeric",month:"short"});
/* wire three inputs (check-in, check-out, guests) to S; calls fn after each change */
function bindStay(ci,co,gu,fn){
  const fill=()=>{ci.value=S.ci;co.value=S.co;ci.min=addDays(null,0);co.min=addDays(S.ci,1);
    gu.innerHTML=[1,2,3,4].map(k=>`<option value="${k}">${k} ${t().guest}</option>`).join("");gu.value=S.g};
  ci.onchange=()=>{if(!ci.value)return;S.ci=ci.value;if(S.co<=S.ci)S.co=addDays(S.ci,1);fill();saveS();fn()};
  co.onchange=()=>{if(!co.value)return;S.co=co.value;saveS();fn()};
  gu.onchange=()=>{S.g=+gu.value;saveS();fn()};
  fill();return fill;
}
function status(r){const x=t();if(r.left===0)return[`<p class="status no">${x.out}</p>`,1];if(r.max<S.g)return[`<p class="status no">${x.tooMany}</p>`,1];
  if(nights()<1)return[`<p class="status no">${x.errDate}</p>`,1];return[`<p class="status">${r.left===1?x.last:r.left<=3?x.left(r.left):""}</p>`,0]}

/* ---------- checkout ---------- */
let B={},timer=null;
const dlg=()=>$("#dlg"),dbody=()=>$("#dlgBody");
const steps=k=>{const x=t();return `<div class="steps">${[x.s1,x.s2,x.s3].map((s,i)=>`<span class="${i+1===k?"on":i+1<k?"done":""}"><i>${i+1<k?"✓":i+1}</i><b>${s}</b></span>`).join("<em></em>")}</div>`};
const summary=()=>{const x=t(),r=B.room,n=B.n,d=rate(r);return `<div class="sum"><div><span>${x.room}</span><span>${r.name}</span></div><div><span>${x.dates}</span><span>${fmt(S.ci)} – ${fmt(S.co)} · ${n} ${x.nights}</span></div><div><span>${x.perN}</span><span>${baht(r.price)}</span></div><div><span>${discLabel(r)}</span><span>−${baht((r.price-d)*n)}</span></div><div class="tot"><span>${x.total}</span><span>${baht(d*n)}</span></div></div>`};
function step1(){
  const x=t(),v=k=>esc(B[k]||"");
  dbody().innerHTML=`${steps(1)}<h3>${x.sumTitle}</h3>${summary()}
  <form id="f1" novalidate><div class="f2"><div class="full"><label for="bn">${x.name}</label><input id="bn" autocomplete="name" value="${v("name")}"></div><div><label for="bp">${x.phone}</label><input id="bp" type="tel" autocomplete="tel" value="${v("phone")}"></div><div><label for="be">${x.email}</label><input id="be" type="email" autocomplete="email" value="${v("email")}"></div><div class="full"><label for="br">${x.req}</label><input id="br" value="${v("req")}"></div></div>
  <p class="err" id="err" role="alert"></p><div class="acts"><button type="button" class="btn line" id="x">${x.cancel}</button><button class="btn">${x.next}</button></div></form>`;
  $("#x").onclick=()=>dlg().close();
  $("#f1").onsubmit=e=>{e.preventDefault();
    B.name=$("#bn").value.trim();B.phone=$("#bp").value.trim();B.email=$("#be").value.trim();B.req=$("#br").value.trim();
    if(!B.name||!B.phone||!/^\S+@\S+\.\S+$/.test(B.email)){$("#err").textContent=x.errFill;return}
    step2("card")};
  setTimeout(()=>$("#bn")&&$("#bn").focus(),30);
}
function qrSvg(seed){let q=seed,c="";const r=()=>(q=(q*1103515245+12345)%2147483648)/2147483648,N=25,s=6;
  const fin=(a,b)=>`<rect x="${a*s}" y="${b*s}" width="${7*s}" height="${7*s}" fill="#111"/><rect x="${(a+1)*s}" y="${(b+1)*s}" width="${5*s}" height="${5*s}" fill="#fff"/><rect x="${(a+2)*s}" y="${(b+2)*s}" width="${3*s}" height="${3*s}" fill="#111"/>`;
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){const f=(i<8&&j<8)||(i>16&&j<8)||(i<8&&j>16);if(!f&&r()>.52)c+=`<rect x="${i*s}" y="${j*s}" width="${s}" height="${s}" fill="#111"/>`}
  return `<svg viewBox="0 0 ${N*s} ${N*s}" width="190" height="190" role="img" aria-label="Sample QR">${c}${fin(0,0)}${fin(18,0)}${fin(0,18)}<rect x="${9*s}" y="${10.5*s}" width="${7*s}" height="${4*s}" rx="4" fill="#fff"/><text x="${12.5*s}" y="${13.3*s}" text-anchor="middle" font-size="11" font-family="Anuphan,sans-serif" fill="#a33a2b" font-weight="600">DEMO</text></svg>`}
function step2(mode){
  clearInterval(timer);
  const x=t(),amt=baht(rate(B.room)*B.n);
  const tabs=`<div class="tabs" role="tablist"><button type="button" role="tab" aria-selected="${mode==="card"}" data-m="card">${x.card}</button><button type="button" role="tab" aria-selected="${mode==="pp"}" data-m="pp">${x.pp}</button></div>`;
  let inner;
  if(mode==="card"){
    inner=`<p class="testnote">${x.test}</p>
    <div class="card" aria-hidden="true"><div class="row"><span>Nuan Retreat</span><span>VISA</span></div><div class="no" id="cv">4242 4242 4242 4242</div><div class="row"><span id="cvn">${esc(B.name)}</span><span id="cve">12/30</span></div></div>
    <form id="f2" novalidate><div class="f2"><div class="full"><label for="cn">${x.cno}</label><input id="cn" inputmode="numeric" autocomplete="off" value="4242 4242 4242 4242" maxlength="19"></div>
    <div><label for="ce">${x.cexp}</label><input id="ce" inputmode="numeric" autocomplete="off" value="12/30" maxlength="5"></div><div><label for="cc">${x.ccvc}</label><input id="cc" inputmode="numeric" autocomplete="off" value="123" maxlength="3"></div>
    <div class="full"><label for="cm">${x.cname}</label><input id="cm" autocomplete="off" value="${esc(B.name)}"></div></div>
    <p class="err" id="err" role="alert"></p><div class="acts"><button type="button" class="btn line" id="bk">${x.back}</button><button class="btn sun">${x.pay(amt)}</button></div></form>`;
  }else{
    inner=`<div class="qr"><div class="box"><div class="pp">PromptPay</div>${qrSvg(B.n*7919+B.room.price)}<div class="amt">${amt}</div></div><p>${x.ppScan}</p><p class="small" style="color:#a33a2b">${x.ppDemo}</p><p class="timer" id="tm"></p></div>
    <div class="acts"><button type="button" class="btn line" id="bk">${x.back}</button><button type="button" class="btn sun" id="paid">${x.ppPaid}</button></div>`;
  }
  dbody().innerHTML=`${steps(2)}<h3>${x.payTitle}</h3>${tabs}${inner}`;
  dbody().querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>step2(b.dataset.m));
  $("#bk").onclick=step1;
  if(mode==="card"){
    const cn=$("#cn"),ce=$("#ce"),cc=$("#cc"),cm=$("#cm");
    cn.oninput=()=>{cn.value=cn.value.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();$("#cv").textContent=cn.value||"•••• •••• •••• ••••"};
    ce.oninput=()=>{let v=ce.value.replace(/\D/g,"").slice(0,4);if(v.length>2)v=v.slice(0,2)+"/"+v.slice(2);ce.value=v;$("#cve").textContent=v||"MM/YY"};
    cc.oninput=()=>{cc.value=cc.value.replace(/\D/g,"").slice(0,3)};
    cm.oninput=()=>{$("#cvn").textContent=cm.value};
    $("#f2").onsubmit=e=>{e.preventDefault();
      [cn,ce,cc,cm].forEach(i=>i.classList.remove("bad"));
      const fail=(el,msg)=>{el.classList.add("bad");el.focus();$("#err").textContent=msg};
      if(cn.value.replace(/\s/g,"")!=="4242424242424242")return fail(cn,x.errCard);
      const m=ce.value.match(/^(\d\d)\/(\d\d)$/);
      if(!m||+m[1]<1||+m[1]>12||new Date(2000+ +m[2],+m[1],0)<new Date())return fail(ce,x.errExp);
      if(!/^\d{3}$/.test(cc.value))return fail(cc,x.errCvc);
      if(!cm.value.trim())return fail(cm,x.errName);
      processPay(x.card)};
  }else{
    let left=900;const tick=()=>{const el=$("#tm");if(!el){clearInterval(timer);return}el.textContent=x.ppTime(`${Math.floor(left/60)}:${String(left%60).padStart(2,"0")}`);if(--left<0)clearInterval(timer)};
    tick();timer=setInterval(tick,1000);
    $("#paid").onclick=()=>processPay("PromptPay");
  }
}
function processPay(method){
  clearInterval(timer);
  const x=t();
  dbody().innerHTML=`${steps(2)}<div class="spin" role="status" aria-label="${x.proc}"></div><p style="text-align:center">${x.proc}</p>`;
  setTimeout(()=>{
    const ref="NR-"+Math.random().toString(36).slice(2,7).toUpperCase(),amt=baht(rate(B.room)*B.n);
    dbody().innerHTML=`${steps(4)}<div class="ok"><div class="arch"><svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M10 21l7 7 14-15" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h3>${x.okH}</h3><div class="ref">${ref}</div><p>${x.okP(esc(B.email),amt)}</p></div>${summary()}<p class="small" style="text-align:center">${x.paidBy} ${method} · ${x.okDemo}</p><div class="acts" style="justify-content:center"><button class="btn" id="cl">${x.close}</button></div>`;
    $("#cl").onclick=()=>dlg().close();
  },1600);
}
function openBook(room){B={room,n:nights(),name:B.name,phone:B.phone,email:B.email};step1();dlg().showModal()}
document.addEventListener("DOMContentLoaded",()=>{const d=dlg();if(d)d.addEventListener("close",()=>clearInterval(timer))});

/* keep sticky elements under the nav whatever its height */
function navH(){const n=document.querySelector(".hdr");if(n)document.documentElement.style.setProperty("--navh",n.offsetHeight+"px")}
addEventListener("resize",navH);document.addEventListener("DOMContentLoaded",navH);

/* ---------- header, menu, footer, carousels ---------- */
const MAIN=[["home","index.html"],["about","about.html"],["rooms","rooms.html"],["facilities","facilities.html"],["offers","offers.html"],["location","location.html"],["contact","contact.html"]];
const SUBF=[["dining","dining.html"],["spa","spa.html"],["experiences","experiences.html"],["events","weddings.html"],["gallery","gallery.html"]];
const NAVG=[["gAbout",[["about","about.html"],["gallery","gallery.html"],["offers","offers.html"]]],["gExp",[["rooms","rooms.html"],["facilities","facilities.html"],["dining","dining.html"],["spa","spa.html"],["experiences","experiences.html"],["events","weddings.html"]]],["gPlan",[["book","book.html"],["location","location.html"],["contact","contact.html"],["faq","contact.html#faq"]]]];
const MENU_IMG={home:"photo-1511265753106-52a8e3488b70",about:"photo-1762425430465-0d9f08d64147",rooms:"photo-1729606188713-814d1b7bf893",facilities:"photo-1549294413-26f195200c16",offers:"photo-1483683804023-6ccdb62f86ef",location:"photo-1650259874515-2cd3af8b8980",dining:"photo-1760533536461-714a23877e2d",spa:"photo-1600334089648-b0d9d3028eb2",experiences:"photo-1516750445633-f290238745d2",events:"photo-1718152219044-edc915854e70",gallery:"photo-1648648777033-c833d650aea7",contact:"photo-1722483537725-3807a1bb78c7",faq:"photo-1762425430465-0d9f08d64147",book:"photo-1729606188713-814d1b7bf893",garden:"photo-1750271334785-4f6008035021",deluxe:"photo-1617325247661-675ab4b64ae2",suite:"photo-1729606188713-814d1b7bf893",pool:"photo-1669741043336-36eb9c3db071"};
const ARCH='<svg viewBox="0 0 26 30" aria-hidden="true"><path d="M1.5 30V13a11.5 11.5 0 0 1 23 0v17" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M7.5 30V15a5.5 5.5 0 0 1 11 0v15" fill="none" stroke="#B8925A" stroke-width="1.4"/></svg>';
const ICON={l:'<path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r:'<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',ar:'<path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'};
const LINE_ICO='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s6-3.5 8.2-6C21.4 14.2 22 12.7 22 11c0-4.4-4.5-8-10-8z"/></svg>';
const arr=()=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+ICON.ar+'</svg>';
const BRAND=(sm=1)=>`<a class="brand" href="index.html" aria-label="Nuan Retreat">${ARCH}<b>NUAN</b>${sm?"<small>RETREAT · KRABI</small>":""}</a>`;
function header(active,over=true){
  const x=t();let h=$("#hdr");if(!h)return;
  if(!$("#ann")){const a=document.createElement("div");a.id="ann";a.className="ann";document.body.prepend(a)}
  $("#ann").innerHTML=`${x.ann} · <a href="offers.html">${x.annLink}</a><span class="dm">${x.annDemo}</span>`;
  h.className="hdr"+(over?" over":"");
  const top=k=>{const u=MAIN.find(m=>m[0]===k)[1];return `<a href="${u}"${k===active?' aria-current="page"':""}>${x.navS[k]}</a>`};
  h.innerHTML=`<div class="wrap nv"><div class="nl"><button class="burger" id="burger" aria-haspopup="dialog" aria-label="${x.menu}"><i></i><span>${x.menu}</span></button></div>
  ${BRAND()}
  <div class="nr"><div class="lang" role="group" aria-label="Language"><button type="button" data-l="th" aria-pressed="${L==="th"}">TH</button><button type="button" data-l="en" aria-pressed="${L==="en"}">EN</button></div>
  <a class="btn bookbtn" href="book.html">${x.bookNow}</a></div></div><span class="prog" id="prog" aria-hidden="true"></span>`;
  let m=$("#menu");if(!m){m=document.createElement("dialog");m.id="menu";m.setAttribute("aria-label",x.menu);document.body.append(m)}
  const sub=(k,u,label)=>`<li><a class="sub" href="${u}" data-k="${k}"${k===active?' aria-current="page"':""}><b>${label}</b></a></li>`;
  m.innerHTML=`<div class="mw"><div class="ml"><div class="mtop">${BRAND(0)}<button class="mclose" id="mclose">${x.closeMenu}</button></div>
  <div class="mcols m2"><div class="mcol"><ul>${MAIN.map(([k,u],i)=>`<li style="--i:${i}"><a href="${u}" data-k="${k}"${k===active?' aria-current="page"':""}><b>${x.nav[k]}</b><span>${x.navSub[k]}</span></a></li>`).join("")}</ul></div>
  <div class="mcol"><h4>${x.gStay}</h4><ul>${ROOMS.map(r=>sub(r.id,"room.html?r="+r.id,r.name)).join("")}</ul><h4 style="margin-top:30px">${x.gExp}</h4><ul>${SUBF.map(([k,u])=>sub(k,u,x.nav[k])).join("")}</ul>
  <a class="btn gold" href="book.html" style="margin-top:30px">${x.bookNow}</a></div></div>
  <div class="lang mlang" role="group" aria-label="Language"><button type="button" data-l="th" aria-pressed="${L==="th"}">TH</button><button type="button" data-l="en" aria-pressed="${L==="en"}">EN</button></div>
  <div class="mfoot"><a href="tel:075000000">075-000-000</a><span>reservations@nuan-retreat.example</span><span>${x.addr}</span></div></div>
  <div class="mr"><img id="mimg" src="${U(MENU_IMG[active]||MENU_IMG.home,1200)}" alt=""></div></div>`;
  $("#burger").onclick=()=>m.showModal();$("#mclose").onclick=()=>m.close();
  m.querySelectorAll("[data-k]").forEach(a=>{a.onmouseenter=a.onfocus=()=>{const i=MENU_IMG[a.dataset.k];if(i)$("#mimg").src=U(i,1200)};a.onclick=()=>m.close()});
  const ah=$("#ann").offsetHeight;document.documentElement.style.setProperty("--annh",ah+"px");
  /* header: solid after the hero, hides while scrolling down, returns when scrolling up; thin progress line */
  let last=scrollY;const f=()=>{const y=scrollY;if(over)h.classList.toggle("solid",y>ah+10);
    h.classList.toggle("hide",y>last&&y>420&&!document.querySelector("dialog[open]"));last=y;
    const p=$("#prog"),mx=document.documentElement.scrollHeight-innerHeight;if(p)p.style.transform=`scaleX(${mx>0?Math.min(y/mx,1):0})`};
  f();window.__hdrScroll&&removeEventListener("scroll",window.__hdrScroll);window.__hdrScroll=f;addEventListener("scroll",f,{passive:true});
  footer();navH();
}
function footer(){
  let f=$("#ftr");if(!f){f=document.createElement("footer");f.id="ftr";const s=document.body.querySelector("script");document.body.insertBefore(f,s)}
  const x=t();
  f.innerHTML=`<div class="wrap"><div class="fmin"><div>${BRAND()}</div><p>${x.addr}</p><p><a href="tel:075000000">075-000-000</a><br>reservations@nuan-retreat.example</p></div>
  <div class="credit"><span>${x.foot}</span><span>© Nuan Retreat (demo)</span></div></div>`;
  if(!$("#fline")){const a=document.createElement("a");a.id="fline";a.className="fline";a.href="https://line.me/";a.target="_blank";a.rel="noopener";document.body.append(a)}
  $("#fline").innerHTML=`${LINE_ICO}<span>${x.lineChat}</span>`;$("#fline").setAttribute("aria-label",x.lineChat);
}
function carousel(root){
  const tr=root.querySelector(".track"),p=root.querySelector("[data-prev]"),n=root.querySelector("[data-next]");if(!tr)return;
  const step=()=>{const c=tr.children[0];return c?c.getBoundingClientRect().width+parseFloat(getComputedStyle(tr).columnGap||28):300};
  const upd=()=>{if(p)p.disabled=tr.scrollLeft<4;if(n)n.disabled=tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-4};
  if(p)p.onclick=()=>tr.scrollBy({left:-step(),behavior:"smooth"});if(n)n.onclick=()=>tr.scrollBy({left:step(),behavior:"smooth"});
  tr.addEventListener("scroll",upd,{passive:true});upd();
}
const cbtns=()=>`<div class="cbtns"><button class="cbtn" data-prev aria-label="Previous"><svg viewBox="0 0 24 24">${ICON.l}</svg></button><button class="cbtn" data-next aria-label="Next"><svg viewBox="0 0 24 24">${ICON.r}</svg></button></div>`;
function offerCard(o){const x=t();return `<a class="oc" href="offers.html#${o.id}"><figure><img loading="lazy" src="${U(o.img,800)}" alt=""><span class="pct">${x.offPct(Math.round(o.pct*100))}</span></figure><div class="ob"><h3>${o.n[L]}</h3><p>${o.d[L]}</p><p class="cond">${offTerms(o).join(" · ")}</p><span class="go">${x.oPick}</span></div></a>`}
/* fade sections in as they scroll into view */
let __io=null;
function reveal(){if(__io)__io.disconnect();const els=document.querySelectorAll(".rv:not(.in)");
  if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches){els.forEach(e=>e.classList.add("in"));return}
  __io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");__io.unobserve(e.target)}}),{threshold:.1,rootMargin:"0px 0px -40px 0px"});els.forEach(e=>__io.observe(e))}
/* shared full-screen photo viewer: list = [[photoId,caption],...] */
const VW={list:[],i:0};
function viewer(list,i){
  let v=$("#viewer");if(!v){v=document.createElement("dialog");v.id="viewer";v.innerHTML=`<div class="vw"><div class="vt"><span id="vcount"></span><button class="vbtn" id="vclose"></button></div><div class="vimg"><img id="vimg" alt=""></div><div class="vb"><button class="vbtn" id="vprev"><svg width="18" height="18" viewBox="0 0 24 24">${ICON.l}</svg></button><span id="vcap" style="min-width:0;text-align:center;font-size:14.5px"></span><button class="vbtn" id="vnext"><svg width="18" height="18" viewBox="0 0 24 24">${ICON.r}</svg></button></div></div>`;document.body.append(v);
    const show=k=>{VW.i=(k+VW.list.length)%VW.list.length;const p=VW.list[VW.i];$("#vimg").src=U(p[0],1800);$("#vimg").alt=p[1];$("#vcap").textContent=p[1];$("#vcount").textContent=`${VW.i+1} / ${VW.list.length}`;if(VW.on)VW.on(VW.i)};VW.show=show;
    $("#vclose").onclick=()=>v.close();$("#vprev").onclick=()=>show(VW.i-1);$("#vnext").onclick=()=>show(VW.i+1);
    v.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(VW.i-1);if(e.key==="ArrowRight")show(VW.i+1)});
    let sx=null;v.addEventListener("touchstart",e=>{sx=e.touches[0].clientX},{passive:true});v.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)show(VW.i+(dx<0?1:-1));sx=null})}
  $("#vclose").textContent=t().close;$("#vprev").setAttribute("aria-label",t().prev);$("#vnext").setAttribute("aria-label",t().next2);
  VW.list=list;VW.show(i);v.showModal();
}
