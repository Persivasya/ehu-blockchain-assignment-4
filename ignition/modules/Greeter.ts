import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("GreeterModule", (m) => {
  const name = m.getParameter("name", "Andrey");
  const greeter = m.contract("Greeter", [name]);
  return { greeter };
});
