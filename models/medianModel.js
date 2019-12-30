module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Median', {
        CityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bestHotel: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        highHotel: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        normalHotel: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        apart: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        hostel: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        highFood: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        normalFood: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cheapSnack: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        highSnack: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        normalSnack: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cheapFood: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};
