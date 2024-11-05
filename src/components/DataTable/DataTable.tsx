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
import { gql, useQuery } from "@apollo/client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";

// GraphQL query to get users
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

function DataTable() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return <div>Oops! Something went wrong: {error.message}</div>;
  }

  console.log(data, "logs data ");

  console.log(data);

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
              <Button>
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
