"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { gql, useMutation, useQuery } from "@apollo/client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";

const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        name
        username
        email
        website
      }
    }
  }
`;
const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

function DataTable() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      GET_USERS, 
      'GetUsers'
    ],
    onCompleted: () => {
      console.log("User deleted successfully");
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  const handleDelete = (id: string) => {
    deleteUser({ variables: { id } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) {
    return <div>Oops! Something went wrong: {error.message}</div>;
  }

  return (
    <Table>
      <TableCaption>A list of Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Website</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.users.data.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.website}</TableCell>

            <TableCell className="flex justify-between items-center gap-1">
              <Button>
                <MdEdit />
              </Button>
              <Button onClick={() => handleDelete(item.id)}>
                <MdDelete />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
