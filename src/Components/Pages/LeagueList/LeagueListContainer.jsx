// import React, { useState, useEffect } from 'react';
// import { getLeagueList } from '../../../Api/http';
// import LeagueListPage from './LeagueListPage';

// export default function LeagueListPageContainer() {
//   // const history = useHistory();
//   const [leagueListPage, setLeagueListPage] = useState([]);
//   useEffect(async () => {
//     const leagueList = await getLeagueList();
//     setLeagueListPage(leagueList.competitions);
//   }, []);
//   return <LeagueListPage competitions={leagueListPage} />;
// }
