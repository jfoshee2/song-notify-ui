import { AppBar, Tabs, Tab } from '@material-ui/core';
import React, { useState } from 'react';
import SongTable from '../table/SongTable';

const Home = (): React.ReactElement => {

    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event: any, newValue: number) => {
        setCurrentTab(newValue);
    };

    return(
        <div>
            <AppBar position="static">
                <Tabs value={currentTab} onChange={handleTabChange}>
                    <Tab label="Songs" />
                    <Tab label="Stations" />
                    <Tab label="Daily Schedule" />
                </Tabs>
            </AppBar>
            {currentTab === 0 && <SongTable />}
            {currentTab === 1 && <div>Stations</div>}
            {currentTab === 2 && <div>DailySchedule</div>}
        </div>
    );
}

export default Home;