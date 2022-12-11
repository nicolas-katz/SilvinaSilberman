import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    doc, 
    deleteDoc 
} from 'firebase/firestore';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase';

export const AppContext = createContext();

export function AppContextProvider(props) {
    const productsCollection = collection(db, 'products');
    
    // Get all products
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollection);
            setProducts(data.docs.map((doc) => (
                { 
                    ...doc.data(), 
                    id: doc.id
                })
            ))
        }

        getProducts();
    }, [products]);

    // Create new product
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [award, setAward] = useState(false);
    const [duration, setDuration] = useState(0);
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState('');
    const [finishedAt, setFinishedAt] = useState('');
    const [image, setImage] = useState('');

    const createProduct = async () => {
        await addDoc(productsCollection, {
            title,
            description,
            category,
            award,
            duration,
            price,
            status,
            finishedAt,
            image
        });
        console.log('Producto creado.')
    };

    // Update product
    const updateProduct = async (id, data) => {
        const userDoc = doc(db, 'products', id);
        await updateDoc(userDoc, data);
    };

    // Delete product
    const deleteProduct = async (id) => {
        const userDoc = doc(db, 'products', id);
        await deleteDoc(userDoc);
    };

    // Create admin user
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAdminUser = async (email, password) =>  { 
        await createUserWithEmailAndPassword(auth, email, password);
    };

    // Login for admin user
    const loginAdminUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    // Reset password email
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    // Logout
    const logout = () => signOut(auth);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });

        return () => unsubuscribe();
      }, []);

    return (
        <AppContext.Provider 
            value={{
                products,
                createProduct,
                setTitle,
                setDescription,
                setCategory,
                setAward,
                setDuration,
                setPrice,
                setStatus,
                setFinishedAt,
                setImage,
                updateProduct,
                deleteProduct,
                createAdminUser,
                loginAdminUser,
                resetPassword,
                logout,
                user,
                loading
            }}>
            {props.children}
        </AppContext.Provider>
    );
};