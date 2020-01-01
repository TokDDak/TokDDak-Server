module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Median', {
        cityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        urlHotel: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        urlFood: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};
