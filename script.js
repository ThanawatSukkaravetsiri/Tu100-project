// Temporary data from the Rangsit-campus location list in the provided image.
// When your Google Sheet is ready, this array will be replaced with Sheet data.
const locations = [
  "กลุ่มหอพักเอเชียเกมส์",
  "ตลาดนัดอินเตอร์โซน",
  "Green Canteen",
  "อาคารกิจกรรมนักศึกษา",
  "Mini Stadium",
  "อาคารเรียนธรรมศาสตร์ 7",
  "Main Stadium",
  "อาคารโดมบริหาร",
  "อาคารบรรยายรวม 1",
  "หอสมุดป๋วย อึ๊งภากรณ์",
  "SC1 อาคารเรียนรวมสังคมศาสตร์",
  "SC2 อาคารเรียนรวมสังคมศาสตร์ 2 ",
  "SC3 อาคารเรียนรวมสังคมศาสตร์ 3",
  "โรงอาหารคณะวิทยาศาสตร์",
  "อาคารเรียนชั้น 4-6",
  "คณะวิศวกรรมศาสตร์",
  "สถาบันเทคโนโลยีนานาชาติสิรินธร",
  "คณะสหเวชศาสตร์",
  "กิตติยาคาร",
  "คณะวิทยาศาสตร์และเทคโนโลยี",
  "อุทยานการเรียนรู้ป๋วย 100 ปี",
  "อาคารเรียนวัฒน์",
  "โรงอาหารธรรมศาสตร์สโมสรเพียรเกียรติ",
  "ศูนย์ประชุมธรรมศาสตร์รังสิต"
];

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const results = document.getElementById("results");
const resultList = document.getElementById("resultList");
const noResult = document.getElementById("noResult");

function render(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    results.hidden = true;
    return;
  }

  const matches = locations.filter(location =>
    location.toLowerCase().includes(q)
  );

  resultList.innerHTML = matches.map((location, index) => `
    <article class="resultItem">
      <span class="resultNum">${index + 1}</span>
      <p class="resultName">${escapeHTML(location)}</p>
    </article>
  `).join("");

  noResult.hidden = matches.length !== 0;
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
