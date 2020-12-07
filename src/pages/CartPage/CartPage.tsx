import React, {useContext, useEffect} from 'react';import CataloguePageContent from "../../containers/CataloguePageContent/CataloguePageContent";
import Footer from '../../components/Footer/Footer';
import CartPageContent from '../../containers/CartPageContent/CartPageContent'
import PagesContext from "../PagesContext";

export default () => {
  const context = useContext(PagesContext);

  useEffect( ()  => {
    context?.getCatalogue()
  }, [])

  return (
    <>
      <CartPageContent/>
      <Footer/>
    </>
  );
};