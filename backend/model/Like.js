const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Blog = require("./Blog");

const Like = sequelize.define("Like", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    blogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Blog,
            key: "id"
        }
    },
    like: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = Like;