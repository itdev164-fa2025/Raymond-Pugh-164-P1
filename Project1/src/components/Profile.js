import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const ProfileContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulUser {
        nodes {
          name
          bio
          profilePicture {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const user = data.allContentfulUser.nodes[0]; 

  return (
    <ProfileContainer>
      <img
        src={user.profilePicture.file.url}
        alt={user.name}
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </ProfileContainer>
  );
};

export default Profile;
