import React from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Map from '../components/Map/Map';
import ContactStyles from '../components/ContactSection/ContactStyles';

export default function Contact() {
  return (
    <>
      <ContactStyles />
      <ContactSection />
      <Map />
    </>
  );
}