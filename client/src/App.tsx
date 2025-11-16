import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import './App.css'
import { FaGithub, FaLinkedin, FaPhone, FaPhoneAlt } from 'react-icons/fa';
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
      <nav>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const CV = () => {
  return (
    <>
    <SideBarCV/>
    <MainCV/>
    </>
  )
}

const SideBarCV = () => {
  return (
    <section className=' bg-gray-300 flex flex-col items-center justify-center'>
      <div className='rounded-full w-48 h-48 overflow-hidden'>
        <img src="/assets/mikaelakihl-cv.png" alt="CV" className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className='text-xl font-bold'>Mikaela Kihl</h1>
        <p>Frontend Developer</p>
      </div>
      <div>
        <h2>Contact</h2>
        <div>
          <div className='flex items-center gap-2'>
            <CiMail />
           <a href="mailto:mikaela.kihl@medieinstitutet.se">mikaela.kihl@medieinstitutet.se</a> 
          </div>
          <div className='flex items-center gap-2'>
            <FaGithub />
            <a href="https://github.com/mikaelakihl">GitHub</a> 
          </div>
          <div className='flex items-center gap-2'>
            <FaLinkedin/>
            <a href="https://www.linkedin.com/in/mikaela-kihl-4b1751200/">LinkedIn</a>
          </div>
        <div className='flex items-center gap-2'>
          <FaPhoneAlt/>
          <a href="tel:070-857-0746">070-857-0746</a>
        </div>
        </div>
        <div>
          <h2>Languages</h2>
          <p>swedish</p>
          <p>english</p>
        </div>
        <div>
          <h2>Tech</h2>
          <p>Javascript</p>

        </div>
        <div>
          <h2>Strengths</h2>
          <p>Creative</p>
          <p>Adaptable</p>
          <p>Easygoing</p>
          <p>Supportive</p>
        </div>
        <div>
          <h2>Areas to growth</h2>
          <p>Reading lengthy texts</p>
          <p>Presentation skills</p>
        </div>
        <p>References available upon request</p>
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
    <section>
      <div className='bg-green-300'>
        <p>My career started when I was 16 and during these years I've gained a lot of skills, socially and practically. Five words to describe myself, <strong>open, loyal, responsible, inventive & adaptable.</strong></p>
        <p>I enjoy working in a team but I'm also very independent. After five years in customer support I'm ready for new challenges in Front End Development.</p>
      </div>
      <div className='bg-blue-300'>
        <h2>Education & Internship</h2>
        <ul>
          {cvData.education.map((educationEntry) => (
            <li key={educationEntry.id}>
              <h3>
                {educationEntry.startDate} - {educationEntry.endDate}: {educationEntry.organization}, {educationEntry.location}
              </h3>
              <p>{educationEntry.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-red-300'>
        <h2>Work Experience</h2>
        <ul>
          {cvData.workExperience.map((workEntry) => (
            <li key={workEntry.id}>
              <h3>
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
