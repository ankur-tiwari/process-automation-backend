module.exports = (sequelize, DataTypes) => {
    const authorizedUsers = sequelize.define("authorizedUsers", {
        email : {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false,
        },
        role : DataTypes.STRING
       },{
        id : false,
        timestamps: false,
        tableName: 'authorized_users'
    });
    return authorizedUsers;
};
