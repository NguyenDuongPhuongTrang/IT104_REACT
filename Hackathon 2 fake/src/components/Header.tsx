function Header() {
  return (
    <header className="flex flex-col items-center mb-6 justify-center bg-[white] rounded-xl p-8 gap-2">
      <div className="flex items-center gap-2">
        <span className="text-5xl text-[6968c9]">📚</span>
        <h1 className="text-4xl font-bold text-[#6968c9]">Quản Lý Thư Viện</h1> 
      </div>
      <p className="text-[gray]">Hệ thống quản lý sách hiện đại và thông minh</p>
    </header>
  );
}

export default Header;
