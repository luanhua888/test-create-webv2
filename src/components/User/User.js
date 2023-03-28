import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function User() {
  return (
    <div
      className="
        flex justify-center items-center
        w-12 h-12"
    >
      <FontAwesomeIcon
        icon={faCircleUser}
        className="text-3xl
        "
      />
    </div>
  );
}
