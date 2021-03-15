import { ProjectWrapper, ProjectImage, ProjectDescription } from './styles';
import { SectionWrapper, SectionTitle } from '../Section';
import Modal from '../Modal';

const projectsList = [
  {
    title: 'Project 1',
    subtitle: 'ReactJS // NextJS',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.',
    img: './images/placeholder.svg',
    url: '/',
    modal: 'project 1',
  },
  {
    title: 'Project 2',
    subtitle: 'Node',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.',
    img: './images/placeholder.svg',
    url: '/',
    modal: 'project 2',
  },
  {
    title: 'Project 3',
    subtitle: 'Wordpress',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur arcu quis metus tempus, a ullamcorper ante pellentesque.',
    img: './images/placeholder.svg',
    url: '/',
    modal: 'project 3',
  },
];

export default function Projects() {
  const [isModalOpen, setModalState] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  function handleModalContent(index) {
    setModalContent(projectsList[index].modal);
    setModalState(true);
  }

  return (
    <SectionWrapper>
      <SectionTitle>Projects</SectionTitle>
      {projectsList.map(function (project, index) {
        return (
          <ProjectWrapper key={index}>
            <ProjectImage
              onClick={() => {
                handleModalContent(index);
              }}
            >
              <img src={project.img} />
            </ProjectImage>
            <ProjectDescription>
              <ProjectDescription.Title>
                <a href={project.url}>
                  {project.title} <img src="./images/link.svg" />
                </a>
              </ProjectDescription.Title>
              <ProjectDescription.Subtitle fontWeight="light">
                {project.subtitle}
              </ProjectDescription.Subtitle>
              <ProjectDescription.Excerpt>
                {project.excerpt}
              </ProjectDescription.Excerpt>
            </ProjectDescription>
          </ProjectWrapper>
        );
      })}

      <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
        {modalContent}
      </Modal>
    </SectionWrapper>
  );
}
