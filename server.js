const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Example Pokémon data
const pokemons = [
    { id: 1, name: 'Bulbasaur', type: 'Grass', abilities: ['Overgrow'], baseStats: { hp: 45, attack: 49, defense: 49, speed: 45 } },
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
