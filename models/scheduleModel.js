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
        category: { // 고급호텔, 최고급호텔, 간편식, 펍&바 등등...
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};

// id day cost category content tripId
// trip table에 총일수 필드 추가 : Error 방지