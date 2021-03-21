import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { catalogueStore } from '../../store';
import { CataloguePageContent } from "../../containers";
import {
  Footer,
  PagePreloader,
} from "../../components";

const CataloguePage = observer(() => {
  const catalogueLoading = toJS(catalogueStore).catalogueLoading;

   useEffect( ()  => {
     catalogueStore.loadCatalogue()
  }, []);

  return (
    <>
      {catalogueLoading
        ? <PagePreloader/>
        : <>
          <CataloguePageContent/>
          <Footer/>
        </>}
    </>
  );
});

export { CataloguePage };