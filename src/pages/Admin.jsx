import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "antd";
import { updateUser } from "../features/user/userSlice";

const Admin = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(updateUser(value));
  }
  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1>This is a secret page for admin</h1>
      <div className="w-full max-w-xs space-y-2 shadow-md p-2 rounded-md mt-8">
        <p className="font- font-medium">Update name</p>
        <Input
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter your name"
        />
        <Button onClick={handleClick} type="primary">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Admin;
