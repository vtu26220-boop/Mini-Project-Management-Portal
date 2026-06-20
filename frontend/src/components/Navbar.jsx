import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        padding: "15px"
      }}
    >

      <div className="container">

        <h4
          className="text-white m-0"
        >
          Project Management Portal
        </h4>

        <div>

          <Link
            className="btn btn-success me-2"
            to="/add"
          >
            Add Task
          </Link>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;