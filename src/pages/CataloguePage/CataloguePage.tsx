import React, {useContext, useEffect} from 'react';
import CataloguePageContent from "../../containers/CataloguePageContent/CataloguePageContent";
import Footer from '../../components/Footer/Footer';
import PagesContext from "../PagesContext";
import PagePreloader from "../../components/PagePreloader/PagePreloader";


export default () => {
  const context = useContext(PagesContext);
  const catalogueLoading = context?.catalogueLoading;

   useEffect( ()  => {
     context?.getCatalogue()
  }, [])

  return (
    <>
      {catalogueLoading
        ? <PagePreloader/>
        : <>
          <CataloguePageContent/>
          <Footer/>
        </>
      }
    </>
  );
};