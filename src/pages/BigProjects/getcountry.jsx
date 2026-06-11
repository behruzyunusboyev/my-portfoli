import { useState, useEffect } from "react";
import "../styles/getcountry.css";

function GetCountry() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [borderFilter, setBorderFilter] = useState("");

  const getCountryData = async () => {
    try {
      setLoading(true);
      // restcountries.com v3.1 deprecated bo'lgani uchun
      // mledoze/countries GitHub mirror ishlatiladi — bir xil struktura, bepul, barqaror
      const res = await fetch(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
      );
      if (!res.ok) throw new Error(`Server xatosi: ${res.status}`);
      const raw = await res.json();

      // mledoze formatini avvalgi restcountries v3.1 formatiga moslashtirish
      const data = raw.map((c) => ({
        name:       { common: c.name.common },
        capital:    c.capital ?? [],
        continents: c.region ? [c.region] : [],
        borders:    c.borders ?? [],
        population: c.population ?? 0,
        region:     c.region ?? "",
        cca2:       c.cca2?.toLowerCase() ?? "",
        flags:      {
          svg: c.cca2
            ? `https://flagcdn.com/${c.cca2.toLowerCase()}.svg`
            : "",
        },
      }));

      const sorted = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sorted);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountryData();
  }, []);

  if (loading) return <div className="country-status">🌍 Yuklanmoqda...</div>;
  if (error)   return <div className="country-status">❌ Xato: {error}</div>;

  // Filterlar
  const filtered = countries.filter((item) => {
    const matchRegion  = region === "" || item.continents.includes(region);
    const matchSearch  = search === "" || item.name.common.toLowerCase().includes(search.toLowerCase());
    const matchBorder  = borderFilter === "" || (item.borders && item.borders.includes(borderFilter));
    return matchRegion && matchSearch && matchBorder;
  });

  return (
    <div className="country-main">

      {/* Controls */}
      <div className="country-controls">
        <h1>🌍 Mamlakatlar</h1>

        <input
          type="text"
          className="country-search"
          placeholder="Mamlakat izlash..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="country-select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Barcha qit'alar</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>

        {(search || region || borderFilter) && (
          <button
            className="country-clear-btn"
            onClick={() => { setSearch(""); setRegion(""); setBorderFilter(""); }}
          >
            Filterni tozalash ✕
          </button>
        )}
      </div>

      {/* Border filter badge */}
      {borderFilter && (
        <div className="country-border-filter">
          <span className="country-border-badge">
            Chegara: {borderFilter}
            <button onClick={() => setBorderFilter("")}>✕</button>
          </span>
        </div>
      )}

      {/* Natija soni */}
      <div className="country-count">
        {filtered.length} ta mamlakat topildi
      </div>

      {/* Grid */}
      <div className="country-grid">
        {filtered.map((item) => (
          <div
            key={item.name.common}
            className="country-card"
            onClick={() =>
              setBorderFilter(
                item.borders && item.borders.length > 0 ? item.borders[0] : ""
              )
            }
            title={item.borders?.length ? `${item.borders[0]} bilan chegaradosh mamlakatlarni ko'rish` : "Chegara yo'q"}
          >
            <img
              src={item.flags.svg}
              alt={item.name.common}
              className="country-flag"
            />
            <div className="country-card-body">
              <h2>{item.name.common}</h2>
              <p><strong>Poytaxt:</strong> {item.capital?.[0] ?? "N/A"}</p>
              <p><strong>Qit'a:</strong> {item.continents?.[0] ?? "N/A"}</p>
              <p><strong>Chegara:</strong> {item.borders?.length ? item.borders.join(", ") : "Yo'q"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetCountry;
