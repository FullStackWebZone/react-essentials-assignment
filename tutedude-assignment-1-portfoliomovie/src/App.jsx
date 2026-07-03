import React, { useState } from 'react';
import SearchBar from './components/MovieExplorer/SearchBar.jsx';
import MovieCard from './components/MovieExplorer/MovieCard.jsx';
import FavoritesList from './components/MovieExplorer/FavoritesList.jsx';
import ProfileHeader from './components/PortfolioCard/ProfileHeader.jsx';
import FooterActions from './components/PortfolioCard/FooterActions.jsx';
import './styles/App.css';
import { Moon, Sun, ChevronLeft, ChevronRight, Heart, Mail } from 'lucide-react';
import SkillsList from './components/PortfolioCard/SkillsList.jsx';

const myMovieDatabase = [
  { id: 1, title: "Star Wars: A New Hope", year: "1977", genre: "Sci-Fi", rating: "8.6", tags: "Space Opera • Rebels • Force • Galaxy" },
  { id: 2, title: "The Star", year: "2017", genre: "Animation", rating: "6.1", tags: "Family • Journey • Friends" },
  { id: 3, title: "Interstellar", year: "2014", genre: "Sci-Fi", rating: "8.7", tags: "Space • Time • Black Hole • Science" },
  { id: 4, title: "The Dark Knight", year: "2008", genre: "Action", rating: "9.0", tags: "Batman • Joker • Gotham • Hero" },
  { id: 5, title: "Sita Ramam", year: "2022", genre: "Romance", rating: "10.0", tags: "Romantic • Suspense • Action • Drama" },
  { id: 6, title: "Together", year: "2025", genre: "Horror", rating: "8.5", tags: "Horror • Suspense • Action • Thriller" }
];

function App() {
  const [currentTab, setCurrentTab] = useState("portfolio");

  const [portfoliolike, setportfoliolike] = useState(128);
  const [hasLikedPortfolio, setHasLikedPortfolio] = useState(false);
  const [portfolioDark, setportfolioDark] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);

  const profileSkillsList = ["UI", "React", "TypeScript", "Figma", "Prototyping", "Node", "Javascript"];

  function handleLikeProfileIncrement() {
    if (hasLikedPortfolio === false) {
      setportfoliolike(portfoliolike + 1);
      setHasLikedPortfolio(true);
    } else {
      setportfoliolike(portfoliolike - 1);
      setHasLikedPortfolio(false);
    }
  }

  function handleSearchReset() {
    setSearchText("");
  }

  function handleToggleFavorite(movie) {
    var checkExist = false;
    for (var i = 0; i < favoriteItems.length; i++) {
      if (favoriteItems[i].id === movie.id) {
        checkExist = true;
      }
    }

    if (checkExist === true) {
      const filtered = favoriteItems.filter(function (item) {
        return item.id !== movie.id;
      });
      setFavoriteItems(filtered);
    } else {
      setFavoriteItems([...favoriteItems, movie]);
    }
  }

  const matches = myMovieDatabase.filter(function (m) {
    return m.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    
    <div className={`main-wrapper ${portfolioDark ? 'card-dark-mode' : ''}`}>

      
      <ProfileHeader onToggleTheme={() => setportfolioDark(!portfolioDark)} />

      <div className="movie-card">

        
        <div className="tab-switch">
          <button
            className={currentTab === "portfolio" ? "active-tab" : "inactive-tab"}
            onClick={() => setCurrentTab("portfolio")}
          >
            Part A: Portfolio
          </button>
          <button
            className={currentTab === "movie" ? "active-tab" : "inactive-tab"}
            onClick={() => setCurrentTab("movie")}
          >
            Part B: Movie Explorer
          </button>
        </div>

       
        {currentTab === "portfolio" && (
          <div className="portfolio-tab-content-wrapper">
            <h1 className="main-title">My Developer Portfolio</h1>

            
  <div className="profile-card">
              <div className="profile-top-img-and-text">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  alt="Avatar representation"
                  className="profile-display-img"
                />
                <h2 className="profile-display-userName">TuteDud</h2>
                <p className="profile-display-headline">Product Designer & Frontend Engineer</p>
              </div>

              <p className="profile-summary-text">
                I design and build calm, focused product experiences for fast-moving teams.
                Currently exploring Ai-assisted interfaces, design systems, and high-performaance UI engineering.
              </p>

              <SkillsList profileSkillsList={profileSkillsList} />

              <div className="profile-card-bottom">
                <div className="mode-switch">
                  <button
                    className="mode-switch-btn"
                    onClick={() => setportfolioDark(!portfolioDark)}
                  >
                    




                    {portfolioDark ? (
                      <>
                        <Sun size={14} style={{ marginRight: '4px' }} />
                        <span>Light</span>
                      </>
                    ) : (
                      <>
                        <Moon size={14} style={{ marginRight: '4px' }} />
                        <span>Dark</span>
                      </>
                    )}



      </button>

                  <button className="mode-switch-btn" style={{ marginLeft: '12px' }}>
                    <ChevronLeft size={14} />
                  </button>

                  <span className="bottom-pagination">1 / 4</span>

                  <button className="mode-switch-btn">
                    <ChevronRight size={14}              />
                  </button>
                </div>

                <div className="bottom-right-buttons">
                  <button
                    className="likes-counter"
                    onClick={handleLikeProfileIncrement}
                  >
                    <Heart
                      size={14}
                      fill={hasLikedPortfolio ? "#ef4444" : "none"}
                     
                      color={hasLikedPortfolio ? "#ef4444" : (portfolioDark ? "#cbd5e1" : "#334155")}
                    />
                    <span className="like-numeric-value">{portfoliolike}</span>
                  </button>

                  <button className="contact-btn">
                    <Mail size={14} /> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        
        {currentTab === "movie" && (


          <div className="movie-tab-content">
            <h1 className="main-title">Movie Explorer</h1>
            <p className="main-subtitle">Search, filter, and favorite movies. Designed for a single-page React component structure.</p>

            <SearchBar
              searchText={searchText}
              setSearchText={setSearchText}
              resetSearch={handleSearchReset}
            />

            <FooterActions totalResultNumber={matches.length} currentSearchedText={searchText} />

            <div className="layout-columns">
              <div className="left-side-matching-movies">
                <div className="section-header-row">
                  <span className="section-heading">Matching Movies</span>
                  <span className="section-subtext">Filtered from local movie data</span>
                </div>

                <div className="movies-vertical-listing">
                  {matches.map(function (item) {
                    var itemisFavorite = false;
                    for (var j = 0; j < favoriteItems.length; j++) {
                      if (favoriteItems[j].id === item.id) {
                        itemisFavorite = true;
                      }
                    }
                    return (
                      <MovieCard
                        key={item.id}
                        movieData={item}
                        isFavorite={itemisFavorite}
                        toggleFavorite={handleToggleFavorite}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="right-side-favorite-movies">
                <div className="section-header-row">
                  <span className="section-heading">Favorite Movies</span>
                  <span className="section-subtext">Derived from favorite state</span>
                </div>
                <FavoritesList favoriteList={favoriteItems} />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;