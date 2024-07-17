// Import the necessary libraries
import request from "supertest";
import express from "express";

// This assumes your server's setup is exported from a module, or you can directly use the code here
import app from "../routes.js"; // Adjust the import path according to your project structure

// Test the /api endpoint
describe("GET /api", () => {
  it("responds with API Up And Running!", async () => {
    const response = await request(app).get("/api");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("API Up And Running!");
  });
});

// Test the /testing endpoint
describe("GET /testing", () => {
  it("responds with Testing", async () => {
    const response = await request(app).get("/testing");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Testing");
  });
});

// Test the /about endpoint
describe("GET /about", () => {
  it("responds with About page", async () => {
    const response = await request(app).get("/about");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("About page");
  });
});

// Test the / endpoint
describe("GET /", () => {
  it("responds with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hello World");
  });
});

// You can add more tests for other endpoints in a similar fashion
