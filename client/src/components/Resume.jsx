import PageCount from './PageCount'

const Resume = () => {
  const workExperiences = [
    {
      title: 'QA Software Tester',
      company: 'ILTS',
      year: '2019 - Present',
      description: 'Developing web applications using React and Node.js.',
    },
    {
      title: 'Frontend Developer',
      company: 'Web Agency B',
      year: '2017 - 2019',
      description: 'Building responsive and user-friendly interfaces.',
    },
    {
      title: 'Intern',
      company: 'Tech Startup C',
      year: '2016 - 2017',
      description:
        'Gained experience in various aspects of software development.',
    },
  ]

  const skills = [
    'AWS',
    'React',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
  ]

  return (
    <ResumeContainer>
      <Header>Your Name</Header>

      <About>
        <h2>About Me</h2>
        <p>
          I am a passionate and dedicated software developer with expertise in
          building web applications. I enjoy tackling challenges and
          collaborating with cross-functional teams to deliver high-quality
          solutions.
        </p>
      </About>

      <WorkExperience>
        <h2>Work Experience</h2>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.title}</h3>
            <p>
              {experience.company} - {experience.year}
            </p>
            <p>{experience.description}</p>
          </div>
        ))}
      </WorkExperience>

      <SkillsContainer>
        <SkillsHeader>Skills</SkillsHeader>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </SkillsContainer>
    </ResumeContainer>
  )
}

export default Resume
