module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Hotel', {
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        grade: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};