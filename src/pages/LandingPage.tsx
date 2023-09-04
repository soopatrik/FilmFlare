// LandingPage.tsx
import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>FilmFlare</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/series">Series</a>
                </nav>
            </header>
            <section className="hero">
                <h2>FilmFlare gonna make it Flare</h2>
                <p>Enjoy your favorite movies and series.</p>
            </section>
            <section className="content">
                <h3>Latest Movies</h3>
                {/* Movie components go here */}
            </section>
        </div>
    );
};

export default LandingPage;