import "./index1.css";
import Navbar from "../Navbar/Navbar";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      {/* header section starts  */}
      <Navbar />
      <section className="features dashboard-warp" id="features">
        <h1 className="heading">
          {" "}
          Admin <span>Dashboard</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <h3>ADD PRODUCT</h3>
            <a href="/Addproduct" className="btn">
              Here
            </a>
          </div>
          <div className="box">
            <h3>UPDATE PRODUCT</h3>
            <a href="/Updateproduct" className="btn">
              Here
            </a>
          </div>
          <div className="box">
            <h3>DELETE PRODUCT</h3>
            <a href="/Deleteproduct" className="btn">
              Here
            </a>
          </div>
        </div>
      </section>

      {/*footer section ends here..*/}
      {/* custom js file link  */}
    </>
  );
}
export default Dashboard;
