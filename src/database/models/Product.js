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

User.associate = function(models) {
  User.belongsTo(models.Material, {
  as: 'material',
  foreignKey: 'materials_id'
});

  User.belongsTo(models.Category, {
  as: 'category',
  foreignKey: 'categories_id'
});
}

return Product
}
