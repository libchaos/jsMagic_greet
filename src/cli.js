"use strict";
import parseArgs from "minimist";
import greet from "./index";

export function main(){
  const args = parseArgs(process.argv.slice(2));

  if(args && args["drunk"]){
    console.log(greet(args["_"][0], args["drunk"]));
  }else{
    console.log(greet(args["_"][0]));
  }
}
