/* =====================================================================
   Visit Astana — site script (jQuery 4)
   All EN / RU / KZ text lives in js/translations.js, loaded before this file.
   ===================================================================== */

/* ---------------------------------------------------------------------
   Shared helpers
   --------------------------------------------------------------------- */
let currentLang = localStorage.getItem("astanaLang") || "en";
const LOCALES = { en: "en-US", ru: "ru-RU", kz: "kk-KZ" };

// t("inquiryThanks", { name: "Aigerim" }) → text in the current language with {placeholders} filled in
function t(key, vars = {}) {
    const text = (uiTranslations[currentLang] || {})[key] ?? uiTranslations.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (match, name) => vars[name] ?? "");
}

// Picks the current language from an { en, ru, kz } object
const pick = (texts) => texts[currentLang] || texts.en;
const formatKzt = (amount) => amount.toLocaleString("en-US") + " KZT";

// Short UI sounds made with the Web Audio API (no audio files needed)
let audioCtx = null;
function playUiSound(type = "click") {
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") audioCtx.resume();

        const success = type === "success";
        const length = success ? 0.25 : 0.09;
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = success ? "triangle" : "sine";
        osc.frequency.setValueAtTime(success ? 523.25 : 440, now);
        if (success) osc.frequency.setValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(success ? 0.12 : 0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + length);

        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + length);
    } catch (err) {
        // The browser blocked audio — the site works without it
    }
}

// Small "pop" animation (restarts the CSS animation every time)
function pop($el) {
    if (!$el.length) return;
    $el.removeClass("pop");
    void $el[0].offsetWidth;
    $el.addClass("pop");
}

/* ---------- Task 7: Toast notifications that fade out ---------- */
function showToast(message, type = "success") {
    const icons = { success: "✓", info: "i", error: "×" };
    let $stack = $("#toast-stack");
    if (!$stack.length) {
        $stack = $('<div id="toast-stack" class="toast-stack" aria-live="polite"></div>').appendTo("body");
    }

    const $toast = $(`<div class="site-toast toast-${type}" role="status">
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-text"></span>
            <button type="button" class="toast-close" aria-label="Close">&times;</button>
            <span class="toast-timer"></span>
        </div>`);
    $toast.find(".toast-text").text(message); // .text() keeps user input safe from HTML injection
    $toast.hide().appendTo($stack).fadeIn(250);

    const remove = (speed) => $toast.stop(true).fadeOut(speed, () => $toast.remove());
    const timer = setTimeout(() => remove(500), 3500);
    $toast.find(".toast-close").on("click", () => { clearTimeout(timer); remove(200); });
}

/* ---------- Task 6: Spinner + disabled state for a submit button ---------- */
function setButtonLoading($btn, isLoading) {
    if (isLoading) {
        $btn.data("label", $btn.html())
            .prop("disabled", true)
            .attr("aria-busy", "true")
            .html(`<span class="btn-spinner" aria-hidden="true"></span> ${t("wait")}`);
    } else {
        $btn.html($btn.data("label")).prop("disabled", false).removeAttr("aria-busy");
    }
}

/* ---------- Task 3: Search highlighting ---------- */
const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function clearSearchHighlights($scope) {
    $scope.find("mark.search-hit").each(function () {
        const parent = this.parentNode;
        $(this).contents().unwrap(); // keep the text, drop the <mark>
        parent.normalize();          // join the split text nodes again
    });
}

// Wraps every match of `keyword` in <mark class="search-hit"> and returns the number of matches.
// Only text nodes are changed, so the existing HTML tags stay untouched.
function highlightKeyword($elements, keyword) {
    clearSearchHighlights($elements);
    keyword = String(keyword).trim();
    if (!keyword) return 0;

    const splitter = new RegExp(`(${escapeRegExp(keyword)})`, "gi");
    const tester = new RegExp(escapeRegExp(keyword), "i"); // non-global: .test() keeps no state
    let total = 0;

    $elements.find("*").addBack().contents()
        .filter(function () { return this.nodeType === Node.TEXT_NODE && tester.test(this.nodeValue); })
        .each(function () {
            const pieces = this.nodeValue.split(splitter).map((part, i) => {
                if (i % 2 === 0) return document.createTextNode(part); // even = plain text, odd = match
                total++;
                return $('<mark class="search-hit"></mark>').text(part)[0];
            });
            $(this).replaceWith(pieces);
        });
    return total;
}


/* =====================================================================
   Page logic
   ===================================================================== */
