/* ==========================================================================
   Zakary Gaillard-Duchassin — Tutorat
   - Le texte FRANÇAIS est directement dans index.html.
   - Le texte ANGLAIS est dans l'objet EN ci-dessous (mêmes clés que data-i18n).
   - Les PRIX sont dans l'objet PRICES ci-dessous (une seule place à modifier).
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Prix (en dollars) ---------- */
  var PRICES = {
    session: {
      uniInPerson: 100, uniHourly: 50, uniOnline: 45,
      hsInPerson: 80, hsHourly: 40, hsOnline: 35,
      kidsInPerson: 80, kidsShort: 60, kidsOnline: 35
    },
    essentiel: { uni: 185, uniRegular: 200, hs: 145, hsRegular: 160 },
    intensif:  { uni: 360, uniRegular: 400, hs: 290, hsRegular: 320 },
    exam:      { uni: 185, uniRegular: 200, hs: 145, hsRegular: 160 }
  };

  /* ---------- Textes anglais ---------- */
  var EN = {
    "meta.title": "Math & Computer Science Tutor in Montréal | Zakary Gaillard-Duchassin",
    "meta.description": "Math and computer science tutoring in Montréal, from high school to university: programming, calculus, linear algebra, statistics, high school math and intro to coding for ages 8–14. In person or online. Free 15-min first meeting.",

    "skip": "Skip to content",
    "brand.sub": "Math &amp; computer science tutoring",
    "nav.label": "Main navigation",
    "nav.menu": "Open menu",
    "nav.menuClose": "Close menu",
    "nav.about": "About",
    "nav.subjects": "Subjects",
    "nav.prices": "Prices",
    "nav.rules": "Policies",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    "cta.bookShort": "Book a free meeting",
    "cta.bookLong": "Book a free 15-min meeting",
    "cta.prices": "See prices",
    "cta.start": "Start with the free meeting",
    "cta.mobile": "Book the free meeting",

    "hero.eyebrow": "Montréal · in person or online",
    "hero.title": "Math and computer science tutoring in Montréal, from high school to university",
    "hero.sub": "Clear, step-by-step explanations to truly understand the material and walk into the exam with confidence. Also: intro to coding for ages 8–14.",
    "badge.years": "5+ years of teaching",
    "badge.ta": "Teaching assistant at UdeM",
    "badge.gpa": "3.89/4.3 GPA",

    "about.photoAlt": "Photo of Zakary Gaillard-Duchassin",
    "about.eyebrow": "About me",
    "about.title": "Hi, I'm Zakary.",
    "about.p1": "I hold an Honours B.Sc. in Computer Science from Université de Montréal, with a <strong>cumulative GPA of 3.89/4.3</strong> and the excellence distinction in 7 of 8 terms. I'm now taking graduate courses in operations research.",
    "about.p2": "I've been teaching since 2019: as a tutor at Cégep du Vieux-Montréal, as a video game design instructor at StudioXP for youth aged 8 to 18, and as a teaching assistant at UdeM.",
    "about.p3": "My approach: I'm patient, I explain things step by step and I adapt to each student's level. I focus on understanding rather than memorizing, so students walk into their exams with confidence.",
    "about.f1": "<strong>Honours B.Sc. in Computer Science</strong>, Université de Montréal (2021–2025): A+ in algorithms, data structures, linear optimization, software engineering and databases.",
    "about.f2": "<strong>Graduate coursework in operations research</strong>, UdeM (2025–2026): A in operations research methods and integer programming.",
    "about.f3": "<strong>Teaching assistant at UdeM</strong>: IFT1025 Programming 2 (Java, Fall 2025) and IFT2015 Data Structures (Winter 2026).",
    "about.f4": "<strong>Tutor at Cégep du Vieux-Montréal</strong> (2019–2020): differential calculus and cell biology.",
    "about.f5": "<strong>Video game design instructor at StudioXP</strong> (since 2022), teaching youth aged 8 to 18.",
    "about.f6": "Full-stack developer (React/Java) of a research web platform, co-author of a paper in <em>Genome Biology</em> (2026) and recipient of an NSERC research award (2025).",
    "about.f7": "Bilingual French and English, conversational Spanish.",

    "subjects.eyebrow": "Subjects",
    "subjects.title": "What I teach",
    "subjects.uni.title": "University",
    "subjects.uni.1": "Programming (Java, Python)",
    "subjects.uni.2": "Object-oriented programming",
    "subjects.uni.3": "Data structures",
    "subjects.uni.4": "Algorithms",
    "subjects.uni.5": "Databases (SQL)",
    "subjects.uni.6": "Intro to operations research and linear optimization",
    "subjects.cegep.title": "Cégep",
    "subjects.cegep.1": "Programming courses",
    "subjects.cegep.2": "Calculus I and II",
    "subjects.cegep.3": "Linear algebra",
    "subjects.cegep.4": "Statistics and probability",
    "subjects.hs.title": "High school (Sec. 3 to 5)",
    "subjects.hs.1": "Math CST, TS and SN",
    "subjects.hs.2": "Ministry exam preparation",
    "subjects.hs.3": "Study methods",
    "subjects.kids.title": "Kids aged 8 to 14",
    "subjects.kids.1": "Intro to coding (Scratch, beginner Python)",
    "subjects.kids.2": "Video game design and logic",
    "subjects.kids.3": "A fun, project-based approach",

    "steps.eyebrow": "Process",
    "steps.title": "How it works",
    "steps.1.title": "Free 15-min meeting",
    "steps.1.text": "A short video call to understand your needs, the course and your goals. No commitment.",
    "steps.2.title": "First session",
    "steps.2.text": "In person or online, whichever works best for you.",
    "steps.3.title": "Regular follow-up",
    "steps.3.text": "Regular sessions and, with the packages, questions by message between sessions.",

    "prices.eyebrow": "Prices",
    "prices.title": "Simple, transparent pricing",
    "prices.free": "<strong>Free first meeting</strong>: 15 minutes by video call.",
    "prices.sessionTitle": "Single sessions",
    "prices.caption": "Prices per session, in person and online",
    "prices.colLevel": "Level",
    "prices.colInPerson": "In person",
    "prices.colInPersonDur": "(2 h)",
    "prices.colOnline": "Online",
    "prices.colOnlineDur": "(1 h)",
    "prices.rowUni": "University &amp; cégep",
    "prices.rowHs": "High school",
    "prices.rowKids": "Kids aged 8 to 14",
    "prices.uniHourly": "(<span data-price=\"session.uniHourly\"></span>/h)",
    "prices.hsHourly": "(<span data-price=\"session.hsHourly\"></span>/h)",
    "prices.kidsShort": "(or <span data-price=\"session.kidsShort\"></span> for 1.5 h)",
    "prices.inPersonNote": "<strong>In person (2 h, or 1.5 h for kids)</strong>: at the student's home or in a public place in Montréal (library, café). No travel fee within 45 minutes of Préfontaine metro station by public transit. Farther away? Get in touch.",
    "prices.onlineNote": "<strong>Online (1 h)</strong>: on Zoom or Google Meet, with screen sharing and a whiteboard.",
    "prices.packagesTitle": "Monthly support packages",
    "prices.packagesLead": "2-hour in-person sessions, with questions by message between sessions included.",
    "prices.popular": "Most popular",
    "prices.essentielDesc": "2 in-person sessions (2 × 2 h) + questions by message",
    "prices.intensifDesc": "4 in-person sessions (4 × 2 h) + questions by message",
    "prices.lvlUni": "University &amp; cégep",
    "prices.lvlHsKids": "High school &amp; kids",
    "prices.perMonth": "/month",
    "prices.insteadOf": "instead of",
    "prices.examTag": "Before an exam",
    "prices.examName": "Exam package",
    "prices.examDesc": "2 in-person sessions of 2 h within 2 weeks + priority questions (reply within 12 h) until the exam",

    "rules.title": "Policies",
    "rules.q.title": "Questions between sessions",
    "rules.q.text": "Included in the packages. Short questions by text, WhatsApp or Discord (a photo of an exercise, a bug, a concept). Reply <strong>within 24 h, between 9 am and 9 pm</strong> (12 h with the exam package). Longer questions are moved to the next session.",
    "rules.integrity.title": "Academic integrity",
    "rules.integrity.text": "I explain and guide, but I don't do graded work for you.",
    "rules.cancel.title": "Cancellation",
    "rules.cancel.text": "Please give at least 24 h notice. Otherwise, the session is charged.",
    "rules.pay.title": "Payment",
    "rules.pay.text": "By Interac e-Transfer. Packages are paid at the start of the month, single sessions after each session.",

    "book.eyebrow": "Booking",
    "book.title": "Book your free 15-minute meeting",
    "book.lead": "Pick a time that suits you. We'll talk about your needs and see if I'm the right person to help.",
    "book.loading": "Loading the calendar…",
    "book.fallbackError": "The calendar couldn't be displayed here.",
    "book.fallbackBtn": "Open the booking page",
    "book.altText": "Calendar not showing?",
    "book.altLink": "Book directly on Cal.com",
    "book.altOr": "or",
    "book.altContact": "send me a message",

    "contact.eyebrow": "Contact",
    "contact.title": "Questions? Send me a message",
    "contact.lead": "Briefly describe the situation (course, difficulties, deadlines) and I'll get back to you quickly.",
    "contact.emailLabel": "Or by email:",

    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.optional": "(optional)",
    "form.role": "I am",
    "form.roleStudent": "A student",
    "form.roleParent": "A parent",
    "form.level": "Level",
    "form.levelChoose": "Choose…",
    "form.levelUni": "University",
    "form.levelCegep": "Cégep",
    "form.levelHs": "High school",
    "form.levelKids": "Kids aged 8 to 14",
    "form.subject": "Subject or course",
    "form.subjectPh": "e.g. Calculus I, Java, Sec. 5 math",
    "form.format": "Preferred format",
    "form.formatInPerson": "In person",
    "form.formatOnline": "Online",
    "form.formatEither": "Either",
    "form.message": "Message",
    "form.required": "Required field",
    "form.submit": "Send",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.1.q": "Where do in-person sessions take place?",
    "faq.1.a": "At the student's home or in a public place in Montréal, such as a library or café. There's no travel fee within 45 minutes of Préfontaine metro station by public transit. If you're farther away, get in touch and we'll find a solution.",
    "faq.2.q": "Can you do my assignments?",
    "faq.2.a": "No. I explain and guide, but I don't do graded work for you. I can, however, help you understand the material and the method so you can succeed on your own.",
    "faq.3.q": "How do questions by message work?",
    "faq.3.a": "With a package, you can send me short questions by text, WhatsApp or Discord: a photo of an exercise, a bug, a concept. I reply within 24 h, between 9 am and 9 pm (within 12 h with the exam package). Longer questions are moved to the next session.",
    "faq.4.q": "How do I pay?",
    "faq.4.a": "By Interac e-Transfer. Packages are paid at the start of the month and single sessions after each session.",
    "faq.5.q": "Can a parent attend the session?",
    "faq.5.a": "Yes, of course. Parents are welcome at the free meeting and at sessions, especially with younger kids.",
    "faq.6.q": "What if I need to cancel?",
    "faq.6.a": "Let me know at least 24 h in advance and we'll reschedule. Cancellations with less than 24 h notice are charged.",
    "faq.7.q": "Do you help with exam prep?",
    "faq.7.a": "Yes. The exam package includes 2 sessions of 2 h within 2 weeks and priority questions (reply within 12 h) until the exam. For high school, I also prepare students for ministry exams.",
    "faq.8.q": "Do you tutor in English?",
    "faq.8.a": "Yes. I'm bilingual: sessions can be in French or English, whichever you prefer.",

    "footer.tutoring": "Tutoring",
    "footer.book": "Book a free meeting",
    "footer.contact": "Contact form"
  };

  /* Messages générés par le script (FR et EN) */
  var MSG = {
    fr: {
      "nav.menuClose": "Fermer le menu",
      "err.required": "Ce champ est obligatoire.",
      "err.choose": "Veuillez faire un choix.",
      "err.email": "Veuillez entrer une adresse courriel valide (ex. : nom@exemple.com).",
      "form.sending": "Envoi en cours…",
      "form.success": "Merci ! Votre message a bien été envoyé. Je vous réponds rapidement.",
      "form.error": "Oups, le message n'a pas pu être envoyé. Réessayez dans un instant ou écrivez-moi directement à ",
      "form.invalid": "Veuillez corriger les champs indiqués.",
      "book.notReady": "Le calendrier de réservation sera bientôt disponible. En attendant, écrivez-moi avec le formulaire ci-dessous."
    },
    en: {
      "nav.menuClose": "Close menu",
      "err.required": "This field is required.",
      "err.choose": "Please make a choice.",
      "err.email": "Please enter a valid email address (e.g. name@example.com).",
      "form.sending": "Sending…",
      "form.success": "Thank you! Your message has been sent. I'll get back to you quickly.",
      "form.error": "Oops, your message couldn't be sent. Please try again in a moment or email me directly at ",
      "form.invalid": "Please fix the fields indicated.",
      "book.notReady": "The booking calendar will be available soon. In the meantime, send me a message with the form below."
    }
  };

  var STORAGE_KEY = "zgd-lang";
  var FR = {};               // rempli au démarrage à partir du HTML
  var currentLang = "fr";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function t(key) {
    var dict = currentLang === "en" ? EN : FR;
    if (MSG[currentLang] && MSG[currentLang][key] != null) return MSG[currentLang][key];
    return dict[key] != null ? dict[key] : FR[key];
  }

  /* ---------- Prix ---------- */
  function formatPrice(n) {
    return currentLang === "en" ? "$" + n : n + " $"; // "100 $" (Québec) / "$100"
  }
  function renderPrices() {
    $all("[data-price]").forEach(function (el) {
      var parts = el.getAttribute("data-price").split(".");
      var value = PRICES[parts[0]] && PRICES[parts[0]][parts[1]];
      if (value != null) el.textContent = formatPrice(value);
    });
  }

  /* ---------- Langue ---------- */
  function captureFrench() {
    $all("[data-i18n]").forEach(function (el) {
      FR[el.getAttribute("data-i18n")] = el.innerHTML;
    });
    $all("[data-i18n-attr]").forEach(function (el) {
      parseAttrMap(el).forEach(function (pair) {
        FR[pair[1]] = el.getAttribute(pair[0]) || "";
      });
    });
    FR["meta.title"] = document.title;
    var desc = $('meta[name="description"]');
    FR["meta.description"] = desc ? desc.getAttribute("content") : "";
    FR["nav.menu"] = FR["nav.menu"] || "Ouvrir le menu";
  }

  function parseAttrMap(el) {
    return el.getAttribute("data-i18n-attr").split(";").map(function (s) {
      return s.trim().split(":");
    }).filter(function (p) { return p.length === 2; });
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "fr";
    var dict = currentLang === "en" ? EN : FR;

    document.documentElement.lang = currentLang === "en" ? "en-CA" : "fr-CA";

    $all("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[key] != null ? dict[key] : FR[key];
      if (val != null && el.innerHTML !== val) el.innerHTML = val;
    });
    $all("[data-i18n-attr]").forEach(function (el) {
      parseAttrMap(el).forEach(function (pair) {
        var val = dict[pair[1]] != null ? dict[pair[1]] : FR[pair[1]];
        if (val != null) el.setAttribute(pair[0], val);
      });
    });

    document.title = dict["meta.title"] || FR["meta.title"];
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.description"] || FR["meta.description"]);

    $all(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === currentLang));
    });

    var formLang = $("#form-lang");
    if (formLang) formLang.value = currentLang;

    renderPrices();
    updateMenuLabel();
    refreshErrors();
    setupEmail();
  }

  function getInitialLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(window.location.search).get("lang"); } catch (e) { /* vieux navigateur */ }
    if (fromUrl === "en" || fromUrl === "fr") return fromUrl;
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "fr") return saved;
    } catch (e) { /* stockage bloqué */ }
    return "fr";
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    try { window.localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) { /* stockage bloqué */ }
    // Garde l'URL partageable : ?lang=en en anglais, rien en français
    try {
      var url = new URL(window.location.href);
      if (currentLang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) { /* ignore */ }
  }

  /* ---------- Menu mobile ---------- */
  var menuBtn, nav;
  function updateMenuLabel() {
    if (!menuBtn) return;
    var open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", open ? t("nav.menuClose") : t("nav.menu"));
  }
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    updateMenuLabel();
  }
  function setupMenu() {
    menuBtn = $(".menu-btn");
    nav = $("#site-nav");
    if (!menuBtn || !nav) return;
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    $all("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuBtn.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (menuBtn.getAttribute("aria-expanded") === "true" && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
        setMenu(false);
      }
    });
  }

  /* ---------- Courriel (assemblé en JS pour limiter le pourriel) ---------- */
  function setupEmail() {
    var link = $("#email-link");
    if (!link) return;
    var addr = link.getAttribute("data-user") + "@" + link.getAttribute("data-domain");
    link.href = "mailto:" + addr;
    link.textContent = addr;
  }
  function emailAddress() {
    var link = $("#email-link");
    return link ? link.getAttribute("data-user") + "@" + link.getAttribute("data-domain") : "";
  }

  /* ---------- Bouton mobile collant ---------- */
  function setupMobileCta() {
    var cta = $("#mobile-cta");
    if (!cta || !("IntersectionObserver" in window)) return;
    var targets = [$(".hero-ctas"), $("#reserver"), $("#contact")].filter(Boolean);
    var visible = new Set();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) visible.add(en.target); else visible.delete(en.target);
      });
      cta.classList.toggle("is-hidden", visible.size > 0);
    }, { threshold: 0.05 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Cal.com ---------- */
  function setupCal() {
    var el = $("#cal-inline");
    var fallback = $("#cal-fallback");
    if (!el) return;
    var calLink = el.getAttribute("data-cal-link") || "";
    var loading = $(".cal-loading", el);

    function showFallback(notReady) {
      if (loading) loading.hidden = true;
      el.classList.add("is-placeholder");
      if (fallback) {
        fallback.hidden = false;
        if (notReady) {
          var p = $("p", fallback);
          if (p) { p.removeAttribute("data-i18n"); p.setAttribute("data-msg", "book.notReady"); p.textContent = t("book.notReady"); }
          var btn = $("a", fallback);
          if (btn) btn.hidden = true;
          var alt = $(".cal-alt");
          if (alt) alt.hidden = true;
        }
      }
    }

    // Lien pas encore configuré : on affiche directement la solution de rechange
    if (calLink.indexOf("YOUR-USERNAME") !== -1) { showFallback(true); return; }

    var started = false;
    function load() {
      if (started) return;
      started = true;
      /* Code d'intégration officiel Cal.com */
      (function (C, A, L) {
        var p = function (a, ar) { a.q.push(ar); };
        var d = C.document;
        C.Cal = C.Cal || function () {
          var cal = C.Cal; var ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            var s = d.createElement("script");
            s.src = A;
            s.onerror = function () { showFallback(false); };
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            var api = function () { p(api, arguments); };
            var namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      window.Cal("init", "rencontre", { origin: "https://app.cal.com" });
      window.Cal.ns.rencontre("inline", {
        elementOrSelector: "#cal-inline",
        calLink: calLink,
        config: { layout: "month_view", theme: dark ? "dark" : "light" }
      });
      window.Cal.ns.rencontre("ui", { hideEventTypeDetails: false, layout: "month_view" });

      // Cache « Chargement… » dès que l'iframe apparaît ; après 12 s sans iframe, lien de rechange
      var tries = 0;
      var timer = setInterval(function () {
        tries++;
        if (el.querySelector("iframe")) {
          clearInterval(timer);
          if (loading) loading.hidden = true;
        } else if (tries >= 24) {
          clearInterval(timer);
          showFallback(false);
        }
      }, 500);
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); load(); }
      }, { rootMargin: "800px 0px" });
      io.observe(el);
    } else {
      load();
    }
  }

  /* ---------- Formulaire de contact (Formspree) ---------- */
  var form, statusBox;
  var touched = false;

  function fieldError(id, msgKey) {
    var err = document.getElementById(id);
    if (!err) return;
    err.setAttribute("data-msg", msgKey || "");
    err.textContent = msgKey ? t(msgKey) : "";
  }
  function refreshErrors() {
    $all(".error[data-msg]").forEach(function (err) {
      var k = err.getAttribute("data-msg");
      err.textContent = k ? t(k) : "";
    });
    $all("[data-msg]:not(.error)").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-msg"));
    });
    if (statusBox && !statusBox.hidden && statusBox.getAttribute("data-state")) {
      showStatus(statusBox.getAttribute("data-state"));
    }
  }

  function validate() {
    var ok = true;
    var firstInvalid = null;
    function mark(input, errId, msgKey) {
      var bad = !!msgKey;
      if (input.type === "radio") {
        var fs = input.closest("fieldset");
        fs.classList.toggle("is-invalid", bad);
        $all('input[name="' + input.name + '"]', form).forEach(function (r) { r.setAttribute("aria-invalid", String(bad)); });
      } else {
        input.setAttribute("aria-invalid", String(bad));
      }
      fieldError(errId, msgKey);
      if (bad) { ok = false; if (!firstInvalid) firstInvalid = input; }
    }

    var name = $("#f-name"), email = $("#f-email"), level = $("#f-level"),
        subject = $("#f-subject"), message = $("#f-message");
    mark(name, "e-name", name.value.trim() ? "" : "err.required");
    var ev = email.value.trim();
    mark(email, "e-email", !ev ? "err.required" : (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(ev) ? "" : "err.email"));
    var role = $('input[name="profil"]', form);
    mark(role, "e-role", $('input[name="profil"]:checked', form) ? "" : "err.choose");
    mark(level, "e-level", level.value ? "" : "err.choose");
    mark(subject, "e-subject", subject.value.trim() ? "" : "err.required");
    var fmt = $('input[name="format"]', form);
    mark(fmt, "e-format", $('input[name="format"]:checked', form) ? "" : "err.choose");
    mark(message, "e-message", message.value.trim() ? "" : "err.required");

    return { ok: ok, first: firstInvalid };
  }

  function showStatus(state) {
    statusBox.hidden = false;
    statusBox.setAttribute("data-state", state);
    statusBox.className = "form-status" + (state === "success" ? " is-success" : state === "sending" ? "" : " is-error");
    statusBox.textContent = "";
    if (state === "error") {
      statusBox.appendChild(document.createTextNode(t("form.error")));
      var a = document.createElement("a");
      a.href = "mailto:" + emailAddress();
      a.textContent = emailAddress();
      statusBox.appendChild(a);
      statusBox.appendChild(document.createTextNode("."));
    } else {
      statusBox.textContent = t("form." + state);
    }
  }

  function setupForm() {
    form = $("#contact-form");
    statusBox = $("#form-status");
    if (!form) return;
    var submitBtn = $("#form-submit");

    // Revalide en direct une fois qu'on a tenté d'envoyer
    form.addEventListener("input", function () { if (touched) validate(); });
    form.addEventListener("change", function () { if (touched) validate(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      touched = true;
      var res = validate();
      if (!res.ok) {
        showStatus("invalid");
        res.first.focus();
        return;
      }

      // Honeypot rempli : probablement un robot. On fait semblant que tout va bien.
      if ($("#f-gotcha").value) { showStatus("success"); form.reset(); return; }

      if (!window.fetch || !window.FormData) { form.submit(); return; }

      submitBtn.disabled = true;
      showStatus("sending");
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          touched = false;
          $all("[aria-invalid]", form).forEach(function (el) { el.removeAttribute("aria-invalid"); });
          showStatus("success");
        } else {
          showStatus("error");
        }
        statusBox.focus();
      }).catch(function () {
        // Réseau ou blocage : on revient à un envoi classique du formulaire
        form.submit();
      }).then(function () {
        submitBtn.disabled = false;
      });
    });
  }

  /* ---------- Démarrage ---------- */
  function init() {
    captureFrench();
    setupMenu();
    setupForm();
    applyLanguage(getInitialLang());

    $all(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { setLanguage(btn.getAttribute("data-lang")); });
    });

    var year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    setupMobileCta();
    setupCal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
