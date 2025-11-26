import React, { useState } from 'react';

function Blog() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
  title: 'KP HED Job Fair 2025',
  date: 'Nov 20, 2025',
  img: 'src/assets/job_fair.jpeg',
  desc: 'Attended the KP Higher Education Department Job Fair 2025 at PAF-IAST and connected with top industry professionals.',
  fullDetails: 'Participated in the Khyber Pakhtunkhwa Higher Education Department Job Fair 2025 hosted at Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology, Haripur. The event offered an excellent opportunity to interact with industry experts, learn about career paths, and discuss advancements in AI, Machine Learning, software development, and technology innovation. Engaged in meaningful conversations with teams from LMKR (Sir Sher Alam Khan), Revnix.com, Synercon Technologies, Delta International Recruitment Agency, Trillium Information Security Systems (TISS), Oxiliry, Taleemabad, Sybrid Private Limited (Lakson Group), Nayatel, and several other organizations. Gained valuable insights and guidance that will help shape future career goals and professional growth.',
  colorIndex: 0
  },
    {
  title: 'PAF-IAST First Convocation',
  date: 'May 31, 2025',
  img: 'src/assets/graduation.jpeg',
  desc: 'Graduated with a BS in Artificial Intelligence at PAF-IASTs First Convocation held at Jinnah Convention Center, Islamabad.',
  fullDetails: 'Participated in the historic First Convocation Ceremony of PAF-IAST on May 31, 2025, at the Jinnah Convention Center, Islamabad. I was officially awarded my BS in Artificial Intelligence degree and received it personally from Mr. Arshad Ayub Khan, the chief guest of the ceremony. The event marked a major milestone for the university, celebrating 484 graduates across various disciplines. Distinguished guests including Prof. Dr. Mohammad Mujahid, Prof. Dr. Atta ur Rahman, and Dr. Sohail Naqvi emphasized innovation, industry linkage, and applied sciences. The ceremony was attended by dignitaries, industry leaders, international partners, faculty, and families, making it a memorable and defining moment in my academic journey.',
  colorIndex: 1
  },
    {
  title: 'FYP Presentation at Career Fest',
  date: 'Apr 29, 2025',
  img: 'src/assets/career_fest.jpeg',
  desc: 'Presented our FYP "Energy Load Forecasting and Analysis using Federated Learning" at PAF-IAST Career Fest 2025.',
  fullDetails: 'Showcased our Final Year Project titled "Energy Load Forecasting and Analysis using Federated Learning" at the PAF-IAST Final Year Projects Exhibition 2025 during Career Fest. The event was attended by industry specialists, company representatives, and senior faculty members. Visitors evaluated our system, appreciated the real-world application of federated learning in energy forecasting, and discussed potential industry use cases. The exhibition was graced by Prof. Dr. Mohammad Mujahid (Rector, PAF-IAST) and Mr. Abdul Karim Khan Tordher, and was held at the newly inaugurated Special Technology Zone-enabled Technology Park.',
  colorIndex: 2
  }

  ];

  return (
    <div className="page-container blog-page">
      <h1 data-aos="fade-up">Events & <span className="highlight">Blog</span></h1>
      <p className="page-lead" data-aos="fade-up" data-aos-delay="60">Here I share events I attend, talks, and short posts with images and media.</p>

      <div className="events-grid">
        {events.map((e, i) => (
          <article 
            key={i} 
            className={`event-card event-card-${e.colorIndex}`}
            data-aos="fade-up" 
            data-aos-delay={i * 120}
            onClick={() => setSelectedEvent(selectedEvent === i ? null : i)}
            style={{ cursor: 'pointer' }}
          >
            <div className="event-media">
              <img src={e.img} alt={e.title} />
            </div>
            <div className="event-body">
              <h3>{e.title}</h3>
              <time className="event-date">{e.date}</time>
              <p>{e.desc}</p>
              
              {selectedEvent === i && (
                <div className="event-expanded-details">
                  <p className="event-full-details">{e.fullDetails}</p>
                </div>
              )}
              
              <div className="event-actions">
                <button className="btn outline toggle-btn">
                  {selectedEvent === i ? 'Collapse' : 'Expand'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
