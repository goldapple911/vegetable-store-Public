import React, {useContext, useEffect} from 'react';
import MainPageHeader from '../../containers/MainPageHeader/MainPageHeader';
import MainPageContent from '../../containers/MainPageContent/MainPageContent';
import MainPageWidgets from '../../containers/MainPageWidgets/MainPageWidgets';
import Footer from '../../components/Footer/Footer';
import MainPageContext from "./MainPageContext";
import PagePreloader from "../../components/PagePreloader/PagePreloader";

export default () => {
  const context = useContext(MainPageContext);
  const mediaLoading = context.mediaLoading;

   useEffect( ()  => {
     context.getMainPageMedia()
  }, [])

  return (
    <>
      {mediaLoading
        ? <PagePreloader/>
        : <>
          <MainPageHeader />
          <MainPageContent />
          <MainPageWidgets />
          <Footer />
        </>
      }
    </>
  );
};