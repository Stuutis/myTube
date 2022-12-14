import { ThemeProvider } from 'styled-components';
import config from '../../config.json';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="profile-name"
        />

        <div>
          <h2>{config.name}</h2>

          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header;
