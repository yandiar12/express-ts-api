import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

export default class Booking extends Model {
    public id?: number;
    public tripId!: number;
    public userId!: number;
    public passengerCount!: number;
    public totalCost!: number;
}

Booking.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tripId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    },
    passengerCount: {
        type: DataTypes.INTEGER
    },
    totalCost: {
        type: DataTypes.DOUBLE
    }
},
{
    sequelize: sequelize,
    tableName: 'booking',
    timestamps: false
});