import Link from 'next/link';

export default function navBar({onOpenAboutModal}){
    return(
        <nav className='flex border rounded-xl'>
            <Link href="/" className='border p-4 flex-1'>Home</Link>
            <Link href="#projects" className='border p-4 flex-1'>Projects</Link>
            <Link href="#about" className='border p-4 flex-1' onClick={onOpenAboutModal}>About Me</Link>
            <Link href="/Kevin_Vu_Resume.pdf" target="_blank" rel="noopener noreferrer" className='border p-4 flex-1'>Resume</Link>
        </nav>
    );
}