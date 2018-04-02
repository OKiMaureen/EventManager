module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    centerImage: DataTypes.STRING,
    centerName: DataTypes.STRING,
    centerLocalGovernment: DataTypes.STRING,
    centerAddress: DataTypes.TEXT,
    centerCapacity: DataTypes.INTEGER,
    centerCost: DataTypes.INTEGER,
    centerFacilities: DataTypes.STRING
  }, {});
  Center.associate = (models) => {
    // associations can be defined here
    Center.belongsTo(
      models.User,
      { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
    );
    Center.hasMany(
      models.Events,
      { foreignKey: 'centerId', onDelete: 'CASCADE', hooks: true }
    );
  };
  return Center;
};
