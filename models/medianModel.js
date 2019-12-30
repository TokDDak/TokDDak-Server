module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Median', {
        cityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(30),
            allowNull:false,
        },
        hotel: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        food: { // 금액
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};
