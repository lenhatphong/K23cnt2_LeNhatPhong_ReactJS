import React, { useState } from "react";
import LnpMemberList from "./LnpMemberList";
import LnpMemberAdd from "./LnpMemberAdd";

const LnpApp = () => {
    const [members, setMembers] = useState([
        {
            Lnp_id: "2310900080",
            Lnp_fullname: "Lê Nhất Phong",
            Lnp_username: "lenhatphong",
            Lnp_password: "123456"
        },
        {
            Lnp_id: "SV002",
            Lnp_fullname: "Trần Thị B",
            Lnp_username: "tranthib",
            Lnp_password: "password456"
        },
        {
            _id: "SV003",
            Lnp_fullname: "Lê Công C",
            Lnp_username: "lecongc",
            Lnp_password: "password789"
        }
    ]);

    const addMember = (newMember) => {
        setMembers([...members, newMember]);
    };

    return (
        <div>
            <h1>Quản lý tài khoản</h1>
            <LnpMemberAdd addMember={addMember} />
            <LnpMemberList members={members} />
        </div>
    );
};

export default LnpApp;
