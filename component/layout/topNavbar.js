import classes from "./topNavbar.module.css";
import Link from "next/link";
import { useState } from "react";

function TopNavbar() {
  const [active, setActive] = useState("");
  const [status, setStatus] = useState(false);

  function clickHandler() {
    if (!status) {
      setActive(classes.active);
      setStatus(true);
    } else {
      setActive("");
      setStatus(false);
    }
  }

  return (
    <header className={classes.header}>
      <h3 className={classes.logo}>Bryan&apos;s Blog</h3>
      <div className={`${classes.listMenu} ${active}`}>
        <Link href="/projects/1" onClick={clickHandler}>
          Projects
        </Link>
        <Link href="/#about" onClick={clickHandler}>
          About
        </Link>
        <Link href="#footer" onClick={clickHandler}>
          Contact
        </Link>
      </div>
      <div className={classes.iconMenu}>
        <Link
          href="javascript:"
          className={classes.icon}
          onClick={clickHandler}
        >
          <i className="fa-solid fa-bars"></i>
        </Link>
      </div>
    </header>
  );
}

export default TopNavbar;
