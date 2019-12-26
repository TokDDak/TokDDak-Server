module.exports = (sequelize, DataTypes) => {
    return sequelize.define('TripHotel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        totalCost: {
            type: DataTypes.INTEGER,
            allowNull : false,
        },
        number : {
            type: DataTypes.INTEGER,
            allowNull : false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};