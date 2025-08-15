import { useState } from 'react';

function Projects({ sendExpandedStatToParent }) {
  const [expanded, setExpanded] = useState(false);

  const handleMoreClick = () => {
    setExpanded(!expanded);
    if(expanded) {
      const closeSound = new Audio(process.env.PUBLIC_URL +`/sounds/sfx/close2.wav`);
      closeSound.play();
    } else {
      const openSound = new Audio(process.env.PUBLIC_URL +`/sounds/sfx/open2.wav`);
      openSound.play();
    }
    sendExpandedStatToParent(!expanded); // Send the expanded value to the parent component
  };

  const short_projects = [
    {
      name: 'thisOneAndOnly.github.io',
      description: 'theOneAndOnly.github.io is my fourth iteration of a portfolio website using React and Figma. Prototyped, tested and deployed using various tools, it was a project that taught myself a lot about the creative process of webdesign.',
      link: 'https://github.com/theOneAndOnlyOne/portfolio_2024',
      more: 'https://www.figma.com/design/96W7F1ffBjzuvIdk4O7FEY/Portfolio-v4?node-id=0-1&t=zoNM18WP2KgJvkuA-1'
    },
    {
      name: 'BeReel',
      description: 'BeReel is for those that use the viral app BeReal religiously and want a cool timelapse of all their memories. Developed using custom restAPIs and Flask.',
      link: 'https://github.com/theOneAndOnlyOne/BeReel'
    },
    {
      name: 'Kartt',
      description: 'Kartt is a free chrome extension I developed during university with some friends. Ever wonder how much you are actually paying for products online? Kartt reveals hidden fees before you even add it to your cart. Powered by AWS, Selenium and Python. Contact me for more info.',
      more: 'https://chromewebstore.google.com/detail/kartt/conhlcgjdfkgeijjkphckpnbpbidijce?hl=en'
    }
  ];

  const more_projects = [
    {
      name: 'squareSlayer',
      description: 'squareSlayer is my first dive into Unity. A 2D Unity Arena shooter using C# and Unity. Developed during my high school days.',
      link: 'https://github.com/theOneAndOnlyOne/',
      more: 'https://theoneandonlyone.github.io/squareSlayer/'
    },
    {
      name: 'LonkOn',
      description: 'LonkOn is a personal machine learning experiment that does analysis on football games. Trained using YOLOv8 and includes object detection, player segmentation,  accurate identification by t-shirt colors, and tracking. Byproduct of watching too much Blue Lock',
      link: 'https://github.com/theOneAndOnlyOne/LonkOnAnalysis'
    },
    {
      name: 'Peppermint',
      description: 'Peppermint is a Unity based QVCL Experiment designed to investigate how our visual system deals with complex visual information in 3D space. Developed using SteamVR, it is one of my many experiments with Unity with my previous employer QVCL. Contact me for more info',
      more: 'https://taskforce141.notion.site/Project-Peppermint-Public-Copy-97c2891910d64c3d812aac1e7cd6c57e'
    }
  ];

  // TO DO: This is a nightmare way to bold certain words in a sentence. my god. Find a better way to do this.
  const boldWord = (text) => {
    const words = text.split(' ');
    const boldWords = ['restAPIs', 'Flask.', 'React', 'Figma.', 'Unity', 'AWS,', 'Selenium', 'Python.', 'C#', 'YOLOv8', 'SteamVR,', 'QVCL.'];
    const italicWords = ['Contact', 'me'];
    return (
      <>
        {words.map((word, index) => (
          <span key={index} style={{ fontWeight: (index === 0 || boldWords.includes(word)) ? 'bold' : 'normal', fontStyle: italicWords.includes(word) ? 'italic' : 'normal' }}>
            {word}{' '}
          </span>
        ))}
      </>
    );
  };
  

  return (
    <section className="projects">
      <div className="space-y-4">
      <h2 className='font-DMMono font-medium ' >| Projects</h2>
        <div className='rounded border-dotted border-2 border-sea_blue p-4 space-y-4'>
          {short_projects.map((project, index) => (
            <div key={index} className="project-card space-y-4 ">
              <p>{boldWord(project.description)}</p>
              <div className="flex space-x-3">

              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden transition-all bg-white hover:bg-sea_blue group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                >
                  <span className="absolute top-0 right-0 w-full h-full bg-sea_blue rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                  <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                    Code
                    <div className="flex justify-end ml-3">
                      <img src={process.env.PUBLIC_URL + "/icons/arrow-top-right.svg"} alt="^" className="w-4 h-4 bg-sea_blue border-sea_blue border-4"/>
                    </div>
                  </span>
                </a>
              )}
              {project.more && (
                  <a 
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden transition-all bg-white hover:bg-sea_blue group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                  >
                    <span className="absolute top-0 right-0 w-full h-full bg-sea_blue rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                      More
                      <div className="flex justify-end ml-3">
                        <img src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="^" className="w-4 h-4 bg-sea_blue border-sea_blue border-4"/>
                      </div>
                    </span>
                  </a>
                )}
                </div>
            </div>
          ))}
          <div className={`
              transition-all duration-500 ${expanded ? 'delay-500' : ''} ease-in-out
            ${expanded 
              ? 'opacity-100 max-h-[1000px]' 
              : 'opacity-0 max-h-0'}
            overflow-hidden
          `}
          >
            <div className="space-y-4">
            {more_projects.map((project, index) => (
              <div key={index} className="project-card space-y-4">
                <p>{boldWord(project.description)}</p>
                <div className='flex space-x-3'>
                {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden transition-all bg-white hover:bg-sea_blue group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                >
                  <span className="absolute top-0 right-0 w-full h-full bg-sea_blue rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                  <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                    Code
                    <div className="flex justify-end ml-3">
                      <img src={process.env.PUBLIC_URL + "/icons/arrow-top-right.svg"} alt="^" className="w-4 h-4 bg-sea_blue border-sea_blue border-4"/>
                    </div>
                  </span>
                </a>
                )}
                {project.more && (
                  <a 
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden transition-all bg-white hover:bg-sea_blue group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                  >
                    <span className="absolute top-0 right-0 w-full h-full bg-sea_blue rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                      More
                      <div className="flex justify-end ml-3">
                        <img src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="^" className="w-4 h-4 bg-sea_blue border-sea_blue border-4"/>
                      </div>
                    </span>
                  </a>
                )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <p 
        className="text-right mt-2 font-DMMono cursor-pointer z-11"
        onClick={handleMoreClick}
      >
        {expanded ? (
          <>
            close <strong>{"<<"}</strong>
          </>
        ) : (
          <>
            want more? <strong>{">>"}</strong>
          </>
        )}
      </p>
    </section>
  );
}

export default Projects;