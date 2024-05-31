import NavBar from './navbar';
import Footer from './footer';
import '../style/about.css';

const Om = () => {
    return (
        <div className='body'>
        <NavBar />
            <main>
                <section>
                    <h1 className='text'>Om</h1><br />
                    <p className='text'>Dette er en leketøys butikk.</p><br />
                </section>
                <section>
                    <h2 className='text'> Hei </h2><br />
                    <p className='text'>Håper den er bra.</p><br /><br />
                </section>
                <section>
                    <p className='text'>Takk for meg!</p>
                </section>
            </main>
            <Footer />
            </div>
    );    
};

export default Om;