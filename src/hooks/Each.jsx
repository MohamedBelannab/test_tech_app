import { Children } from "react";
          
export const Each = ({render , of  , startLength , endLength})=> Children.toArray(of.slice(startLength, endLength).map((item , index)=> render(item , index)))
