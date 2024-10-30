import React, { useState, useRef } from 'react';
import styles from './Typeahead.module.css';
import {searchSuggestions} from "../../services/searchService";

const Typeahead: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setShowSuggestions(true);
        const fetchedSuggestions = await searchSuggestions(newQuery);
        setSuggestions(fetchedSuggestions);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className={styles.typeahead}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className={styles.input}
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className={styles.suggestions}>
                    {suggestions.map((suggestion) => (
                        <li
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={styles.suggestionItem}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Typeahead;