import PageCount from './PageCount'

const Resume = () => {
  const workExperiences = [
    {
      title: 'QA Software Tester',
      company: 'ILTS',
      year: '2022- 2023',
      description:
        'Create and test software test cases.  Document bugs and report bug reproduction steps to engineering team.',
    },
    {
      title: 'QA tester and Engineer',
      company: 'Edge Wallet',
      year: '2021 - 2022',
      description:
        'Tested crypto wallet a mobile application. Worked in a React Native codebase to create automation tests.',
    },
    {
      title: 'Software Development Mastermind',
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

  const displaySkills = skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ))

  const displayWorkExperience = workExperiences.map((experience, index) => (
    <div key={index}>
      <h3>{experience.title}</h3>
      <p>
        {experience.company} - {experience.year}
      </p>
      <p>{experience.description}</p>
    </div>
  ))

  return (
    <>
      {/* <div> */}
      <div className=" absolute top-2 right-5">{PageCount()}</div>
      <div className="font-bold text-center text-blue-400 ">
        <h1 className="text-center ">
          Kurtis Casperson <br /> Cloud Resume
        </h1>
      </div>
      {/* </div> */}
      <div className="p-10">
        <h2>About Me</h2>
        <p>
          I am a passionate and dedicated software developer with expertise in
          building web applications. I enjoy tackling challenges and
          collaborating with cross-functional teams to deliver high-quality
          solutions.
        </p>
      </div>
      <div>
        <h2>Work Experience</h2>
        {displayWorkExperience}
      </div>
      <div>
        <div>Skills</div>
        <ul>{displaySkills}</ul>
      </div>
    </>
  )
}

export default Resume
