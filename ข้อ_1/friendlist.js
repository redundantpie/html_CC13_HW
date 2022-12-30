let friends = [
    {
      "order": "1",
      "name": "กัมพล อัศวินดาส"
    },
    {
      "order": "2",
      "name": "Watcharapon Anaketanaset"
    },
    {
      "order": "3",
      "name": "Tanapron Kiewcomgoon"
    },
    {
      "order": "4",
      "name": "Khattiya Dokbua"
    },
    {
      "order": "5",
      "name": "Yonathan Karunaduangjit"
    },
    {
      "order": "6",
      "name": "Natthawut Raoketkan"
    },
    {
      "order": "7",
      "name": "Yamaphorn Hempanom"
    },
    {
      "order": "8",
      "name": "รัฐพงษ์ สอนซ้าย"
    },
    {
      "order": "9",
      "name": "Kriddidej Krailadsiri"
    },
    {
      "order": "10",
      "name": "Benyapa Thianchai"
    },
    {
      "order": "11",
      "name": "Patcharapon Chaiporn"
    },
    {
      "order": "12",
      "name": "Chrisjunior Drabik"
    },
    {
      "order": "13",
      "name": "คุณากร เทศนา"
    },
    {
      "order": "14",
      "name": "Suphaluck Somkaew"
    },
    {
      "order": "15",
      "name": "ปรมัตถ์ แถบเงิน"
    },
    {
      "order": "16",
      "name": "Surangkana Takanta"
    },
    {
      "order": "17",
      "name": "Jedsada Khasrithong"
    },
    {
      "order": "18",
      "name": "Thanatorn Thamsakorn"
    },
    {
      "order": "19",
      "name": "Vachanai Manonai"
    },
    {
      "order": "20",
      "name": "Kamonrat Aittarat"
    },
    {
      "order": "21",
      "name": "wera sakulchaikaew"
    },
    {
      "order": "22",
      "name": "Dejsakda Prommasert"
    },
    {
      "order": "23",
      "name": "Siwatchaya Atchariyadecha"
    },
    {
      "order": "24",
      "name": "Achara Klinmala"
    },
    {
      "order": "25",
      "name": "Thatchaphon Wangsuwan"
    },
    {
      "order": "26",
      "name": "Thanatchporn Rampairujipong"
    },
    {
      "order": "27",
      "name": "Kitsada Klakasikit"
    },
    {
      "order": "28",
      "name": "Chaotaveepat Thanworachothiran"
    },
    {
      "order": "29",
      "name": "Sarunphak Kittivorapoom"
    },
    {
      "order": "30",
      "name": "Farida Kamsri"
    },
    {
      "order": "31",
      "name": "ชนินทร์ ฤทธิ์จรุง"
    },
    {
      "order": "32",
      "name": "Tanawut Ongart"
    },
    {
      "order": "33",
      "name": "กุสุมา มาลัยทอง"
    },
    {
      "order": "34",
      "name": "Pornvut Pipatanadejsak"
    },
    {
      "order": "35",
      "name": "วิรุฬห์ เก่งธัญการ"
    },
    {
      "order": "36",
      "name": "จารวี จิตรบรรเจิดกุล"
    },
    {
      "order": "37",
      "name": "ณัฐพงษ์ ทองพึง"
    },
    {
      "order": "38",
      "name": "ณัฐนันท์ สุวรรณนึก"
    },
    {
      "order": "39",
      "name": "จตุพร หวังเสต"
    },
    {
      "order": "40",
      "name": "รพีศักดิ์ ภูคำผาย"
    },
    {
      "order": "41",
      "name": "เมธาวุฒิ จิวานันทวัฒน์"
    },
    {
      "order": "42",
      "name": "ศิริรัตน์ นิติศิริ"
    },
    {
      "order": "43",
      "name": "Charat Pattarakitjanurak"
    },
    {
      "order": "44",
      "name": "Puwadon Umpuch"
    },
    {
      "order": "45",
      "name": "suppanut sukuntapuksa"
    },
    {
      "order": "46",
      "name": "สุรศักดิ์ ภักดีวัฒนะกุล"
    },
    {
      "order": "47",
      "name": "Pakhi Nitipradiskul"
    },
    {
      "order": "48",
      "name": "Charinya Gairdpoka"
    },
    {
      "order": "49",
      "name": "Napassorn Phongthanasirikul\r\n"
    },
    {
      "order": "50",
      "name": "apitep"
    },
    {
      "order": "51",
      "name": "vorawalunh"
    },
    {
      "order": "52",
      "name": "Wanwisa Intana"
    }
  ]


let table = document.querySelector('table');
// let table = document.createElement('table');
let txt = '<tr><th>order</th><th>name</th></tr>'

friends.forEach(item =>{
    txt += `<tr><td>${item.order}</td><td>${item.name}</td></tr>`
})

// table.appendChild(txt); ไม่ได้เพราะ txt ไม่ใช่ element?
table.innerHTML = txt