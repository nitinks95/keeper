import React, { useState } from 'react';

function ListItem(props) {
    const [styleUpdate, setstyleUpdate] = useState(false)

    function handleClick() {
        setstyleUpdate(true);
    }

    return <div
        style={{ textDecoration: styleUpdate && 'line-through' }}
        onClick={() => {
            props.onStrike(props.id)
        }
        }>
        <li>{props.item}</li>
    </div>
}

export default ListItem;