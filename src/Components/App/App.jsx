/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React from 'react';
import './app.scss';

import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import TeamCalendarPageContainer from '../Pages/TeamCalendar';
import TeamListContainer from '../Pages/TeamList';
import LeagueListContainer from '../Pages/LeagueList';
import LeagueCalendarContainer from '../Pages/LeagueCalendar';
import Home from '../Pages/Home';
import LeagueTeamsListContainer from '../Pages/LeagueTeamsList/LeagueTeamsListContainer';

function App() {
  return (
    <Switch>
      <>
        <Navbar />

        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/league-list" component={LeagueListContainer} />
          <Route exact path="/team-list" component={TeamListContainer} />
          <Route
            exact
            path="/league-calendar/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <LeagueCalendarContainer leagueId={id} />;
            }}
          />
          <Route
            exact
            path="/team-calendar/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <TeamCalendarPageContainer teamId={id} />;
            }}
          />
          <Route
            path="/league-calendar/:id/teams"
            render={({ match }) => {
              const { id } = match.params;
              return <LeagueTeamsListContainer leagueId={id} />;
            }}
          />
        </Container>
      </>
    </Switch>
  );
}

export default App;
