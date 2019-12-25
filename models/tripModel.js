module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Trip', {
        title: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        useCost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        /**
         * status가 1이면 여행 후보
         * status가 2이면 여행 중
         * status가 3이면 여행 종료
         */
        status: {
            type:DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};