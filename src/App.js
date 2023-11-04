import React, { useEffect } from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar/Navigationbar';
import DashView from './components/DashBoard/DashBoardView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Retrieving/Retrieving';

const App = () => {
  // Initialize the Redux dispatcher
  const dispatch = useDispatch();

  // Get the 'allTickets' state from Redux store
  const { allTickets } = useSelector(state => state.DataReducer);
   
  // Fetch data when the component mounts
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  // Render either the content or loading component based on 'allTickets'
  return (
    allTickets ? (
      <div style={{ paddingTop: "10px" }}>
        <Navigationbar />
        <hr style={{ marginTop: "10px" }} />
        <DashView />
      </div>
    ) : (
      <Loading />
    )
  );
};

export default App;
