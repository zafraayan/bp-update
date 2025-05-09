import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "./supabase";

function Crud() {
  function useData() {
    return useQuery({
      queryKey: ["businesspermit"],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("businesspermit")
          .select("*");
        if (error) throw error;
        return data;
      },
    });
  }

  function useInsert(reset) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (newItem) => {
        const { data, error } = await supabase
          .from("businesspermit")
          .insert([newItem]);
        if (error) {
          toast.error("There is an error");
        } else {
          toast.success("Successfully Added!");
          reset();
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["businesspermit"]);
      },
    });
  }

  // Update Item (Put)
  const useUpdateItem = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async ({ id, updatedItem }) => {
        const { data, error } = await supabase
          .from("businesspermit")
          .update(updatedItem)
          .eq("id", id);
        if (error) throw error;
        toast.success("Success!");
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["businesspermit"]);
      },
    });
  };

  function useDelete() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (id) => {
        const { data, error } = await supabase
          .from("businesspermit")
          .delete()
          .eq("id", id)
          .select();

        if (error) console.log(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["businesspermit"]);
      },
    });
  }

  return { useData, useInsert, useUpdateItem, useDelete };
}

export default Crud;
