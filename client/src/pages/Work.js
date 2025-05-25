import React from 'react';

const workItems = [
  {
    src: "https://media.istockphoto.com/id/1047699430/photo/overhead-view-on-business-people-around-desk.jpg?s=612x612&w=0&k=20&c=mw7GAXTEOAQ36taGxzo8DPE3CLOpG7Zu466FCxeQJL0=",
    alt: "Professional Projects",
    title: "Work on Projects",
    description: "Tackle big goals by breaking them down into actionable steps."
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Remote Meetings",
    title: "Attend Meetings",
    description: "Collaborate with your team effectively, even across distances."
  },
  {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    alt: "Productivity Tools",
    title: "Boost Productivity",
    description: "Use task managers, calendars, and timers to get more done in less time."
  },
  {
    src: "https://images.unsplash.com/photo-1560264418-c4445382edbc",
    alt: "Professional Growth",
    title: "Upskill for Growth",
    description: "Continually improve your expertise to stay ahead in your career."
  }
];

const Work = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Work Tasks</h2>
      <p style={{ marginBottom: '2rem', color: '#374151', fontSize: '1.1rem' }}>
        Activities that support your professional goals and job success.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {workItems.map((item, index) => (
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

export default Work;
