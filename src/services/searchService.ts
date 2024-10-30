const API_URL = 'http://localhost:5000/search';

export const searchSuggestions = async (query: string): Promise<string[]> => {
    const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`, {mode: 'cors'});
    return await response.json();
};