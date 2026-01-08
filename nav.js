fetch("https://antonwallin999.github.io/RP9-NAV/map.json")
  .then(r => r.json())
  .then(map => {
    const nav = document.createElement("div");
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.background = "#111";
    nav.style.color = "#fff";
    nav.style.padding = "10px";
    nav.style.zIndex = "9999";
    nav.innerHTML = "<b>RP9</b><br>";
    for (const k in map) {
      nav.innerHTML += `<a href='${map[k]}' style='color:#6cf'>${k}</a><br>`;
    }
    document.body.appendChild(nav);
  });
