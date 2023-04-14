import { FunctionComponent, PropsWithChildren } from "react";

const Strong: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => (
  <strong className="font-semibold text-green-700">{children}</strong>
);

export default Strong;
