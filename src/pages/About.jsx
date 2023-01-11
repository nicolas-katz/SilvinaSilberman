import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFooter from '../components/ContactFooter';

const StyledAbout = styled.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 60px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;

        text-align: left;

        p {
            color: gray;
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 80px 60px 60px 60px;

        div {
            p {
                font-size: 20px;
                line-height: 30px;
            }
        }   
    }

    @media only screen and (min-width: 1024px) {
        padding: 80px 160px 60px 160px;

        h1 {
            font-size: 42px;
            line-height: 52px;
        }  
    }

    @media only screen and (min-width: 1200px) {
        padding: 100px 320px 80px 320px;

        h1 {
            font-size: 48px;
            line-height: 58px;
        }  
    }
`;

export default function About() {
    useEffect(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    }, []);

    return (
        <div>
            <Header />
            <StyledAbout>
                <h1>Sobre Mi</h1>
                <div>
                    <p>
                        Barrio Chino Est. 2017 <br></br> <br></br>
                        Nacido en la Cordillera de los Andes <br></br> <br></br>
                        Hecho en Buenos Aires <br></br> <br></br>
                        
                        Cada prenda es confeccionada con materia prima de primera calidad, de manera responsable y ética en cada una de las etapas de su producción y su impresión. <br></br> <br></br>
                        Cada ser que forma parte del proceso lo hace con amor y dedicación.
                    </p>
                    <ContactFooter />
                </div>
            </StyledAbout>
            <Footer />
        </div>
    );
};