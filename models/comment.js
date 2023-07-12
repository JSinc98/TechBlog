const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'user_id',
                model: 'user',
            },  
        },

        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'post_id',
                model: 'post',  
            },
        },

        timestamp: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DATATYPES.NOW,
        },

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
    );
    
    module.exports = Comment;