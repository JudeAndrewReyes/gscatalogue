import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryModal from './components/CategoryModal';
import QuoteForm from './components/QuoteForm';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  const handleCloseQuoteForm = () => {
    setShowQuoteForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onQuoteClick={() => setShowQuoteForm(true)}
      />
      
      <main className="flex-1">
        {currentPage === 'home' ? (
          <Home 
            onNavigate={handleNavigate}
            onCategorySelect={handleCategorySelect}
            onQuoteClick={() => setShowQuoteForm(true)}
          />
        ) : (
          <Categories 
            onCategorySelect={handleCategorySelect}
            onQuoteClick={() => setShowQuoteForm(true)}
          />
        )}
      </main>
      
      <Footer />
      
      {/* Modals */}
      {selectedCategory && (
        <CategoryModal 
          category={selectedCategory}
          onClose={handleCloseModal}
          onQuoteClick={() => {
            setSelectedCategory(null);
            setShowQuoteForm(true);
          }}
        />
      )}
      
      {showQuoteForm && (
        <QuoteForm 
          selectedCategory={selectedCategory}
          onClose={handleCloseQuoteForm}
        />
      )}
    </div>
  );
};

export default App;