import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <div className='w-full h-screen flex justify-center items-center'>
                <Link href = '/graphql' className = 'border-2 px-8 py-2 text-2xl'>GraphiQL Editor</Link>
            </div>
        </main>
    );
}
