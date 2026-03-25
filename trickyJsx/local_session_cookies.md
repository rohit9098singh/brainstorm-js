LOCAL STORAGE vs SESSION STORAGE vs COOKIES

Feature: Lifetime
- Local Storage: Infinite (jab tak manually delete na karo)
- Session Storage: Tab close tak
- Cookies: Expiry set kar sakte ho

Feature: Scope
- Local Storage: Same origin
- Session Storage: Same origin + tab specific
- Cookies: Domain + path based
🔥 “Domain + Path based” ka matlab kya hai?
👉 Cookies har jagah available nahi hoti
👉 Wo sirf specific domain aur specific path (URL part) ke liye valid hoti hain
👉 Ye cookie available hogi:
example.com ✅
www.example.com ✅
shop.example.com ✅
👉 Lekin:
other.com ❌


Feature: Storage Size
- Local Storage: ~5–10 MB
- Session Storage: ~5 MB
- Cookies: ~4 KB (bahut chhota)

Feature: Server Access
- Local Storage: Nahi
- Session Storage: Nahi
- Cookies: Haan (automatically request ke sath server ko jata hai)

Feature: Accessibility
- Local Storage: JS se easily access
- Session Storage: JS se access
- Cookies: JS + Server dono

Feature: Security
- Local Storage: Low (XSS risk)
- Session Storage: Low
- Cookies: High (HttpOnly, Secure flags use kar sakte ho)

Feature: Data Type
- Sab me: String only

Feature: Performance
- Local Storage: Fast
- Session Storage: Fast
- Cookies: Slow (har request me bheja jata hai)

Feature: Use Case
- Local Storage: Preferences, caching
- Session Storage: Temporary data
- Cookies: Authentication, session, tracking


ONE-LINE SUMMARY:
- LocalStorage → permanent frontend data
- SessionStorage → temporary tab-based data
- Cookies → server communication + auth


REAL-WORLD USAGE:
- Dark mode → LocalStorage
- Form data (temporary) → SessionStorage
- Login/session token → Cookies
- API caching → LocalStorage
- Multi-tab isolation → SessionStorage


IMPORTANT (INTERVIEW):
Sensitive data kaha store kare?

- LocalStorage → Unsafe
- SessionStorage → Unsafe
- Cookies (HttpOnly) → Safer


FINAL VERDICT:
"Koi best nahi hota — choice depends on lifetime, security, aur server interaction."