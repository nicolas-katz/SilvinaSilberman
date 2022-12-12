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
    }, []);

    // Create new product
    const createProduct = async (product_data) => {
        await addDoc(productsCollection, product_data);
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
    const loginAdminUser = (email, password) =>  { 
        signInWithEmailAndPassword(auth, email, password)
    };

    // Reset password email
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    // Logout
    const logout = () =>  { 
        signOut(auth);
    };

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
          if (currentUser !== null) {
            localStorage.setItem('user', JSON.stringify(currentUser));
          } else {
            localStorage.removeItem('user');
          }
        });

        return () => unsubuscribe();
      }, []);

    return (
        <AppContext.Provider 
            value={{
                products,
                createProduct,
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