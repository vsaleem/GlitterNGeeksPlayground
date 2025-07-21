import { ReactNode } from 'react'
// this file is the root layout for a Next.js application
export default function RootLayout({ 
    children,
 }:
 {
    children: ReactNode;
 }) {
    return (
        <html lang="en">
            <head>
                <title>Glitter N Geeks Playground</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
 }