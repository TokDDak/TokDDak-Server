module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Transport', {
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
        img: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};