const Router = require("koa-router");
const { Partido } = require("../models"); // Solo importamos el modelo Partido
const { Op } = require('sequelize');

const router = new Router();

// Función para agregar fixtures al modelo Partido
async function addFixtures(fixturesData) {
    let fixtures = fixturesData.fixtures;

    for (const fixtureInfo of fixtures) {
        const { fixture, league, teams, goals } = fixtureInfo;
        const status = fixture.status;

        // Crear o encontrar un partido en la base de datos
        await Partido.findOrCreate({
            where: { fixture_id: fixture.id },
            defaults: {
                fixture_id: fixture.id,
                fixture_referee: fixture.referee,
                fixture_timezone: fixture.timezone,
                fixture_date: fixture.date,
                fixture_timestamp: fixture.timestamp,

                fixture_status_long: status.long,
                fixture_status_short: status.short,
                fixture_status_elapsed: status.elapsed,

                league_id: league.id,
                league_name: league.name,
                league_country: league.country,
                league_logo: league.logo,
                league_flag: league.flag,
                league_season: league.season,
                league_round: league.round,

                home_team_id: teams.home.id,
                home_team_name: teams.home.name,
                home_team_logo: teams.home.logo,
                home_team_winner: teams.home.winner,

                away_team_id: teams.away.id,
                away_team_name: teams.away.name,
                away_team_logo: teams.away.logo,
                away_team_winner: teams.away.winner,

                home_goals: goals.home,
                away_goals: goals.away
            }
        });
    }

    return;
}

// Función para obtener una lista de partidos con filtros opcionales
async function getFixtures(ctx) {
    const { page = 1, count = 25, home, visit, date } = ctx.query;

    const conditions = {};

    if (home) {
        conditions.home_team_id = home; 
    }
    if (visit) {
        conditions.away_team_id = visit; 
    }
    if (date) {
        const specifiedDate = new Date(date);
        conditions.fixture_date = {
            [Op.gte]: specifiedDate 
        };
    } else {
        conditions.fixture_date = {
            [Op.gte]: new Date()
        };
    }

    const fixtures = await Partido.findAll({
        where: conditions,
        limit: parseInt(count),
        offset: (parseInt(page) - 1) * parseInt(count)
    });

    ctx.body = fixtures;
}

// Función para obtener un solo partido por su `id`
async function getFixture(ctx) {
    const { id } = ctx.params;

    const fixture = await Partido.findOne({
        where: { fixture_id: id }
    });

    ctx.body = fixture;
}

// Rutas
router.post("/", async (ctx) => {
    const fixturesData = ctx.request.body;

    try {
        await addFixtures(fixturesData);
        ctx.status = 200;
        ctx.body = { message: 'Fixtures data inserted successfully' };
    } catch (error) {
        ctx.status = 500;
        ctx.body = { message: 'An error occurred', error: error.message };
        console.log('Error:', error);
    }
});

router.get("/", async (ctx) => getFixtures(ctx));
//router.get('pasajeros.list', '/', async (ctx) => {
//    try {
//      const pasajeros = await ctx.orm.Partido.findAll()
//      ctx.body = pasajeros
//      ctx.status = 200
//    } catch (error) {
//      ctx.body = error
//      ctx.status = 400
//    }
//  })

router.get("/:id", async (ctx) => getFixture(ctx));

module.exports = router;