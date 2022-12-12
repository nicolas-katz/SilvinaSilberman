import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { 
    IoMdClose 
} from 'react-icons/all';

const StyledAdmin = styled.div`
    width: 100%;
    height: max-content;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    & h1 {
        color: black;
        font-size: 28px;
        line-height: 38px;
        font-weight: 400;
    }

    & button {
        width: max-content;
        height: 54px;
        margin-top: 20px;
        padding: 0 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: grey;
        border: none;
        border-radius: 1px;
        outline: none;
        cursor: pointer;
        transition: all .6s;

        color: white;
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    & h2 {
        margin-top: 40px;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
    }

    & form {
        width: 100%;
        height: max-content;
        margin-top: 20px;
        padding: 20px;

        display: flex;
        flex-direction: column;

        background-color: ghostwhite;

        & div.input__container {
            width: 100%;
            height: max-content;
            margin-bottom: 16px;

            & label {
                color: black;
                font-size: 14px;
                font-weight: 400;
            }

            & input {
                width: 100%;
                height: 54px;
                margin-top: 8px;
                padding: 0 20px;

                background-color: white;
                border: 1px solid gainsboro;
                border-radius: 1px;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: black;
                font-size: 16px;
                font-weight: 400;
            }

            & img {
                width: 100%;
                height: 200px;
                margin-top: 16px;

                border-radius: 1px;

                object-fit: cover;
            }

            & input[type="checkbox"], & input[type="radio"] {
                width: 16px;
                height: 16px;

                display: block;
            }

            & div {
                margin: 10px 0;

                display: flex;
                flex-direction: row;
                align-items: center;

                & input {
                    margin-top: 0;
                    margin-right: 10px;
                }
            }
        }

        & button {
            width: 100%;
            height: 54px;
            padding: 0 24px;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: grey;
            border: none;
            border-radius: 1px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: white;
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
    }

    & section {
        width: 100%;
        height: max-content;
        margin-top: 20px;
        padding: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        background-color: ghostwhite;

        & div {
            position: relative;

            width: 100%;
            height: max-content;
            margin: 10px 0;

            display: flex;
            flex-direction: column;

            & span {
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 1;

                width: 32px;
                height: 32px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: #d1000070;
                border-radius: 50%;
                box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
                cursor: pointer;

                & svg {
                    color: #b81e1ee0;
                    font-size: 20px;
                }
            }

            & img {
                width: 100%;
                height: 280px;

                object-fit: cover;

                border-radius: 1px;
            }

            & h4 {
                margin-top: 10px;

                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 400;
            }
        }
    }

    @media only screen and (min-width: 768px) {
       & form {
            padding: 40px;
            
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            & div.input__container {
                width: 48%;
            }
       } 
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 100px;
        padding: 40px 100px;

        & form {
            padding: 60px;
        }
    }
`;

