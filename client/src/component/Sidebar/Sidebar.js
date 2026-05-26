import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, SidebarButton, SidebarFooter } from "./Sidebar.style.js";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";

<<<<<<< HEAD
function Sidebar({ jobId }) {
=======
function Sidebar() {
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    const navigate = useNavigate();

    return (
        <SidebarContainer>
            <div>
                <SidebarButton onClick={() => navigate("/render")}>
                    <div className="content">
                        <CameraAltIcon fontSize="small" />
                        <span>CCTV 영상</span>
                    </div>
                </SidebarButton>
<<<<<<< HEAD
                <SidebarButton onClick={() => navigate(`/List/${jobId}`)}>
=======
                <SidebarButton onClick={() => navigate("/List")}>
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                    <div className="content">
                        <AssignmentIcon fontSize="small" />
                        <span>기록</span>
                    </div>
                </SidebarButton>
            </div>
            <SidebarFooter>
                ⓒ 2025 AI-Security-Guard
                <br />
                All rights reserved
            </SidebarFooter>
        </SidebarContainer>
    );
}

export default Sidebar;
