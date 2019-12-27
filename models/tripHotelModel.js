module.exports = (sequelize, DataTypes) => {
    return sequelize.define('TripHotel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        totalCost: { // 총 경비
            type: DataTypes.INTEGER,
            allowNull : false,
        },
        number : { // 횟수
            type: DataTypes.INTEGER,
            allowNull : false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};