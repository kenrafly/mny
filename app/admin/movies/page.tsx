"use client";

import React from "react";
import DataTable from "@/components/Ui/DataTable/DataTable";
import Image from "next/image";

export default function Movies() {
  // Dummy data for movies
  const movieData = [
    {
      id: 1,
      picture: "/next.svg",
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
    },
    {
      id: 2,
      picture: "/next.svg",
      title: "The Dark Knight",
      description:
        "Batman fights the menace known as the Joker in Gotham City.",
    },
    {
      id: 3,
      picture: "/next.svg",
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: 4,
      picture: "/next.svg",
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    },
    {
      id: 5,
      picture: "/next.svg",
      title: "The Matrix",
      description:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    },
  ];

  const renderPicture = (value: string) => {
    return (
      <div className="relative w-12 h-16 rounded overflow-hidden">
        <Image
          src={value}
          alt="Movie poster"
          fill
          className="object-cover"
          style={{ objectFit: "cover" }}
          unoptimized // For demo purposes only
        />
      </div>
    );
  };

  const renderActions = (row: any) => {
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
      key: "picture",
      label: "Poster",
      render: renderPicture,
      sortable: false,
    },
    {
      key: "title",
      label: "Title",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "actions",
      label: "Actions",
      render: renderActions,
      sortable: false,
    },
  ];

  const handleAdd = () => {
    console.log("Add new movie");
    // Implement your add movie logic here
    // e.g. open a modal for adding a new movie
  };

  const handleEdit = (movie: any) => {
    console.log("Edit movie:", movie);
    // Implement your edit movie logic here
    // e.g. open a modal with the movie data for editing
  };

  const handleDelete = (id: number) => {
    console.log("Delete movie with ID:", id);
    // Implement your delete movie logic here
    // e.g. show a confirmation dialog and then delete
  };

  const handleRowClick = (row: any) => {
    console.log("Clicked on movie:", row);
    // Implement your row click logic here
    // e.g. navigate to a detailed view of the movie
  };

  // Modify data to include actions column
  const dataWithActions = movieData.map(movie => ({
    ...movie,
    actions: null, // This will be rendered by the custom renderer
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Movies Management</h1>

      <DataTable
        data={dataWithActions}
        columns={columns}
        title="Movies List"
        onAdd={handleAdd}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
