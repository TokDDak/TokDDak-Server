module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Median', {
        hotel: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        food: { // 금액
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};
