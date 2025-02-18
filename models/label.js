export default (database, DataTypes) => {
  const label = database.define(
    'label',
    {
      label_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      label_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return label;
};