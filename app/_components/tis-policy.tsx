"use client";

import { useEffect } from "react";

const TIS_SRC = "https://app.travelindustrysolutions.com/assets/script/tis.js";

// Travel Industry Solutions fills each <div name="tis-web-codes" id="..."> once, when its script runs.
// Re-adding the script on every visit makes it fill the divs after client-side navigation too.
export function TisPolicyLoader() {
  useEffect(() => {
    document.querySelectorAll(`script[src^="${TIS_SRC}"]`).forEach((s) => s.remove());
    const script = document.createElement("script");
    script.src = TIS_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}

export function TisPolicy({ code }: { code: string }) {
  return (
    // `name` is how the TIS script finds these slots.
    <div {...{ name: "tis-web-codes" }} id={code} className="tis-policy">
      <p className="font-light text-espresso/60">Loading…</p>
    </div>
  );
}
