
function searchCareer(){
let i=document.getElementById("searchBox").value;
let r=document.getElementById("searchResult");

if(i.includes("หมอ")) r.innerHTML="หมอ: เน้นชีวะ+เคมี → A-Level → แพทย์";
else if(i.includes("วิศวะ")) r.innerHTML="วิศวะ: ฟิสิกส์+คณิต → คณะวิศวะ";
else if(i.includes("ไม่รู้")) r.innerHTML="ลองทำแบบทดสอบ";
else r.innerHTML="ลองพิมพ์ใหม่";
}

function openQuotes(){
alert("อย่าหยุดฝัน
คุณเก่งกว่าที่คิด
พรุ่งนี้จะดีขึ้น");
}

function toggleNews(){
document.getElementById("newsBox").innerHTML=`
<h3>TCAS</h3>
<ul>
<li>รอบ 1 Portfolio</li>
<li>รอบ 2 Quota</li>
<li>รอบ 3 Admission</li>
</ul>

<h3>ทุน</h3>
<ul>
<li>ทุนแพทย์</li>
<li>ทุนวิศวะ</li>
</ul>`;
}

function openTest(){
let q=prompt("ชอบอะไร? 1สัตว์ 2อ่านหนังสือ 3ปลูกต้นไม้");
if(q=="1") alert("สัตวแพทย์");
else if(q=="2") alert("นิติ/หมอ");
else alert("เกษตร");
}

function openCalc(){
let a=Number(prompt("ชีวะ"));
let b=Number(prompt("เคมี"));
let c=Number(prompt("คณิต"));
let avg=(a+b+c)/3;

if(avg>80) alert("แพทย์/ทันตะ");
else if(avg>60) alert("วิศวะ");
else alert("สำรวจตัวเอง");
}
