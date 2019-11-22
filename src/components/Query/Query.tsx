import React from "react";
import { useQuery } from "@apollo/react-hooks";

interface QueryProps {
  children: ({
    data,
    loading,
    error
  }: {
    [key: string]: any;
  }) => React.ReactNode;
  query: any;
}

const Query = ({ query, children }: QueryProps) => {
  const { ...queryResults } = useQuery(query);
  return <>{children && children(queryResults as any)}</>;
};

export default Query;
