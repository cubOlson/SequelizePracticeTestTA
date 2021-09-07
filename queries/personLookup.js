const { Person, Course  } = require('../models');

async function lookupPersonAndCourses(personId) {
  // Find person and associated courses by `personId`
  const person = await Person.findByPk(personId, { include: Course });
  return person;
};

async function lookupPersonByLastName(lastName) {
  // Find people by `lastName`
  const person = await Person.findAll({where : { lastName: lastName }});
  return person;
};

async function lookupCoursesByPersonEmail(email) {
  // Find person by `email` and return associated courses
  const courses = await Person.findOne({ where: { email: email }, include: Course });
  return courses.Courses;
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
