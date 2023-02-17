import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";

import "./index.module.scss";
import { Form } from "../components/Form/Form";
import { AnimationContainerTopLeft } from "../components/AnimationContainerTopLeft/AnimationContainerTopLeft";
import { AnimationContainerBottomRight } from "../components/AnimationContainerBottomRight/AnimationContainerBottomRight";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Container>
        <AnimationContainerTopLeft />
        <Form />
        <AnimationContainerBottomRight />
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
