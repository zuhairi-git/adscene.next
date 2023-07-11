import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider';
import Wrapper from '../components/Wrapper';
import Typography from '@material-ui/core/Typography';
import Subtitle from '../components/Subtitle';

const imageOne = require('../img/2x/product.jpg');
const imageTwo = require('../img/2x/prototype.jpg');
const imageThree = require('../img/2x/ux.jpg');
const imageFour = require('../img/2x/ui.jpg');

const useStyles = makeStyles({
  whiteText: {
    color: 'white',
  },
});

export default function BasicSlider() {
  const classes = useStyles();

  return (
    <HeroSlider
      height={'100vh'}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) => console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug('onBeforeSliding(previousSlide, nextSlide): ', previousSlide, nextSlide),
        onAfterSliding: (nextSlide) => console.debug('onAfterSliding(nextSlide): ', nextSlide),
      }}
    >
      <Slide
        shouldRenderMask
        label="Digital Product Design"
        background={{
          backgroundImageSrc: imageOne,
        }}
      >
        <Overlay>
          <Wrapper>
            <Typography variant="h2" className={classes.whiteText}>
              Digital Product Design
            </Typography>
            <div style={{ color: 'white' }}>
              <Typography variant="body1">
                Customize your digital product designs to create visually appealing and user-friendly experiences.
              </Typography>
            </div>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        shouldRenderMask
        label="Prototype"
        background={{
          backgroundImageSrc: imageTwo,
        }}
      >
        <Overlay>
          <Wrapper>
            <Typography variant="h2" className={classes.whiteText}>
              Prototype
            </Typography>
            <div style={{ color: 'white' }}>
              <Typography variant="body1">
                Transform your ideas into interactive prototypes to visualize and validate your concepts.
              </Typography>
            </div>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        shouldRenderMask
        label="UX Design"
        background={{
          backgroundImageSrc: imageThree,
        }}
      >
        <Overlay>
          <Wrapper>
            <Typography variant="h2" className={classes.whiteText}>
              UX Design
            </Typography>
            <div style={{ color: 'white' }}>
              <Typography variant="body1">
                Craft seamless user experiences by understanding user needs and designing intuitive interfaces.
              </Typography>
            </div>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        shouldRenderMask
        label="UI Design"
        background={{
          backgroundImageSrc: imageFour,
        }}
      >
        <Overlay>
          <Wrapper>
            <Typography variant="h2" className={classes.whiteText}>
              UI Design
            </Typography>
            <div style={{ color: 'white' }}>
              <Typography variant="body1">
                Create visually stunning and aesthetically pleasing user interfaces to captivate your audience.
              </Typography>
            </div>
          </Wrapper>
        </Overlay>
      </Slide>

      <MenuNav />
    </HeroSlider>
  );
}
