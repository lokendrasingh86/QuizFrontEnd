import "./Background.css"
//import "../App.css";
const Background = ({ children }) => {
  return (
    <div>
      <div className="main_frame">
        <img
          className="logo"
          // className="logo"
          src="https://abesquiz.netlify.app/static/media/abes-logo.67a67190632364ae614c.png"
          alt="logo"
        />
      </div>
      <div className="overlay">{children}</div>
    </div>
  );
};
export default Background;
