import { useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './App.css';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaBars, FaTimes, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaFigma, FaSass, FaDatabase, FaTrello, FaSlack } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { SiTypescript, SiVite, SiTailwindcss, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';

interface IProject {
  id: number;
  title: string;
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  tech: string[];
  demo: string;
  github: string;
  created_at: string;
}

type CVData = {
  education: Array<{
    id: string;
    startDate: string;
    endDate: string;
    organization: string;
    location: string;
    description: string;
  }>;
  workExperience: Array<{
    id: string;
    startDate: string;
    endDate: string;
    company: string;
    location: string;
    description: string;
    experienceGained?: string[];
  }>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-brand-200 h-[100px] relative z-50'>
      <nav className='max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between'>
        
        <div className='text-white font-bold text-xl md:hidden'>Menu</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex w-full justify-center gap-8'>
          <Link to="/cv" className='text-white hover:text-brand-400 transition-colors'>CV</Link>
          <Link to="/projects" className='text-white hover:text-brand-400 transition-colors'>Projects</Link>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden text-white cursor-pointer' onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='absolute top-[100px] left-0 w-full bg-brand-200 flex flex-col items-center gap-6 py-8 shadow-lg md:hidden'>
          <Link to="/cv" className='text-white text-xl hover:text-brand-400 transition-colors' onClick={toggleMenu}>CV</Link>
          <Link to="/projects" className='text-white text-xl hover:text-brand-400 transition-colors' onClick={toggleMenu}>Projects</Link>
        </div>
      )}
    </header>
  );
}

const Layout = () => {
  return (
    <div className='App'>
      <Header />
      <main className='max-w-7xl mx-auto px-4 md:px-8 bg-brand-100'>
        <Outlet />
      </main>
    </div>
  )
}

const CV = () => {


  return (
    <div className='flex md:flex-row flex-col'>
      <SideBarCV/>
      <div className='flex flex-col w-full' >
        <div className='flex-1 md:mt-20 mt-20'>
          <Cloud />
        </div>
        <div className='flex-1'>
          <MainCV />
        </div>
      </div>
    </div>
  )
}


const Cloud = () => {
  return (
    <>
    
    <div className=' relative h-full'>
      <div className='absolute inset-3 flex items-center gap-2 -translate-y-[10%]'>
        <img src="/assets/art/flysland.png" alt="floating island" className="w-full h-full object-contain -rotate-20 mt-[5%] mx-[2%] translate-x-[20%] md:translate-x-[9%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]" />
        <img src="/assets/art/no_one_is_captain_but_you.png" alt="floating island" className="w-full h-full mb-10 object-contain -rotate-6 -translate-x-[8%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]" />
        <img src="/assets/art/djungle_2.png" alt="floating island" className="w-full h-full object-contain rotate-6 mb-[12%] -translate-x-[20%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]" />
        <img src="/assets/art/caravan_dolphin.png" alt="floating island" className="w-full h-full object-contain rotate-15 mt-[5%] mx-[-4%] -translate-x-[25%] md:-translate-x-[20%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]" />
      </div>
      <img src="/assets/cloud.png" alt="cloud" className="w-full h-full relative z-20" /> 
    </div>
    </>
  )
  
}

const SideBarCV = () => {
  return (
    <section className='sidebar-cv  flex flex-col items-center justify-center w-full md:w-1/3 text-white gap-8 md:mx-5'>
      <div className='rounded-full w-48 h-48 overflow-hidden border-4 border-brand-200'>
        <img src="/assets/mikaelakihl-cv.png" alt="CV" className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className='uppercase'>Mikaela Kihl</h1>
        <p>Frontend Developer</p>
      </div>
      <div className='flex flex-col gap-4 w-full max-w-xs px-4'>
        
        <div className='bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white'>
          <h2 className='uppercase text-white font-bold mb-4 tracking-wider text-center'>Contact</h2>
          <div className='flex flex-col gap-3 text-sm'>
            <div className='flex items-center gap-3 hover:text-brand-300 transition-colors'>
              <CiMail className="text-lg shrink-0"/>
              <a href="mailto:mikaela.kihl@medieinstitutet.se" className="truncate">mikaela.kihl@medieinstitutet.se</a> 
            </div>
            <div className='flex items-center gap-3 hover:text-brand-300 transition-colors'>
              <CiMail className="text-lg shrink-0"/>
              <a href="mailto:mikaela.kihl@outlook.com" className="truncate">mikaela.kihl@outlook.com</a> 
            </div>
            <div className='flex items-center gap-3 hover:text-brand-300 transition-colors'>
              <FaGithub className="text-lg shrink-0"/>
              <a href="https://github.com/mikaelakihl">GitHub</a> 
            </div>
            <div className='flex items-center gap-3 hover:text-brand-300 transition-colors'>
              <FaLinkedin className="text-lg shrink-0"/>
              <a href="https://www.linkedin.com/in/mikaela-kihl-4b1751200/">LinkedIn</a>
            </div>
            <div className='flex items-center gap-3 hover:text-brand-300 transition-colors'>
              <FaPhoneAlt className="text-sm shrink-0"/>
              <a href="tel:070-857-0746">070-857-0746</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 '>
          <h2 className='uppercase'>Languages</h2>
          <div className='flex items-center gap-2'>
          <p>swedish</p>
          <p>english</p>
          </div>

        </div>
        <div className='bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white'>
          <h2 className='uppercase'>Tech</h2>
          <p >View here</p>

        </div>
        <div>
          <h2 className='uppercase'>Strengths</h2>
          <p>Creative</p>
          <p>Adaptable</p>
          <p>Easygoing</p>
          <p>Supportive</p>
        </div>
        <div>
          <h2 className='uppercase'>Areas to growth</h2>
          <p>Reading lengthy texts</p>
          <p>Presentation skills</p>
        </div>
        <p className='text-black font-script text-2xl'>References available upon request</p>
      </div>
    </section>
  )
}


