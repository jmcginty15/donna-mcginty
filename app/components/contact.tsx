export default function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-content">
        <h1 className="Contact-title">Contact</h1>
      </div>
      <div className="Contact-content-main">
        <div className="Contact-address">
          <h6 className="Contact-subtitle">Phone</h6>
          <p>
            <a className="Contact-link" href="tel:7852212767">
              (785) 221-2767
            </a>
          </p>
        </div>
        <div className="Contact-address">
          <h6 className="Contact-subtitle">Email</h6>
          <p>
            <a
              className="Contact-link Contact-email"
              href="mailto:mcgintyforkansas57th@gmail.com"
            >
              mcgintyforkansas57th@gmail.com
            </a>
          </p>
        </div>
        <div className="Contact-address">
          <h6 className="Contact-subtitle">Home Address</h6>
          <p>1733 NW Taylor St</p>
          <p>Topeka, KS 66608</p>
        </div>
        <div className="Contact-address">
          <h6 className="Contact-subtitle">Mailing Address</h6>
          <p>PO Box 750231</p>
          <p>Topeka, KS 66675</p>
        </div>
      </div>
    </div>
  );
}
