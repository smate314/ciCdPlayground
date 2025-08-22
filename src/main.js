import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Mate Soos",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["testing","deployment","integration","automation"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, GitHub actions",
    // What do you want to learn in this workshop?
    expectations: ["Fill in the gaps in my current basic ci/cd knowledge"],
  },
});
