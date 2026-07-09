export function normalizeMobile(phone) {
  if (!phone) return "";
  
  // 1. Trim leading/trailing spaces
  let val = phone.trim();
  
  // 2. Remove spaces
  val = val.replace(/\s+/g, "");
  
  // 3. Remove dashes (-)
  val = val.replace(/-/g, "");
  
  // 4. Remove brackets (both ( and ))
  val = val.replace(/[()]/g, "");
  
  // 5. If the number starts with "+91", remove only the country code.
  if (val.startsWith("+91")) {
    val = val.slice(3);
  }
  // 6. If the number starts with "91" and has 12 digits, remove the leading 91.
  else if (val.startsWith("91") && val.length === 12) {
    val = val.slice(2);
  }
  
  return val;
}

export function validateMobile(v) {
  if (!v) return "Mobile number is required.";
  const normalized = normalizeMobile(v);
  if (!/^\d{10}$/.test(normalized)) return "Enter a valid 10-digit Indian mobile number.";
  if (!/^[6-9]/.test(normalized)) return "Must be a valid Indian mobile number starting with 6-9.";
  return "";
}

export function formatMobileForDisplay(phone) {
  if (!phone) return "—";
  const normalized = normalizeMobile(phone);
  if (normalized.length === 10) {
    return `+91${normalized}`;
  }
  return phone;
}
