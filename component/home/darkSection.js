import darkStyle from "./dark.module.css";
export default function DarkSection() {
  return (
    <div className={`layout ${darkStyle.dark}`}>
      <h1>Latest Projects</h1>
      <div id="latest-projects" className>
        <h2 className={darkStyle.titlePost}>Title</h2>
      </div>
    </div>
  );
}
