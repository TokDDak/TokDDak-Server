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
        },
        activityBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hotelBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        foodBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shoppingBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        snackBudget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        transportBudget: {
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
        }
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};