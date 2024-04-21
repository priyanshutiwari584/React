export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-3">
        <div className="logo text-2xl font-semibold">Logo</div>
        <nav className="navbar">
          <ul className="navlist flex gap-3 text-xl text-red-500">
            <li className="navlist-item hover:text-blue-500 cursor-pointer">
              Html
            </li>
            <li className="navlist-item hover:text-blue-500 cursor-pointer">
              CSS
            </li>
            <li className="navlist-item hover:text-blue-500 cursor-pointer">
              JavaScript
            </li>
            <li className="navlist-item hover:text-blue-500 cursor-pointer">
              React
            </li>
            <li className="navlist-item hover:text-blue-500 cursor-pointer">
              Tailwind
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
