import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Vehicle from './vehicle.model';

export default class Trip extends Model {
    public id?: number;
    public origin!: string;
    public destination!: string;
    public departureTime!: string;
    public departureDate!: Date;
    public cost!: number;
    public vehicleId!: number;
    public userId!: number;
}

Trip.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    origin: {
        type: DataTypes.STRING(255)
    },
    destination: {
        type: DataTypes.STRING(255)
    },
    departureTime: {
        type: DataTypes.STRING(20),
    },
    departureDate: {
        type: DataTypes.DATE,
    },
    vehicleId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    tableName: 'trips',
    timestamps: true
});

Trip.belongsTo(Vehicle, { foreignKey: 'vehicleId' });