const MainCV = () => {
  const { data: cvData, isLoading, error } = useQuery<CVData>({
    queryKey: ['cv'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/api/cv');
      if (!response.ok) {
        throw new Error('Failed to fetch CV data');
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!cvData) return <div>No data available</div>;

  return (
    <section className='flex flex-col bg-white gap-4 w-full px-4 pb-10 pt-10 text-left md:p-20 relative z-10'>
      <div className='flex flex-col gap-4 w-full mt-4' >
        <p>My career started when I was 16 and during these years I've gained a lot of skills, socially and practically. Five words to describe myself, <strong>open, loyal, responsible, inventive & adaptable.</strong></p>
        <p>I enjoy working in a team but I'm also very independent. After five years in customer support I'm ready for new challenges in Front End Development.</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-left'>Education & Internship</h2>
        <ul className='flex flex-col gap-4'>
          {cvData.education.map((educationEntry) => (
            <li key={educationEntry.id}>
              <h3 className='font-bold'>
                {educationEntry.startDate} - {educationEntry.endDate}: {educationEntry.organization}, {educationEntry.location}
              </h3>
              <p>{educationEntry.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-left'>Work Experience</h2>
        <ul className='flex flex-col gap-4'>
          {cvData.workExperience.map((workEntry) => (
            <li key={workEntry.id}>
              <h3 className='font-bold'>
                {workEntry.startDate} - {workEntry.endDate}: {workEntry.company}, {workEntry.location}
              </h3>
              <p>{workEntry.description}</p>
              {workEntry.experienceGained && workEntry.experienceGained.length > 0 && (
                <p>
                  <strong>Experience gained:</strong> {workEntry.experienceGained.join(', ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}





const Projects = () => {
  const { data: projectData, isLoading, error } = useQuery<IProject[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch CV data');
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!projectData) return <div>No data available</div>;

  interface ITechStack {
    id: number;
    name: string;
    icon: string;
    bgColor?: string;
  }

  const iconMap: { [key: string]: React.ComponentType<{ size?: number | string }> } = {
    FaHtml5, FaCss3Alt, FaJs, SiTypescript, FaReact, SiVite, SiTailwindcss,
    FaNodeJs, SiExpress, FaGitAlt, FaGithub, FaNpm, FaFigma, FaSass,
    FaDatabase, SiMongodb, SiPostman, FaTrello, FaSlack
  };

  const Icon = ({ icon }: { icon: string }) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? <IconComponent size={30} /> : null;
  };
  
  const techStackList: ITechStack[] = [
    { id: 1, name: 'HTML', icon: 'FaHtml5', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 2, name: 'CSS', icon: 'FaCss3Alt', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 3, name: 'JavaScript', icon: 'FaJs', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 4, name: 'TypeScript', icon: 'SiTypescript', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 5, name: 'React', icon: 'FaReact', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 6, name: 'Vite', icon: 'SiVite', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 7, name: 'Tailwind', icon: 'SiTailwindcss', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 8, name: 'Node.js', icon: 'FaNodeJs', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 9, name: 'Express', icon: 'SiExpress', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 10, name: 'Git', icon: 'FaGitAlt', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 11, name: 'GitHub', icon: 'FaGithub', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white'   },
    { id: 12, name: 'NPM', icon: 'FaNpm', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 13, name: 'Figma', icon: 'FaFigma', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 14, name: 'Sass', icon: 'FaSass', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 15, name: 'SQL', icon: 'FaDatabase', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 16, name: 'MongoDB', icon: 'SiMongodb', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 17, name: 'Postman', icon: 'SiPostman', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 18, name: 'Trello', icon: 'FaTrello', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' },
    { id: 19, name: 'Slack', icon: 'FaSlack', bgColor: 'bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white' }
  ];

  return (
    <>
      <div className='max-w-7xl mx-auto p-4'>
      <h2 className='text-center font-normal mb-8 text-white uppercase tracking-wider'>Tech Stack</h2>
      <ul className='flex flex-wrap gap-4 justify-center'>
      {techStackList.map((tech) => (
        <li key={tech.id}>
          <div className={tech.bgColor + ' flex items-center gap-2'}>
            <Icon icon={tech.icon} />
            <p>{tech.name}</p>
            </div>
          </li>
      ))}
      </ul>
    </div>
    <div className='bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6'></div>
    <section className='max-w-7xl mx-auto p-4'>
      <ul className='grid md:grid-cols-2 gap-8'>
         {projectData.map((project) => (
        <li key={project.id}>
          <div className='flex flex-col gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white h-full'>
            <img className='border border-2 border-white/20 rounded-xl' src={project.img?.src} alt={project.img?.alt} width={project.img?.width} height={project.img?.height} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.tech.join(', ')}</p>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </li>
         ))}
      </ul>
    </section>
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cv" element={<CV />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App

