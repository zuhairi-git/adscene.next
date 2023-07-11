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
      <Overlay>
        <Wrapper>
          <Typography variant="h2" className={classes.whiteText}>AD Scene</Typography>
          <div style={{ color: 'white' }}>
            <Typography variant="subtitle1" className={classes.whiteText}>
              <Subtitle>
                Our goal is to transform your ideas or products into captivating visuals and effective advertisements. Whether you have a concept for tangible or digital products, we specialize in bringing your visions to life. From defining your ideas to executing the advertising process, we are here to help you showcase your offerings to the world.
              </Subtitle>
            </Typography>

          </div>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Digital Product Design"
        background={{
          backgroundImageSrc: imageOne,
        }}
      />

      <Slide
        shouldRenderMask
        label="Prototype"
        background={{
          backgroundImageSrc: imageTwo,
        }}
      />

      <Slide
        shouldRenderMask
        label="UX Design"
        background={{
          backgroundImageSrc: imageThree,
        }}
      />

      <Slide
        shouldRenderMask
        label="UI Design"
        background={{
          backgroundImageSrc: imageFour,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
