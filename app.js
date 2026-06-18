// ======================
// ค้นหาอาชีพ
// ======================

function searchCareer() {

const text =
document.getElementById("careerInput")
.value
.toLowerCase();

let result = "";

if(text.includes("หมอ")){

result =
`
<h3>👨‍⚕️ แพทยศาสตร์</h3>
<p>
ควรเก่งชีววิทยา เคมี ภาษาอังกฤษ
</p>

<p>
ใช้ TGAT + TPAT1 + A-Level
</p>
`;

}

else if(text.includes("เภสัช")){

result =
`
<h3>💊 เภสัชศาสตร์</h3>

<p>
ควรเก่งเคมีและชีววิทยา
</p>

<p>
ใช้ TGAT + A-Level
</p>
`;

}

else if(text.includes("สัตว")){

result =
`
<h3>🐶 สัตวแพทยศาสตร์</h3>

<p>
เหมาะกับคนรักสัตว์
</p>
`;

}

else{

result =
`
<p>
ยังไม่มีข้อมูลอาชีพนี้
</p>
`;

}

document.getElementById("careerResult")
.innerHTML = result;

}

// ======================
// คำฮีลใจ
// ======================

const quotes = [

"คะแนนไม่ใช่คุณค่าของเรา",

"สอบไม่ติดไม่ได้แปลว่าไม่มีอนาคต",

"ทุกคนมีจังหวะชีวิตของตัวเอง",

"วันนี้เหนื่อยได้ แต่ห้ามยอมแพ้",

"ความพยายามไม่เคยทรยศใคร",

"เก่งช้าก็ยังดีกว่าไม่เริ่ม",

"เธอมาได้ไกลกว่าที่คิดแล้วนะ",

"อย่าดูถูกความพยายามของตัวเอง",

"ยังมีโอกาสอีกมากรออยู่",

"พักได้ แต่ไม่เลิก"

];

function showQuote(){

const random =
quotes[
Math.floor(
Math.random()*quotes.length
)
];

document.getElementById("quoteText")
.innerHTML =
random;

}

// ======================
// ค้นหาตัวเอง
// ======================

function findMajor(){

const value =
document.getElementById("interest")
.value;

let result = "";

if(value==="doctor"){

result =
"👨‍⚕️ เหมาะกับ แพทย์ พยาบาล เภสัช เทคนิคการแพทย์";

}

else if(value==="vet"){

result =
"🐶 เหมาะกับ สัตวแพทย์ สัตวศาสตร์";

}

else if(value==="agri"){

result =
"🌱 เหมาะกับ เกษตรศาสตร์ พืชสวน";

}

else if(value==="law"){

result =
"⚖️ เหมาะกับ นิติศาสตร์ รัฐศาสตร์";

}

document.getElementById("quizResult")
.innerHTML =
result;

}

// ======================
// ตารางอ่านหนังสือ
// ======================

function createPlan(){

const goal =
document.getElementById("goal")
.value;

let plan = "";

if(goal==="doctor"){

plan =
`
จันทร์ : ชีวะ 2 ชม.<br>
อังคาร : เคมี 2 ชม.<br>
พุธ : ฟิสิกส์ 2 ชม.<br>
พฤหัส : อังกฤษ 1 ชม.<br>
ศุกร์ : ทบทวน
`;

}

if(goal==="pharmacy"){

plan =
`
จันทร์ : เคมี 2 ชม.<br>
อังคาร : ชีวะ 2 ชม.<br>
พุธ : อังกฤษ 1 ชม.<br>
พฤหัส : คณิต 1 ชม.
`;

}

if(goal==="vet"){

plan =
`
จันทร์ : ชีวะ 2 ชม.<br>
อังคาร : อังกฤษ 1 ชม.<br>
พุธ : เคมี 2 ชม.
`;

}

document.getElementById("studyPlan")
.innerHTML =
plan;

}

// ======================
// คำนวณคะแนน
// ======================

function calculateScore(){

const tgat =
Number(
document.getElementById("tgat").value
);

const tpat =
Number(
document.getElementById("tpat").value
);

const alevel =
Number(
document.getElementById("alevel").value
);

const total =
tgat + tpat + alevel;

document.getElementById("scoreResult")
.innerHTML =
`
คะแนนรวม = ${total}
`;

}
