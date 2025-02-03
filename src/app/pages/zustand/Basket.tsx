"use client";

import { Table, TableBody, TableCell, TableRow } from "@shadui/table";
import { Button } from "@shadui/button";
import { Trash } from "lucide-react";
import { useBasketStore } from "./useBasketStore";

export const Basket = () => {
  const store = useBasketStore();

  return (
    <>
      {store.basket.size === 0 ? (
        <em className="text-sm">empty</em>
      ) : (
        <Table>
          <TableBody>
            {[...store.basket].map((item) => (
              <TableRow key={item}>
                <TableCell>{item}</TableCell>
                <TableCell className="text-right">
                  <Button
                    color="error"
                    variant="destructive"
                    onClick={() => store.removeFromBasket(item)}
                  >
                    <Trash />
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};
