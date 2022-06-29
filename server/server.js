const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const accountRouter = require('./routes/account.router');
const allyApplicationRouter = require('./routes/allyApplication.router');
const commentRouter = require('./routes/gen-comment.router');
const requestedCallsRouter = require('./routes/requestedCalls.router');
const scheduledCallsRouter = require('./routes/scheduledCalls.router');
const claimedCallsRouter = require('./routes/claimedCalls.router')
const profileRouter = require('./routes/profile.router');
const AllyAppRouter = require('./routes/allyApp.router');
const callInProgress = require('./routes/callInProgress.router');
const report = require('./routes/report.router');
const callRatingRouter = require ('./routes/call-ratings.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/account', accountRouter);
app.use('/api/allyApplication', allyApplicationRouter);
app.use('/api/comment', commentRouter);
app.use('/api/requestedCalls', requestedCallsRouter);
app.use('/api/scheduledCalls', scheduledCallsRouter);
app.use('/api/claimedCalls', claimedCallsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/allyApp', AllyAppRouter);
app.use('/api/callInProgress', callInProgress);
app.use('/api/report', report);
app.use('/api/rate-call', callRatingRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
