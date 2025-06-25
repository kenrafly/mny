"use client";

import React from "react";
import DataTable from "@/components/Ui/DataTable/DataTable";

export default function Users() {
  // Dummy data for users
  const userData = [
    {
      id: 1,
      username: "johndoe",
      dateJoined: "2023-01-15",
      dateEnded: "2024-01-15",
      plan: "Premium",
    },
    {
      id: 2,
      username: "janedoe",
      dateJoined: "2023-02-20",
      dateEnded: "2024-02-20",
      plan: "Basic",
    },
    {
      id: 3,
      username: "mike_smith",
      dateJoined: "2023-03-10",
      dateEnded: "2023-09-10",
      plan: "Standard",
    },
    {
      id: 4,
      username: "sarah_johnson",
      dateJoined: "2023-04-05",
      dateEnded: "2024-04-05",
      plan: "Premium",
    },
    {
      id: 5,
      username: "robert_williams",
      dateJoined: "2023-05-12",
      dateEnded: "2024-05-12",
      plan: "Basic",
    },
  ];

  // Format date for better display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderDate = (value: string) => {
    return formatDate(value);
  };

  const renderActions = (value: any, row: any) => {
    return (
      <div className="flex space-x-2">
        <button
          onClick={e => {
            e.stopPropagation();
            handleEdit(row);
          }}
          className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={e => {
            e.stopPropagation();
            handleDelete(row.id);
          }}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    );
  };

  const columns = [
    {
      key: "username",
      label: "Username",
    },
    {
      key: "dateJoined",
      label: "Date Joined",
      render: renderDate,
    },
    {
      key: "dateEnded",
      label: "Date Ended",
      render: renderDate,
    },
    {
      key: "plan",
      label: "Plan",
    },
    {
      key: "actions",
      label: "Actions",
      render: renderActions,
      sortable: false, // Disable sorting for the actions column
    },
  ];

  // Handler functions
  const handleAdd = () => {
    console.log("Add new user");
    // Implement your add user logic here
    // e.g. open a modal for adding a new user
  };

  const handleEdit = (user: any) => {
    console.log("Edit user:", user);
    // Implement your edit user logic here
    // e.g. open a modal with the user data for editing
  };

  const handleDelete = (id: number) => {
    console.log("Delete user with ID:", id);
    // Implement your delete user logic here
    // e.g. show a confirmation dialog and then delete
  };

  const handleRowClick = (row: any) => {
    console.log("Clicked on user:", row);
    // Implement your row click logic here
    // e.g. navigate to a detailed view of the user
  };

  // Modify data to include actions column
  const dataWithActions = userData.map(user => ({
    ...user,
    actions: null, // This will be rendered by the custom renderer
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">User Management</h1>

      <DataTable
        data={dataWithActions}
        columns={columns}
        title="Users List"
        onAdd={handleAdd}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
