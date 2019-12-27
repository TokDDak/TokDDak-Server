module.exports = (sequelize, DataTypes) => {
    return sequelize.define('City', {
        continent : {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        /**
         * popular, recommend flag field로
         */
        popular: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
        },
        recommend: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
        },
        img: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};