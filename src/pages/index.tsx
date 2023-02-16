import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";
import { Link } from "nerdux-ui-system";

import * as styles from "./index.module.scss";
import { Form } from "../components/Form/Form";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Container>
        <Form />
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
