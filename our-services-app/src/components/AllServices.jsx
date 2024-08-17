import { useEffect, useState } from "react";
import { styled } from "@mui/system";

const HeadingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of heading data
  const headings = [
    {
      title: "OUR SERVICES",
      subheadings: [
        "Digital Strategy & Consulting",
        "Experience Design",
        "Technology & Engineering",
        "Digital Marketing",
        "AI/ML & Emerging Tech",
      ],
    },
    {
      title: "Digital Strategy & Consulting",
      subheadings: [
        "Digital Transformation",
        "CX Strategy",
        "Content Strategy",
      ],
    },
    {
      title: "Experience Design",
      subheadings: ["UX Consultancy", "Design System", "UI/UX Design"],
    },
    {
      title: "Technology & Engineering",
      subheadings: [
        "Web Development",
        "CMS Solutions",
        "Commerce",
        "Mobile Apps",
        "Cloud & DevSecOps",
      ],
    },
    {
      title: "Digital Marketing",
      subheadings: [
        "Brand Digital Strategy",
        "Campaign Communication",
        "Digital Films & Shorts",
        "Social Media Management",
        "Content Marketing",
      ],
    },
    {
      title: "AI/ML & Emerging Tech",
      subheadings: ["AI/ML Solutions", "Immersive Technologies: AR, VR, & MR"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000); // Change heading every 3 seconds

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <Container>
      <HeadingSection>
        {headings.map((heading, index) => (
          <HeadingContainer key={index} active={currentIndex === index ? 1 : 0}>
            <Title>{heading.title}</Title>
            {heading.subheadings.map((subheading, i) => (
              <Subheading key={i}>{subheading}</Subheading>
            ))}
          </HeadingContainer>
        ))}
      </HeadingSection>
      <ImageContainer>
        <Image src="/our-expertise.webp" alt="Our Expertise" />
      </ImageContainer>
    </Container>
  );
};

// MUI Styled Components
const Container = styled("div")(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // alignItems: "center",
  height: "100vh",
  backgroundColor: "#f4f4f4",
  textAlign: "center",
  color: "#001b94",
  padding: "20px",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const HeadingSection = styled("div")(({ theme }) => ({
  flex: 1,
  position: "relative",
  marginTop: "200px",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const HeadingContainer = styled("div")(({ active }) => ({
  position: "absolute",
  width: "100%",
  opacity: active ? 1 : 0,
  transition: "opacity 1s ease-in-out",
}));

const Title = styled("h1")(({ theme }) => ({
  fontSize: "2.5em",
  margin: "0 0 20px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2em",
  },
}));

const Subheading = styled("p")(({ theme }) => ({
  fontSize: "1.2em",
  margin: "0.5em 0",
  color: "black",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1em",
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Image = styled("img")({
  maxWidth: "100%",
  height: "70%",
});

export default HeadingAnimation;
