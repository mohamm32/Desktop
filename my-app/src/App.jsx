import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import Destinations from './components/Destinations';
import Holidays from './components/Holidays';
import PopularStays from './components/PopularStays';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <RecentSearches />
      <Destinations />
      <Holidays />
      <PopularStays />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;