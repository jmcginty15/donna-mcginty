export default function Donate() {
  return (
    <div className="Donate">
      <div className="Donate-content">
        <h1 className="Donate-title">Donate</h1>
      </div>
      <div className="Donate-content-main-container">
        <p className="Donate-text top">
          <h6 className="Donate-subtitle">
            <a
              className="Donate-link"
              href="https://givebutter.com/mcgintyforkansas57th"
              target="_blank"
              rel="noreferrer"
            >
              Donate here
            </a>{" "}
            or text &quot;MCG57&quot; to 53-555.
          </h6>
        </p>
        <p className="Donate-text">Donations must be $500 or less.</p>
      </div>
    </div>
  );
}
