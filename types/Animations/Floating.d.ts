import { ReactNode } from "react";

export interface Floating{
  children: ReactNode;
  slide?: number | string;   
  duration?: number;
}