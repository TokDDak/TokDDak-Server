module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Transportation', {
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
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};