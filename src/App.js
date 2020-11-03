import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import "./style/css/bootstrap.min.css";
//import "./style/css/plugins.css";
import "./style/revolution/css/settings.css";
import "./style/revolution/css/layers.css";
import "./style/revolution/css/navigation.css";
import "./style/type/type.css";
import "./style.css";
import "./style/css/font/font2.css";
import ReactGa from "react-ga";
//import Navbar from "./components/navbar";

const Home = lazy(() => import("./components/home"));
const GST = lazy(() => import("./pages/gst"));
const Contact = lazy(() => import("./pages/contact"));
const GstBuy = lazy(() => import("./pages/gstbuy"));

const schemaMarkup = {
  "@context": "http://schema.org/",
  "@type": "NGO",
  name:
    "Track the spread of Coronavirus (COVID-19) in India (district level to state level) and World",
  alternateName: "COVID INDIA STATISTICS",
  url: "https://pandemic2020.in/",
};

function App() {
  const history = require("history").createBrowserHistory;

  useEffect(() => {
    ReactGa.initialize("UA-161766535-2");
    // UA-163288419-1
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Router history={history}>
        <Suspense fallback={<div className="lazy"></div>}>

          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gst-registration" component={GST} />
              <Route path="/contact" component={Contact} />
              <Route path="/gst-buy" component={GstBuy} />
            </Switch>
          </main>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;