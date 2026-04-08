(function () {
  var AUTH_KEY = "zist-authenticated";
  var isAuthenticated = localStorage.getItem(AUTH_KEY) === "true";

  if (!isAuthenticated) {
    return;
  }

  var path = window.location.pathname;

  var primaryLinks = [
    { href: "/index.html", label: "Home", match: /\/index\.html$|\/$/ },
    {
      href: "/html/dashboard.html",
      label: "Dashboard",
      match: /\/dashboard\.html$/,
    },
    { href: "/html/library.html", label: "Library", match: /\/library\.html$/ },
    {
      href: "/html/quiz-hub.html",
      label: "Quiz Hub",
      match: /\/quiz-hub\.html$/,
    },
    { href: "/html/feed.html", label: "Feed", match: /\/feed\.html$/ },
    { href: "/html/profile.html", label: "Profile", match: /\/profile\.html$/ },
  ];

  var header = document.createElement("header");
  header.className = "site-navbar";

  var inner = document.createElement("div");
  inner.className = "site-navbar-inner";

  var brand = document.createElement("a");
  brand.className = "site-brand";
  brand.href = "/index.html";
  brand.textContent = "ZIST";

  var nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Main navigation");

  primaryLinks.forEach(function (item) {
    var a = document.createElement("a");
    a.className = "site-nav-link";
    a.href = item.href;
    a.textContent = item.label;

    if (item.match.test(path)) {
      a.classList.add("active");
    }

    nav.appendChild(a);
  });

  var auth = document.createElement("div");
  auth.className = "site-auth";

  var logoutButton = document.createElement("button");
  logoutButton.type = "button";
  logoutButton.className = "site-auth-link site-logout-btn";
  logoutButton.textContent = "Logout";
  logoutButton.setAttribute("aria-label", "Logout");

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "/html/login.html";
  });

  auth.appendChild(logoutButton);

  inner.appendChild(brand);
  inner.appendChild(nav);
  inner.appendChild(auth);
  header.appendChild(inner);

  document.body.insertBefore(header, document.body.firstChild);
})();
