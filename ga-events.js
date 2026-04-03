(() => {
  const isGtagReady = () => typeof window.gtag === "function";

  const getSectionName = (el) => {
    const section = el.closest("section, header, main, footer");
    if (!section) return "unknown";
    const labeled = section.getAttribute("data-section-name");
    if (labeled) return labeled;
    const heading = section.querySelector("h1, h2, h3");
    return heading ? heading.textContent.trim() : "unknown";
  };

  const fireEvent = (name, params) => {
    if (!isGtagReady()) return;
    window.gtag("event", name, params);
  };

  const buildCommonParams = (el) => ({
    page_title: document.title,
    page_location: window.location.href,
    link_url: el?.href || undefined,
    button_text: el?.textContent?.trim() || undefined,
    section_name: el ? getSectionName(el) : undefined,
  });

  const handleClick = (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const common = buildCommonParams(link);

    if (href.startsWith("mailto:")) {
      fireEvent("email_click", common);
      return;
    }

    if (href.startsWith("tel:")) {
      fireEvent("phone_click", common);
      return;
    }

    if (href.includes("savvycal.com")) {
      fireEvent("book_consult_click", common);
      return;
    }

    if (href.includes("psychologytoday.com")) {
      fireEvent("psychology_today_click", common);
      return;
    }

    const text = (link.textContent || "").toLowerCase();
    if (text.includes("book") && text.includes("consult")) {
      fireEvent("book_consult_click", common);
      return;
    }

    if (link.dataset.ctaType === "blog") {
      fireEvent("blog_cta_click", common);
      return;
    }

    if (link.dataset.ctaType === "service") {
      fireEvent("service_cta_click", common);
      return;
    }
  };

  document.addEventListener("click", handleClick, { passive: true });

  // Call window.trackLeadSuccess(formElement, extraParams) after a confirmed form success.
  window.trackLeadSuccess = (formElement, extraParams = {}) => {
    const base = formElement ? buildCommonParams(formElement) : buildCommonParams();
    fireEvent("generate_lead", { ...base, ...extraParams });
  };

  const originalFetch = window.fetch?.bind(window);
  if (originalFetch) {
    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      try {
        const url =
          typeof args[0] === "string"
            ? args[0]
            : args[0] instanceof Request
              ? args[0].url
              : "";
        const method =
          args[0] instanceof Request
            ? args[0].method
            : args[1]?.method || "GET";
        if (
          url.includes("formspree.io") &&
          method.toUpperCase() === "POST" &&
          response.ok
        ) {
          fireEvent("generate_lead", buildCommonParams());
        }
      } catch (_) {
        // no-op: tracking should never break requests
      }
      return response;
    };
  }
})();
