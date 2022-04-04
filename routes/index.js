const router = require('express').Router();
const { Location, Traveller, Trip} = require('../models');

router.get('/api/travellers', async (req, res) => {
  res.json({});
});

router.post('/api/travellers', async (req, res) => {
  res.json({});
});

router.get('/api/travellers/:id', async (req, res) => {
  res.json({});
});

router.delete('/api/travellers/:id', async (req, res) => {
  res.json({});
});

router.get('/api/travellers/locations', async (req, res) => {
  res.json({});
});

router.post('/api/travellers/locations', async (req, res) => {
  res.json({});
});

router.get('/api/locations/:id', async (req, res) => {
  const locationData = await Location.findByPk(
    req.params.id,
    {
      include: [{ 
        model: Traveller, 
        through: Trip
      }]
    }
  );
  const location = JSON.parse(JSON.stringify(locationData));

  location.travellers.forEach(traveller => {
      delete traveller.trip;
  });
 
  res.json(location);
});

// TRIPS
router.get('/api/trips', async (req, res) => {
  const tripData = await Trip.findAll({});
  res.json(tripData);
});

router.post('/api/trips', async (req, res) => {
  const tripData = await Trip.create(req.body);
  res.json(tripData);
});

router.delete('/api/trips/:id', async (req, res) => {
  const tripData = await Trip.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(tripData);
});

module.exports = router;
