import React from "react";
import { useUser } from "../providers/UserProvider";
import { Avatar } from "@chakra-ui/react";

export const ProfileImage = () => {
  const { user } = useUser();

  return (
    <Avatar
      position="relative"
      left="500px"
      src={user.profileImage}
      className="profile-image"
      alt="profile"
      bottom="10px"
    />
  );
};
