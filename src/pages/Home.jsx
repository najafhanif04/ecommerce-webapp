import React from "react";
import Typography from "../components/Typography";
import Carousel from "../components/Carousel";
import { Container } from "../Container/Container";

export default function Home() {
  return (
    <>
      
      <Carousel />
      <Container>
        <div className="text-left">
          <Typography type={"h1"} color={"secondary"} className={"bg-red-300`"}>
            Hello World
          </Typography>
          <Typography type={"p"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eligendi atque pariatur incidunt necessitatibus? Unde, ex molestias
            esse consectetur sint perspiciatis debitis nemo quos id, iure
            repellendus sequi tempora labore.
          </Typography>
        </div>
      </Container>
    </>
  );
}
