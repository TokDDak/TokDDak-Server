module.exports = (sequelize, DataTypes) => {
    return sequelize.define('City', {
        continent : {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};