import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = () => {
  const sections = [
    {
      heading: "Digital Strategy & Consulting",
      subheading: ["Digital Transformation", "CX Strategy", "Content Strategy"],
    },
    {
      heading: "Experience Design",
      subheading: ["UX/UI Design", "Prototyping", "User Research"],
    },
    {
      heading: "Technology & Engineering",
      subheading: ["Web Development", "App Development", "Cloud Computing"],
    },
    {
      heading: "Digital Marketing",
      subheading: ["SEO", "Content Marketing", "PPC Advertising"],
    },
    {
      heading: "AI/ML & Emerging Tech",
      subheading: ["Machine Learning", "Data Science", "Blockchain"],
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: "flex", height: "100vh", flexDirection: "column" }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 10,
          padding: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          OUR SERVICES
        </Typography>
        {sections.map((section, index) => (
          <Box key={index}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "blue" }}>
              {section.heading}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Scrolling Content Section */}
      <Box sx={{ padding: 4 }}>
        {sections.map((section, index) => (
          <InViewComponent
            key={index}
            heading={section.heading}
            subheading={section.subheading}
          />
        ))}
      </Box>
    </Container>
  );
};

const InViewComponent = ({ heading, subheading }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Box
      ref={ref}
      sx={{
        marginBottom: "10vh",
        opacity: inView ? 1 : 0,
        height: 200,
        transition: "opacity 1s",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        {heading}
      </Typography>
      {subheading.map((item, index) => (
        <Typography key={index} variant="body1" sx={{ marginBottom: 1 }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default ScrollAnimation;
