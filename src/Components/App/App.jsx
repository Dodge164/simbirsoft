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
            path="/league-calendar/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <LeagueCalendarContainer leagueId={id} />;
            }}
          />
          <Route
            path="/team-calendar/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <TeamCalendarPageContainer teamId={id} />;
            }}
          />
        </Container>
      </>
    </Switch>
  );
}

export default App;
