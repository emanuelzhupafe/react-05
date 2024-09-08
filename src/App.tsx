import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import { ImageModel } from './models/image';
import Favorites from './components/Favorites';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetails';

function App() {

    const [images, setImages] = useState<ImageModel[]>([]);

    useEffect(() => {

        const imagesOnStorage = getFromLocalStorage("images")

        if (imagesOnStorage && imagesOnStorage.length > 0) {
            setImages(imagesOnStorage);
        } else {
            fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
                .then(res => res.json())
                .then(res => {
                    setImages(res);

                    saveOnLocalStorage("images", res);
                })
        }
    }, [])

    useEffect(() => {

        localStorage.removeItem("images");

        saveOnLocalStorage("images", images);

    }, [images])

    const saveOnLocalStorage = (key: string, obj: any) => {
        const stringifiedObject = JSON.stringify(obj);

        localStorage.setItem(key, stringifiedObject);
    }

    const getFromLocalStorage = (key: string) => {
        const stringifiedObj = localStorage.getItem(key);

        return JSON.parse(stringifiedObj ?? "{}");

    }

    const handleImageClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
        setImages(prevState => {
            return prevState.map(
                obj => {
                    if (obj.id === id) {
                        return {
                            ...obj,
                            isFavorite: !obj.isFavorite,
                        }
                    }

                    return obj;
                }
            );
        });
    }

    return (
        <BrowserRouter>
            <Header />

            <Routes>

                <Route
                    path="/"
                    element={<ImageList images={images} handleImageClick={handleImageClick} />}
                />

                <Route
                    path="/favorites"
                    element={<Favorites favImages={images.filter(img => img.isFavorite)} />}
                />

                <Route
                    path="/image-details/:imageId"
                    element={<ImageDetail />}
                />

                <Route
                    path="*"
                    element="null"
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
