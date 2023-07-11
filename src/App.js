import React from 'react';
import HeroSlider from 'hero-slider';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import Hero from './pages/Hero';
import { SiMui, SiReact, SiVisualstudiocode, SiCloudflare, SiGithub, SiFigma } from "react-icons/si";


const App = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TechnologyStackSection />
      <ServicesSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div>
      <HeroSlider
        slidingAnimation="fade"
        orientation="horizontal"
        set={[
          {
            src: require('./img/1.jpg'),
            alt: 'Image 1',
            title: 'Slide 1',
          },
          {
            src: require('./img/2.jpg'),
            alt: 'Image 2',
            title: 'Slide 2',
          },
          {
            src: require('./img/3.jpg'),
            alt: 'Image 3',
            title: 'Slide 3',
          },
        ]}
      />
    </div>
  );
};

const AboutSection = () => {
  return (
    <div>
      <Container sx={{ p: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Here, we provide insight into our company's purpose and present the bigger picture of what we aim to achieve.
        </Typography>
      </Container>
    </div>
  );
};

const TechnologyStackSection = () => {
  return (
    <div>
      <Container sx={{ p: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Technology Stack
        </Typography>
        <Typography variant="body1" paragraph>
          Our website is built using cutting-edge tools and technologies including Figma, ReactJS, VS Code, Cloudflare,
          GitHub, and Figma.
        </Typography>

        <div style={{textAlign:'center'}}>
          <Container sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={6} justify="center" alignItems="center">
              <Grid item>
                <SiMui />
                <Typography sx={{ p: 3 }} variant="body1">Google MUI</Typography>
              </Grid>
              <Grid item>
                <SiReact />
                <Typography sx={{ p: 3 }} variant="body1">ReactJS</Typography>
              </Grid>
              <Grid item>
                <SiVisualstudiocode />
                <Typography sx={{ p: 3 }} variant="body1">VS Code</Typography>
              </Grid>
              <Grid item>
                <SiCloudflare />
                <Typography sx={{ p: 3 }} variant="body1">Cloudflare</Typography>
              </Grid>
              <Grid item>
                <SiGithub />
                <Typography sx={{ p: 3 }} variant="body1">GitHub</Typography>
              </Grid>
              <Grid item>
                <SiFigma />
                <Typography sx={{ p: 3 }} variant="body1">Figma</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

      </Container>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div>
      <Container sx={{ p: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Advertising</Typography>
                <Typography variant="body2">We specialize in creating compelling advertising campaigns that effectively convey your message.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Business Processes</Typography>
                <Typography variant="body2">Our expertise extends to optimizing and streamlining your business processes for enhanced efficiency.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Web and Product Design</Typography>
                <Typography variant="body2">We offer top-notch web and product design services, ensuring visually stunning and user-friendly experiences.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Genie</Typography>
                <Typography variant="body2">Our unique Genie service caters to your specific needs, providing tailored solutions that exceed expectations.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div>
      <Container sx={{ p: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Benefits
        </Typography>
        <Typography variant="body1" paragraph>
          Experience the following advantages when working with AD SCENE:
        </Typography>
        <ul>
          <li>High-impact visual representation of your ideas or products</li>
          <li>Increased brand visibility and recognition</li>
          <li>Enhanced efficiency and productivity in your business operations</li>
          <li>Engaging web and product designs that captivate users</li>
          <li>Customized solutions tailored to your unique requirements</li>
          <li>Exceptional customer service and support</li>
        </ul>
      </Container>
    </div>
  );
};

const FooterSection = () => {
  return (
    <div>
      <footer>
        <Container sx={{ p: 5 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            In our footer section, you can easily reach out to us for further inquiries or to discuss your advertising needs.
          </Typography>
          {/* Additional contact information or form can be added here */}
        </Container>
      </footer>
    </div>
  );
};

export default App;
