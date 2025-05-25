import React from 'react';

const studyItems = [
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    alt: "Focused Study",
    title: "Focused Learning",
    description: "Set aside distraction-free time to absorb new concepts deeply."
  },
  {
    src: "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?semt=ais_hybrid&w=740",
    alt: "Online Classes",
    title: "Interactive Courses",
    description: "Join online platforms to learn anything from coding to cooking."
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    alt: "Note Taking",
    title: "Effective Note-Taking",
    description: "Organize thoughts and make revision effortless with great notes."
  },
  {
    src: "https://media.istockphoto.com/id/1405583619/photo/metaphor-of-teamwork-in-business.jpg?s=612x612&w=0&k=20&c=-pkZL6CMiOQSiXA_CbKk-0e8wOwPT35H4ERAy3F_hTQ=",
    alt: "Group Study",
    title: "Collaborate to Grow",
    description: "Group discussions often lead to greater understanding and insight."
  }
];

const Study = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Study Tasks</h2>
      <p style={{ marginBottom: '2rem', color: '#374151', fontSize: '1.1rem' }}>
        Activities to enhance your learning and academic performance.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {studyItems.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            alignItems: 'center',
            gap: '1.5rem',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
            <div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#1e40af' }}>{item.title}</h3>
              <p style={{ fontSize: '1rem', color: '#4b5563' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Study;
