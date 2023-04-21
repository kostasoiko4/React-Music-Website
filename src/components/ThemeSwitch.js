import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { Form } from "react-bootstrap";

export default function ThemeSwitch() {
  const { darkMode, setDarkMode } = useThemeContext();

  const switchTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("darkMode", "")
      : document.documentElement.removeAttribute("darkMode", "");
  }, [darkMode]);

  return (
    <Form>
      <Form.Check
        type="switch"
        className="theme-switch"
        checked={darkMode}
        onChange={switchTheme}
        label="Dark Mode"
        />
    </Form>
  );
}
