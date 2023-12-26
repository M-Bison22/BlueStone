function Footer() {
  return (
      <>
<section className="footer">
<div className="box-container">
  <div className="box">
    <h3>
      
      <i className="fa-solid fa-gem" /> BLUE STONE
    </h3>
    <p>
     Welcom to Blue Stone<br/>
     E-commerce Clothings
    </p>
    <div className="share">
      <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
      <a href="https://twitter.com/?lang=en" className="fab fa-twitter" />
      <a
        href="https://www.instagram.com/?hl=en"
        className="fab fa-instagram"
      />
      <a
        href="https://www.linkedin.com/feed/"
        className="fab fa-linkedin"
      />
    </div>
  </div>
  <div className="box">
    <h3>Contact info</h3>
    <a href="#" className="links">
      {" "}
      <i className="fas fa-phone"> +91 11111 11111</i>
    </a>
    <a href="mailto:gamerspot@gmail.com" className="links">
      {" "}
      <i className="fas fa-envelope"> bluestone@gmail.com</i>
    </a>
    <a href="#" className="links">
      {" "}
      <i className="fas fa-map-marker-alt"> BLUE STONE</i>
    </a>
  </div>
  <div className="box">
    <h3>Quick Links</h3>
    <a href="/" className="links">
      {" "}
      <i className="fas fa-arrow-right"> Home</i>
    </a>
    <a href="/Mens" className="links">
      {" "}
      <i className="fas fa-arrow-right"> Men</i>
    </a>
    <a href="/Women" className="links">
      {" "}
      <i className="fas fa-arrow-right"> Women</i>
    </a>
    <a href="/Child" className="links">
      {" "}
      <i className="fas fa-arrow-right"> Child</i>
    </a>
    
  </div>
  <div className="box">
    <h3>Newsletter</h3>
    <p>Subscribe for the latest updates</p>
    <input type="email" className="email" placeholder="your email" />
    <input type="submit" className="btn" defaultValue="Subscribe" />
  </div>
</div>
</section>
</>
  
);
}

export default Footer;
