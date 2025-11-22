import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import './App.css'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

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

const Layout = () => {
  return (
    <div className='App'>
      <nav className='max-w-7xl mx-auto px-4 md:px-8'>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <main className='max-w-7xl mx-auto px-4 md:px-8'>
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
      <div className='flex flex-col gap-4'>
        
        <div className='bg-brand-50 m-0'>
          <h2 className='uppercase text-black'>Contact</h2>
          <div className='flex items-center gap-2 text-black'>
            <CiMail />
           <a href="mailto:mikaela.kihl@medieinstitutet.se">mikaela.kihl@medieinstitutet.se</a> 
          </div>
          <div className='flex items-center gap-2 text-black'>
            <CiMail />
           <a href="mailto:mikaela.kihl@outlook.com">mikaela.kihl@outlook.com</a> 
          </div>
          <div className='flex items-center gap-2 text-black'>
            <FaGithub />
            <a href="https://github.com/mikaelakihl">GitHub</a> 
          </div>
          <div className='flex items-center gap-2 text-black'>
            <FaLinkedin/>
            <a href="https://www.linkedin.com/in/mikaela-kihl-4b1751200/">LinkedIn</a>
          </div>
          <div className='flex items-center gap-2 text-black'>
          <FaPhoneAlt/>
          <a href="tel:070-857-0746">070-857-0746</a>
        </div>
        </div>
        <div className='flex flex-col items-center gap-2 '>
          <h2 className='uppercase'>Languages</h2>
          <div className='flex items-center gap-2'>
          <p>swedish</p>
          <p>english</p>
          </div>
        </div>
        <div>
          <h2 className='uppercase'>Tech</h2>
          <p>Javascript</p>

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
        <p className='text-black'>References available upon request</p>
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
  return <div>Projects</div>
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
