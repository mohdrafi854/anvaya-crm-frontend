import MenuBar from "../components/MenuBar";
const Settings = ({handleMenuToggle}) => {
  return (
  <div className="right">
    
    <h1 className="main-title">
    <MenuBar handleMenuToggle={handleMenuToggle}/>    
        Anvaya CRM Dashboard
      </h1>
      <div className="main-sec">
        <div className="page-title">Settings</div>
        <div className="lead-block">
          Settings (Coming Soon)
        </div>
      </div>
  </div>
  )
};
export default Settings;
