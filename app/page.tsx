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

// This file is the main page of a Next.js application
// It serves as the entry point for the application and renders a welcome message.



// Good to know:
//
// If you forget to create the root layout, Next.js will automatically create this file when running the development server with `next dev`.
// You can optionally use a `src` folder in the root of your project to separate your application's code from configuration files.