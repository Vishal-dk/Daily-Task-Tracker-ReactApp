import React from 'react';

const personalItems = [
  {
    src: "https://images.theconversation.com/files/638815/original/file-20241216-15-zor5sz.jpg?ixlib=rb-4.1.0&rect=7%2C0%2C5141%2C3149&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    alt: "Workout",
    title: "Stay Fit, Stay Sharp",
    description: "Daily workouts not only build strength but boost confidence and mental clarity."
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D12AQEmUJ5tPb3Qfw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1655042863945?e=2147483647&v=beta&t=eezsIe2l9a7oxxFhog3GiNbdIhiY9d5jqncI1sMUt6Y",
    alt: "Chores",
    title: "Organize Your Space",
    description: "Tidy surroundings create a calm mind. Simple chores can bring peace and productivity."
  },
  {
    src: "https://thumbs.dreamstime.com/b/kids-reading-books-fantasy-library-two-children-long-surreal-wooden-chairs-papers-flying-around-them-45107111.jpg",
    alt: "Reading",
    title: "Escape Into Stories",
    description: "Reading fuels imagination and personal growth. Dive into books that inspire you."
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5612AQHHZMp8_uTvTQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676248985927?e=2147483647&v=beta&t=rnEUg0GYfeHTN5_Jd7tqoOnqSODkPaAnd6BvPMbbQTs",
    alt: "Personal Goals",
    title: "Set and Crush Goals",
    description: "Turn your dreams into actionable goals. Every step forward counts."
  }
];

const Personal = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Personal Tasks</h2>
      <p style={{ marginBottom: '2rem', color: '#374151', fontSize: '1.1rem' }}>
        Activities focused on self-care, home, and personal development.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {personalItems.map((item, index) => (
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

export default Personal;
