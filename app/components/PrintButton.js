"use client";

export default function PrintButton({ className = "btn btn-primary", children = "Print or save as PDF" }) {
  return (
    <button type="button" className={className} onClick={() => window.print()}>
      {children}
    </button>
  );
}
