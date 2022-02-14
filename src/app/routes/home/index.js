import React from "react";
import Filter from "components/Filter/index";
import Featured from "components/Featured/index";
import AppsLinker from "components/AppsLinker/index";
import Gallery from "components/Gallery/index";

function App() {
  return (
    <div className="homepage container">
      <div className="homepage_header-area">
        <Filter />
      </div>
      <div className="homepage_featured-stays">
        <Featured />
      </div>
      <div className="container-fluid homepage">
        <AppsLinker />
      </div>
      <div className="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
