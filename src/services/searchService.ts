const API_URL = 'http://localhost:5000/search';

export const searchSuggestions = async (query: string): Promise<string[]> => {
    try {
        const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`, {mode: 'cors'});
        if (!response.ok) {
            return []
            // throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        return []
    }
};