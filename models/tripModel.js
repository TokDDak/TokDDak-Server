const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Trip', {
        title: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        start: {
            type: DataTypes.DATEONLY,
            get: function () {
                return moment.utc(this.getDataValue('type')).format('YYYY.MM.DD');
            },
            allowNull: false,
        },
        end : {
            type: DataTypes.DATEONLY,
            get: function () {
                return moment.utc(this.getDataValue('type')).format('YYYY.MM.DD');
            },
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
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};