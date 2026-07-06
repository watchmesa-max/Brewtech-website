export default function LogoConcepts() {
  return (
    <div style={{ background: "#0a1628", minHeight: "100vh", padding: "60px 20px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: "#c8a96e", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>
            Brand Identity 2026
          </p>
          <h1 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 800, marginBottom: 8 }}>BrewTech CC — Logo Concepts</h1>
          <p style={{ color: "#8892b0", fontSize: "0.9rem" }}>Founded 1996 by John Dryden · Africa's Brewing Instrumentation Leader</p>
        </div>

        {/* Concepts Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* CONCEPT 1 */}
          <div style={{ background: "#112240", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 16, padding: 36 }}>
            <p style={{ color: "#c8a96e", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>Concept 01 — Geometric Mark</p>

            {/* Dark version */}
            <div style={{ background: "#0a1628", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, minHeight: 120 }}>
              <svg width="260" height="64" viewBox="0 0 260 64" fill="none">
                <rect x="0" y="8" width="4" height="48" fill="#c8a96e"/>
                <rect x="0" y="8" width="30" height="4" fill="#c8a96e"/>
                <rect x="0" y="28" width="26" height="4" fill="#c8a96e"/>
                <rect x="0" y="52" width="30" height="4" fill="#c8a96e"/>
                <path d="M4 12 Q32 12 32 25 Q32 32 26 32" stroke="#c8a96e" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M4 32 Q34 32 34 43 Q34 52 30 52" stroke="#c8a96e" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <text x="48" y="34" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="800" fill="#ffffff">BREW</text>
                <text x="48" y="56" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="400" fill="#c8a96e" letterSpacing="5">TECH  CC</text>
              </svg>
            </div>

            {/* Light version */}
            <div style={{ background: "#ffffff", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, minHeight: 120 }}>
              <svg width="260" height="64" viewBox="0 0 260 64" fill="none">
                <rect x="0" y="8" width="4" height="48" fill="#8a6e3a"/>
                <rect x="0" y="8" width="30" height="4" fill="#8a6e3a"/>
                <rect x="0" y="28" width="26" height="4" fill="#8a6e3a"/>
                <rect x="0" y="52" width="30" height="4" fill="#8a6e3a"/>
                <path d="M4 12 Q32 12 32 25 Q32 32 26 32" stroke="#8a6e3a" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M4 32 Q34 32 34 43 Q34 52 30 52" stroke="#8a6e3a" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <text x="48" y="34" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="800" fill="#0a1628">BREW</text>
                <text x="48" y="56" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="400" fill="#8a6e3a" letterSpacing="5">TECH  CC</text>
              </svg>
            </div>
            <p style={{ color: "#8892b0", fontSize: "0.78rem", lineHeight: 1.6 }}>Geometric B mark — structured and technical. Clean stacked wordmark with BREW dominant and TECH CC in spaced gold. Works at any size, any medium.</p>
          </div>

          {/* CONCEPT 2 */}
          <div style={{ background: "#112240", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 16, padding: 36 }}>
            <p style={{ color: "#c8a96e", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>Concept 02 — Vessel Icon</p>

            <div style={{ background: "#0a1628", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, minHeight: 120 }}>
              <svg width="260" height="72" viewBox="0 0 260 72" fill="none">
                <rect x="16" y="6" width="22" height="4" rx="2" fill="#c8a96e"/>
                <path d="M12 14 L6 48 Q6 64 27 64 Q48 64 48 48 L42 14 Z" fill="none" stroke="#c8a96e" strokeWidth="2.5"/>
                <path d="M12 14 L42 14" stroke="#c8a96e" strokeWidth="2.5"/>
                <path d="M9 40 Q27 35 45 40 L48 48 Q48 64 27 64 Q6 64 6 48 Z" fill="#c8a96e" fillOpacity="0.18"/>
                <circle cx="22" cy="52" r="2" fill="#c8a96e" fillOpacity="0.6"/>
                <circle cx="31" cy="45" r="1.5" fill="#c8a96e" fillOpacity="0.5"/>
                <circle cx="26" cy="39" r="1" fill="#c8a96e" fillOpacity="0.4"/>
                <text x="60" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" fill="#ffffff">BrewTech</text>
                <text x="60" y="50" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#c8a96e" letterSpacing="3">PRECISION BREWING TECHNOLOGY</text>
                <rect x="60" y="56" width="168" height="1" fill="#c8a96e" fillOpacity="0.3"/>
                <text x="220" y="68" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#c8a96e" letterSpacing="2">CC</text>
              </svg>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, minHeight: 120 }}>
              <svg width="260" height="72" viewBox="0 0 260 72" fill="none">
                <rect x="16" y="6" width="22" height="4" rx="2" fill="#8a6e3a"/>
                <path d="M12 14 L6 48 Q6 64 27 64 Q48 64 48 48 L42 14 Z" fill="none" stroke="#8a6e3a" strokeWidth="2.5"/>
                <path d="M12 14 L42 14" stroke="#8a6e3a" strokeWidth="2.5"/>
                <path d="M9 40 Q27 35 45 40 L48 48 Q48 64 27 64 Q6 64 6 48 Z" fill="#8a6e3a" fillOpacity="0.12"/>
                <circle cx="22" cy="52" r="2" fill="#8a6e3a" fillOpacity="0.6"/>
                <circle cx="31" cy="45" r="1.5" fill="#8a6e3a" fillOpacity="0.5"/>
                <text x="60" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" fill="#0a1628">BrewTech</text>
                <text x="60" y="50" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="300" fill="#8a6e3a" letterSpacing="3">PRECISION BREWING TECHNOLOGY</text>
                <rect x="60" y="56" width="168" height="1" fill="#8a6e3a" fillOpacity="0.3"/>
                <text x="220" y="68" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#8a6e3a" letterSpacing="2">CC</text>
              </svg>
            </div>
            <p style={{ color: "#8892b0", fontSize: "0.78rem", lineHeight: 1.6 }}>Fermentation vessel icon nods to brewing heritage. Tagline "Precision Brewing Technology" positions the company as a leader in instrumentation. Modern and purposeful.</p>
          </div>

          {/* CONCEPT 3 */}
          <div style={{ background: "#112240", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 16, padding: 36 }}>
            <p style={{ color: "#c8a96e", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>Concept 03 — Diamond BT Monogram</p>

            <div style={{ background: "#0a1628", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, minHeight: 120 }}>
              <svg width="260" height="64" viewBox="0 0 260 64" fill="none">
                <polygon points="32,2 56,32 32,62 8,32" fill="none" stroke="#c8a96e" strokeWidth="1.5"/>
                <polygon points="32,14 46,32 32,50 18,32" fill="#c8a96e" fillOpacity="0.12"/>
                <text x="24" y="37" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#c8a96e">BT</text>
                <text x="68" y="28" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#ffffff" letterSpacing="-0.5">BREW</text>
                <text x="68" y="52" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#c8a96e" letterSpacing="-0.5">TECH</text>
                <text x="164" y="52" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="400" fill="#8892b0" letterSpacing="2"> CC</text>
                <rect x="68" y="57" width="36" height="1.5" fill="#c8a96e" rx="1"/>
                <text x="68" y="68" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="300" fill="#8892b0" letterSpacing="3">AFRICA · EST 1996</text>
              </svg>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, minHeight: 120 }}>
              <svg width="260" height="64" viewBox="0 0 260 64" fill="none">
                <polygon points="32,2 56,32 32,62 8,32" fill="none" stroke="#8a6e3a" strokeWidth="1.5"/>
                <polygon points="32,14 46,32 32,50 18,32" fill="#8a6e3a" fillOpacity="0.1"/>
                <text x="24" y="37" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#8a6e3a">BT</text>
                <text x="68" y="28" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#0a1628" letterSpacing="-0.5">BREW</text>
                <text x="68" y="52" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#8a6e3a" letterSpacing="-0.5">TECH</text>
                <text x="164" y="52" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="400" fill="#999" letterSpacing="2"> CC</text>
                <rect x="68" y="57" width="36" height="1.5" fill="#8a6e3a" rx="1"/>
                <text x="68" y="68" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="300" fill="#aaa" letterSpacing="3">AFRICA · EST 1996</text>
              </svg>
            </div>
            <p style={{ color: "#8892b0", fontSize: "0.78rem", lineHeight: 1.6 }}>Diamond BT monogram — precision and quality. Two-tone wordmark BREW/TECH. "Africa · Est 1996" honours John's founding without feeling dated. Premium and confident.</p>
          </div>

          {/* CONCEPT 4 */}
          <div style={{ background: "#112240", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 16, padding: 36 }}>
            <p style={{ color: "#c8a96e", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>Concept 04 — Pure Wordmark</p>

            <div style={{ background: "#0a1628", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, minHeight: 120 }}>
              <svg width="260" height="68" viewBox="0 0 260 68" fill="none">
                <rect x="0" y="0" width="5" height="68" fill="#c8a96e" rx="2"/>
                <text x="18" y="34" fontFamily="Inter, sans-serif" fontSize="34" fontWeight="900" fill="#ffffff" letterSpacing="-2">BREW</text>
                <text x="18" y="62" fontFamily="Inter, sans-serif" fontSize="34" fontWeight="200" fill="#c8a96e" letterSpacing="-2">TECH</text>
                <rect x="173" y="46" width="28" height="17" rx="8.5" fill="none" stroke="#c8a96e" strokeWidth="1"/>
                <text x="180" y="58" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#c8a96e" letterSpacing="1">CC</text>
              </svg>
            </div>

            <div style={{ background: "#ffffff", borderRadius: 10, padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, minHeight: 120 }}>
              <svg width="260" height="68" viewBox="0 0 260 68" fill="none">
                <rect x="0" y="0" width="5" height="68" fill="#8a6e3a" rx="2"/>
                <text x="18" y="34" fontFamily="Inter, sans-serif" fontSize="34" fontWeight="900" fill="#0a1628" letterSpacing="-2">BREW</text>
                <text x="18" y="62" fontFamily="Inter, sans-serif" fontSize="34" fontWeight="200" fill="#8a6e3a" letterSpacing="-2">TECH</text>
                <rect x="173" y="46" width="28" height="17" rx="8.5" fill="none" stroke="#8a6e3a" strokeWidth="1"/>
                <text x="180" y="58" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#8a6e3a" letterSpacing="1">CC</text>
              </svg>
            </div>
            <p style={{ color: "#8892b0", fontSize: "0.78rem", lineHeight: 1.6 }}>Ultra-minimal stacked wordmark. Bold/light weight contrast creates immediate hierarchy. Gold accent bar anchors the brand. The CC pill is refined, not bolted on. Scales perfectly everywhere.</p>
          </div>
        </div>

        {/* Taglines */}
        <div style={{ background: "#112240", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 16, padding: 36, marginTop: 32 }}>
          <p style={{ color: "#c8a96e", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>Tagline Options</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { label: "Option A", tag: "Precision Brewing Technology", note: "Technical, credible, on-brand" },
              { label: "Option B", tag: "Brewing Excellence. African Expertise.", note: "Geography-first, proud, differentiating" },
              { label: "Option C", tag: "The Science Behind the Beer", note: "Human, memorable, conversation-starter" },
            ].map((t) => (
              <div key={t.label} style={{ background: "#0a1628", borderRadius: 10, padding: 20 }}>
                <div style={{ color: "#fff", fontWeight: 600, marginBottom: 8, fontSize: "0.9rem" }}>{t.label}</div>
                <div style={{ color: "#c8a96e", fontStyle: "italic", marginBottom: 8, fontSize: "0.9rem" }}>&ldquo;{t.tag}&rdquo;</div>
                <div style={{ color: "#8892b0", fontSize: "0.75rem" }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: 40, color: "#8892b0", fontSize: "0.7rem" }}>
          BrewTech CC · Logo Concept Review · 2026 · Reply to Grant on Slack with your preferred concept number
        </p>
      </div>
    </div>
  );
}
