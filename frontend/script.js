const API_URL = "https://ducktracker-statistics.onrender.com/api/text";

async function sendText() {
  const text = document.getElementById("inputText").value;
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  document.getElementById("inputText").value = "";
  loadTexts();
}

async function loadTexts() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const list = document.getElementById("textList");
  list.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.text;
    list.appendChild(li);
  });
}

loadTexts();
