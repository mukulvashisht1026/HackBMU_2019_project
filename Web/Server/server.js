const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const localStrategy = passportLocal.Strategy;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static('public'))

app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/success',
        failureRedirect: '/'
    }
));

passport.use(new localStrategy(
    function (username, password, done) {
        console.log('authenticating ' + username + ' ' + password)
        console.log(usersDB)
        for (let i = 0; i < usersDB.length; i++) {
            if (usersDB[i].user == username && usersDB[i].pass == password) {
                console.log('succesfull')
                done(null, username)
                return;
            }
        }
        done(null, false)
        // if (username != Dbusername) {
        //     done(null, false)
        // }
        // if (password != Dbpassword) {
        //     done(null, false)
        // }
        // done(null, username)
    }
));

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

app.get('/success', function (req, res, next) {
    if (req.user)
        res.send('logged in')
    else
        res.redirect('/')
})

app.get('/logout', function (req, res) {
    req.logOut()
    res.redirect('/')
})

app.post('/signup', function (req, res) {
    console.log(req.body)
    usersDB.push({ user: req.body.username, pass: req.body.password })
})

app.listen(3000, function () {
    console.log('server started')
})