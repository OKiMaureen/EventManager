module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    centerId: { type: DataTypes.INTEGER, allowNull: false },
    eventname: { types: DataTypes.STRING, allowNull: false },
    eventType: { types: DataTypes.STRING, allowNull: false },
    eventDescription: { types: DataTypes.STRING, allowNull: false },
    location: { types: DataTypes.STRING, allowNull: false },
    localGovernment: { types: DataTypes.STRING, allowNull: false },
    eventDate: { types: DataTypes.STRING, allowNull: false },
    eventStartTime: { types: DataTypes.STRING, allowNull: false },
    eventEndTime: { types: DataTypes.STRING, allowNull: false },
    estimatedAttendees: { types: DataTypes.INTEGER, allowNull: false },
    centersAvailable: { types: DataTypes.STRING, allowNull: false },
  }, {});
  Event.associate = (models) => {
    // associations defined here
    Event.belongsTo(
      models.User,
      { foreignKey: 'userId', onDelete: 'CASCADE' }
    );
    Event.belongsTo(
      models.Center,
      { foreignKey: 'centerId', onDelete: 'CASCADE' }
    );
  };
  return Event;
};
