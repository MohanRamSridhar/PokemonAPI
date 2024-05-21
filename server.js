const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Example Pokémon data
const pokemons = [
    { id: 1, name: 'Bulbasaur', type: ['Grass'], abilities: ['Overgrow'], baseStats: { hp: 45, attack: 45, defense: 45, speed: 45 }, weakness: ['Fire','Ice','Flying','Psychic']},
    { id: 2, name: 'Ivysaur', type: ['Grass', 'Posion'], abilities: ['Overgrow'], baseStats: { hp: 60, attack: 60, defense: 60, speed: 60 }, weakness: ['Fire','Ice','Flying','Psychic']},
    //refer Pokedex website for pokemon information https://www.pokemon.com/us/pokedex
    // Add more Pokémon data here...
];

// Use CORS middleware
app.use(cors());

// Get Pokémon by ID
app.get('/api/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(p => p.id === id);
    if (!pokemon) {
        return res.status(404).json({ error: 'Pokémon not found' });
    }
    res.json(pokemon);
});

// Get Pokémon by Name
app.get('/api/pokemon/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const pokemon = pokemons.find(p => p.name.toLowerCase() === name);
    if (!pokemon) {
        return res.status(404).json({ error: 'Pokémon not found' });
    }
    res.json(pokemon);
});

// List Pokémon
app.get('/api/pokemon', (req, res) => {
    // Pagination logic can be added here
    res.json(pokemons);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
