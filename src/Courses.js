import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () => (
    <Query query={gql`
        {
            launchesPast(limit: 5) {
                mission_name
                launche_date_local
                links{
                    video_link
                }
            }
        }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            console.log(loading)
            
            return data.launchesPast.map(({ mission_name, launche_date_local, video_link, }) => (
                <div>
                    <h1>{`${mission_name}`}</h1>
                    <p>{`${launche_date_local}`}</p>
                </div>
            ))
        }}
    </Query>
);

export default Courses;