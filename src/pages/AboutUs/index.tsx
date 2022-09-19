import { HeaderComponent } from "../../components/Header";
import { AboutUsMain } from "./style";

export const AboutUsPage = () => {
  return <>
    <HeaderComponent/>
    <AboutUsMain>
      <h2>dueMarket</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec et justo blandit, scelerisque quam nec, dictum nibh.
        Nullam condimentum velit quis arcu convallis,
        vel fringilla lorem imperdiet. Praesent ut placerat arcu.
        Proin pretium lacinia vehicula. Nulla semper odio eget ante.
      </p>
      <div>
        {/* Cards de devs */}
      </div>
    </AboutUsMain>
  </>;
};
