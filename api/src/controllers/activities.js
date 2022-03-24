const axios = require("axios");
const { Country, Activity } = require("../db");

const addActivity = async function (req, res, next) {
  const { id, name, difficulty, duration, season, addCountries } = req.body;
  try {
    const existingActivity = await Activity.findOne({
      where: {
        name: name,
      },
    });
    const countriesRelation = await Country.findAll({
      where: {
        name: addCountries,
      },
    });
    if (!existingActivity) {
      const activity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
      });
      const relation = await activity.addCountry(countriesRelation);
      res.status(200).send(relation);
    } else {
      const addingCountry = await existingActivity.addCountry(
        countriesRelation
      );
      res.send(addingCountry);
    }
  } catch (error) {
    console.log(error);
  }
};
const getActivities = async function (req, res) {
  try {
    const activities = await Activity.findAll({ include: Country });
    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
  }
};



module.exports = { addActivity, getActivities };
