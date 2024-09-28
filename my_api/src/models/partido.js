'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partido.init({
    fixture_id: DataTypes.INTEGER,
    fixture_referee: DataTypes.STRING,
    fixture_timezone: DataTypes.STRING,
    fixture_date: DataTypes.DATE,
    fixture_timestamp: DataTypes.INTEGER,
    fixture_status_long: DataTypes.STRING,
    fixture_status_short: DataTypes.STRING,
    fixture_status_elapsed: DataTypes.INTEGER,
    league_id: DataTypes.INTEGER,
    league_name: DataTypes.STRING,
    league_country: DataTypes.STRING,
    league_logo: DataTypes.STRING,
    league_flag: DataTypes.STRING,
    league_season: DataTypes.INTEGER,
    league_round: DataTypes.STRING,
    home_team_id: DataTypes.INTEGER,
    home_team_name: DataTypes.STRING,
    home_team_logo: DataTypes.STRING,
    home_team_winner: DataTypes.BOOLEAN,
    away_team_id: DataTypes.INTEGER,
    away_team_name: DataTypes.STRING,
    away_team_logo: DataTypes.STRING,
    away_team_winner: DataTypes.BOOLEAN,
    home_goals: DataTypes.INTEGER,
    away_goals: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partido',
  });
  return Partido;
};