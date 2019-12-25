module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        location: {
            type : DataTypes.STRING(100),
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};