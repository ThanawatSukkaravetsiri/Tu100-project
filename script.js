//   {
//     name: "Building name",
//     aliases: ["other name people might search"],
//     floors: [
//       { floor: 1, spots: [
//         { detail: "Where the water machine is",
//           image: drive("https://drive.google.com/file/d/XXXX/view?usp=sharing"),
//           mapUrl: "https://maps.app.goo.gl/XXXX" }
//       ]},
//       { floor: 2, spots: [ { detail: "..." } ] }
//     ]
//   },

// Turns a normal Google Drive share link (or just the file ID) into an image URL.
function drive(linkOrId) {
  const match = String(linkOrId).match(/\/d\/([\w-]+)|[?&]id=([\w-]+)/);
  const id = match ? (match[1] || match[2]) : String(linkOrId).trim();
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
}

const locations = [
  //คณะนิติศาสตร์ (LAW)
  {
    name: "คณะนิติศาสตร์ (LAW)",
    aliases: ["คณะนิติศาสตร์ (LAW)", "law", "นิติ"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "ข้างในห้องอ่านหนังสือคอมม่อนคณะ (เปิดเฉพาะช่วงสอบ)",
            image: drive(""),
            mapUrl: ""
          },
        ]
      },
      {
        floor: 4,
        spots: [
          {
            detail: "หน้าห้อง 405",
            image: drive("https://drive.google.com/file/d/1-pxsYU4FC82b-XbBJaOS_hueUYIYvK-a/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/FPsbEtj2USjrjChT9?g_st=ac"
          }
        ]
      },
      {
        floor: 5,
        spots: [
          {
            detail: "หน้าห้อง 506",
            image: drive("https://drive.google.com/file/d/1TmHtCHgVqdNRTkNDHZGN8Rs_PBYSgtd1/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/fkmFcD8YCg72Xnhn8"
          }
        ]
      }
    ]
  },
  //คณะพาณิชยศาสตร์และการบัญชี (TBS)
  {
    name: "คณะพาณิชยศาสตร์และการบัญชี (TBS)",
    aliases: ["พาณิชยศาสตร์และการบัญชี", "tbs", "บัญชี"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "บริเวณทางเข้าห้อง Common Room บริเวณทางเดินระหว่าง TBS Square Garden",
            image: drive("https://drive.google.com/file/d/1SinYklLHOgHg4pdm5zdnC_6FeARvW8hl/view?usp=drivesdk"),
            mapUrl: "https://maps.google.com?q=14.0682818,100.6037680&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,94218641,94282134,100835694,94286869,100820247,100822504,100838873&g_st=ic"
          }
        ]
      },
      {
        floor: 2,
        spots: [
          {
            detail: "บริเวณใกล้ห้องบรรยาย 201 บริเวณทางแยกชั้น 2",
            image: drive("https://drive.google.com/file/d/1fZsG4mHc4KXyf-DLl54BKXAXy8U2FJie/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/uDjmW51V4YGXC3jbA?g_st=ic"
          },
        ]
      },
      {
        floor: 3,
        spots: [
          {
            detail: "บริเวณใกล้ห้องบรรยาย 301 บริเวณทางแยกชั้น 3",
            image: drive("https://drive.google.com/file/d/17jRuWJLkogQp90GYK6-0-igjx9tmWo4G/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/h8p85HcPXEPpmD8q8?g_st=ic"
          },
        ]
      },
      {
        floor: 4,
        spots: [
          {
            detail: "ตั้งอยู่ในสำนักงานบริหารและธุรการ",
            image: drive("https://drive.google.com/file/d/1tbO830trPpfH72rc9C9Ln8VUJTQltW5A/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/HReubcWAvpFH1VFE9?g_st=ic"
          },
        ]
      },
      {
        floor: 5,
        spots: [
          {
            detail: "ตั้งอยู่ด้านหน้าของห้องพักอาจารย์",
            image: drive("https://drive.google.com/file/d/1nLPPyEIJSumAlc6v3jVxzvUXvL9cSal9/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/HReubcWAvpFH1VFE9?g_st=ic"
          },
        ]
      }
    ]
  },
  //อาคารกองกิจกรรมนักศึกษา
  {
    name: "อาคารกองกิจกรรมนักศึกษา",
    aliases: ["อาคารกองกิจกรรมนักศึกษา", "กองกิจกรรมนักศึกษา", "กองกิจกรรม"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "เดินตรงมาจะเห็นป้ายงานทุน วินัย และสวัสดิการนักศึกษาแล้วเลี้ยวซ้ายจะเห็นตู้กดน้ำ",
            image: drive("https://drive.google.com/file/d/1PG1pk_HV1w6QN-9qt47ttT2lF5irmnzv/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/aQF9ss6QzLrMNt3P6"
          },
        ]
      },
      {
        floor: 3,
        spots: [
          {
            detail: "เดินขึ้นมาถึงชั้น 3 จะเห็นตู้กดน้ำอยู่หน้าบันได",
            image: drive("https://drive.google.com/file/d/1YYsb7-8Gbw9LbC1P5wEFHFO2YgbU2G72/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/aQF9ss6QzLrMNt3P6"
          }
        ]
      }
    ]
  },
  //Mini Stadium
  {
    name: "Mini Stadium",
    aliases: ["mini", "Mini Stadium", "stadium"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "เดินเข้ามาแล้วหันขวาจะเห็นห้องน้ำ ตู้กดน้ำจะอยู่ด้านหน้าห้องน้ำ",
            image: drive("https://drive.google.com/file/d/1Fb3s_9Q8sxc53-T1H0jU-WgNsC6lLiHp/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/Ao6rQDCKvdSpYjc4A"
          }
        ]
      }
    ]
  },
  //ศูนย์การเรียนรู้กรมหลวงนราธิวาสราชนครินทร์ (ศกร.)
  {
    name: "ศูนย์การเรียนรู้กรมหลวงนราธิวาสราชนครินทร์ (ศกร.)",
    aliases: ["ศกร", "ศูนย์การเรียนรู้กรมหลวงนราธิวาสราชนครินทร์ (ศกร.)", "ศูนย์การเรียนรู้กรมหลวงนราธิวาสราชนครินทร์"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "หน้าทางเข้าห้องน้ำ",
            image: drive("https://drive.google.com/file/d/1zfqcAKLzCqikFSm6K3-bkryD5CyFTGFr/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/2ZhMbkJf1uHTqexY7?g_st=ic"
          }
        ]
      }
    ]
  },
  //หอสมุดป๋วย อึ๊งภากรณ์ (ป๋วย)
  {
    name: "หอสมุดป๋วย อึ๊งภากรณ์ (ป๋วย)",
    aliases: ["หอสมุดป๋วย", "ป๋วย", "หอสมุดป๋วย อึ๊งภากรณ์ (ป๋วย)"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "ใต้บันไดฝั่งขวา อยู่ติดเสา",
            image: drive("https://drive.google.com/file/d/1RjE6hhntPLNcKpNTxBYXhyM-WOnKqrat/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/5Um1GfjmMHG6eZui7"
          },
          {
            detail: "ใต้บันไดฝั่งซ้าย อยู่ติดเสา",
            image: drive("https://drive.google.com/file/d/1eWTrtaNi-2rRERdoep-Ak1VjWWCctlYe/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/jqstYgPgZK7dMLmp9?g_st=ic"
          }
        ]
      },
      {
        floor: 2,
        spots: [
          {
            detail: "อยู่ทางขวามือหลังจากขึ้นบันได อยู่บริเวณมุมการ์ตูน-เยาวชน",
            image: drive("https://drive.google.com/file/d/1jYnAEkhIJRp5vjFxPb0BuVmipJw5aZOe/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/uPzzNsYgAZfB4rzn7?g_st=ic"
          },
          {
            detail: "อยู่บริเวณทางเข้า Co-Learning Space",
            image: drive("https://drive.google.com/file/d/1KasafATvVyVyXX3byFEeZGpe2YyAolkM/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/YARyzzk5FRKjnGBt9?g_st=ic"
          }
        ]
      }
    ]
  },
  //GREEN CANTEEN
  {
    name: "Green Canteen",
    aliases: ["กรีนแคนทีน", "green canteen"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "เดินตรงเข้ามาบริเวณ yoguroto แล้วเดินตรงมาก่อนถึงทางออก ตู้กดน้ำจะอยู่ระหว่างห้องน้ำ ทางออก และร้านอาหารญี่ปุ่น",
            image: drive("https://drive.google.com/file/d/1zMSW-9T4gl7hmXaCAr6xHvVMAiYygr73/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/UjXW4MeGKm91NsXJ8"
          }
        ]
      }
    ]
  },
  // SC1
  {
    name: "SC1 อาคารเรียนรวมสังคมศาสตร์",
    aliases: ["SC", "SC.", "อาคารเรียนรวมสังคมศาสตร์"],
    floors: [
      {
        floor: 1, spots: [
          {
            detail: "บริเวณทางที่คณะนิติศาสตร์ คณะรัฐศาสตร์ และคณะสังคมสงเคราะห์ อยู่ทางขวาเมื่อหันหน้าเข้าบันไดหลัก",
            image: drive("https://drive.google.com/file/d/1zK0_ZYZchJwWMG3q_BYCee-l0V8FpEqs/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/fsJG6cb98jZrYGAW7?g_st=ic"
          },
          {
            detail: "บริเวณทางไปห้อง SC1014-1016 อยู่ทางซ้ายเมื่อหันหน้าเข้าบันไดหลัก",
            image: drive("https://drive.google.com/file/d/1ARpkL61kn8cLSVDQGvIEughCJIn-HjJs/view?usp=sharing"),
            mapUrl: "https://maps.app.goo.gl/wBKckqLk5osRTuxGA?g_st=ic"
          },
        ]
      },
      {
        floor: 2, spots: [
          {
            detail: "บริเวณทางไปห้องคอมพิวเตอร์ SC2038 อยู่ทางขวาเมื่อหันหน้าเข้าบันไดหลัก",
            image: drive("https://drive.google.com/file/d/1ClqHnCwVnK2ulcYc9VwwOZkmcL68KV6w/view?usp=drive_link"),
            mapUrl: "https://maps.google.com/?q=14.0693080,100.6032220&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100835694,94286869,100820247,100822504&g_st=ic"
          },
          {
            detail: "บริเวณทางไปห้อง SC1014-1016 อยู่ทางซ้ายเมื่อหันหน้าเข้าบันไดหลัก",
            image: drive("https://drive.google.com/file/d/14xWSJ7zgrhkZj29N7-2REQOaH6rEoSDD/view?usp=drive_link"),
            mapUrl: "https://maps.google.com/?q=14.0693370,100.6035990&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100835694,94286869,100820247,100822504&g_st=ic"
          }
        ]
      },
      {
        floor: 3, spots: [
          {
            detail: "บริเวณทางไปห้อง SC3029-3039 อยู่ทางขวาเมื่อหันหน้าเข้าบันไดหลัก",
            image: drive("https://drive.google.com/file/d/1dSIdL7ZRtbuToj_BL-UNvKlloNRXgrtU/view?usp=drive_link"),
            mapUrl: "https://maps.google.com/?q=14.0693000,100.6032820&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100835694,94286869,100820247,100822504&g_st=ic"
          },
          {
            detail: "บริเวณทางไปห้อง SC3010-3020 อยู่ทางซ้ายเมื่อหันหน้าเข้าบันไดหลัก",
            image: drive("https://drive.google.com/file/d/1Xjh6cUj6xhYW3iRrKag5Tpp-PnPYKJs7/view?usp=drive_link"),
            mapUrl: "https://maps.google.com/?q=14.0695200,100.6035920&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100835694,94286869,100820247,100822504&g_st=ic"
          }
        ]
      },
      {
        floor: 4, spots: [
          {
            detail: "บริเวณทางไปห้อง SC4004-4006",
            image: drive("https://drive.google.com/file/d/1K9WT00BqmRUVEC57B-8w1993sSj_-t8q/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/q1XrnwLEByWdLMz47?g_st=ic"
          },
          {
            detail: "บริเวณทางไปห้อง SC4028-4030",
            image: drive("https://drive.google.com/file/d/1af-K4IyKr3YFktoY2dO9FaXUvmuFL5Ji/view?usp=drive_link"),
            mapUrl: "https://maps.google.com/?q=14.0695960,100.6035550&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100835694,94286869,100820247,100822504&g_st=ic"
          }
        ]
      }
    ]
  },
  // SC3
  {
    name: "SC3 อาคารเรียนรวมสังคมศาสตร์ 3",
    aliases: ["SC3", "SC.3", "อาคารเรียนรวมสังคมศาสตร์ 3", "SC"],
    floors: [
      {
        floor: 1, spots: [
          {
            detail: "อยู่ติดห้องน้ำชาย ชั้น M บริเวณลิฟต์กลาง",
            image: drive("https://drive.google.com/file/d/190tF9H7jNi-CK-F1x6qZFd87D41xuKFN/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/vCsLSXVJdjF3p4r58?g_st=ic"
          }
        ]
      },
      {
        floor: 2, spots: [
          {
            detail: "ชั้น 2 ตรงข้ามห้อง SC3-217",
            image: drive("https://drive.google.com/file/d/1Nv25ueGbSdoxWLzRBcsD8KG-RfMS4_q9/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/tSWwQ8xckkQxm5BM8?g_st=ic"
          }
        ]
      },
      {
        floor: 3, spots: [
          {
            detail: "อยู่ติดห้องน้ำชาย ชั้น3 บริเวณลิฟต์กลาง",
            image: drive("https://drive.google.com/file/d/1l6i90qLnCvEnXf2fvEdSG8ST_bHM_gZy/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/vCsLSXVJdjF3p4r58?g_st=ic"
          },
        ]
      },
      {
        floor: 4, spots: [
          {
            detail: "ตรงข้าม Student Lounge (ห้องกระจก) ติดกับห้องน้ำหญิง",
            image: drive("https://drive.google.com/file/d/1QzHWSLHMrwCaO1KQj20xtr_Ss7eJQid6/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/FyXMATWcuSAP8vDY7?g_st=ic"
          }
        ]
      }
    ]
  },
  // โรงอาหารสังคมศาสตร์ 1
  {
    name: "โรงอาหารสังคมศาสตร์ 1",
    aliases: ["โรงอาหาร", "โรง", "โรงอาหารสังคมศาสตร์ 1", "โรงอาหาร sc1"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "อยู่บริเวณที่ทางเข้าที่มีซุ้มสีแดงอยู่",
            image: drive("https://drive.google.com/file/d/1KfHx8sDm_oRKZ5xW0Pp3BGVzqQ2mSDGS/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/N6jrGTXQzAh6BZDf8?g_st=ic"
          },
          {
            detail: "อยู่บริเวณที่เก็บอาหาร อยู่ติดกัน 2 ตู้",
            image: drive("https://drive.google.com/file/d/1I9B8L-foD-pCAkbVnHTf58kDNT79J6Cc/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/oQ9pU7X93LGg6sA36?g_st=ic"
          },
          {
            detail: "อยู่บริเวณที่เก็บอาหาร อยู่ติดกัน 2 ตู้",
            image: drive("https://drive.google.com/file/d/1HSX42WyGYxi01XuvQxkVXDLJXrPBBTn5/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/oQ9pU7X93LGg6sA36?g_st=ic"
          }
        ]
      }
    ]
  },
  // โรงอาหารสังคมศาสตร์ 2
  {
    name: "โรงอาหารสังคมศาสตร์ 2",
    aliases: ["โรงอาหาร", "โรง", "โรงอาหารสังคมศาสตร์ 2", "โรงอาหาร sc2"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "อยู่ข้างร้านน้ำยูป้า อยู่ติดกัน 2 ตู้",
            image: drive("https://drive.google.com/file/d/1OwYVcHlp6jB1TWNXbvUTLc3pqvsV3RHj/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/djnfN2S4L6m21sdm6?g_st=ic"
          },
          {
            detail: "อยู่ข้างร้านน้ำยูป้า อยู่ติดกัน 2 ตู้",
            image: drive("https://drive.google.com/file/d/1hGXS3tZ6dyzld4pzULy_Z8KE_S_R0Mkj/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/djnfN2S4L6m21sdm6?g_st=ic"
          }
        ]
      }
    ]
  },
  //ศูนย์อาหารวิทยาศาสตร์และเทคโนโลยี
  {
    name: "ศูนย์อาหารวิทยาศาสตร์และเทคโนโลยี",
    aliases: ["ศูนย์อาหารวิทยาศาสตร์และเทคโนโลยี", "วิทย์", "วิดยา", "โรงอาหาร"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "จะอยู่ที่โรงอาหารคณะวิทย์ อยู่หน้าร้านน้ำสุดท้าย ติดกัน 2 ตู้ ตรงทางออก",
            image: drive("https://drive.google.com/file/d/1b1AaySEc6g1ECMVXqe0WoKkCYCLAWJh9/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/aFNWbR5UKwEy65iv5"
          },
          {
            detail: "จะอยู่ที่โรงอาหารคณะวิทย์ อยู่หน้าร้านน้ำสุดท้าย ติดกัน 2 ตู้ ตรงทางออก",
            image: drive("https://drive.google.com/file/d/1PMA8rMVDyrkinnUf3PGMaO3CRrc0EO9V/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/aFNWbR5UKwEy65iv5"
          }
        ]
      }
    ]
  },
  //ศูนย์อาหารทิวสน
  {
    name: "ศูนย์อาหารทิวสน",
    aliases: ["ศูนย์อาหารทิวสน", "ทิวสน", "โรงอาหาร"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "อยู่ข้างร้านข้าวหน้าไก่",
            image: drive("https://drive.google.com/file/d/162eUharNvMKds5xAPsKBoOtvEmY3B1Go/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/WwWuTgw6dqqUD5wUA?g_st=ic"
          }
        ]
      }
    ]
  },
  //ยิมเนเซียม 4 (GYM 4)
  {
    name: "ยิมเนเซียม 4 (GYM 4)",
    aliases: ["ยิม", "ยิม 4", "ยิมเนเซียม 4","gym 4"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "อยู่หน้าทางเข้ายิมเนเซียม 5 อยู่ตรงข้ามกับทางเข้ายิมเนเซียม 4",
            image: drive("https://drive.google.com/file/d/16vDwpJpMaVnP4hGAGCCs2X5SerRK0YSs/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/dFHLBCNnggrhXKzK6?g_st=ic"
          }
        ]
      }
    ]
  },
  //ยิมเนเซียม 5 (GYM 5)
  {
    name: "ยิมเนเซียม 5 (GYM 5)",
    aliases: ["ยิม", "ยิม 5", "ยิมเนเซียม 5","gym 5"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "อยู่หน้าทางเข้ายิมเนเซียม 5",
            image: drive("https://drive.google.com/file/d/1XAnyvRlmm9ceQtuZ0tZL8j115H__7iwh/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/dFHLBCNnggrhXKzK6?g_st=ic"
          }
        ]
      }
    ]
  },
  //ยิมเนเซียม 7 (GYM 7)
  {
    name: "ยิมเนเซียม 7 (GYM 7)",
    aliases: ["ยิม", "ยิม 7", "ยิมเนเซียม 7","gym 7"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "ให้เดินตรงไปบริเวณที่ดึงข้อแล้วมองไปทางขวาแล้วจะเห็นห้องน้ำให้เดินตรงไปแล้วจะเห็นห้องน้ำรวม (All Gender)  ที่กดน้ำจะอยู่ข้าง ๆ",
            image: drive("https://drive.google.com/file/d/1jCh3xM61MDnqwmLUO0fI9RnaHdeQpyTs/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/ZiyBtPyoBrFvauY28"
          }
        ]
      }
    ]
  },
  //อาคารบรรยายรวม 1 (LC.1)
  {
    name: "อาคารบรรยายรวม 1 (LC.1)",
    aliases: ["บร", "บร 1", "LC","LC 1","บรรยายเรียนรวม 1"],
    floors: [
      {
        floor: 2,
        spots: [
          {
            detail: "บรรไดทางขึ้นฝั่งร้าน Print อยู่ฝั่งซ้ายเมื่อหันหน้าออกจากบันได",
            image: drive("https://drive.google.com/file/d/1PZuMTMxha1yT8tgZVvE9EFD2CSkkx4O3/view?usp=drivesdk"),
            mapUrl: "https://maps.app.goo.gl/w6rNjB8yMnXpnkeLA?g_st=ac"
          }
        ]
      }
    ]
  },
  //อาคารบรรยายรวม 3 (LC.3)
  {
    name: "อาคารบรรยายรวม 3 (LC.3)",
    aliases: ["บร", "บร 3", "LC","LC 3","บรรยายเรียนรวม 3"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "เดินเข้าทางบร.3 จะเจอที่นั่งข้างบันได จะอยู่ฝั่งขวา",
            image: drive("https://drive.google.com/file/d/1n0F4e4PkNRswXId_oHbpm_Z5NjkuWTSz/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/nALt8CaSBoTUt2mK9"
          }
        ]
      }
    ]
  },
  //อาคารบรรยายรวม 4 (LC.4)
  {
    name: "อาคารบรรยายรวม 4 (LC.4)",
    aliases: ["บร", "บร 4", "LC","LC 4","บรรยายเรียนรวม 4"],
    floors: [
      {
        floor: 1,
        spots: [
          {
            detail: "จะอยู่ที่โรงอาหารคณะวิทย์ อยู่หน้าร้านน้ำสุดท้าย ติดกัน 2 ตู้ ตรงทางออก",
            image: drive("https://drive.google.com/file/d/1b1AaySEc6g1ECMVXqe0WoKkCYCLAWJh9/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/aFNWbR5UKwEy65iv5"
          },
          {
            detail: "จะอยู่ที่โรงอาหารคณะวิทย์ อยู่หน้าร้านน้ำสุดท้าย ติดกัน 2 ตู้ ตรงทางออก",
            image: drive("https://drive.google.com/file/d/1PMA8rMVDyrkinnUf3PGMaO3CRrc0EO9V/view?usp=drive_link"),
            mapUrl: "https://maps.app.goo.gl/aFNWbR5UKwEy65iv5"
          }
        ]
      }
    ]
  },
].map(item => typeof item === "string" ? { name: item.trim(), aliases: [], floors: [] } : item);

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const results = document.getElementById("results");
const resultList = document.getElementById("resultList");
const noResult = document.getElementById("noResult");

