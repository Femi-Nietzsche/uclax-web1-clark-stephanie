import { Routes, Route, HashRouter } from "react-router-dom";

// global styles
import "@/Common/css/normalize.css";
import "@/Common/css/global.scss";

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";

// page components
import Home from "./Home";
import Staff from "./Staff";
import Contact from "./Contact";

// course work page components
import CourseWorkLayout from "./CourseWork/CourseWorkLayout.jsx";
import SunAndMoon from "./CourseWork/SunAndMoon/SunAndMoon.jsx";
import Essays from "./Coursework/Essays.jsx";
import ResponsiveDesign from "./Coursework/ResponsiveDesign.jsx";

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PagesLayout />}>
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />

                    <Route element={<CourseWorkLayout />} path="course-work">
                        <Route elememt={<Essays />} path="" />
                        <Route elememt={<SunAndMoon />} path="sun-and-moon" />
                        <Route
                            elememt={<ResponsiveDesign />}
                            path="responsive"
                        />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;
