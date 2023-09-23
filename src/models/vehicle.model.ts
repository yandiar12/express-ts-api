import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export default class Vehicle extends Model {
    public id?: number;
    public vehicleName!: string;
    public licensePlate!: string;
    public capacity!: number;
}

Vehicle.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    vehicleName: {
        type: DataTypes.STRING(255)
    },
    licensePlate: {
        type: DataTypes.STRING(100)
    },
    capacity: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    tableName: 'vehicles',
    timestamps: true
});