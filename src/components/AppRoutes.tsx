import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import { Home } from '../pages/Home';
    import { Profile } from '../pages/Profile';
    import { Project } from '../pages/Project';

    export function AppRoutes() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      );
    }
