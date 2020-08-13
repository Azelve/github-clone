import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={`/Azelve`}>
          Azelve
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/Azelve-Bin2Dec-mobile"}>
          Bin2Dec-mobile
        </Link>
      </Breadcrumb>

      <p>Convert binary numbers into decimal numbers.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        target="_blank"
        href={"https://github.com/Azelve/Bin2Dec-mobile"}
      >
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
