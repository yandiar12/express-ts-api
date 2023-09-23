import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export default class Role extends Model {
    public id?: number;
    public name!: string;
}

Role.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255)
    }
},
{
    sequelize: sequelize,
    tableName: 'roles',
    timestamps: false
});