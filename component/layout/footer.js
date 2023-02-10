import classes from "./footer.module.css";
function Footer() {
  var year = new Date().getFullYear();
  return (
    <div className="mainLayout">
      <footer className={classes.footer}>
        <p className={classes.copyright}>© Judith Bryan Leonard Sie {year}</p>
        <ul>
          <li className={classes.icon}>
            <a
              href="https://github.com/Bryan-snw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className={classes.icon}>
            <a
              href="https://www.linkedin.com/in/judith-bryan-leonard-sie-00690419a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className={classes.icon}>
            <a href="mailto:bryansie29@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
