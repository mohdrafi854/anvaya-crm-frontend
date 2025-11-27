const MenuBar = ({ handleMenuToggle }) => {
  const menuIcon =
    "https://toppng.com/uploads/preview/menu-icon-png-3-lines-115527444043izrbrvjtv.png";
  return (
    <img src={menuIcon} className="iconBar" alt="" onClick={handleMenuToggle} />
  );
};

export default MenuBar;
