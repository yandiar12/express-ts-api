import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Role from '../models/role.model';

export default class User extends Model {
    public id?: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public phoneNumber!: string;
    public address?: string;
    public noidentity?: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(100),
    },
    password: {
        type: DataTypes.STRING(100),
    },
    phoneNumber: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    noidentity: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true
});

User.belongsToMany(Role, { through: 'UserRole' });
Role.belongsToMany(User, { through: 'UserRole' });