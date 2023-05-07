const knex = require('../db.ts');

exports.postTypeEffectiveness = async (req, res) => {
  try {
    const {name} = req.body;
    const pokemon = await knex('pokemon')
      .where({name})
      .select('type_1', 'type_2');
    if (!pokemon.length) {
      return res
        .status(404)
        .json({error: `Pokemon with name "${name}" not found`});
    }

    const types = Object.values(pokemon[0]);
    const allTypes = await knex('pokemon_types').select('type');

    const fetchTypeEffectiveness = async type => {
      const effectiveness = {};
      const strongTypes = await knex('type_resistance')
        .where('type', type)
        .select('resistant_to');
      const weakTypes = await knex('type_weakness')
        .where('type', type)
        .select('weak_to');

      allTypes.forEach(typeObj => {
        const type = typeObj.type;
        let value = 1;

        if (
          strongTypes.some(strongTypeObj => strongTypeObj.resistant_to === type)
        ) {
          value /= 2;
        }

        if (weakTypes.some(weakTypeObj => weakTypeObj.weak_to === type)) {
          value *= 2;
        }
        effectiveness[type] = value;
      });

      return effectiveness;
    };

    const effectivenessList = await Promise.all(
      types.map(fetchTypeEffectiveness),
    );

    const result = {};
    allTypes.forEach(typeObj => {
      const type = typeObj.type;
      result[type] = effectivenessList.reduce(
        (acc, effectiveness) => acc * effectiveness[type],
        1,
      );
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
};
