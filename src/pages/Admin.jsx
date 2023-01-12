import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { 
    IoMdClose,
    IoCloseCircleOutline,
    FiEdit2
} from 'react-icons/all';

const StyledAdmin = styled.div`
    width: 100%;
    height: max-content;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    & div.messages__container {
        width: 100%;
        height: max-content;
        padding: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: #e8b717;

        color: white;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;

        svg {
            min-width: max-content;

            cursor: pointer;

            color: white;
            font-size: 24px;
        }
    }

    & h1 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
    }

    & button {
        width: max-content;
        height: 54px;
        margin-top: 20px;
        padding: 0 20px;

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
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;

        &.logout {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 2;
        }
    }

    & h2 {
        margin-top: 40px;

        color: black;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
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
            width: max-content;
            height: 54px;
            margin-top: 0;
            padding: 0 20px;

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
            font-size: 14px;
            font-weight: 600;
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

        background-color: ghostwhite;

        & div {
            position: relative;

            width: 100%;
            height: max-content;
            margin: 10px 0;

            display: flex;
            flex-direction: column;

            & img {
                width: 100%;
                height: max-content;

                object-fit: contain;
                image-rendering: optimizeQuality;

                border-radius: 1px;
            }

            & span {
                margin-top: 10px;

                display: flex;
                flex-direction: row;
                align-items: center;

                color: black;
                font-size: 14px;
                line-height: 24px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 2px;

                h5 {
                    margin-right: 10px;
                }

                svg {
                    color: black;
                    font-size: 14px;
                }
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

       & section {
            padding: 40px;

            & div {
                width: 32%;
                margin: 10px;
            }
       }
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 100px;
        padding: 40px 100px;

        & form,
        & section {
            padding: 60px;
        }
    }
`;

export default function Admin() {
    const { logout, getProducts, createProduct, updateProduct, deleteProduct } = useContext(AppContext);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    }, []);

    useEffect(() => {
        getProducts(setProducts);
    }, []);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [award, setAward] = useState(false);
    const [awardPhoto, setAwardPhoto] = useState(null);
    const [awardURL, setAwardURL] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(null);
    const [images, setImages] = useState(null);

    const [isEditing, setIsEditing] = useState(false);
    const [productIDForEdit, setProductIDForEdit] = useState('');

    const handleLogout = async () => {
      try {
        await logout();
        navigate('/login');
      } catch ( err ) {
        console.error(err.message);
      }
    };

    const handleOnChangeFile = (e) => {
        const element = e.target
        const file = element.files[0];
        const reader = new FileReader();

        if (e.target.id === 'images') {
            reader.onloadend = function() {
                setImages(reader.result.toString())
            };
    
            reader.readAsDataURL(file);
        } else {
            reader.onloadend = function() {
                setAwardPhoto(reader.result.toString())
            };
    
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct({
            title,
            description,
            category,
            award,
            awardPhoto,
            awardURL,
            price,
            status,
            images
        });

        setMessages('El retrato ha sido creado con exito.');
    };

    const handleReset = () => {
        setTitle('');
        setDescription('');
        setCategory('');
        setPrice('');
    }

    const handleEditForm = (product) => {
        window.scroll({
            top: 100, 
            left: 0, 
            behavior: 'smooth' 
        });

        setTitle(product.title);
        setDescription(product.description);
        setCategory(product.category);
        setPrice(product.price);
        setAward(product.award);
        setAwardPhoto(product.awardPhoto);
        setAwardURL(product.awardURL);
        setStatus(product.status);
        setImages(product.images);

        setIsEditing(true);
        setProductIDForEdit(product.id);
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        await updateProduct(productIDForEdit, {
            title,
            description,
            category,
            award,
            awardPhoto,
            awardURL,
            price,
            status,
            images
        });
        setMessages('El retrato ha sido modificado con exito.');
        setIsEditing(false);
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setMessages('El retrato ha sido eliminado con exito.');
    };

    const handleRefresh = () => {
        getProducts(setProducts);
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
            case 'awardURL':
                setAwardURL(e.target.value);
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

    const handleCloseMessages = () => {
        setMessages(null);
    };

    return (
        <div>
            <Header />
            <StyledAdmin>
                { messages && <div className='messages__container'>{ messages } <IoCloseCircleOutline onClick={handleCloseMessages} /></div> }
                <h2>Publicar nuevo retrato</h2>
                <form onSubmit={!isEditing ? handleSubmit : handleEdit}>
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
                        <label htmlFor='award'>¿Tiene Premio?</label>
                        <input 
                            onChange={handleChange}
                            type='checkbox' 
                            name='award' 
                            id='award'
                            value={award}
                        />
                    </div>   
                    {
                        award === true && 
                        <>
                            <div className='input__container'>
                                <label htmlFor='awardPhoto'>Imagen del Premio</label>
                                <input 
                                    onChange={handleOnChangeFile}
                                    type='file'
                                    name='awardPhoto'
                                    id='awardPhoto'
                                    required
                                />
                            </div>
                            <div className='input__container'>
                                <label htmlFor='awardURL'>URL de la Publicación</label>
                                <input 
                                    onChange={handleChange}
                                    type='text'
                                    name='awardURL'
                                    id='awardURL'
                                    minLength='2'
                                    maxLength='200'
                                    value={awardURL}
                                    required
                                />
                            </div>
                        </>
                    }
                    <div className='input__container'>
                        <label htmlFor='price'>Precio (en dólares)</label>
                        <input 
                            onChange={handleChange}
                            type='number' 
                            name='price' 
                            id='price' 
                            min='1'
                            max='5000'
                            value={price}
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
                                value='vendido'
                                required
                            />
                            <label htmlFor='vendido'>Vendido</label>
                        </div>
                    </div>
                    <div className='input__container'>
                        <label htmlFor='images'>Imagenes</label>
                        <input 
                            onChange={handleOnChangeFile}
                            type='file'
                            name='images'
                            id='images'
                            required
                        />
                    </div>
                    {
                        !isEditing ? <>
                            <button type='submit'>Crear retrato</button>
                            <button type='reset' onClick={handleReset}>Vaciar Campos</button>
                        </> :
                        <>
                            <button type='submit'>Editar retrato</button>
                        </>
                    }
                </form>
                <h2>Ver, editar y/o eliminar retratos</h2>
                <button onClick={handleRefresh}>Recargar datos</button>
                <section>
                    {
                        products && products.map((product) => {
                            return(
                                <div key={product.id}>
                                    <img src={product?.images} alt={product?.title} />
                                    <span onClick={() => handleDelete(product?.id)}>
                                        <h5>Eliminar</h5>
                                        <IoMdClose />
                                    </span>
                                    <span onClick={() => handleEditForm(product)}>
                                        <h5>Editar</h5>
                                        <FiEdit2 />
                                    </span>
                                </div>
                            )
                        })
                    }
                </section>
                <button className='logout' onClick={handleLogout}>Cerrar sesión</button>
            </StyledAdmin>
            <Footer />
        </div>
    );
};