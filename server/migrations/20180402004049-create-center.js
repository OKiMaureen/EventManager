module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Centers', {
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

    centerImage: {
      type: Sequelize.STRING,
      allowNull: false
    },
    centerName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    centerLocalGovernment: {
      type: Sequelize.STRING,
      allowNull: false
    },
    centerAddress: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    centerCapacity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    centerCost: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    centerFacilities: {
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
  down: queryInterface => queryInterface.dropTable('Centers')
};
