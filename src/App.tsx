import { NavBar, Navigation } from "./components/Navigation";
import { AppRoutes } from "./routes/app_routes";

function App() {
   return (
      <section>
         <Navigation title={"Candys"} span={"&Cakes"} />
         {/* <NavBar /> */}

         <AppRoutes />
      </section>
   );
}

export default App;
