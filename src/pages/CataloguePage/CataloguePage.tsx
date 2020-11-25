import React, {useContext, useEffect} from 'react';
import MainPageHeader from '../../containers/MainPageHeader/MainPageHeader';
import MainPageContent from '../../containers/MainPageContent/MainPageContent';
import MainPageWidgets from '../../containers/MainPageWidgets/MainPageWidgets';
import Footer from '../../components/Footer/Footer';
import PagesContext from "../PagesContext";
import PagePreloader from "../../components/PagePreloader/PagePreloader";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

export default () => {
  const context = useContext(PagesContext);
  const mediaLoading = context.mediaLoading;

   useEffect( ()  => {
     context.getMainPageMedia()
  }, [])

  return (
    <>
      {mediaLoading
        ? <PagePreloader/>
        : <>
          <ScrollButton/>
          <MainPageHeader />
          <MainPageContent />
          <MainPageWidgets />
          <Footer />
        </>
      }
    </>
  );
};