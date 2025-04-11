// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "./supabase";
import { useDispatch, useSelector } from "react-redux";
import { setCoorsaved } from "../businessSlice";
import { useNavigate } from "react-router";

function ZonCertCrud() {
  const coor = useSelector((state) => state.business.coorSaved);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function useZoncertData() {
    return useQuery({
      queryKey: ["zoningCertification"],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("zoningCertification")
          .select("*");
        if (error) throw error;
        return data;
      },
    });
  }

  function useZoncertInsert(reset, setResetcoor, landuseset, tmarker) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (newItem) => {
        const { data, error } = await supabase
          .from("zoningCertification")
          .insert([newItem]);
        if (error) {
          toast.error("Failed");
        } else {
          // toast.success("Successfully Added!");
          reset();
          setResetcoor("");
          landuseset("");
          navigate("./zoncertrecords", {
            state: { newItem },
          });
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["zoningCertification"]);
      },
    });
  }

  // Update Item (Put)
  // const zoncertUpdate = () => {
  //   const queryClient = useQueryClient();
  //   return useMutation({
  //     mutationFn: async ({ id, updatedItem }) => {
  //       const { data, error } = await supabase
  //         .from("businesspermit")
  //         .update(updatedItem)
  //         .eq("id", id);
  //       if (error) throw error;
  //       toast.success("Success!");
  //       return data;
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(["businesspermit"]);
  //     },
  //   });
  // };

  // function zoncertDelete() {
  //   const queryClient = useQueryClient();
  //   return useMutation({
  //     mutationFn: async (id) => {
  //       const { data, error } = await supabase
  //         .from("businesspermit")
  //         .delete()
  //         .eq("id", id)
  //         .select();

  //       if (error) console.log(error);
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(["businesspermit"]);
  //     },
  //   });
  // }

  return { useZoncertData, useZoncertInsert };
}

export default ZonCertCrud;
