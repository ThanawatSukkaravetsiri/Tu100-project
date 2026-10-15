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
  "กลุ่มหอพักเอเชียเกมส์",
  "ตลาดนัดอินเตอร์โซน",
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
  "อาคารกิจกรรมนักศึกษา",
  "Mini Stadium",
  "อาคารเรียนธรรมศาสตร์ 7",
  "Main Stadium",
  "อาคารโดมบริหาร",
  "อาคารบรรยายรวม 1",
  "หอสมุดป๋วย อึ๊งภากรณ์",
  {
    name: "SC1 อาคารเรียนรวมสังคมศาสตร์",
    aliases: ["SC", "SC.", "อาคารเรียนรวมสังคมศาสตร์"],
    floors: [
      { floor: 1, spots: [
        { detail: "บริเวณทางที่คณะนิติศาสตร์ คณะรัฐศาสตร์ และคณะสังคมสงเคราะห์ อยู่ทางขวาเมื่อหันหน้าเข้าบันไดหลัก",
          image: drive("https://drive.google.com/file/d/1zK0_ZYZchJwWMG3q_BYCee-l0V8FpEqs/view?usp=drive_link"),
          mapUrl: "https://maps.app.goo.gl/fsJG6cb98jZrYGAW7?g_st=ic"
        },
        { detail: "บริเวณทางไปห้อง SC1014-1016 อยู่ทางซ้ายเมื่อหันหน้าเข้าบันไดหลัก",
          image: drive("https://drive.google.com/file/d/1ARpkL61kn8cLSVDQGvIEughCJIn-HjJs/view?usp=sharing"),
          mapUrl: "https://maps.app.goo.gl/wBKckqLk5osRTuxGA?g_st=ic"
        },
      ]},
      { floor: 2, spots: [
        { detail: "บริเวณทางไปห้องคอมพิวเตอร์ SC2038 อยู่ทางขวาเมื่อหันหน้าเข้าบันไดหลัก" },
        { detail: "บริเวณทางไปห้อง SC1014-1016 อยู่ทางซ้ายเมื่อหันหน้าเข้าบันไดหลัก" }
      ]},
      { floor: 3, spots: [
        { detail: "บริเวณทางไปห้อง SC3029-3039 อยู่ทางขวาเมื่อหันหน้าเข้าบันไดหลัก" },
        { detail: "บริเวณทางไปห้อง SC3010-3020 อยู่ทางซ้ายเมื่อหันหน้าเข้าบันไดหลัก" }
      ]},
      { floor: 4, spots: [
        { detail: "บริเวณทางไปห้อง SC4004-4006" },
        { detail: "บริเวณทางไปห้อง SC4028-4030" }
      ]}
    ]
  },
  "SC2 อาคารเรียนรวมสังคมศาสตร์ 2",
  "SC3 อาคารเรียนรวมสังคมศาสตร์ 3",
  "โรงอาหารคณะวิทยาศาสตร์",
  "คณะวิศวกรรมศาสตร์",
  "สถาบันเทคโนโลยีนานาชาติสิรินธร",
  "คณะสหเวชศาสตร์",
  "กิตติยาคาร",
  "คณะวิทยาศาสตร์และเทคโนโลยี",
  "อุทยานการเรียนรู้ป๋วย 100 ปี",
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