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

const GET_POSTS = gql`
  query GetPosts {
    users {
      data {
        id
        name
        username
      }
    }
  }
`;

function DataTable() {
  const { loading, error, data } = useQuery(GET_POSTS);

  console.log(data);
  return (
    <>
      <Table> 
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead className="w-[100px]">name</TableHead>
            <TableHead>user name </TableHead>
          </TableRow>
        </TableHeader>

        {data.map((item: any, index: number) => (
          <TableBody key={index}>
            <TableRow>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.username}</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </>
  );
}

export default DataTable;
