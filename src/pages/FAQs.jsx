import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFooter from '../components/ContactFooter';

const StyledFAQs = styled.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 28px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }

    div.faqs__container {
        width: 100%;

        display: flex;
        flex-direction: column;

        div {
            margin-top: 32px;
            padding-top: 32px;

            display: flex;
            flex-direction: column;

            border-top: 1px solid gainsboro;

            &:first-child {
                margin-top: 20px;
                padding-top: 0;

                border-top: none;
            }

            h3 {
                margin-bottom: 20px;

                color: black;
                font-size: 24px;
                line-height: 34px;
                font-weight: 400;
            }

            p {
                color: gray;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        div.faqs__container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            div {
                width: 45%;
                padding-top: 0;

                border-top: none;

                &:first-child {
                    margin-top: 32px;
                }

                h3 {
                    font-size: 28px;
                    line-height: 38px;
                }
            }
        }
    }
    
    @media only screen and (min-width: 1024px) {
        padding: 100px 60px 80px 60px;

        h1 {
            font-size: 42px;
            line-height: 52px;
        }

        div.faqs__container {
            div {
                h3 {
                    font-size: 32px;
                    line-height: 42px;
                }

                p {
                    font-size: 20px;
                    line-height: 30px;
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 100px 160px 80px 160px;

        h1 {
            font-size: 48px;
            line-height: 58px;
        }  
    
        div.faqs__container {
            div {
                margin-top: 48px !important;
            }
        }
    }
`;

export default function FAQs() {
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
            <StyledFAQs>
                <h1>Preguntas Frecuentes</h1>
                <div className='faqs__container'>
                    <div>
                        <h3>¿Cuánto se tarda en producir un retrato personalizado?</h3>
                        <p>Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.</p>
                    </div>
                    <div>
                        <h3>¿Cuánto se tarda en producir un retrato personalizado?</h3>
                        <p>Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.</p>
                    </div>
                    <div>
                        <h3>¿Cuánto se tarda en producir un retrato personalizado?</h3>
                        <p>Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.</p>
                    </div>
                    <div>
                        <h3>¿Cuánto se tarda en producir un retrato personalizado?</h3>
                        <p>Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.</p>
                    </div>
                    <div>
                        <h3>¿Cuánto se tarda en producir un retrato personalizado?</h3>
                        <p>Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.</p>
                    </div>
                    <div>
                        <h3>¿Cuánto se tarda en producir un retrato personalizado?</h3>
                        <p>Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.</p>
                    </div>
                </div>
                <ContactFooter />
            </StyledFAQs>
            <Footer />
        </div>
    );
};