import React from "react";
import Navbar from "../../Components/Navbar";
import Search from "../../Components/Search";
import TeamStats from "../../Containers/TeamStats";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-4 col-lg-3">
            <Search />
            <TeamStats />
          </div>
          <div className="col-12 col-md-8 col-lg-9">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
