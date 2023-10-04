import '@styles/globals.css'


export const metadata = {
    title: 'Eour Dev',
    description: 'Bulid you business your Eour Dev'
}

const RootLayout = ({ children }) => {
    return (
        <main className='app'>
            {children}
        </main>
    )
}

export default RootLayout