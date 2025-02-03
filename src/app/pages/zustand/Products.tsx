"use client";

import { Table, TableBody, TableCell, TableRow } from "@shadui/table";
import { Button } from "@shadui/button";
import { ShoppingBasket } from "lucide-react";
import { useBasketStore } from "./useBasketStore";

export const Products = () => {
  const addToBasket = useBasketStore((state) => state.addToBasket);

  return (
    <Table>
      <TableBody>
        {["apples", "eggs", "bananas"].map((product) => (
          <TableRow key={product}>
            <TableCell>{product}</TableCell>
            <TableCell className="text-right">
              <Button onClick={() => addToBasket(product)}>
                <ShoppingBasket /> Buy
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
