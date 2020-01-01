module.exports = (sequelize, DataTypes) => {
    return sequelize.define('TripActivity', {
        name: { // 액티비티 이름
            type: DataTypes.INTEGER,
            allowNull : false,
        },
        cost : { 
            type: DataTypes.INTEGER,
            allowNull : false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};