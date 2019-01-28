module.exports = (sequelize, DataTypes) => {
    const login = sequelize.define("login", {
        users : {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
        },
        password: DataTypes.STRING,
       },
       {
        id : false,
        timestamps: false,
        tableName: 'login_auth'
    });
    return login;
};
