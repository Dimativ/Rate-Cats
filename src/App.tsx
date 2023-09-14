import './App.css';
import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/mainLayout.tsx";
import Home from "./pages/home/home.tsx";

const NotFound = lazy(() => import('./pages/notFound/notFound.tsx'));
const Voting = lazy(() => import('./pages/voting/voting.tsx'));
const Likes = lazy(() => import('./pages/likes/likes.tsx'));
const Dislikes = lazy(() => import('./pages/dislikes/dislikes.tsx'));
const Favourite = lazy(() => import('./pages/favourite/favourite.tsx'));
const Breeds = lazy(() => import('./pages/breeds/breeds.tsx'));
const Gallery = lazy(() => import('./pages/gallery/gallery.tsx'));

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="*" element={<Suspense><NotFound/></Suspense>}/>
                <Route path="voting" element={<Suspense><Voting/></Suspense>}/>
                <Route path="likes" element={<Suspense><Likes/></Suspense>}/>
                <Route path="dislikes" element={<Suspense><Dislikes/></Suspense>}/>
                <Route path="favourite" element={<Suspense><Favourite/></Suspense>}/>
                <Route path="breeds" element={<Suspense><Breeds/></Suspense>}/>
                <Route path="gallery" element={<Suspense><Gallery/></Suspense>}/>
            </Route>
        </Routes>
    )
}

export default App