function matches(location, q) {
  return [location.name, ...location.aliases].some(n => n.toLowerCase().includes(q));
}

function spotHTML(spot) {
  const img = spot.image
    ? `<img class="spotImg" src="${escapeHTML(spot.image)}" alt="ตู้กดน้ำ: ${escapeHTML(spot.detail || "")}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`
    : "";
  // The placeholder shows when there is no image, or when the image fails to load.
  const media = `
      <div class="spotMedia">
        ${img}
        <div class="spotPlaceholder"><span aria-hidden="true">🖼️</span>ยังไม่มีรูปภาพ</div>
      </div>`;
  const text = spot.detail
    ? `<p class="spotText">${escapeHTML(spot.detail)}</p>`
    : `<p class="spotText noData">ยังไม่มีคำอธิบายตำแหน่ง</p>`;
  const map = spot.mapUrl
    ? `<a class="mapLink" href="${escapeHTML(spot.mapUrl)}" target="_blank" rel="noopener">📍 เปิดใน Google Maps</a>`
    : "";
  return `
    <div class="spot">${media}
      <div class="spotBody">
        ${text}
        ${map}
      </div>
    </div>`;
}

function floorHTML(floor) {
  return `
    <div class="floor">
      <h3 class="floorTitle">ชั้น ${escapeHTML(floor.floor)}</h3>
      ${floor.spots.map(spotHTML).join("")}
    </div>`;
}

function cardHTML(location, index) {
  const floors = [...location.floors].sort((a, b) => a.floor - b.floor);
  const body = floors.length
    ? floors.map(floorHTML).join("")
    : `<p class="noData">ยังไม่มีข้อมูลตู้กดน้ำ</p>`;
  return `
    <article class="resultItem">
      <span class="resultNum">${index + 1}</span>
      <p class="resultName">${escapeHTML(location.name)}</p>
      ${body}
    </article>`;
}

function render(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    results.hidden = true;
    return;
  }

  const found = locations.filter(location => matches(location, q));
  resultList.innerHTML = found.map(cardHTML).join("");
  noResult.hidden = found.length !== 0;
  results.hidden = false;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

form.addEventListener("submit", event => {
  event.preventDefault();
  render(input.value);
});

input.addEventListener("input", () => {
  clearButton.hidden = input.value.length === 0;
  render(input.value);
});

clearButton.addEventListener("click", () => {
  input.value = "";
  clearButton.hidden = true;
  results.hidden = true;
  input.focus();
});