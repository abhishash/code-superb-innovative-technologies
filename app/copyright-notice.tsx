"use client";

import { useEffect, useState } from "react";

export default function CopyrightNotice() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <small>© {year} Codex Pro</small>;
}
