module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
      description:{
        type: dataTypes.TEXT,
        allowNull: false
      },
      price:{
        type: dataTypes.DECIMAL(12,2),
        allowNull: false
      },
      materials_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    categories_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    }  
};
let config = {
    tableName: 'products',
    timestamps: false
};
const Product = sequelize.define(alias, cols, config);

Product.associate = function(models) {
  Product.belongsTo(models.Material, {
  as: 'material',
  foreignKey: 'materials_id'
});

Product.belongsTo(models.Category, {
  as: 'category',
  foreignKey: 'categories_id'
});

Product.hasMany(models.Product_image, {
  as: 'product_image',
  foreignKey: 'products_id'
});

}

return Product
}
