import styled from 'styled-components';
import config from '../../config.json';
const StyledBanner = styled.div`
  background-image: url(${config.bg});
  height: 230px;
`;

function Banner() {
  return <StyledBanner />;
}

export default Banner;
