module.exports = (sequelize, DataTypes) => {
    const googleUsers = sequelize.define("googleUsers", {
        email : {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
        }
       },
       {
        id : false,
        timestamps: false,
        tableName: 'google_login_users'
    });
    return googleUsers;
};
