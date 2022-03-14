const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountries = async function (req, res) {
    const { name } = req.query;

    if(!name){
        try {
        const countries = await Country.findAll({ include: Activity });
        res.status(200).json(countries);
        } catch (error) {
        
        console.log(error);
        }
    }else{
        try {
            if (!name) {
                res.send("No se ingreso ningún nombre");
              } 
            const nameCountry = await Country.findAll({
              where: { name: { [Op.iLike]: `%${name}%` } },
              include: Activity,
            });
            if (nameCountry.length === 0) {
              res
                .status(404)
                .send({ error: `No se encuentra ningún pais con el nombre ${name}` });
            }
            res.status(200).send(nameCountry);
          }
         catch (e) {
          console.log("Error in countryByName");
          console.log(e);
        } 
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
/*   const countryByName = async function (req, res) {
    const { name } = req.query;

    
    try {
        if (!name) {
            res.send("No se ingreso ningún nombre");
          } 
        const nameCountry = await Country.findAll({
          where: { name: { [Op.iLike]: `%${name}%` } },
          include: Activity,
        });
        if (nameCountry.length === 0) {
          res
            .status(404)
            .send({ error: `No se encuentra ningún pais con el nombre ${name}` });
        }
        res.status(200).send(nameCountry);
      }
     catch (e) {
      console.log("Error in countryByName");
      console.log(e);
    }
  }; */
  
  

  module.exports = { getCountries, countryById };