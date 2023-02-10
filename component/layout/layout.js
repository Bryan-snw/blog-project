import { Fragment } from "react";
import TopNavbar from "./topNavbar";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <TopNavbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
