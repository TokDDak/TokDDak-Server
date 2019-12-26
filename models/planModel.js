module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Plan', {
        day: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cost: { // 금액
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: { // 숙박, 식사 ... 6개
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        subCategory : {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};
