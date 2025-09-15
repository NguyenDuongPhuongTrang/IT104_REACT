import React from "react";

type User = {
  firstName: string;
  lastName: string;
};

function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

const FormatName: React.FC = () => {
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h3>Họ và tên: {formatName(user)}</h3>
    </div>
  );
};

export default FormatName;