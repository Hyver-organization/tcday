import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <html lang="en" />
      <title>Tech Communities Day - Building the Future of Tech in Africa</title>
      <meta name="description" content="Join Tech Communities Day 2025, the annual gathering of tech communities, startups, designers, and innovators in Africa. Connect, Inspire, and Innovate with us!" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Tech Communities Day 2025 - Building the Future of Tech in Africa" />
      <meta property="og:description" content="Join Tech Communities Day 2025, the annual gathering of tech communities, startups, designers, and innovators in Africa. Connect, Inspire, and Innovate with us!" />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tech Communities Day 2025" />
      <meta name="twitter:description" content="Join Tech Communities Day 2025, the annual gathering of tech communities, startups, designers, and innovators in Africa." />
      <meta name="twitter:image" content="/og-image.jpg" />
      
      {/* Additional SEO tags */}
      <meta name="keywords" content="tech communities, africa tech, tech event, innovation, startups, technology conference, tech communities day" />
      <meta name="author" content="Tech Communities Day" />
      <link rel="canonical" href="https://techcommunitiesday.com" />
      
      {/* Theme Color for mobile browsers */}
      <meta name="theme-color" content="#1E88E5" />
    </Helmet>
  );
};

export default Head;
