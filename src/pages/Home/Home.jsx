import React from 'react';
import Banner from '../../components/Banner/Banner';
import CardNoticePreview from '../../components/CardNoticePreview/CardNoticePreview';
import Contact from '../../components/Contact/Contact';
import ContactForm from '../../components/ContactForm/ContactForm';

export const Home = () => {
  return (
    <>
      <Banner/>
      <CardNoticePreview/>
      <Contact/>
      <ContactForm/>
    </>
  );
};
