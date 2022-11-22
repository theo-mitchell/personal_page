import Link from 'next/link';

const Custom404 = () => {
    return (
        <>
            <h1>YOU CAME TO THE WRONG NEIGHBORHOOD BOAH</h1>
            <Link href='/'>
                Go back home
            </Link>
        </>
    );
};

export default Custom404;