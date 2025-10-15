
// Small utility to trigger animations for elements with the `ftco-animate` class.
// Adds a `ftco-animated` class when the element enters the viewport. Optional
// data-delay attribute (ms) can be used to stagger animations.

function initFtcoAnimate(options = {}) {
  const selector = options.selector || ".ftco-animate";
  const animatedClass = options.animatedClass || "ftco-animated";
  const defaultDelay = options.defaultDelay || 0;

  const elems = Array.from(document.querySelectorAll(selector));
  if (!elems.length) return;

  const applyAnimation = (el) => {
    const delayAttr = el.getAttribute("data-delay");
    const delay = delayAttr ? parseInt(delayAttr, 10) : defaultDelay;
    if (delay) {
      el.style.animationDelay = `${delay}ms`;
      el.style.WebkitAnimationDelay = `${delay}ms`;
    }
    el.classList.add(animatedClass);
    // once animated, remove any inline delay to avoid affecting future changes
    setTimeout(() => {
      el.style.animationDelay = "";
      el.style.WebkitAnimationDelay = "";
    }, delay + 600);
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyAnimation(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      }
    );

    elems.forEach((el) => io.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    const onScroll = () => {
      elems.forEach((el) => {
        if (el.classList.contains(animatedClass)) return;
        const rect = el.getBoundingClientRect();
        if (
          rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.85
        ) {
          applyAnimation(el);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // run once in case some elements are already visible
    setTimeout(onScroll, 50);
  }
}

// Init when DOM is ready. If document already loaded, init immediately.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initFtcoAnimate());
} else {
  initFtcoAnimate();
}

export default initFtcoAnimate;
