module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
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
    tableName: 'categories',
    timestamps: false
};
const Category = sequelize.define(alias, cols, config)

return Category
}
