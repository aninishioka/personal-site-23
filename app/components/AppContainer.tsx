"use client";

import ThemeContext from "@/contexts/themeContext";
import { ReactNode, useContext } from "react";

export default function AppContainer({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext);

  return <div className={`appContainer ${theme}`}>{children}</div>;
}
