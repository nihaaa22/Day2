import React from "react";
import CardUI from "./Card";

function CardListUI() {
    const name = "ReactJS";
    const college = "SVECW";
    const userObj = {
        name: "Niharika",
        branch: "CSE",
        "regd no.": "22b01a0546",
        year: "3rd year"
    };
    const users = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5", "Name 6", "Name 7", "Name 8"];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {users.map((user, index) => (
                <CardUI
                    key={index}
                    program={name}
                    col={college}
                    user={userObj}
                    userFromArray={user}
                />
            ))}
        </div>
    );
}

export default CardListUI;
