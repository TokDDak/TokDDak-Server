module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Timeline', {
        day: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cost: { // 금액
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: { // 카테고리 int로 준대 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content : {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};
/* 지출내역 */
// id day cost category content tripId
// trip table에 총일수 필드 추가 : Error 방지