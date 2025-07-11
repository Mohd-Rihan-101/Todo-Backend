const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Todo = require('./models/todoSchema');

passport.use(new LocalStrategy (async (USERNAME, password, done)=>{
    try {
        const todo =await Todo.findOne({username : USERNAME});

        if(!todo){
            return done(null, false, {massage : "incorrect username"});
        };

        const ispasswordMatch = todo.password === password ? true : false;

        if(ispasswordMatch){
            return done(null, todo);
        }else{
            return done(null, false, {massage : "incorrect password"});
        }
    } catch (error) {
        return done(error)
    }
}));

module.exports = passport;