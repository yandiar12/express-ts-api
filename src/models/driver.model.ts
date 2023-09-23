import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export default class Driver extends Model {
    public id?: number;
    public driverName!: string;
    public driverLicenseNumber!: string;
    public phoneNumber!: string;
}

Driver.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    driverName: {
        type: DataTypes.STRING(255)
    },
    driverLicenseNumber: {
        type: DataTypes.STRING(100)
    },
    phoneNumber: {
        type: DataTypes.STRING(50),
    }
}, {
    sequelize,
    tableName: 'drivers',
    timestamps: true
});