import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    doc, 
    deleteDoc, 
    getDoc
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

    // Create all products
    const getProducts = async (state) => {
        const data = await getDocs(productsCollection);
        state(data.docs.map((doc) => (
            { 
                ...doc.data(), 
                id: doc.id
            })
        ));
    };

    // Create product by id
    const getProductById = async (state, id) => {
        const product = await getDoc(doc(db, 'products', id));
        state(product.data());
    };

    // Create new product
    const createProduct = async (product_data) => {
        await addDoc(productsCollection, product_data);
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
    const [loadingUser, setLoadingUser] = useState(true);

    const createAdminUser = async (email, password) =>  { 
        await createUserWithEmailAndPassword(auth, email, password);
    };

    // Login for admin user
    const loginAdminUser = (email, password) =>  { 
        signInWithEmailAndPassword(auth, email, password);
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
          setLoadingUser(false);
        });

        return () => unsubuscribe();
      }, []);

    return (
        <AppContext.Provider 
            value={{
                getProducts,
                getProductById,
                createProduct,
                updateProduct,
                deleteProduct,
                createAdminUser,
                loginAdminUser,
                resetPassword,
                logout,
                user,
                loadingUser
            }}>
            {props.children}
        </AppContext.Provider>
    );
};