import React from 'react';

import StyledBanner from '../src/components/Banner';
//Components
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import videoServices from '../src/services/videoService';

function HomePage() {
  const service = videoServices();
  const [valorDoFiltro, setValorDoFiltro] = React.useState('');
  const [playlists, setPlaylists] = React.useState({});

  React.useEffect(() => {
    service.getAllVideos().then((data) => {
      console.log(data.data);
      const novasPlaylists = { ...playlists };
      data.data.forEach((video) => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist].push(video);
      });
      setPlaylists(novasPlaylists);
    });
  }, []);

  return (
    <>
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
        <Timeline searchValue={valorDoFiltro} playlists={playlists} />
      </div>
    </>
  );
}

export default HomePage;
