import Nav from "@components/Nav";
import Footer from "@components/Footer";
import '@styles/global.css';
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <main className='app'>
                <Nav />
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout;