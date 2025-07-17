import { TopBar } from "../components/TopBar";
import { MemoryRouter } from "react-router";

export default {
  title: "Components/TopBar",
  component: TopBar,
};

export const WithBackButton = () => (
  <MemoryRouter>
    <TopBar title="Page Title" showBack={true} />
  </MemoryRouter>
);

export const WithoutBackButton = () => (
  <MemoryRouter>
    <TopBar title="Page Title" showBack={false} />
  </MemoryRouter>
);
