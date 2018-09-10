import ReactGA from "react-ga";

export const initGA = () => {
  //   console.log('GA init')
  ReactGA.initialize("UA-114446306-1");
};

export const logPageView = pageTitle => {
  //   console.log('Logging pageview for ${window.location.pathname}' + pageTitle)
  ReactGA.set({ page: window.location.pathname });
  ReactGA.set({ title: pageTitle });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
