 -- Give me all the information for all of the artists
SELECT * FROM artists;

-- Give me all the information for any artists with a name of Black Sabbath
SELECT * FROM artists WHERE name = 'Black Sabbath';
-- SELECT * FROM artists WHERE name like 'Black S%';

-- Create a new table called fan_clubs that contains fan_clubs for artists
CREATE TABLE fan_clubs (
  id INTEGER PRIMARY KEY,
  name TEXT,
  artist_id INTEGER
);

-- Delete an existing table
DROP TABLE fan_clubs;

-- Create a new fan_club
INSERT INTO fan_clubs (name, artist_id) VALUES ("The AudioSlaves", 8);

-- Change the name of Black Sabbath to Blick Sibbith
UPDATE artists SET name = 'Blick Sibbith' WHERE name = 'Black Sabbath';

-- Delete Blick Sibbith
DELETE FROM artists WHERE name = 'Blick Sibbith';

-- Bring back the name of every fan_club and the name of the artist that each fan_club belongs to
SELECT fan_clubs.name, artists.name FROM fan_clubs
INNER JOIN artists ON fan_clubs.artist_id = artists.id;
