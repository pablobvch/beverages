import { Main } from "@/components/ui/Main";

export default function BeerLayout({
    children
  }) {
  return (
    <Main>
      <div>{children}</div>
    </Main>
  );
}