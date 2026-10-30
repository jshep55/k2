/* K2 Golf Studio — fills in site info from site-config.js and runs the small bits of UI. */
(function () {
  var C = window.K2_CONFIG;
  if (!C) return;

  function isPlaceholder(v) { return !v || /\[.*\]/.test(v); }

  // Values available to data-k2="..." (text) and data-k2-href="..." (links)
  var a = C.address;
  var values = {
    businessName: C.businessName,
    coachName: C.coachName,
    coachFullName: C.coachFullName,
    coachTitle: C.coachTitle,
    phone: C.phone,
    email: C.email,
    street: a.street,
    cityLine: a.city + ", " + a.state + " " + a.zip,
    addressFull: a.street + ", " + a.city + ", " + a.state + " " + a.zip,
    year: String(new Date().getFullYear())
  };
  var links = {
    booking: C.bookingLink,
    tel: "tel:" + C.phoneDial,
    email: "mailto:" + C.email,
    maps: a.mapsLink,
    reviews: C.googleReviewsLink,
    instagram: C.social.instagram,
    facebook: C.social.facebook,
    youtube: C.social.youtube
  };

  document.querySelectorAll("[data-k2]").forEach(function (el) {
    var v = values[el.getAttribute("data-k2")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-k2-href]").forEach(function (el) {
    var v = links[el.getAttribute("data-k2-href")];
    if (v != null) el.setAttribute("href", v);
  });

  // Hours lists
  document.querySelectorAll("[data-k2-hours]").forEach(function (el) {
    el.innerHTML = "";
    C.hours.forEach(function (h) {
      var li = document.createElement("li");
      var d = document.createElement("span");
      var t = document.createElement("span");
      d.textContent = h.days;
      t.textContent = h.time;
      li.append(d, t);
      el.appendChild(li);
    });
  });

  // Membership cards
  document.querySelectorAll("[data-k2-plans]").forEach(function (el) {
    el.innerHTML = C.memberships.map(function (p) {
      return (
        '<article class="plan' + (p.featured ? " plan--featured" : "") + '">' +
          (p.featured ? '<span class="plan__badge">Most Popular</span>' : "") +
          '<h3 class="plan__name">' + p.name + "</h3>" +
          '<p class="plan__tagline">' + p.tagline + "</p>" +
          '<p class="plan__price"><span>' + p.price + "</span>" + p.period + "</p>" +
          '<ul class="plan__features">' +
            p.features.map(function (f) { return "<li>" + f + "</li>"; }).join("") +
          "</ul>" +
          '<a class="btn ' + (p.featured ? "btn--gold" : "btn--outline-dark") + '" href="' + C.bookingLink + '">Get Started</a>' +
        "</article>"
      );
    }).join("");
  });

  // Local business structured data for Google
  var schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: C.businessName,
    description: "Golf lessons, TourPutt putting studio, TrackMan club fitting and open practice in La Mirada, CA with PGA Professional " + C.coachName + ".",
    telephone: C.phoneDial,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: "US"
    },
    areaServed: ["La Mirada", "Whittier", "Cerritos", "Fullerton", "Buena Park", "La Habra", "Norwalk"],
    employee: { "@type": "Person", name: C.coachFullName.replace(/\s*\[.*\]/, ""), jobTitle: C.coachTitle },
    hasMap: a.mapsLink
  };
  if (!isPlaceholder(C.siteUrl)) {
    schema.url = C.siteUrl;
    schema.logo = schema.image = C.siteUrl + "/images/apple-touch-icon.png";
  }
  if (!isPlaceholder(C.email)) schema.email = C.email;
  if (C.hoursForGoogle.length) schema.openingHours = C.hoursForGoogle;
  var sameAs = Object.keys(C.social).map(function (k) { return C.social[k]; }).filter(function (u) { return !isPlaceholder(u); });
  if (sameAs.length) schema.sameAs = sameAs;
  var s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(schema);
  document.head.appendChild(s);

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Header shadow on scroll
  var onScroll = function () { header && header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
