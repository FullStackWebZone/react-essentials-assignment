import React, { useState } from 'react';
import SearchBar from './components/MovieExplorer/SearchBar.jsx';
import MovieCard from './components/MovieExplorer/MovieCard.jsx';
import FavoritesList from './components/MovieExplorer/FavoritesList.jsx';
import ProfileHeader from './components/PortfolioCard/ProfileHeader.jsx';
import SearchResults from './components/MovieExplorer/SearchResults.jsx';
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


const profileDataCollection = [
  {
    name: "Soham Kumar",
    headline: "Product Designer & Frontend Engineer",
    bio: "I design and build calm, focused product experiences for fast-moving teams. Currently exploring Ai-assisted interfaces, design systems, and high-performaance UI engineering.",
    skills: ["UI", "React", "TypeScript", "Figma", "Prototyping", "Node", "Javascript"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  },
  {
    name: "Aman Sharma",
    headline: "Full Stack Web Developer",
    bio: "Passionate about working with scalable relational databases and designing clean web interfaces. Constantly exploring modern full-stack development methodologies.",
    skills: ["Next.js", "Express", "PostgreSQL", "Tailwind", "Git", "REST APIs"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    name: "Rohan Verma",
    headline: "Mobile UI Specialist & QA",
    bio: "Dedicated cross-platform specialist focusing heavily on pixel-perfect implementations, performance profiling, and comprehensive automated testing structures.",
    skills: ["React Native", "Flutter", "Firebase", "Jest", "UI Testing", "Agile"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    name: "Priya Nair",
    headline: "DevOps & Cloud Associate",
    bio: "Enthusiastic about configuration pipelines, automated cloud hosting networks, server protection architectures, and maintaining scalable containerization strategies.",
    skills: ["AWS", "Docker", "Linux", "CI/CD Systems", "Nginx", "Shell Scripting"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  }
];

function App() {
  const [currentTab, setCurrentTab] = useState("portfolio");
  const [portfoliolike, setportfoliolike] = useState(128);
  const [hasLikedPortfolio, setHasLikedPortfolio] = useState(false);
  const [portfolioDark, setportfolioDark] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);


  const [profileIndex, setProfileIndex] = useState(0);

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
    setFavoriteItems([]);
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


  function handleNextProfile() {
    if (profileIndex < profileDataCollection.length - 1) {
      setProfileIndex(profileIndex + 1);
    } else {
      setProfileIndex(0);
    }
  }

  function handlePrevProfile() {
    if (profileIndex > 0) {
      setProfileIndex(profileIndex - 1);
    } else {
      setProfileIndex(profileDataCollection.length - 1);
    }
  }

  const matches = myMovieDatabase.filter(function (m) {
    return m.title.toLowerCase().includes(searchText.toLowerCase());
  });

  // Extract the active profile structure depending on state index
  const activeProfile = profileDataCollection[profileIndex];

  return (
    <div className={`main-wrapper ${portfolioDark ? 'card-dark-mode' : ''}`}>

      <ProfileHeader onToggleTheme={() => setportfolioDark(!portfolioDark)} />

      <div className="main-container">

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
                  src={activeProfile.avatar}
                  alt="Avatar representation"
                  className="profile-display-img"
                />
                <h2 className="profile-display-userName">{activeProfile.name}</h2>
                <p className="profile-display-headline">{activeProfile.headline}</p>
              </div>

              <p className="profile-summary-text">
                {activeProfile.bio}
              </p>

              <SkillsList profileSkillsList={activeProfile.skills} />

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

                  <button className="mode-switch-btn" style={{ marginLeft: '12px' }} onClick={handlePrevProfile}>
                    <ChevronLeft size={14} />
                  </button>

                  <span className="bottom-pagination">{profileIndex + 1} / 4</span>

                  <button className="mode-switch-btn" onClick={handleNextProfile}>
                    <ChevronRight size={14} />
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

            <SearchResults totalResultNumber={matches.length} currentSearchedText={searchText} />

            <div className="layout-columns">
              <div className="left-side-matching-movies">
                <div className="section-header-row">
                  <span className="section-heading">Matching Movies</span>
                  <span className="section-subtext">Filtered from local movie data</span>
                </div>

                <div className="movies-vertical-listing">
                  {matches.length === 0 ? (
                    <p className="empty-movies-alert-text" style={{ padding: '20px', textAlign: 'center', color: '#64748b', fontWeight: '500' }}>
                      Movie not found
                    </p>
                  ) : (
                    matches.map(function (item) {
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
                    })
                  )}
                </div>
              </div>

              <div className="right-side-favorite-movies">
                <div className="section-header-row">
                  <span className="section-heading">Favorite Movies</span>
                  <span className="section-subtext">Derived from favorite state</span>
                </div>
                <FavoritesList favoriteList={favoriteItems} toggleFavorite={handleToggleFavorite} />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;