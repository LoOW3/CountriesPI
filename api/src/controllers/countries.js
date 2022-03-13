const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountries = async function (req, res) {
    try {
      const countries = await Country.findAll({ include: Activity });
      res.status(200).json(countries);
    } catch (error) {
      
      console.log(error);
    }
  };
  const countryById = async function (req, res) {
    const { id } = req.params;
    try {
      const oneCountry = await Country.findByPk(id, { include: Activity });
      res.status(200).json(oneCountry);
    } catch (error) {
      console.log(error);
    }
  };
  

  module.exports = { getCountries, countryById };