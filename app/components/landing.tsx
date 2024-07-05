import background from "../assets/background.jpeg";
import donnaNoBg from "../assets/donna-no-bg.png";
// import kansasFlag from "../assets/kansas-flag.jpg";
import kansas from "../assets/kansas.png";

export default function Landing() {
  return (
    <div className="Landing" style={{ backgroundImage: `url(${background})` }}>
      <div className="Landing-overlay">
        <div
          className="Landing-photo"
          style={{ backgroundImage: `url(${donnaNoBg})` }}
        />
        <div className="Landing-content">
          <h1 className="Landing-content-title-1">Donna J. McGinty</h1>
          <h1 className="Landing-content-title-2">
            for Kansas House of Representatives District 57
          </h1>
          <div
            className="Landing-photo-narrow"
            style={{ backgroundImage: `url(${donnaNoBg})` }}
          />
          <div className="Landing-photo-container">
            <div
              className="Landing-content-photo"
              style={{ backgroundImage: `url(${kansas})` }}
            />
            <h2 className="Landing-content-subtitle">Faith, Family, Freedom</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
