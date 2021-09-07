'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    Course.belongsToMany(models.Person, { 
      foreignKey: 'courseId', 
      otherKey: 'personId', 
      through: 'Enrollments'
    });

    Course.belongsTo(models.Campus, { foreignKey: 'campusId' });
    Course.belongsTo(models.Department, { foreignKey: 'departmentId' });
  };
  return Course;
};