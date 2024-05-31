import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  };

  return (
    <>
      <button onClick={toggleTheme} className="p-4 flex justify-center align-middle bg-gray-200 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded">
        {theme === "dark" ? <IoMdSunny size="1.5rem" /> : <IoMdMoon size="1.5rem" />}
      </button>
    </>
  );
};
