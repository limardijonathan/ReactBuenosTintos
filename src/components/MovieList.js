import React from 'react';

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.category}</td>
            </tr>
        </React.Fragment>
    )
}
export default MovieList;