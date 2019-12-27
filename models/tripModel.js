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
        start: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        end : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        useCost : {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        activityBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        hotelBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        foodBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        shoppingBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        snackBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        transportBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        totalDay: {
            type: DataTypes.INTEGER,
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
        },
        img: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};