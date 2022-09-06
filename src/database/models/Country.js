module.exports = (sequelize, dataTypes) => {
    let alias = 'Country';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name:{
            type: dataTypes.STRING(255),
            allowNull: false
          }
};
let config = {
    tableName: 'countries',
    timestamps: false
};
const Country = sequelize.define(alias, cols, config)

Country.associate = function(models) {
  Country.hasMany(models.User, {
    as: 'user',
  foreignKey: 'countries_id'
});
}

return Country
}
