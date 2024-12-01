export default function Testimonial() {
  const data = {
    "testimonial": [
      {
        "src": "./img/avatar-image-3.png",
        "author_name": "NORTHEASTERN UNIVERSITY",
        "header2": "Network Security Engineer",
        "header3": "September 2024 - Present",
        "description": "\nWorked with Aruba Airwave to configure switches and routers for both wired and wireless networks, utilizing the platform to monitor infrastructure health, troubleshoot issues, and perform proactive performance assessments to ensure optimal network functionality across multiple sites. Used Aruba Airwave’s monitoring tools to analyze traffic patterns, identify bottlenecks, and implement necessary adjustments to improve network efficiency. Additionally, managed and configured Palo Alto firewalls across various university locations, ensuring the security of network traffic by implementing advanced threat prevention policies, conducting regular firewall rule audits, and resolving security incidents to maintain a secure and reliable network environment for all campus users."
      },
      {
        "src": "./img/avatar-image.png",
        "author_name": "BARCLAYS",
        "header2": "Network Security Engineer",
        "header3": "August 2021 - August 2023",
        "description": "\nLed the configuration and troubleshooting of SD-WAN, improving VPN tunnel formation and routing, resulting in a 98% customer success rate in threat and vulnerability management. Integrated Checkpoint firewalls and upgraded Cisco ASA, achieving a 35% reduction in cyber threats. Developed an AI tool in Ansible for Change Management and Fortinet Implementation, automating tasks and reducing human effort by 90%. Provided critical support to 45k remote employees globally through expert packet and log analysis, conducted root cause analysis, and managed security alerts, significantly enhancing the overall security posture. Mentored new hires on company architecture, networking, and products, while maintaining 60+ Ansible playbooks for seven projects in Barclays GTIS."
      },
      {
        "src": "./img/avatar-image-1.png",
        "author_name": "SHEZIGS",
        "header2": "Co-Founder ",
        "header3": "February 2021 - April 2023",
        "description": "\nFounded and conceptualized a successful startup in the Transportation Mobility industry, leading a team of 13 female employees to achieve the goal of making Hyderabad safer for women and children. Led negotiations and successfully finalized a strategic acquisition deal with AanVC, a prominent venture capital firm, and oversaw the seamless integration of the startup into their portfolio, ensuring a smooth transition for the team."
      },
      {
        "src": "./img/avatar-image-2.png",
        "author_name": "YOKOGAWA",
        "header2": "Full Stack Engineer",
        "header3": "May 2020 - July 2020",
        "description": "\nSpearheaded the development of responsive web applications using HTML, CSS, and JavaScript, implementing advanced front-end features with React.js and Angular while collaborating with cross-functional teams. Optimized database efficiency with SQL, conducted code reviews, and resolved over 50 full-stack issues, ensuring adherence to best practices and coding standards."
      },
    ]
  };

  return (
    <section className="testimonial--section" id="testimonial">
     <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Professional</p>
          <h1 className="sections--heading">Work Experience</h1>
        </div>
      </div>

      <div className="testimonial--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--box">
            <div className="testimonial--box--content">
              <img src={item.src} alt="Avatar" />
              <div className="testimonial--box--text">
                <div className="testimonial--box--author--detail">
                  <p className="text-md testimonial--author--name">
                    {item.author_name}
                  </p>
                </div>
                
                <h3 className="text-md">{item.header2}</h3>
                <h3 className="text-md">{item.header3}</h3>
                {/* Use dangerouslySetInnerHTML to render HTML */}
                <p className="text-md" dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br />') }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
