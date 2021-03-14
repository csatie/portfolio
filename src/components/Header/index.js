import { TopWrapper, TitleWrapper, Bio } from './styles';

const links = [
  {
    title: 'Email',
    img: './images/mail.svg',
    url: '/',
  },
  {
    title: 'Github',
    img: './images/github.svg',
    url: '/',
  },
  {
    title: 'LinkedIn',
    img: './images/linkedin.svg',
    url: '/',
  },
];

export default function Header() {
  return (
    <TopWrapper>
      <TitleWrapper>
        <TitleWrapper.Position>
          FullStack
          <br />
          Developer
        </TitleWrapper.Position>
        <TitleWrapper.Name fontWeight="light">
          <h2>Camila Satie</h2>
          <TitleWrapper.Links>
            {links.map(function (link) {
              return (
                <li key={link.title}>
                  <a href={link.url}>
                    <img src={link.img} />
                  </a>
                </li>
              );
            })}
          </TitleWrapper.Links>
        </TitleWrapper.Name>
      </TitleWrapper>
      <Bio fontWeight="light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.
      </Bio>
    </TopWrapper>
  );
}
