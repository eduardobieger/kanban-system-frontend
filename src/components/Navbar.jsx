import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-4">
      <div className="flex flex-row justify-center gap-4">
        <Link to="/" className="font-bold text-2xl leading-4 px-4 py-3">Kanban</Link>
        <Link to="/login" className="bg-purple-300 hover:bg-purple-500 dark:bg-purple-700 dark:hover:bg-purple-500 rounded px-4 py-3">Login</Link>
        <Link to="/register" className="bg-purple-300 hover:bg-purple-500 dark:bg-purple-700 dark:hover:bg-purple-500 rounded px-4 py-3">Register</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
