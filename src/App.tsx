import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryModal from './components/CategoryModal';
import QuoteForm from './components/QuoteForm';
import { categories, type Category } from './data/categories'; // Import categories

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (categoryId: string) => {
    console.log('Selected category ID:', categoryId); // Debug
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) {
      console.error('Category not found for ID:', categoryId);
      return;
    }
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
      
      <main className="flex-1 pt-24">
        {currentPage === 'home' ? (
          <Home 
            onNavigate={handleNavigate}
            onCategorySelect={handleCategorySelect}
            onQuoteClick={() => setShowQuoteForm(true)}
            onCallNow={() => window.location.href = 'tel:+639189333391'}
          />
        ) : (
          <Categories 
            onCategorySelect={handleCategorySelect}
            onQuoteClick={() => setShowQuoteForm(true)}
          />
        )}
      </main>
      
      <Footer />
      
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
          category={selectedCategory ? selectedCategory.title : undefined} // Fix prop to match QuoteFormProps
          isOpen={showQuoteForm}
          onClose={handleCloseQuoteForm}
        />
      )}
    </div>
  );
};

export default App;