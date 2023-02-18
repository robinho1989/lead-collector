import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";

import "./index.module.scss";
import { Form } from "../components/Form/Form";
import { AnimationContainerTopLeft } from "../components/AnimationContainerTopLeft/AnimationContainerTopLeft";
import { AnimationContainerBottomRight } from "../components/AnimationContainerBottomRight/AnimationContainerBottomRight";
import { LeadCollectorProvider } from "../context/LeadCollectorContext";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <LeadCollectorProvider>
        <Container>
          <AnimationContainerTopLeft />
          <Form />
          <AnimationContainerBottomRight />
        </Container>
      </LeadCollectorProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
