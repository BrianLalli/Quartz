const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Comment extends Model { }

Comment.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'project',
                key: 'id',
            },
        },
        comment_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;
