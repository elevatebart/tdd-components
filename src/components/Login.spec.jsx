import React from "react";
import { mount } from "@cypress/react";
import Login from "./Login";

it("should have the right visual", () => {
  mount(<Login />);
  cy.screenshot();
});

it("should have a login field", () => {
  mount(<Login />);
  cy.findByLabelText("login");
});

it("should have a password field", () => {
  mount(<Login />);
  cy.findByLabelText("password").then(($field) => {
    expect($field.attr("type")).to.equal("password");
  });
});

it("should have a submit button", () => {
  mount(<Login />);
  cy.findByText("submit").then(($button) => {
    expect($button.attr("type")).to.equal("submit");
  });
});
