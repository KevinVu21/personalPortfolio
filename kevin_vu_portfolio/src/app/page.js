'use client';

import {useState} from 'react';
import Cassete from '@/app/components/cassete';
import AboutMe from '@/app/aboutMe';
import Projects from '@/app/Projects'

export default function Home() {
  const [isAboutShown, setIsAboutShown] = useState(false);
  
  return (
    <main>
      <Cassete onOpenAboutModal = {() => setIsAboutShown(true)}/>
      <h1>Hello, World!</h1>
      <AboutMe isAboutShown={isAboutShown}/>
      <Projects />
    </main>
  );
}
