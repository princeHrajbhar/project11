import Eight from '@/components/Eight';
import Eleven from '@/components/eleven';
import Fiveteen from '@/components/Fiveteen';
import Four from '@/components/Four';
import Fourteen from '@/components/Fourteen';
import Gallery from '@/components/gallery';
import LandingPage from '@/components/LandingPage';
import Nine from '@/components/Nine';
import RequestQuote from '@/components/RequestQuote';
import Second from '@/components/Second';
import Seven from '@/components/Seven';
import Seventeen from '@/components/Seventeen';
import Six from '@/components/Six';
import Sixteen from '@/components/Sixteen';
import Ten from '@/components/Ten';
import Third from '@/components/Third';
import Thirdteen from '@/components/Thirdteen';
import Twele from '@/components/twele';
import React from 'react';

const Page = () => {
  return (
    <div className="space-y-40"> {/* Adds 40px gap between all components */}
      <LandingPage />
      <Second />
      <Third />
      <Four />
      <Six />
      <Seven />
      <Eight />
      <RequestQuote />
      <Nine />
      <Gallery />
      <Ten />
      <Eleven />
      <Twele />
      <Thirdteen />
      <Fourteen />
      <Fiveteen />
      <Sixteen />
      <Seventeen />
    </div>
  );
};

export default Page;
