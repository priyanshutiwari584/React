function Header() {
  return (
    <>
      <header className="flex justify-between px-10 py-5 bg-slate-800">
        <div className="logo text-blue-500 font-bold text-2xl">Logo</div>
        <nav>
          <ul className="flex gap-3 text-xl text-red-500">
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
