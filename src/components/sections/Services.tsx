const services = [
  { number: "01", title: "Custom software", text: "Have a problem that off-the-shelf software can't solve? I'll help turn it into a practical solution built around the way you work." },
  { number: "02", title: "Web & mobile development", text: "From a first idea to a working product, I build websites, mobile apps and full-stack platforms designed for real people." },
  { number: "03", title: "POS & business systems", text: "Simplify day-to-day operations with tailored point-of-sale, ordering and management systems for your business." },
  { number: "04", title: "Hotel IT & digital presence", text: "Support for hospitality businesses, from websites and business email to social media and the digital tools that keep operations moving." },
  { number: "05", title: "SEO & discoverability", text: "Make it easier for people to find your business online with search-friendly website content and technical improvements." },
  { number: "06", title: "App publishing", text: "Get your mobile app ready for release, from preparing the build to publishing on Google Play and the Apple App Store." },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="wrap">
        <div className="services-heading" data-reveal>
          <div><p className="services-eyebrow">Services</p><h2>What can I do for you<span>?</span></h2></div>
          <p>Thoughtful technology, built around your goals. Whether you need a new product or a better way to run your business, let’s make it happen.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
