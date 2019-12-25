module.exports = (sequelize, DataTypes) => {
    return sequelize.define('City', {
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};