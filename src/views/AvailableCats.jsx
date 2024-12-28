import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Bengal' },
  { name: 'Pumpkin', age: '3', breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Handle search action
  const handleSearch = () => {
    let filtered = cats;

    if (searchText) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    setFilteredCats(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [selectedBreed]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4 d-flex justify-content-center gap-3">
        {/* Filter by Breed */}
        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ maxWidth: '200px' }}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Siamese">Siamese</option>
        </select>

        {/* Search by Name */}
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ maxWidth: '200px' }}
          />
          <button className="btn btn-primary ms-2" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

     
      <hr style={{ border: '1px solid black', width: '100%' }} />

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-age">Age: {cat.age}</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
