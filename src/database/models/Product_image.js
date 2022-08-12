module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_image';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: dataTypes.STRING(255),
        allowNull: false
      },
      products_id: {
        type: dataTypes.INTEGER,
        allowNull: false
      }
};
let config = {
    tableName: 'products_images',
    timestamps: false
};
const Product_image = sequelize.define(alias, cols, config);

User.associate = function(models) {
  User.belongsTo(models.Product_image, {
  as: 'product_image',
  foreignKey: 'products_id'
});
}

return Product_image
}
