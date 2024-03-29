module.exports = (sequelize, dataTypes) => {
    let alias = 'Material';
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
    tableName: 'materials',
    timestamps: false
};
const Material = sequelize.define(alias, cols, config)

Material.associate = function(models) {
  Material.hasMany(models.Product, {
    as: 'product',
    foreignKey: 'materials_id'
});
}

return Material
}
