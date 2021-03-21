import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { mainPageStore } from '../../store';
import {
  MainPageHeader,
  MainPageContent,
  MainPageWidgets,
} from '../../containers';
import {
  PagePreloader,
  ScrollButton,
  Footer,
} from '../../components'

const MainPage = observer(() => {
  useEffect(() => {
    mainPageStore.loadMainPageMedia()
  }, []);

  const mediaLoading = toJS(mainPageStore).mediaLoading;

  return (
    <>
      {mediaLoading
        ? <PagePreloader/>
        : <>
          <ScrollButton/>
          <MainPageHeader/>
          <MainPageContent/>
          <MainPageWidgets/>
          <Footer />
        </>}
    </>
  );
});

export { MainPage };