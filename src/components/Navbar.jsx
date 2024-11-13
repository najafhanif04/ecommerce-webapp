import React from "react";
import Links from "./Links";
import Typography from "./Typography";
import { useState } from "react";
import { Container } from "../Container/Container";

export default function Navbar() {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <Typography type={"h1"} className={"text-white"}>
          Logo Here
        </Typography>
        <ul className="flex">
          <li>
            <Links href={"/"}>Home</Links>
          </li>
          <li>
            <Links href={"about"}>About</Links>
          </li>
          <li>
            <Links href={"contact"}>Contact</Links>
          </li>
        </ul>
      </div>
    </Container>
  );
}
