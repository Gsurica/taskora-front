import { FunctionComponent } from "react";
import Header from "../../shared/components/Header/Header";

interface HomeProps {
  
}
 
export const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Header />
      <h1>Home element</h1>
    </>
  );
}
 