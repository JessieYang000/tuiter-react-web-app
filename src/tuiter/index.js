import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer"
import tuitsReducer from "./tuits/tuits-reducer"
import profileReducer from "./reducers/profile-reducer"
import {Provider} from "react-redux";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";

const store = configureStore({
    reducer: {who:whoReducer, tuitsData: tuitsReducer, profile: profileReducer}
})
function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2 mb-2">
                <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11">
                    <Routes>
                        <Route index   element={<HomeComponent/>}/>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;