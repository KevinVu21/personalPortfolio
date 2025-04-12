import Link from 'next/link';

export default function NavBar(){
    return(
        <nav className='flex'>
            <Link href="/" className='border p-4'>Home</Link>
            <Link href="/aboutMe" className='border p-4'>About Me</Link>
            <Link href="/Kevin_Vu_Resume.pdf" target="_blank" rel="noopener noreferrer" className='border p-4'>Resume</Link>
        </nav>
    );
}