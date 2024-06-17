const Navbar = () => {
  const routes = [
    { url: "#main", title: "Home" },
    { url: "#about", title: "About" },
    { url: "#profile", title: "Profile" },
  ];
  return (
    <div className="w-full p-4 bg-light-secondary flex flex-row justify-between">
      <span className="text-logo text-primary">MyPortfolio</span>
      <div className="flex flex-row items-center">
        {routes.map((route, index) => (
          <a href={route.url}>{route.title}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
