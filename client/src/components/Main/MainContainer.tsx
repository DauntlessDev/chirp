import React from 'react'
import SearchContainer from '../Search/SearchContainer'
import SidebarContainer from '../Sidebar/SidebarContainer'
import TimeLineContainer from '../Timeline/TimeLineContainer'
import * as Main from './mainStyles'

export default function MainContainer() {
    return (
        <Main.Container>
            <SidebarContainer />
            <TimeLineContainer />
            <SearchContainer />
        </Main.Container>
    )
}
