(function () {
  var STORAGE_KEY = "zist-theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("theme-dark");
    } else {
      root.classList.remove("theme-dark");
    }
  }

  var savedTheme = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(savedTheme);

  var button = document.createElement("button");
  button.type = "button";
  button.className = "theme-toggle";

  function updateButtonText() {
    var dark = root.classList.contains("theme-dark");
    button.textContent = dark ? "Switch to Light" : "Switch to Dark";
    button.setAttribute("aria-label", button.textContent);
    button.title = button.textContent;
  }

  button.addEventListener("click", function () {
    var dark = root.classList.toggle("theme-dark");
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    updateButtonText();
  });

  updateButtonText();
  document.body.appendChild(button);
})();
