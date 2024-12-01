export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I am </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Santoshi Manvita</span>{" "}
            <br />
            Karuturi
          </h1>
          <p className="hero--section-description">
          This portfolio highlights my expertise through a diverse range of projects, case studies, and achievements. Explore my work to discover my skills and abilities. Feel free to reach out for detailed discussions. Thank you!
            <br /> 
            <br />
          </p>
        </div>
        
        
        <a href="https://www.linkedin.com/in/manvita-karuturi/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        &nbsp;&nbsp; &nbsp; &nbsp;
        <a href="mailto:smanvitak@gmail.com" className="btn btn-primary">Email</a>
      </div>
      
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
