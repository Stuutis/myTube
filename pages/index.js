import React from 'react';
import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import StyledBanner from '../src/components/Banner';
//Components
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import FavoritesTubes from '../src/components/FavoritesTubes';

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState('');

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <StyledBanner />
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
