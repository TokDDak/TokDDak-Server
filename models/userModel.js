
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User',{
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        nickname:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        salt:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};