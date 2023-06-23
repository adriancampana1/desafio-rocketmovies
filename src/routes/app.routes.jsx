import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Create } from '../pages/Create';
import { MoviePreview } from '../pages/Preview';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route
                path="/preview/:id"
                element={<MoviePreview></MoviePreview>}
            ></Route>
        </Routes>
    );
}