export default function Admin() {
    const { logout, products, createProduct, updateProduct, deleteProduct } = useContext(AppContext);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() =>{
            setData(products);
        }, 2000)
    }, []);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [award, setAward] = useState(false);
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(null);
    const [primaryImage, setPrimaryImage] = useState(null);

    const handleLogout = async () => {
      try {
        await logout();
        console.log('Se ha cerrado sesión correctamente.');
        navigate('/');
      } catch (error) {
        console.error(error.message);
      }
    };

    const handleOnChangeFile = (e) => {
        const element = e.target
        const file = element.files[0];
        const reader = new FileReader();
        
        reader.onloadend = function() {
            setPrimaryImage(reader.result.toString());
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct({
            title,
            description,
            category,
            award,
            duration,
            price,
            status,
            primaryImage
        });

        setTitle('');
        setDescription('');
        setCategory('');
        setPrice('');
        setAward(false);
        setDuration('');
        setStatus(null);
        setPrimaryImage(null);

        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);

        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    };

    const handleRefresh = () => {
        setTimeout(() => {
            setData(products);
        }, 1500)
    };

    const handleChange = (e) => {        
        e.preventDefault();
        switch (e.target.id) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'category':
                setCategory(e.target.value);
                break;
            case 'award':
                setAward(e.target.checked);
                break;
            case 'duration':
                setDuration(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
            case 'status':
                setStatus(e.target.value);
                break;
            default:
                break;
        };
    };

    return (
        <div>
            <Header />
            <StyledAdmin>
                <h1>Cuenta de administrador</h1>
                <h2>Publicar nuevo retrato</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input__container'>
                        <label htmlFor='title'>Titulo</label>
                        <input 
                            onChange={handleChange}
                            type='text' 
                            name='title' 
                            id='title' 
                            minLength='3'
                            maxLength='20'
                            value={title}
                            required
                        />
                    </div>
                    <div className='input__container'>
                        <label htmlFor='description'>Descripción</label>
                        <input 
                            onChange={handleChange}
                            type='text' 
                            name='description' 
                            id='description' 
                            minLength='8'
                            maxLength='200'
                            value={description}
                            required
                        />
                    </div>
                    <div className='input__container'>
                        <label htmlFor='category'>Categoría</label>
                        <input 
                            onChange={handleChange}
                            type='text' 
                            name='category' 
                            id='category' 
                            minLength='3'
                            maxLength='20'
                            value={category}
                            required
                        />
                    </div>
                    <div className='input__container'>
                        <label htmlFor='price'>Precio (en dólares)</label>
                        <input 
                            onChange={handleChange}
                            type='number' 
                            name='price' 
                            id='price' 
                            min='1'
                            max='1000'
                            value={price}
                            required
                        />
                    </div>
                    <div className='input__container'>
                        <label htmlFor='duration'>Duración (en días)</label>
                        <input 
                            onChange={handleChange}
                            type='number' 
                            name='duration' 
                            id='duration' 
                            min='1'
                            max='365'
                            value={duration}
                            required
                        />
                    </div>
                    <div className='input__container'>
                        <label htmlFor='status'>Estado</label>
                        <div>
                            <input type='radio' 
                                onChange={handleChange}
                                name='status'
                                id='status'
                                value='disponible'
                                required
                            />
                            <label htmlFor='disponible'>Disponible</label>
                        </div>
                        <div>
                            <input type='radio' 
                                onChange={handleChange}
                                name='status'
                                id='status'
                                value='reservado'
                                required
                            />
                            <label htmlFor='reservado'>Reservado</label>
                        </div>
                        <div>
                            <input type='radio' 
                                onChange={handleChange}
                                name='status'
                                id='status'
                                value='vendido'
                                required
                            />
                            <label htmlFor='vendido'>Vendido</label>
                        </div>
                    </div>
                    <div className='input__container'>
                        <label htmlFor='award'>¿Tiene Premio?</label>
                        <input 
                            onChange={handleChange}
                            type='checkbox' 
                            name='award' 
                            id='award'
                            value={award}
                        />
                    </div>
                    <div className='input__container'>
                        <label htmlFor='primaryImage'>Imagen principal</label>
                        <input 
                            onChange={handleOnChangeFile}
                            type='file'
                            name='primaryImage'
                            id='primaryImage'
                            required 
                        />
                    </div>
                    <button type='submit'>Crear retrato</button>
                </form>
                <h2>Ver y eliminar retratos</h2>
                <button onClick={handleRefresh}>Recargar datos</button>
                <section>
                    {
                        data.length > 0 ? data.map((product) => {
                            return(
                                <div key={product.id}>
                                    <span onClick={() => handleDelete(product.id)}>
                                        <IoMdClose />
                                    </span>
                                    <img src={product.primaryImage} alt={product.title} />
                                    <h4>{product.title}</h4>
                                </div>
                            )
                        }) : <h1>Cargando productos...</h1>
                    }
                </section>
                <button className='logout' onClick={handleLogout}>Cerrar sesión</button>
            </StyledAdmin>
            <Footer />
        </div>
    );
};