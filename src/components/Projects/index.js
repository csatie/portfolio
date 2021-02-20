import { ProjectWrapper, ProjectImage, ProjectDescription } from './styles';
import { SectionWrapper, SectionTitle } from '../Section';

const projectsList = [
  {
    title: 'Project 1',
    subtitle: 'ReactJS // NextJS',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.',
    img: './images/placeholder.svg',
    url: '/',
  },
  {
    title: 'Project 2',
    subtitle: 'Node',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.',
    img: './images/placeholder.svg',
    url: '/',
  },
  {
    title: 'Project 3',
    subtitle: 'Wordpress',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.',
    img: './images/placeholder.svg',
    url: '/',
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
      <SectionTitle>Projects</SectionTitle>
      {projectsList.map(function (project) {
        return (
          <ProjectWrapper>
            <ProjectImage>
              <img src={project.img} />
            </ProjectImage>
            <ProjectDescription>
              <ProjectDescription.Title>
                <a href={project.url}>
                  {project.title} <img src="./images/link.svg" />
                </a>
              </ProjectDescription.Title>
              <ProjectDescription.Subtitle>
                {project.subtitle}
              </ProjectDescription.Subtitle>
              <ProjectDescription.Excerpt>
                {project.excerpt}
              </ProjectDescription.Excerpt>
            </ProjectDescription>
          </ProjectWrapper>
        );
      })}
    </SectionWrapper>
  );
}
