import Image from 'next/image';

export default function Page() {
    return (
        <>
            <h1>Welcome to Glitter N Geeks Playspace!</h1>
            <p>This is a playground for experimenting with Next.js and React.</p>
            <p>Feel free to come back later and see what I create!</p>
            <Image src="/To_Be_Continued_GIF.gif" alt="To Be Continued GIF" width={500} height={500} unoptimized />
        </>
    );
}

// (Removed redundant comments)