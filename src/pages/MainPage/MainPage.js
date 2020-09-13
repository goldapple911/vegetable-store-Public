import React from 'react';
import MainPageHeader from '../../containers/MainPageHeader/MainPageHeader';
import MainPageContent from '../../containers/MainPageContent/MainPageContent';
import MainPageWidgets from '../../containers/MainPageWidgets/MainPageWidgets';
import Footer from '../../components/Footer/Footer';

export default () => {
  return (
    <div>
      <MainPageHeader />
      <MainPageContent />
      <MainPageWidgets />
      <Footer />
    </div>
  );
};