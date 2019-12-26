module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Schedule', {
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
        content : {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};

// id day cost category content tripId
// trip table에 총일수 필드 추가 : Error 방지