const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type:Sequelize.STRING(500),
        allowNull:false
    },
    content:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    status:{
        type: Sequelize.ENUM('open', 'closed'),
    }
})

const User = db.define('User', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING(500),
        allowNull:false,
        unique:true,
        validate:{
            isEmail: true
        }
        
    }
})


AsyncFn = async() =>{


}

AsyncFn()


module.exports={
    db,
    Page,
    User
}