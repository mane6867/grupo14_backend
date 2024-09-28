'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Partidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fixture_id: {
        type: Sequelize.INTEGER
      },
      fixture_referee: {
        type: Sequelize.STRING
      },
      fixture_timezone: {
        type: Sequelize.STRING
      },
      fixture_date: {
        type: Sequelize.DATE
      },
      fixture_timestamp: {
        type: Sequelize.INTEGER
      },
      fixture_status_long: {
        type: Sequelize.STRING
      },
      fixture_status_short: {
        type: Sequelize.STRING
      },
      fixture_status_elapsed: {
        type: Sequelize.INTEGER
      },
      league_id: {
        type: Sequelize.INTEGER
      },
      league_name: {
        type: Sequelize.STRING
      },
      league_country: {
        type: Sequelize.STRING
      },
      league_logo: {
        type: Sequelize.STRING
      },
      league_flag: {
        type: Sequelize.STRING
      },
      league_season: {
        type: Sequelize.INTEGER
      },
      league_round: {
        type: Sequelize.STRING
      },
      home_team_id: {
        type: Sequelize.INTEGER
      },
      home_team_name: {
        type: Sequelize.STRING
      },
      home_team_logo: {
        type: Sequelize.STRING
      },
      home_team_winner: {
        type: Sequelize.BOOLEAN
      },
      away_team_id: {
        type: Sequelize.INTEGER
      },
      away_team_name: {
        type: Sequelize.STRING
      },
      away_team_logo: {
        type: Sequelize.STRING
      },
      away_team_winner: {
        type: Sequelize.BOOLEAN
      },
      home_goals: {
        type: Sequelize.INTEGER
      },
      away_goals: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Partidos');
  }
};