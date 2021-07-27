/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../Header/Header';
import LeagueCalendarPage from '../Pages/LeagueCalendar';
import LeagueListPage from '../Pages/LeagueList';
import TeamCalendarPage from '../Pages/TeamCalendar';
import TeamListPage from '../Pages/TeamList';

function App() {
  return (
    <Switch>
      <>
        <Header />

        <Container>
          <Route exact path="/league-list" component={LeagueListPage} />
          <Route exact path="/team-list" component={TeamListPage} />
          <Route exact path="/league-calendar" component={LeagueCalendarPage} />
          <Route exact path="/team-calendar" component={TeamCalendarPage} />
        </Container>
      </>
    </Switch>
  );
}

export default App;
