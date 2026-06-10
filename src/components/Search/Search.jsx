import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { allProducts } from "../../data/allProducts";
import "./Search.css";

const HINTS = [
  "Mesa de billar",
  "Futbolito de lujo",
  "Ping pong",
  "Carambola",
  "Hockey de aire",
  "Accesorios",
];

export const Search = ({ onClose }) => {
  const [query, setQuery]     = useState("");
  const [results, setResults] = useState([]);
  const inputRef              = useRef(null);
  const navigate              = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setResults([]); return; }

    const filtered = allProducts.filter((p) => {
      const haystack = [
        p.title,
        p.description,
        p.category,
        ...(p.keywords || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });

    setResults(filtered.slice(0, 12));
  }, [query]);

  const handleSelect = useCallback(
    (product) => {
      navigate(product.route, { state: { openItem: product } });
      onClose();
    },
    [navigate, onClose]
  );

  const getThumb = (p) =>
    p.images ? p.images[0].image : p.image;

  return (
    <div
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Buscador de productos"
    >
      {/* CLOSE */}
      <button className="search-close" onClick={onClose} aria-label="Cerrar buscador">
        <FiX />
      </button>

      <div className="search-inner">
        {/* LABEL */}
        <p className="search-eyebrow">Billarte — Buscador</p>

        {/* INPUT */}
        <div className="search-input-wrapper">
          <FiSearch className="search-input-icon" />
          <input
            ref={inputRef}
            type="search"
            className="search-input"
            placeholder="Buscar mesas, accesorios…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        {/* HINTS */}
        {!query && (
          <div className="search-hints">
            {HINTS.map((hint) => (
              <button
                key={hint}
                className="search-hint"
                onClick={() => setQuery(hint)}
              >
                {hint}
              </button>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {query && results.length === 0 && (
          <p className="search-empty">
            Sin resultados para{" "}
            <span className="search-empty-term">"{query}"</span>
          </p>
        )}

        {/* RESULTS */}
        {results.length > 0 && (
          <>
            <p className="search-count">
              {results.length} resultado{results.length !== 1 ? "s" : ""}
            </p>
            <div className="search-results">
              {results.map((product) => (
                <button
                  key={`${product.category}-${product.id}`}
                  className="search-result-card"
                  onClick={() => handleSelect(product)}
                >
                  <div className="result-img-wrapper">
                    <img
                      src={getThumb(product)}
                      alt={product.title}
                      className="result-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="result-info">
                    <span className="result-category">{product.category}</span>
                    <h4 className="result-title">{product.title}</h4>
                    <p className="result-desc">{product.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
