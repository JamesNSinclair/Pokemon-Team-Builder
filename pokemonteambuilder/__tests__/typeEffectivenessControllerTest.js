const knex = require('../server/db.ts');
const mockKnex = require('mock-knex');
const {
  postTypeEffectiveness,
} = require('../server/controllers/typeEffectivenessController');

describe('postTypeEffectiveness', () => {
  let tracker;

  beforeEach(() => {
    tracker = mockKnex.getTracker();
    tracker.install();
  });

  afterEach(() => {
    tracker.uninstall();
  });

  test('should return the correct type effectiveness', async () => {
    const mockReq = {body: {name: 'Pikachu'}};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      sendStatus: jest.fn(),
    };

    tracker.on('query', (query, step) => {
      const responses = [
        [{type_1: 'electric', type_2: 'normal'}],
        [
          {type: 'normal'},
          {type: 'fire'},
          {type: 'water'},
          {type: 'electric'},
          {type: 'grass'},
          {type: 'ice'},
          {type: 'fighting'},
          {type: 'poison'},
          {type: 'ground'},
          {type: 'flying'},
          {type: 'psychic'},
          {type: 'bug'},
          {type: 'rock'},
          {type: 'ghost'},
          {type: 'dragon'},
          {type: 'dark'},
          {type: 'steel'},
          {type: 'fairy'},
        ],
        [
          {resistant_to: 'fighting'},
          {resistant_to: 'electric'},
          {resistant_to: 'steel'},
          {resistant_to: 'fire'},
          {resistant_to: 'water'},
          {resistant_to: 'ice'},
          {resistant_to: 'poison'},
          {resistant_to: 'ground'},
        ],
        [
          {weak_to: 'ground'},
          {weak_to: 'rock'},
          {weak_to: 'water'},
          {weak_to: 'electric'},
        ],
      ];
      step(responses.shift());
    });

    await postTypeEffectiveness(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      Normal: 1,
      Fire: 1,
      Water: 1,
      Electric: 0.5,
      Grass: 1,
      Ice: 1,
      Fighting: 1,
      Poison: 1,
      Ground: 2,
      Flying: 0.5,
      Psychic: 1,
      Bug: 1,
      Rock: 1,
      Ghost: 1,
      Dragon: 1,
      Dark: 1,
      Steel: 0.5,
      Fairy: 1,
    });
    expect(mockRes.sendStatus).not.toHaveBeenCalled();
  });

  test('should return an error if the requested pokemon does not exist', async () => {
    const mockReq = {body: {name: 'invalid-pokemon'}};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      sendStatus: jest.fn(),
    };
    tracker.on('query', (query, step) => {
      step([]);
    });

    await postTypeEffectiveness(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: 'Pokemon with name "invalid-pokemon" not found',
    });
    expect(mockRes.sendStatus).not.toHaveBeenCalled();
  });
});
