"use client";

import { useState } from "react";

const MAP_SRC = "https://www.google.com/maps?q=Equity+Fin+Academy+Dubai+UAE&output=embed";

export default function DubaiMap() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="map-frame reveal" style={{ display: "grid", placeItems: "center", padding: 28 }}>
        <div style={{ textAlign: "center", maxWidth: "36ch" }}>
          <p style={{ marginTop: 0 }}>
            Equity Fin Academy teaches in Dubai, UAE. Open the map when you want the pin. It stays off the first load so the contact page remains quick.
          </p>
          <button type="button" className="btn btn-outline" onClick={() => setOpen(true)}>
            Show the Dubai map
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="map-frame reveal">
      <iframe
        src={MAP_SRC}
        title="Map showing Dubai, UAE"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
