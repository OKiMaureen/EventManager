module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Centers',
        key: 'id',
        as: 'centerId'
      }
    },
    eventname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventDescription: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    localGovernment: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventDate: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventStartTime: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventEndTime: {
      type: Sequelize.STRING,
      allowNull: false
    },
    estimatedAttendees: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    centersAvailable: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Events')
};
