import { KeyboardArrowRight } from "@mui/icons-material";
import { Container, Grid, Typography, Card, CardMedia } from "@mui/material";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/k5lcvbk0/screen-guard/screen-guard/j/h/g/3m-azb00028onia-original-imafz8ndr5guywgm.jpeg?q=90&crop=false",
      title: "Case Study 1",
    },
    {
      id: 2,
      image:
        "https://img2.exportersindia.com/product_images/bc-full/2018/8/5671984/hp-desktop-computer-1534409629-4200401.jpeg",
      title: "Case Study 2",
    },
    {
      id: 3,
      image: "https://5.imimg.com/data5/DU/EM/MY-49341486/7022-500x500.jpg",
      title: "Case Study 3",
    },
  ];

  return (
    <div style={{ backgroundColor: "#4a00e0", padding: "2rem 0" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
          }}
        >
          <div>
            <Typography variant="h5" color="white" gutterBottom>
              CASE STUDIES
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              align="center"
              color="white"
              gutterBottom
            >
              Dive Deeper into Our Success Stories
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div
              // variant="contained"
              color="secondary"
              style={{
                backgroundColor: "#fff",
                color: "#0023FF",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "70%",
              }}
            >
              <KeyboardArrowRight />
            </div>
            <div>View More</div>
          </div>
        </div>

        <Grid container spacing={3} justifyContent="center">
          {caseStudies.map((caseStudy) => (
            <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={caseStudy.image}
                  alt={caseStudy.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CaseStudies;
