import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyle';
import { Container } from './styles/Grid';

export interface Idata extends Array<Idata> {
  fields: Ifields;
  id: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

export interface Ifields {
  thumbnail: string;
  trailText: string;
  body: string;
}

function App() {
  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <Header />

        <Container>
          <Section title='Coronavirus' id='world/coronavirus-outbreak' />

          <Section title='UK News' id='uk-news' />

          <Section title='World News' id='world' />

          <Section title='Sport' id='uk/sport' />

          <Section title='Football' id='football' />

          <Section title='NFL' id='sport/nfl' />

          <Section title='Stock Markets' id='business/stock-markets' />

          <Section title='BBC' id='media/bbc' />

          <Section title='Travel' id='uk/travel' />

          <Section title='Tech' id='uk/technology' />
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default App;
