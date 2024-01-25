import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  toPath: string;
  children: ReactNode;
}

export function ButtonLink({ toPath, children }: ButtonLinkProps) {
  return <Link to={toPath}>{children}</Link>;
}
