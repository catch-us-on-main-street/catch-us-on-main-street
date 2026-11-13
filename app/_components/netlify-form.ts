// Posts a form to Netlify Forms. Each form is registered by its twin in public/__forms.html;
// submissions appear under Forms in Netlify, which can email each one to the inbox.
export async function submitNetlifyForm(form: HTMLFormElement): Promise<boolean> {
  const body = new URLSearchParams();
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") body.append(key, value);
  });
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export const fieldClass =
  "w-full min-w-0 border border-espresso/20 bg-white/70 px-4 py-3 font-light text-espresso placeholder:text-espresso/45 focus:border-teal focus:outline-none";
export const labelClass = "mb-2 block text-[11px] font-light tracking-luxe text-espresso/70 uppercase";
