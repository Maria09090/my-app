import React, { useRef, useState } from 'react';
import NavBar from './navbar';
import Footer from './footer';
import "../style/navbar.css"

const Products = [
    {
        title:'velg tjeneste 1',
        description: 'en nettside som jeg har laget i React',
        link: 'https://tjeneste1.com',
        image: '/component/tjeneste1.jpg',
    },
    { 
        title: 'velg tjeneste 2',
        description: 'en produkt som jeg har laget i React',
        link: 'https://tjeneste2.com',
        image: '/component/tjeneste2.jpg',
    },
    {
        title: 'velg tjeneste 3', 
        description: 'en nettside som jeg har laget i React',
        link: 'https://tjeneste3.com',
        image: '/component/tjeneste3.jpg',
    },
];


function Product () {

    const[showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [hoveredProduct, setHoveredProduct] = useState(null); // Definerer hoveredProduct og setter den til null som standard

    const handleProductHover = (product) => {
        setHoveredProduct(product);
    };

    const handleProductLeave = () => {
        setHoveredProduct(null); // Setter hoveredProduct til null når musepekeren forlater produktet
    };

    const handleButtonClick = (product) => {
        setShowModal(true);
        setModalContent(product);
    };

    const handleClose = () => {
        setShowModal(false);
    }; 

    return (
    <body> 

     <NavBar />
     <h2 className="text-center">Produkter</h2>
          <div className="row"></div>

          
          
            {Products.map((product, index) => ( 
                <div
                key={index}
                className={`productContainer button${index + 1}`}
                onMouseEnter={() => handleProductHover(product)}
                onMouseLeave={handleProductLeave}
                >
                        
                        <div><img src="/component/tjeneste1.jpg" alt={"velg tjeneste 1"} /><br />
                        <button type="button" onClick={() => handleButtonClick(product)}>Les mer</button>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                         </div>
                        <div><img src="/component/tjeneste2.jpg" alt={"velg tjeneste 2"} /><br />
                        <button type="button" onClick={() => handleButtonClick(product)}>Les mer</button>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                         </div>
                         <div><img src="/component/tjeneste3.jpg" alt={"velg tjeneste 3"} /><br />
                        <button type="button" onClick={() => handleButtonClick(product)}>Les mer</button>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                         </div>
                         <img src="/component/tjeneste1.jpg" alt={"velg tjeneste 1"} />
                         <img src="/component/tjeneste2.jpg" alt={"velg tjeneste 2"} />
                         <img src="/component/tjeneste3.jpg" alt={"velg tjeneste 3"} />
            </div>
                        ))}
            {hoveredProduct && (
                <div className="popup">
                <div className="popup-content">
                <h4>{hoveredProduct.title}</h4>
                {modalContent && modalContent.description ? (
                    <p>{modalContent.description}</p>
                ) : (
                    <p>No description available</p>
                )}
                
                <a href={hoveredProduct.link} target="_blank" rel="noopener noreferrer">Besøk</a>
                </div>
                </div>   
            )}
            
            <Footer />
    </body>
            
    );
}
export default Product;