$(document).ready(function () {
    // ---------- Task 0: Setup check ----------
    console.log("jQuery is ready!");

    const $window = $(window);
    const $document = $(document);
    const $body = $("body");

    /* ---------------- Theme (Night Mode) & background ---------------- */
    const $themeBtn = $("#theme-toggle-btn");
    const BG_COLORS = ["#faf5ee", "#f3efe6", "#eef3ee", "#f7ecdf", "#edf1f2"];
    let bgIndex = 0;

    function updateThemeButton() {
        const isDark = $body.hasClass("dark-theme");
        const label = t(isDark ? "dayMode" : "nightMode");
        $themeBtn.text(isDark ? "☀️" : "🌙").attr({ title: label, "aria-label": label, "aria-pressed": isDark });
    }

    function applyTheme(isDark) {
        $body.toggleClass("dark-theme", isDark);
        if (isDark) $body.css("background-color", "");
        localStorage.setItem("astanaTheme", isDark ? "dark" : "light");
        updateThemeButton();
    }

    $themeBtn.on("click", function () {
        playUiSound();
        applyTheme(!$body.hasClass("dark-theme"));
        pop($themeBtn);
    });

    $("#change-bg-btn").on("click", function () {
        playUiSound();
        applyTheme(false);
        bgIndex = (bgIndex + 1) % BG_COLORS.length;
        $body.css("background-color", BG_COLORS[bgIndex]);
        pop($(this));
    });

    /* ---------------- Clock & greetings ---------------- */
    function updateDateTime() {
        const options = { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" };
        $("#live-datetime").text(new Date().toLocaleString(LOCALES[currentLang], options));
    }
    setInterval(updateDateTime, 1000);

    function setTimeOfDayGreeting() {
        const hour = new Date().getHours();
        let key;
        switch (true) {
            case hour >= 5 && hour < 12: key = "morningGreeting"; break;
            case hour >= 12 && hour < 18: key = "afternoonGreeting"; break;
            default: key = "eveningGreeting";
        }
        $("#time-of-day-greeting").text(t(key));
    }

    $("#update-greeting-btn").on("click", function () {
        playUiSound("success");
        const name = $("#visitor-name-input").val().trim();
        const $greeting = $("#personalized-greeting").text(name ? t("greetCustomPrefix") + name + "!" : t("greetGuest"));
        pop($greeting);
    });

    $("#show-time-btn").on("click", function () {
        playUiSound();
        pop($("#clicked-time-output").text(t("timePrefix") + new Date().toLocaleTimeString(LOCALES[currentLang])));
    });

    /* ---------------- Keyboard navigation in the menu ---------------- */
    const $navLinks = $("#keyboard-nav-menu .nav-link");
    $navLinks.on("keydown", function (e) {
        const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        const next = ($navLinks.index(this) + step + $navLinks.length) % $navLinks.length;
        $navLinks.eq(next).trigger("focus");
        playUiSound();
    });

    /* ---------------- Random facts (Home) ---------------- */
    let factIndex = 0;
    const showFact = () => $("#astana-fact-box").text(pick(astanaFacts)[factIndex]);

    $("#new-fact-btn").on("click", function () {
        playUiSound();
        factIndex = (factIndex + 1) % pick(astanaFacts).length;
        pop(showFact());
    });

    /* ---------------- FAQ accordion (Home) ---------------- */
    $(".accordion-question").on("click", function () {
        playUiSound();
        const $answer = $(this).next(".accordion-answer");
        const wasOpen = $answer.hasClass("open");
        $(".accordion-answer").removeClass("open");
        $answer.toggleClass("open", !wasOpen);
    });

    /* ---------------- Read more (History) ---------------- */
    const $moreHistory = $("#more-history-content");
    const $readMoreBtn = $("#read-more-btn");
    const updateReadMoreLabel = () => $readMoreBtn.text(t($moreHistory.is(":visible") ? "readMoreClose" : "readMoreOpen"));

    $readMoreBtn.on("click", function () {
        playUiSound();
        $moreHistory.stop(true, true).slideToggle(250, updateReadMoreLabel);
    });

    /* ---------------- Load more dishes (History) ---------------- */
    let dishesLoaded = false;

    function renderExtraDishes() {
        if (!dishesLoaded) return;
        const $container = $("#dishes-container");
        $container.find(".extra-dish-card").remove();
        extraDishes.forEach((dish) => {
            const $card = $(`<article class="pure-card extra-dish-card">
                    <img class="food-img-badge img-placeholder" src="${dish.image}" alt=""><h3></h3><p></p>
                </article>`);
            $card.find("img").attr("alt", dish.alt || pick(dish.name));
            $card.find("h3").text(pick(dish.name));
            $card.find("p").text(pick(dish.description));
            $container.append($card);
        });
        $("#load-more-dishes-btn").text(t("dishesLoadedBtn"));
    }

    $("#load-more-dishes-btn").on("click", function () {
        if (dishesLoaded) return;
        playUiSound("success");
        dishesLoaded = true;
        renderExtraDishes();
        $(this).prop("disabled", true);
    });

    /* ---------------- Star ratings (Attractions) ---------------- */
    $(".star-rating").each(function () {
        const $rating = $(this);
        const $stars = $rating.find(".rating-star");

        $stars.on("click", function () {
            playUiSound("success");
            const value = Number($(this).data("value"));
            $rating.attr("data-user-rating", value);
            $stars.each(function () { $(this).toggleClass("selected", Number($(this).data("value")) <= value); });
            $rating.parent().find(".rating-status").text(`${t("ratedPrefix")}${value}/5 ★`);
            pop($rating);
            showToast(t("ratedToast", { landmark: $rating.data("landmark"), stars: "★".repeat(value) })); // Task 7
        });
    });

    /* ---------------- Photo gallery (Attractions) ---------------- */
    const $thumbs = $(".gallery-thumb");
    $thumbs.on("click", function () {
        playUiSound();
        const $thumb = $(this);
        const alt = $thumb.attr("alt");
        // data-src holds the real path while a thumbnail is lazy-loaded (Task 9)
        const $main = $("#gallery-featured-img").attr({ src: $thumb.attr("data-src") || $thumb.attr("src"), alt });
        $("#gallery-caption").text(alt);
        $thumbs.removeClass("active-thumb");
        $thumb.addClass("active-thumb");
        pop($main);
    });

    /* ---------------- Tour table with category filter (Tours) ---------------- */
    let activeCategory = "all";

    function renderToursTable() {
        const $tbody = $("#tour-table-body");
        if (!$tbody.length) return;

        const tours = astanaTours.filter((tour) => activeCategory === "all" || tour.category === activeCategory);
        const average = tours.length ? Math.round(tours.reduce((sum, tour) => sum + tour.priceKzt, 0) / tours.length) : 0;

        $("#tour-filter-summary").text(t("tourSummary", {
            count: tours.length,
            category: t("cat_" + activeCategory),
            price: formatKzt(average)
        }));

        $tbody.empty().append(tours.map((tour) => {
            const $row = $(`<tr>
                    <td><img class="rounded-circle shadow-sm tour-avatar" width="65" height="65" src="${tour.image}" alt=""></td>
                    <td><strong></strong></td><td></td><td></td>
                    <td><span class="badge badge-brand">${formatKzt(tour.priceKzt)}</span></td>
                </tr>`);
            const cells = $row.children("td");
            cells.eq(0).find("img").attr("alt", pick(tour.title));
            cells.eq(1).find("strong").text(pick(tour.title));
            cells.eq(2).text(pick(tour.duration));
            cells.eq(3).text(pick(tour.highlights));
            return $row;
        }));
    }

    $(".tour-filter-btn").on("click", function () {
        playUiSound();
        $(".tour-filter-btn").removeClass("active");
        activeCategory = $(this).addClass("active").data("category");
        localStorage.setItem("kzTourCategory", activeCategory);
        renderToursTable();
    });

    // Restore saved tour category filter from localStorage (Requirement 5.3)
    const savedCat = localStorage.getItem("kzTourCategory");
    if (savedCat && $(".tour-filter-btn").filter(`[data-category="${savedCat}"]`).length) {
        activeCategory = savedCat;
        $(".tour-filter-btn").removeClass("active").filter(`[data-category="${savedCat}"]`).addClass("active");
    }

    /* ---------------- Form validation helpers (Requirement 5.2) ---------------- */
    const NAME_RE = /^[A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+([ -][A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+)*$/;
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    const PHONE_RE = /^\+?[\d\s()-]{10,18}$/;
    const isValidName = (name) => name.length >= 2 && NAME_RE.test(name);
    const isValidPhone = (phone) => {
        const digits = String(phone).replace(/\D/g, "");
        return PHONE_RE.test(phone) && digits.length >= 10 && digits.length <= 15;
    };

    function showMessage($el, text, isError) {
        $el.text(text).toggleClass("msg-error", !!isError).toggleClass("msg-success", !isError);
    }

    /* ---------------- Multi-step booking form (Tours) ---------------- */
    const $formError = $("#form-error-msg");
    const $formSuccess = $("#form-success-msg");
    let formStep = 1;

    function showStep(step) {
        formStep = step;
        $("#form-step-1").toggleClass("active-step", step === 1);
        $("#form-step-2").toggleClass("active-step", step === 2);
        $("#step-indicator").text(t(step === 2 ? "step2Badge" : "step1Badge"));
    }

    // Returns the translation key of the first error, or null when everything is valid
    function validateAccount() {
        const password = $("#user-password").val() || "";
        if (!isValidName(($("#user-name").val() || "").trim())) return "errName";
        if (!EMAIL_RE.test(($("#user-email").val() || "").trim())) return "errEmail";
        if ($("#user-phone").length && !isValidPhone(($("#user-phone").val() || "").trim())) return "errPhone";
        if (/\s/.test(password)) return "errPassSpace";
        if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) return "errPassFormat";
        if (password !== $("#user-confirm-password").val()) return "errPassMatch";
        return null;
    }

    $("#next-step-btn").on("click", function () {
        $formSuccess.text("");
        const error = validateAccount();
        $formError.text(error ? t(error) : "");
        if (error) return;
        playUiSound();
        showStep(2);
    });

    $("#prev-step-btn").on("click", function () {
        playUiSound();
        showStep(1);
    });

    $("#clear-form-btn").on("click", function () {
        playUiSound();
        $("#booking-form").find("input[type='text'], input[type='email'], input[type='password']").val("");
        $formError.text("");
        $formSuccess.text(t("clearedMsg"));
    });

    $("#booking-form").on("submit", function (e) {
        e.preventDefault();
        const $submit = $("#booking-submit-btn");
        if ($submit.prop("disabled")) return; // Task 6: ignore repeated clicks

        $formError.text("");
        $formSuccess.text("");
        setButtonLoading($submit, true);

        setTimeout(function () { // simulated server call
            setButtonLoading($submit, false);
            playUiSound("success");
            const name = $("#user-name").val().trim();
            const email = $("#user-email").val().trim().toLowerCase();
            const phone = ($("#user-phone").val() || "").trim();
            const password = $("#user-password").val();
            const tourName = $("#tour-select option:selected").text();
            const tourTime = $("#timeMorning").is(":checked") ? "10:00 AM" : "6:00 PM";

            // Save user & booking to localStorage so it appears on profile.html (Req 5.1 & 5.3)
            const users = JSON.parse(localStorage.getItem("kzUsers") || "[]");
            const existingIdx = users.findIndex((u) => u.email === email);
            const userObj = {
                name,
                email,
                phone: phone || "+7 701 000 0000",
                password,
                region: "Astana & Capital Region",
                joined: new Date().toLocaleDateString("en-US")
            };
            if (existingIdx >= 0) users[existingIdx] = userObj;
            else users.push(userObj);
            localStorage.setItem("kzUsers", JSON.stringify(users));
            localStorage.setItem("kzCurrentUser", JSON.stringify(userObj));

            const bookings = JSON.parse(localStorage.getItem("kzBookedTours") || "[]");
            bookings.push({ tour: tourName, time: tourTime, date: new Date().toLocaleDateString("en-US") });
            localStorage.setItem("kzBookedTours", JSON.stringify(bookings));

            const message = t("bookingConfirmed", { name, tour: tourName });
            pop($formSuccess.text(message));
            showToast(message); // Task 7
        }, 1200);
    });

    /* ---------------- Contact Support modal (Home) ---------------- */
    const $modal = $("#popup-modal");
    const $popupStatus = $("#popup-callback-status");
    const openModal = () => $modal.css("display", "flex").hide().fadeIn(200);
    const closeModal = () => $modal.fadeOut(200);

    // Callback style "server" request
    function submitInquiryAsync(formData, onComplete) {
        setTimeout(() => onComplete(t("inquiryThanks", { name: formData.name })), 1400);
    }

    $("#open-popup-btn").on("click", function () { playUiSound(); openModal(); });
    $("#close-popup-btn").on("click", closeModal);
    $modal.on("click", function (e) { if (e.target === this) closeModal(); });
    $document.on("keydown", (e) => { if (e.key === "Escape" && $modal.is(":visible")) closeModal(); });

    $("#popup-form").on("submit", function (e) {
        e.preventDefault();
        const form = this;
        const name = ($("#support-name").val() || "").trim();
        const email = ($("#support-email").val() || "").trim();
        const phone = ($("#support-phone").val() || "").trim();
        const msg = ($("#support-msg").val() || "").trim();

        const error = !isValidName(name) ? "errName"
            : !EMAIL_RE.test(email) ? "errEmail"
            : ($("#support-phone").length && !isValidPhone(phone)) ? "errPhone"
            : msg.length < 5 ? "errMsgShort"
            : null;

        if (error) return showMessage($popupStatus, t(error), true);

        const $send = $("#popup-submit-btn");
        if ($send.prop("disabled")) return;
        $popupStatus.text("");
        setButtonLoading($send, true); // Task 6

        submitInquiryAsync({ name }, function (reply) {
            setButtonLoading($send, false);
            playUiSound("success");
            showMessage($popupStatus, reply);
            showToast(reply); // Task 7
            setTimeout(() => { form.reset(); $popupStatus.text(""); closeModal(); }, 1200);
        });
    });

    /* =================================================================
       Task 4: Scroll progress bar
       ================================================================= */
    $body.prepend(`<div id="scroll-progress" aria-hidden="true"><div class="scroll-progress-fill"></div></div>
        <button type="button" id="scroll-percent" class="scroll-percent" aria-label="Back to top">0%</button>`);
    const $fill = $("#scroll-progress .scroll-progress-fill");
    const $percent = $("#scroll-percent");

    function updateScrollProgress() {
        const scrollTop = $window.scrollTop();
        const maxScroll = $document.height() - $window.height();
        const percent = maxScroll > 0 ? Math.min(100, Math.round((scrollTop / maxScroll) * 100)) : 0;
        $fill.css("width", percent + "%");
        $percent.text(percent + "%").toggleClass("visible", scrollTop > 80);
    }

    $percent.on("click", () => $("html, body").animate({ scrollTop: 0 }, 600));

    /* =================================================================
       Task 5: Animated number counters (start when visible)
       ================================================================= */
    function isInView($el, margin = 0) {
        const top = $el.offset().top;
        const viewTop = $window.scrollTop();
        return top + $el.outerHeight() > viewTop - margin && top < viewTop + $window.height() + margin;
    }

    function formatCounter($el, value) {
        return $el.data("format") === "comma" ? Math.round(value).toLocaleString("en-US") : Math.round(value);
    }

    function runCounters() {
        $(".counter").each(function () {
            const $el = $(this);
            if ($el.data("counted") || !isInView($el, -40)) return;
            $el.data("counted", true);

            // .animate() can tween any number stored on a plain object
            $({ value: 0 }).animate({ value: Number($el.data("target")) }, {
                duration: 2200,
                easing: "swing",
                step: (now) => $el.text(formatCounter($el, now)),
                complete: () => {
                    $el.text(formatCounter($el, $el.data("target")));
                    $el.closest(".stat-card").addClass("counted");
                }
            });
        });
    }

    /* =================================================================
       Task 9: Lazy image loading (scroll + offset + attr("src"))
       ================================================================= */
    function loadImage($img) {
        const src = $img.attr("data-src");
        if (!src || $img.hasClass("lazy-loaded") || $img.hasClass("lazy-loading")) return;
        $img.addClass("lazy-loading")
            .one("load", () => $img.removeClass("lazy-loading").addClass("lazy-loaded"))
            .attr("src", src);
    }

    function lazyLoadImages() {
        $("img.lazy").not(".lazy-loaded, .lazy-loading").each(function () {
            if (isInView($(this), 200)) loadImage($(this)); // start 200px before it appears
        });
    }

    // Hidden carousel slides have no position, so load each one just before Bootstrap shows it
    $("#astanaCarousel").on("slide.bs.carousel", function (e) {
        const $slides = $(this).find(".carousel-item");
        loadImage($slides.eq(e.to).find("img"));
        loadImage($slides.eq((e.to + 1) % $slides.length).find("img")); // and preload the next one
    });
    $window.on("load", () => loadImage($("#astanaCarousel .carousel-item").eq(1).find("img")));

    // One throttled scroll handler drives Tasks 4, 5 and 9
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateScrollProgress();
            runCounters();
            lazyLoadImages();
            ticking = false;
        });
    }
    $window.on("scroll resize", onScroll);

    /* =================================================================
       Task 1 + 2: Live filter and autocomplete (Attractions)
       ================================================================= */
    const $search = $("#landmark-search");
    const $items = $("#landmark-list .landmark-item");
    const $suggestions = $("#autocomplete-list");
    const landmarks = $items.map(function () {
        return {
            name: $(this).find(".landmark-name").text(),
            category: String($(this).data("category")),
            keywords: String($(this).data("keywords"))
        };
    }).get();
    let activeSuggestion = -1;

    // Task 1: .filter() keeps the items whose text or keywords contain the query
    function filterLandmarks(query) {
        query = String(query).trim().toLowerCase();
        const $matches = $items.filter(function () {
            return ($(this).text() + " " + $(this).data("keywords")).toLowerCase().includes(query);
        });

        $items.not($matches).stop(true, true).slideUp(150);
        $matches.stop(true, true).slideDown(150);
        highlightKeyword($items.find(".landmark-name, .landmark-desc, .landmark-badge, .landmark-district"), query);

        $("#landmark-count").text(t("shownCount", { shown: $matches.length, total: $items.length }));
        $("#landmark-empty").toggle($matches.length === 0);
    }

    function closeSuggestions() {
        $suggestions.empty().removeClass("open");
        $search.attr("aria-expanded", "false");
        activeSuggestion = -1;
    }

    // Task 2: names starting with the query first, then names that only contain it (max 6)
    function showSuggestions(query) {
        query = String(query).trim().toLowerCase();
        if (!query) return closeSuggestions();

        const matches = (item) => [item.name, item.category, item.keywords].some((text) => text.toLowerCase().includes(query));
        const startsWith = landmarks.filter((item) => item.name.toLowerCase().startsWith(query));
        const results = startsWith.concat(landmarks.filter((item) => !startsWith.includes(item) && matches(item))).slice(0, 6);

        $suggestions.empty();
        activeSuggestion = -1;
        if (!results.length) {
            $('<li class="autocomplete-empty"></li>').text(t("noMatch")).appendTo($suggestions);
        }
        results.forEach((item) => {
            const $name = $('<span class="autocomplete-name"></span>').text(item.name);
            highlightKeyword($name, query);
            $('<li class="autocomplete-item" role="option"></li>')
                .attr("data-name", item.name)
                .append($name, $('<span class="autocomplete-cat"></span>').text(item.category))
                .appendTo($suggestions);
        });
        $suggestions.addClass("open");
        $search.attr("aria-expanded", "true");
    }

    function chooseSuggestion(name) {
        $search.val(name);
        closeSuggestions();
        filterLandmarks(name);
        const $target = $items.filter((i, el) => $(el).find(".landmark-name").text() === name).first();
        if (!$target.length) return;
        $("html, body").animate({ scrollTop: $target.offset().top - 160 }, 400);
        $target.addClass("flash");
        setTimeout(() => $target.removeClass("flash"), 1200);
    }

    function moveActive(step) {
        const $options = $suggestions.find(".autocomplete-item");
        if (!$options.length) return;
        activeSuggestion = (activeSuggestion + step + $options.length) % $options.length;
        $options.removeClass("active").eq(activeSuggestion).addClass("active");
    }

    // keyup = after every typed character (task hint); input = paste, mobile keyboards, ✕ button
    let lastQuery = null;
    if ($search.length && localStorage.getItem("kzLandmarkSearch")) {
        $search.val(localStorage.getItem("kzLandmarkSearch"));
    }
    $search.on("keyup input", function (e) {
        if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) return;
        const query = $(this).val();
        if (query === lastQuery) return; // keyup + input for the same character → run once
        lastQuery = query;
        localStorage.setItem("kzLandmarkSearch", query);
        filterLandmarks(query);
        showSuggestions(query);
    });

    $search.on("keydown", function (e) {
        const actions = {
            ArrowDown: () => moveActive(1),
            ArrowUp: () => moveActive(-1),
            Escape: closeSuggestions,
            Enter: () => {
                const $active = $suggestions.find(".autocomplete-item.active");
                $active.length ? chooseSuggestion($active.data("name")) : closeSuggestions();
            }
        };
        if (!actions[e.key]) return;
        e.preventDefault();
        actions[e.key]();
    });

    // Event delegation, because the suggestions are created dynamically
    $suggestions.on("mousedown", ".autocomplete-item", function (e) {
        e.preventDefault(); // keep focus in the input
        chooseSuggestion($(this).data("name"));
    });

    $document.on("click", (e) => { if (!$(e.target).closest(".search-wrapper").length) closeSuggestions(); });

    /* =================================================================
       Task 3: FAQ search highlighting (Home)
       ================================================================= */
    const $faqSearch = $("#faq-search");
    const $faqItems = $("#faq-section .accordion-item-simple");

    function searchFaq() {
        const query = String($faqSearch.val() ?? "").trim();
        const count = highlightKeyword($faqItems.find(".accordion-question, .accordion-answer"), query);
        let questions = 0;

        $faqItems.each(function () {
            const hit = query !== "" && $(this).find("mark.search-hit").length > 0;
            questions += hit;
            $(this).toggleClass("faq-dim", query !== "" && !hit);
            $(this).find(".accordion-answer").toggleClass("open", hit);
        });

        $("#faq-search-status").text(!query ? "" : count ? t("faqStatus", { count, questions, total: $faqItems.length }) : t("noMatch"));
    }
    $faqSearch.on("keyup search input", searchFaq);

    /* =================================================================
       Task 8: Copy to clipboard
       ================================================================= */
    let pendingCopyText = null;

    // .on("copy"): when a copy was started by our button, put the snippet text into the clipboard
    $document.on("copy", function (e) {
        if (pendingCopyText === null) return;
        e.originalEvent.clipboardData.setData("text/plain", pendingCopyText);
        e.preventDefault();
    });

    // A visitor who selects a snippet and presses Ctrl+C also gets a confirmation
    $(".snippet-text").on("copy", () => showToast(t("copied"), "info"));

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
        return new Promise((resolve, reject) => { // fallback for older browsers / plain http
            pendingCopyText = text;
            const ok = document.execCommand("copy");
            pendingCopyText = null;
            ok ? resolve() : reject();
        });
    }

    $(".copy-btn").on("click", function () {
        const $btn = $(this);
        const text = $btn.closest(".snippet").find(".snippet-text").text();

        copyText(text).then(() => {
            $btn.addClass("copied").find(".copy-label").text(t("copiedBtn"));
            $btn.find(".copy-tooltip").text(t("copied"));
            showToast(`${t("copied")} — ${text}`);
            clearTimeout($btn.data("timer"));
            $btn.data("timer", setTimeout(() => $btn.removeClass("copied").find(".copy-label").text(t("copyBtn")), 2000));
        }).catch(() => showToast(t("copyFail"), "error"));
    });

    /* =================================================================
       Interactive Map of Kazakhstan (Home / index.html)
       ================================================================= */
    let selectedKzRegion = "astana";
    const $kzPlaceCard = $("#kz-place-card");

    function renderKzRegionDetail(regionKey, animate = false) {
        if (!$kzPlaceCard.length || typeof kazakhstanRegions === "undefined") return;
        const data = kazakhstanRegions[regionKey] || kazakhstanRegions.astana;
        selectedKzRegion = kazakhstanRegions[regionKey] ? regionKey : "astana";

        // Highlight active SVG region & pill button
        $(".kz-region").removeClass("selected")
            .filter(`[data-region="${selectedKzRegion}"]`).addClass("selected");
        $(".kz-pill-btn").removeClass("active")
            .filter(`[data-region="${selectedKzRegion}"]`).addClass("active");

        // Update badge, title, tagline, description
        $("#kz-place-badge")
            .text(t(data.available ? "statusBadgeLive" : "statusBadgeSoon"))
            .toggleClass("badge-available", !!data.available)
            .toggleClass("badge-coming-soon", !data.available);
        $("#kz-place-coords").text(data.coords);
        $("#kz-place-title").text(pick(data.title));
        $("#kz-place-tagline").text(pick(data.tagline));
        $("#kz-place-desc").text(pick(data.description));

        // Update main preview image and clickable thumbnails
        const images = data.images || [{ src: "images/welcome_to_Astana.jpg", alt: "welcome_to_Astana" }];
        const firstImg = typeof images[0] === "string" ? { src: images[0], alt: pick(data.title) } : images[0];
        $("#kz-place-img").attr({ src: firstImg.src, alt: firstImg.alt });

        const $thumbsBox = $("#kz-place-thumbs").empty();
        images.forEach((imgItem, idx) => {
            const item = typeof imgItem === "string" ? { src: imgItem, alt: `${pick(data.title)} ${idx + 1}` } : imgItem;
            $('<img class="kz-mini-thumb img-placeholder" alt="">')
                .attr({ src: item.src, alt: item.alt })
                .toggleClass("active", idx === 0)
                .appendTo($thumbsBox);
        });

        // Update 4 key facts
        $("#kz-fact-city").text(pick(data.city));
        $("#kz-fact-pop").text(pick(data.population));
        $("#kz-fact-icon").text(pick(data.icon));
        $("#kz-fact-status")
            .text(pick(data.statusText))
            .toggleClass("msg-success", !!data.available)
            .toggleClass("text-muted", !data.available);

        // Update highlight chips
        const $tags = $("#kz-place-tags").empty();
        (pick(data.tags) || []).forEach((tag) => {
            $('<span class="chip"></span>').text(tag).appendTo($tags);
        });

        // Update action button
        const $mainBtn = $("#kz-jump-main-btn");
        if (data.available && data.url) {
            $mainBtn.attr("href", data.url)
                .removeClass("btn-outline-secondary disabled")
                .addClass("btn-primary")
                .removeAttr("aria-disabled")
                .text(t("btnExploreAstana"));
        } else {
            $mainBtn.attr({ href: "#kz-map-section", "aria-disabled": "true" })
                .removeClass("btn-primary")
                .addClass("btn-outline-secondary disabled")
                .text(t("btnRegionSoon"));
        }

        $("#kz-map-hover-indicator").text(pick(data.title));
        if (animate) pop($kzPlaceCard);
    }

    // Click on map region, city pin, or region pill
    $(".kz-region, .kz-city-pin, .kz-pill-btn").on("click", function () {
        const regionKey = $(this).data("region");
        if (!regionKey) return;
        playUiSound(regionKey === "astana" ? "success" : "click");
        renderKzRegionDetail(regionKey, true);
    });

    // Keyboard Enter/Space on SVG regions and Astana pin
    $(".kz-region, #pin-astana").on("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            $(this).trigger("click");
        }
    });

    // Double-click on Astana region or capital pin jumps straight to astana.html
    $("#region-astana, #pin-astana").on("dblclick", function () {
        window.location.href = "astana.html";
    });

    // Hover indicator on map regions & pins
    $(".kz-region, .kz-city-pin").on("mouseenter", function () {
        const regionKey = $(this).data("region");
        const data = (typeof kazakhstanRegions !== "undefined") && kazakhstanRegions[regionKey];
        if (data) $("#kz-map-hover-indicator").text(pick(data.title));
    });

    // Clickable mini-thumbnails inside the place detail panel
    $("#kz-place-thumbs").on("click", ".kz-mini-thumb", function () {
        playUiSound();
        const $thumb = $(this);
        $thumb.siblings().removeClass("active");
        $thumb.addClass("active");
        const $img = $("#kz-place-img").attr({
            src: $thumb.attr("src"),
            alt: $thumb.attr("alt")
        });
        pop($img);
    });

    // "Preview on Map ↑" buttons in the roadmap cards
    $(".kz-preview-map-btn").on("click", function () {
        const regionKey = $(this).data("region");
        playUiSound();
        renderKzRegionDetail(regionKey, true);
        const $mapSection = $("#kz-map-section");
        if ($mapSection.length) {
            $("html, body").animate({ scrollTop: $mapSection.offset().top - 90 }, 500);
        }
    });

    /* =================================================================
       Seasons & Interactive 12-Month Calendar (seasons.html)
       ================================================================= */
    let activeSeasonKey = "spring";
    let activeMonthIndex = 2; // March (Nauryz) by default
    const packedState = { spring: {}, summer: {}, autumn: {}, winter: {} };
    const $seasonSpotlight = $("#season-spotlight");
    const $calMonthDetail = $("#cal-month-detail");

    function updatePackingCounter(seasonKey, total) {
        const count = Object.values(packedState[seasonKey] || {}).filter(Boolean).length;
        $("#packing-progress-text").text(`${count} / ${total}`);
    }

    function renderSeasonSpotlight(seasonKey, animate = false) {
        if (!$seasonSpotlight.length || typeof kazakhstanSeasons === "undefined") return;
        const data = kazakhstanSeasons[seasonKey] || kazakhstanSeasons.spring;
        activeSeasonKey = kazakhstanSeasons[seasonKey] ? seasonKey : "spring";

        $(".season-tab-card").each(function () {
            const isMatch = $(this).data("season") === activeSeasonKey;
            $(this).toggleClass("active", isMatch).attr("aria-selected", isMatch);
        });

        $seasonSpotlight.attr("data-theme-season", activeSeasonKey);
        $("#season-main-img").attr({ src: data.img, alt: data.alt });
        $("#season-badge").text(pick(data.badge));
        $("#season-temp-badge").text(pick(data.temp));
        $("#season-title").text(pick(data.title));
        $("#season-desc").text(pick(data.desc));
        $("#season-places").text(pick(data.places));
        $("#season-highlights").text(pick(data.highlights));

        const items = pick(data.packing) || [];
        const $list = $("#packing-list").empty();
        items.forEach((itemText, idx) => {
            const isPacked = !!(packedState[activeSeasonKey] && packedState[activeSeasonKey][idx]);
            $('<button type="button" class="packing-item-btn"></button>')
                .attr("data-idx", idx)
                .toggleClass("packed", isPacked)
                .text((isPacked ? "✓ " : "○ ") + itemText)
                .appendTo($list);
        });
        updatePackingCounter(activeSeasonKey, items.length);

        if (animate) pop($seasonSpotlight);
    }

    $(".season-tab-card").on("click", function () {
        playUiSound();
        renderSeasonSpotlight($(this).data("season"), true);
    });

    // Clicking a season slice in the top Hero Ribbon jumps to that season
    $(".season-ribbon-slice, .hero-mosaic-tile").on("click", function () {
        const seasonKey = $(this).data("jump-season");
        playUiSound("success");
        renderSeasonSpotlight(seasonKey, true);
        const $target = $("#seasons-explorer");
        if ($target.length) {
            $("html, body").animate({ scrollTop: $target.offset().top - 90 }, 500);
        }
    });

    $("#packing-list").on("click", ".packing-item-btn", function () {
        playUiSound("success");
        const idx = Number($(this).data("idx"));
        packedState[activeSeasonKey] = packedState[activeSeasonKey] || {};
        packedState[activeSeasonKey][idx] = !packedState[activeSeasonKey][idx];
        renderSeasonSpotlight(activeSeasonKey, false);
    });

    function renderMonthDetail(monthIdx, animate = false) {
        if (!$calMonthDetail.length || typeof kazakhstanMonths === "undefined") return;
        activeMonthIndex = (monthIdx >= 0 && monthIdx < kazakhstanMonths.length) ? monthIdx : 2;
        const m = kazakhstanMonths[activeMonthIndex];

        $(".kz-month-btn").removeClass("active")
            .filter(`[data-month="${activeMonthIndex}"]`).addClass("active");

        $("#cal-month-season-tag").text(pick(m.seasonTag));
        $("#cal-month-crowd").text(pick(m.crowd));
        $("#cal-month-title").text(pick(m.title));
        $("#cal-month-temp-line").text(pick(m.tempLine));
        $("#cal-festival-title").text(pick(m.festivalTitle));
        $("#cal-festival-desc").text(pick(m.festivalDesc));
        $("#cal-month-advice").text(pick(m.advice));

        const $tags = $("#cal-month-tags").empty();
        (pick(m.tags) || []).forEach((tag) => {
            $('<span class="chip"></span>').text(tag).appendTo($tags);
        });

        if (animate) pop($calMonthDetail);
    }

    $(".kz-month-btn").on("click", function () {
        playUiSound();
        const idx = Number($(this).data("month"));
        renderMonthDetail(idx, true);
    });

    $("#cal-current-month-btn").on("click", function () {
        playUiSound("success");
        const nowMonth = new Date().getMonth();
        renderMonthDetail(nowMonth, true);
    });

    // Clicking "Explore Matching Season ↑" in the 12-Month Calendar jumps to the season of that month
    $("#cal-jump-season-btn").on("click", function () {
        playUiSound("success");
        const m = kazakhstanMonths[activeMonthIndex];
        const seasonKey = (m && m.season) ? m.season : "spring";
        renderSeasonSpotlight(seasonKey, true);
        const $target = $("#seasons-explorer");
        if ($target.length) {
            $("html, body").animate({ scrollTop: $target.offset().top - 90 }, 550);
        }
    });

    $("#save-month-plan-btn").on("click", function () {
        playUiSound("success");
        const m = kazakhstanMonths[activeMonthIndex];
        const title = m ? pick(m.title) : "";
        const savedMonths = JSON.parse(localStorage.getItem("kzSavedMonths") || "[]");
        if (title && !savedMonths.includes(title)) {
            savedMonths.push(title);
            localStorage.setItem("kzSavedMonths", JSON.stringify(savedMonths));
        }
        pop($(this));
        showToast(t("monthSavedToast", { month: title }));
    });

    /* ---------- Interactive Trip Compass & Live Boarding Pass ---------- */
    let wizardVibe = "spring";
    let wizardTemp = "mild";
    let wizardStyle = "culture";
    let matchedSeasonKey = "spring";
    let matchedMonthIdx = 3;
    const $matcherTicket = $("#matcher-ticket");

    const wizardRoutes = {
        spring: {
            culture: {
                en: "Turkistan Yasawi Mausoleum → Shymkent Nauryz Plazas → Ancient Otrar → Astana National Museum",
                ru: "Мавзолей Ясави в Туркестане → Площади Наурыза в Шымкенте → Древний Отрар → Нацмузей в Астане",
                kz: "Түркістан Ясауи кесенесі → Шымкент Наурыз алаңы → Ежелгі Отырар → Астана Ұлттық музейі"
            },
            nature: {
                en: "Aksu-Zhabagly Wild Tulip Valleys → Charyn Red Canyon → Altyn-Emel Singing Dune",
                ru: "Долины диких тюльпанов Аксу-Жабаглы → Чарынский каньон → Поющий бархан Алтын-Эмель",
                kz: "Ақсу-Жабағылы қызғалдақ алқабы → Шарын шатқалы → Алтын-Емел Айғайқұмы"
            },
            adventure: {
                en: "Mangystau Bozzhyra Chalk Cliffs → Torysh Valley of Balls → Caspian Sea Coast Expedition",
                ru: "Меловые скалы Бозжыра в Мангистау → Долина шаров Торыш → Берег Каспия",
                kz: "Маңғыстау Бозжыра жартастары → Торыш шарлар алқабы → Каспий жағалауы"
            }
        },
        summer: {
            culture: {
                en: "Astana Nurzhol Boulevard → Ishim River Evening Cruise → EXPO Nur-Alem → Ethno-Aul Yurt Camp",
                ru: "Бульвар Нуржол в Астане → Вечерний круиз по Ишиму → Сфера Нур-Алем → Этноаул",
                kz: "Астана Нұржол желекжолы → Есілдегі кешкі круиз → ЭКСПО Нұр-Әлем → Этноауыл"
            },
            nature: {
                en: "Burabay Pine Lakes & Okzhetpes → Kolsai & Kaindy Alpine Lakes → Lake Balkhash",
                ru: "Сосновые озера Бурабая и Окжетпес → Горные озера Кольсай и Каинды → Озеро Балхаш",
                kz: "Бурабай көлдері мен Оқжетпес → Көлсай мен Қайыңды көлдері → Балқаш көлі"
            },
            adventure: {
                en: "Altai Katon-Karagay Trek → Mount Belukha Base Camp → Bayanaul Granite Peaks",
                ru: "Треккинг в Катон-Карагае на Алтае → Базовый лагерь Белухи → Скалы Баянаула",
                kz: "Алтай Катонқарағай жорығы → Мұзтау шыңы → Баянауыл шыңдары"
            }
        },
        autumn: {
            culture: {
                en: "Almaty Aport Harvest Bazaars → Sacred Ulytau Steppes → Turkistan Silk Road Caravanserai",
                ru: "Осенние базары Алматы → Священный Улытау → Караван-сарай в Туркестане",
                kz: "Алматы күзгі жәрмеңкесі → Қасиетті Ұлытау → Түркістан Керуен-сарайы"
            },
            nature: {
                en: "Golden Birch Woods of Burabay → Charyn Canyon Sunset → Karkaraly Mountain Oasis",
                ru: "Золотые березовые рощи Бурабая → Закат в Чарынском каньоне → Оазис Каркаралинска",
                kz: "Бурабайдың алтын қайыңды орманы → Шарын шатқалы → Қарқаралы оазисі"
            },
            adventure: {
                en: "Berkutchi Eagle Hunting Tournament → Tian Shan Foothill Trails → Bektau-Ata Rocks",
                ru: "Турнир беркутчи → Горные тропы Тянь-Шаня → Скалы Бектау-Ата",
                kz: "Бүркітшілер сайысы → Тянь-Шань тау соқпақтары → Бектау-Ата жартастары"
            }
        },
        winter: {
            culture: {
                en: "Astana Opera Gala → Khan Shatyr +30°C Tropical Beach → Steaming Beshbarmak Feast",
                ru: "Гала-вечер в Астана Опера → Тропический пляж Хан Шатыра (+30°C) → Зимний дастархан",
                kz: "Астана Опера театры → Хан Шатыр тропикалық жағажайы (+30°C) → Қысқы дастарқан"
            },
            nature: {
                en: "Snow-Covered Pines of Burabay → Frozen Kolsai Panorama → Ile-Alatau Snowy Peaks",
                ru: "Заснеженные сосны Бурабая → Зимняя панорама Кольсая → Снежные пики Заилийского Алатау",
                kz: "Қарлы Бурабай орманы → Қысқы Көлсай панорамасы → Іле Алатауы шыңдары"
            },
            adventure: {
                en: "Shymbulak Alpine Ski Slopes → Medeu High-Mountain Ice Rink → Altai Powder Skiing",
                ru: "Горнолыжные трассы Шымбулака → Высокогорный каток Медеу → Фрирайд на Алтае",
                kz: "Шымбұлақ тау шаңғысы → Медеу мұз айдыны → Алтай шаңғы трассалары"
            }
        }
    };

    const seasonMeta = {
        spring: {
            icon: "🌸",
            bestMonthIdx: 3,
            bestMonths: { en: "Best Months: March, April & May", ru: "Лучшие месяцы: Март, Апрель и Май", kz: "Үздік айлар: Наурыз, Сәуір және Мамыр" }
        },
        summer: {
            icon: "☀️",
            bestMonthIdx: 6,
            bestMonths: { en: "Best Months: June, July & August", ru: "Лучшие месяцы: Июнь, Июль и Август", kz: "Үздік айлар: Маусым, Шілде және Тамыз" }
        },
        autumn: {
            icon: "🍂",
            bestMonthIdx: 8,
            bestMonths: { en: "Best Months: September & October", ru: "Лучшие месяцы: Сентябрь и Октябрь", kz: "Үздік айлар: Қыркүйек және Қазан" }
        },
        winter: {
            icon: "❄️",
            bestMonthIdx: 11,
            bestMonths: { en: "Best Months: December, January & February", ru: "Лучшие месяцы: Декабрь, Январь и Февраль", kz: "Үздік айлар: Желтоқсан, Қаңтар және Ақпан" }
        }
    };

    function renderWizardTicket(animate = false) {
        if (!$matcherTicket.length || typeof kazakhstanSeasons === "undefined") return;

        // Combine vibe + temperature preference to pick the best season
        let sKey = wizardVibe;
        let score = 98;
        if (wizardTemp === "snow" && sKey !== "winter") {
            sKey = "winter";
            score = 95;
        } else if (wizardTemp === "warm" && (sKey === "winter" || sKey === "autumn")) {
            sKey = "summer";
            score = 96;
        } else if (wizardTemp === "mild" && sKey === "winter") {
            sKey = "spring";
            score = 94;
        }

        matchedSeasonKey = sKey;
        const sData = kazakhstanSeasons[sKey];
        const meta = seasonMeta[sKey];
        matchedMonthIdx = meta.bestMonthIdx;

        $("#ticket-match-score").text(`★ ${score}% Match`);
        $("#ticket-season-icon").text(meta.icon);
        $("#ticket-best-months").text(pick(meta.bestMonths));
        $("#ticket-season-title").text(pick(sData.title));
        $("#ticket-season-summary").text(pick(sData.desc));

        const routeObj = (wizardRoutes[sKey] && wizardRoutes[sKey][wizardStyle]) || wizardRoutes.spring.culture;
        $("#ticket-route-text").text(pick(routeObj));

        const $tags = $("#ticket-tags").empty();
        [pick(sData.temp), pick(sData.badge)].forEach((txt) => {
            $('<span class="ticket-chip"></span>').text(txt).appendTo($tags);
        });

        if (animate) pop($matcherTicket);
    }

    $("#wizard-vibe-grid").on("click", ".wizard-vibe-card", function () {
        playUiSound("success");
        $("#wizard-vibe-grid .wizard-vibe-card").removeClass("active");
        wizardVibe = $(this).addClass("active").data("vibe");
        renderWizardTicket(true);
    });

    $("#wizard-temp-pills").on("click", ".wizard-pill-btn", function () {
        playUiSound();
        $("#wizard-temp-pills .wizard-pill-btn").removeClass("active");
        wizardTemp = $(this).addClass("active").data("temp");
        renderWizardTicket(true);
    });

    $("#wizard-style-pills").on("click", ".wizard-pill-btn", function () {
        playUiSound();
        $("#wizard-style-pills .wizard-pill-btn").removeClass("active");
        wizardStyle = $(this).addClass("active").data("style");
        renderWizardTicket(true);
    });

    $("#ticket-open-season-btn").on("click", function () {
        playUiSound("success");
        renderSeasonSpotlight(matchedSeasonKey, true);
        const $target = $("#seasons-explorer");
        if ($target.length) {
            $("html, body").animate({ scrollTop: $target.offset().top - 90 }, 550);
        }
    });

    $("#ticket-open-month-btn").on("click", function () {
        playUiSound("success");
        renderMonthDetail(matchedMonthIdx, true);
        const $target = $("#interactive-calendar-section");
        if ($target.length) {
            $("html, body").animate({ scrollTop: $target.offset().top - 90 }, 550);
        }
    });

    /* =================================================================
       Requirement 5.1 & 5.2: Authentication Simulation & Profile Page
       ================================================================= */
    function renderProfilePage() {
        const rawUser = localStorage.getItem("kzCurrentUser");
        const user = rawUser ? JSON.parse(rawUser) : null;

        // Update Profile nav link badge across all pages if logged in
        const $navProfile = $('[data-i18n="navProfile"]');
        if (user && user.name) {
            const firstName = user.name.split(" ")[0];
            $navProfile.text(`👤 ${firstName}`);
        } else {
            $navProfile.text(t("navProfile"));
        }

        if (!$("#auth-section").length) return;

        if (!user) {
            $("#profile-dashboard-section").hide();
            $("#auth-section").fadeIn(200);
            return;
        }

        // Logged in: show Profile Dashboard
        $("#auth-section").hide();
        $("#profile-dashboard-section").fadeIn(250);

        $("#profile-avatar-circle").text((user.name || "T").charAt(0).toUpperCase());
        $("#profile-display-name").text(user.name);
        $("#profile-display-email").text(user.email);
        $("#profile-display-phone").text(user.phone || "+7 701 000 0000");
        $("#profile-display-region").text(user.region || "Astana & Capital Region");
        $("#profile-display-joined").text(`Joined: ${user.joined || new Date().toLocaleDateString("en-US")}`);

        // Render Booked Tours from localStorage
        const bookings = JSON.parse(localStorage.getItem("kzBookedTours") || "[]");
        const $bookingsBox = $("#profile-bookings-list").empty();
        if (!bookings.length) {
            $('<p class="text-muted small mb-0"></p>').text(t("noBookingsYet")).appendTo($bookingsBox);
        } else {
            bookings.forEach((b) => {
                $('<div class="saved-plan-item"></div>')
                    .append(
                        $('<strong></strong>').text(b.tour),
                        $('<span class="badge badge-brand"></span>').text(`${b.time} · ${b.date}`)
                    )
                    .appendTo($bookingsBox);
            });
        }

        // Render Bookmarked Months from localStorage
        const savedMonths = JSON.parse(localStorage.getItem("kzSavedMonths") || "[]");
        const $monthsBox = $("#profile-months-list").empty();
        if (!savedMonths.length) {
            $('<p class="text-muted small mb-0"></p>').text(t("noMonthsYet")).appendTo($monthsBox);
        } else {
            savedMonths.forEach((mTitle) => {
                $('<span class="chip"></span>').text(`🗓️ ${mTitle}`).appendTo($monthsBox);
            });
        }
    }

    // Sign Up Form Submission (novalidate + full JS validation)
    $("#signup-form").on("submit", function (e) {
        e.preventDefault();
        $("#signup-form .msg-error").text("");
        $("#signup-form-status").text("");

        const name = ($("#signup-name").val() || "").trim();
        const email = ($("#signup-email").val() || "").trim().toLowerCase();
        const phone = ($("#signup-phone").val() || "").trim();
        const region = $("#signup-city").val();
        const password = $("#signup-password").val() || "";
        const confirm = $("#signup-confirm").val() || "";

        let hasErr = false;
        if (!isValidName(name)) { $("#err-signup-name").text(t("errName")); hasErr = true; }
        if (!EMAIL_RE.test(email)) { $("#err-signup-email").text(t("errEmail")); hasErr = true; }
        if (!isValidPhone(phone)) { $("#err-signup-phone").text(t("errPhone")); hasErr = true; }
        if (/\s/.test(password)) { $("#err-signup-password").text(t("errPassSpace")); hasErr = true; }
        else if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
            $("#err-signup-password").text(t("errPassFormat")); hasErr = true;
        }
        if (password !== confirm) { $("#err-signup-confirm").text(t("errPassMatch")); hasErr = true; }
        if (hasErr) return;

        playUiSound("success");
        const users = JSON.parse(localStorage.getItem("kzUsers") || "[]");
        const newUser = { name, email, phone, password, region, joined: new Date().toLocaleDateString("en-US") };
        const existingIdx = users.findIndex((u) => u.email === email);
        if (existingIdx >= 0) users[existingIdx] = newUser;
        else users.push(newUser);

        localStorage.setItem("kzUsers", JSON.stringify(users));
        localStorage.setItem("kzCurrentUser", JSON.stringify(newUser));
        this.reset();
        showToast(t("welcomeUserToast", { name }));
        renderProfilePage();
    });

    // Log In Form Submission
    $("#login-form").on("submit", function (e) {
        e.preventDefault();
        $("#login-form .msg-error").text("");
        $("#login-form-status").text("");

        const email = ($("#login-email").val() || "").trim().toLowerCase();
        const password = $("#login-password").val() || "";

        if (!EMAIL_RE.test(email)) {
            $("#err-login-email").text(t("errEmail"));
            return;
        }
        if (!password) {
            $("#err-login-password").text(t("errPassFormat"));
            return;
        }

        const users = JSON.parse(localStorage.getItem("kzUsers") || "[]");
        const matched = users.find((u) => u.email === email && u.password === password);
        if (!matched) {
            showMessage($("#login-form-status"), t("errLoginFail"), true);
            return;
        }

        playUiSound("success");
        localStorage.setItem("kzCurrentUser", JSON.stringify(matched));
        this.reset();
        showToast(t("welcomeUserToast", { name: matched.name }));
        renderProfilePage();
    });

    $("#logout-btn").on("click", function () {
        playUiSound();
        localStorage.removeItem("kzCurrentUser");
        showToast(t("loggedOutToast"), "info");
        renderProfilePage();
    });

    /* =================================================================
       Requirement 7: External Public API Integration (async / await + fetch)
       ================================================================= */
    const weatherCodeLabels = {
        0: { en: "☀️ Clear Sky", ru: "☀️ Ясно", kz: "☀️ Ашық аспан" },
        1: { en: "🌤️ Mainly Clear", ru: "🌤️ Малооблачно", kz: "🌤️ Аздап бұлтты" },
        2: { en: "⛅ Partly Cloudy", ru: "⛅ Переменная облачность", kz: "⛅ Ауыспалы бұлтты" },
        3: { en: "☁️ Overcast", ru: "☁️ Пасмурно", kz: "☁️ Бұлтты" },
        45: { en: "🌫️ Foggy", ru: "🌫️ Туман", kz: "🌫️ Тұман" },
        61: { en: "🌧️ Light Rain", ru: "🌧️ Небольшой дождь", kz: "🌧️ Аздаған жаңбыр" },
        71: { en: "❄️ Snowfall", ru: "❄️ Снегопад", kz: "❄️ Қар" }
    };

    async function fetchLiveWeather() {
        const $citySelect = $("#api-weather-city");
        if (!$citySelect.length) return;

        const $opt = $citySelect.find("option:selected");
        const lat = $opt.data("lat") || 51.1694;
        const lon = $opt.data("lon") || 71.4491;

        $("#weather-api-error").hide();
        $("#weather-api-loading").show();

        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Weather API HTTP " + response.status);
            const data = await response.json();
            const cw = data.current_weather;

            if (cw) {
                const labelObj = weatherCodeLabels[cw.weathercode] || { en: "🌤️ Fair Steppe Sky", ru: "🌤️ Степная погода", kz: "🌤️ Дала ауа райы" };
                $("#api-temp-val").text(`${Math.round(cw.temperature)} °C`);
                $("#api-cond-val").text(pick(labelObj));
                $("#api-wind-val").text(`${cw.windspeed} km/h`);
                $("#api-time-val").text("Live ✓");
            }
        } catch (err) {
            $("#weather-api-error").text(t("apiErrorMsg")).show();
            $("#api-temp-val").text("-6 °C");
            $("#api-cond-val").text("🌤️ Crisp Steppe Breeze");
            $("#api-wind-val").text("14 km/h");
        } finally {
            $("#weather-api-loading").hide();
        }
    }

    async function fetchCountryFacts() {
        if (!$("#country-api-content").length) return;
        $("#country-api-error").hide();
        $("#country-api-loading").show();

        try {
            const response = await fetch("https://restcountries.com/v3.1/alpha/kaz");
            if (!response.ok) throw new Error("REST Countries HTTP " + response.status);
            const arr = await response.json();
            const country = Array.isArray(arr) ? arr[0] : arr;

            if (country && country.name) {
                $("#api-country-name").text(country.name.official || "Republic of Kazakhstan");
                const kzt = country.currencies && country.currencies.KZT;
                if (kzt) $("#api-country-currency").text(`${kzt.name} (${kzt.symbol || "₸"})`);
                if (country.languages) $("#api-country-langs").text(Object.values(country.languages).join(", "));
                const cap = Array.isArray(country.capital) ? country.capital[0] : "Astana";
                $("#api-country-capital").text(`${country.subregion || "Central Asia"} · ${cap}`);
            }
        } catch (err) {
            $("#country-api-error").text(t("apiErrorMsg")).show();
        } finally {
            $("#country-api-loading").hide();
        }
    }

    $("#api-weather-city").on("change", function () {
        playUiSound();
        fetchLiveWeather();
    });

    $("#refresh-api-btn").on("click", function () {
        playUiSound("success");
        pop($(this));
        fetchLiveWeather();
        fetchCountryFacts();
    });

    /* =================================================================
       Language switching (EN / RU / KZ)
       ================================================================= */
    const $langSwitch = $(".lang-switch");

    function switchSiteLanguage(lang) {
        currentLang = uiTranslations[lang] ? lang : "en";
        localStorage.setItem("astanaLang", currentLang);
        $("html").attr("lang", currentLang === "kz" ? "kk" : currentLang);

        // Highlighted elements are not "leaf" elements, so remove the <mark>s before translating
        clearSearchHighlights($body);

        // 1. Elements with an explicit key
        $("[data-i18n]").each(function () { $(this).text(t($(this).data("i18n"))); });
        $("[data-i18n-title]").each(function () {
            const label = t($(this).data("i18n-title"));
            $(this).attr({ title: label, "aria-label": label });
        });

        // 2. Leaf text elements, matched by their original English text
        $("h1, h2, h3, h4, h5, p, a, button, label, th, span, small, li").each(function () {
            const $el = $(this);
            if ($el.is("[data-i18n]") || $el.children().length) return;
            if (!$el.is("[data-orig-en]")) $el.attr("data-orig-en", $el.text().trim());
            const original = $el.attr("data-orig-en");
            if (fullPageTextMap[original]) $el.text(currentLang === "en" ? original : pick({ en: original, ...fullPageTextMap[original] }));
        });

        // 3. Placeholders
        $("input[placeholder], textarea[placeholder]").each(function () {
            const $input = $(this);
            if (!$input.is("[data-orig-ph]")) $input.attr("data-orig-ph", $input.attr("placeholder"));
            const original = $input.attr("data-orig-ph");
            if (placeholderMap[original]) $input.attr("placeholder", pick({ en: original, ...placeholderMap[original] }));
        });

        // 4. Language switch state
        $langSwitch.attr({ "data-active": currentLang, "aria-label": t("langLabel") })
            .find(".lang-btn").each(function () {
                $(this).attr("aria-pressed", $(this).data("lang") === currentLang);
            });

        // 5. Dynamic parts of the pages
        updateThemeButton();
        updateDateTime();
        setTimeOfDayGreeting();
        showFact();
        updateReadMoreLabel();
        renderExtraDishes();
        renderToursTable();
        renderKzRegionDetail(selectedKzRegion, false);
        renderSeasonSpotlight(activeSeasonKey, false);
        renderMonthDetail(activeMonthIndex, false);
        renderWizardTicket(false);
        renderProfilePage();
        if ($("#step-indicator").length) showStep(formStep);
        $(".copy-btn:not(.copied) .copy-label").text(t("copyBtn"));
        if ($search.length) filterLandmarks($search.val());
        if ($faqSearch.length) searchFaq();
    }

    $(".lang-btn").on("click", function () {
        playUiSound();
        switchSiteLanguage($(this).data("lang"));
    });

    /* ---------------- Start ---------------- */
    applyTheme(localStorage.getItem("astanaTheme") === "dark");
    switchSiteLanguage(currentLang);
    fetchLiveWeather();
    fetchCountryFacts();
    onScroll();
});
