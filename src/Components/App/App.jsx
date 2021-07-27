/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React from 'react';
import './app.scss';

import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import LeagueCalendarPage from '../Pages/LeagueCalendar';
import LeagueListPage from '../Pages/LeagueList';
import TeamCalendarPage from '../Pages/TeamCalendar';
import TeamListPageContainer from '../Pages/TeamList';

function App() {
  return (
    <Switch>
      <>
        <Navbar />

        <Container>
          <Route exact path="/league-list" component={LeagueListPage} />
          <Route exact path="/team-list" component={TeamListPageContainer} />
          <Route exact path="/league-calendar" component={LeagueCalendarPage} />
          <Route exact path="/team-calendar" component={TeamCalendarPage} />
          <Route
            path="/league-calendar/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <LeagueCalendarPage leagueId={id} />;
            }}
          />
          <Route
            path="/team-calendar/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <TeamCalendarPage teamId={id} />;
            }}
          />
        </Container>
      </>
    </Switch>
  );
}

export default App;
