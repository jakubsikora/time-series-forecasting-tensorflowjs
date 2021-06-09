const fs = require("fs");

const installed = [
  {
    atDay: "2019-09-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-10-17T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-10-25T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-10-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-11-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-11-13T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-12-23T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-12-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-15T00:00:00Z",
    count: 3,
    growth: 200,
  },
  {
    atDay: "2020-01-17T00:00:00Z",
    count: 1,
    growth: -66.66666666666667,
  },
  {
    atDay: "2020-01-18T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-19T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-21T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-07T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-13T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-16T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-17T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-18T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-03-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-03-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-03-31T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-04-07T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-04-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-12T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-23T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-28T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-04-30T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-05-01T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-08T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-05-10T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-05-12T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-27T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-29T00:00:00Z",
    count: 3,
    growth: 200,
  },
  {
    atDay: "2020-06-01T00:00:00Z",
    count: 1,
    growth: -66.66666666666667,
  },
  {
    atDay: "2020-06-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-10T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-13T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-16T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-06-19T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-06-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-27T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-01T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-02T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-09T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-13T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-19T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-22T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-07-23T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-07-25T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-31T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-03T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-11T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-17T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-18T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-25T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-09T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-15T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-16T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-17T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-21T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-01T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-10-02T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-10-03T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-09T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-11T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-12T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-13T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-18T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-19T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-04T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-06T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-11T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-11-19T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-11-24T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-12-03T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-12-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-12-11T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-12-12T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-12-16T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-12-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-12-23T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-01-04T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2021-01-13T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2021-01-21T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-01-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-01-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-02-07T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-02-15T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2021-02-18T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2021-03-02T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-09T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-10T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-11T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-19T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-24T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-29T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2021-03-31T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2021-04-01T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-12T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-23T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2021-04-30T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2021-05-06T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
];
const uninstalled = [
  {
    atDay: "2019-08-27T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-12-02T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2019-12-24T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-03T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-01-21T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-11T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-21T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-02-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-03-02T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-03-06T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-12T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-13T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-04-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-10T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-05-30T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-02T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-06-05T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-06-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-15T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-06-23T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-06-24T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-06-25T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-01T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-07-05T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-07-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-24T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-07-26T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-07-30T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-08-03T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-06T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-24T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-08-31T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-04T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-21T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-09-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-02T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-12T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-18T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-23T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-27T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-10-31T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-05T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-11T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-14T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-29T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-11-30T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2020-12-04T00:00:00Z",
    count: 2,
    growth: 0,
  },
  {
    atDay: "2020-12-05T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2020-12-07T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2020-12-22T00:00:00Z",
    count: 3,
    growth: 200,
  },
  {
    atDay: "2021-01-01T00:00:00Z",
    count: 1,
    growth: -66.66666666666667,
  },
  {
    atDay: "2021-01-18T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-01-19T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-01-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-01-22T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2021-02-04T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2021-02-13T00:00:00Z",
    count: 2,
    growth: 100,
  },
  {
    atDay: "2021-02-27T00:00:00Z",
    count: 1,
    growth: -50,
  },
  {
    atDay: "2021-02-28T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-03T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-06T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-07T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-10T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-11T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-16T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-17T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-22T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-24T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-25T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-26T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-03-31T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-08T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-16T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-20T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-04-30T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-02T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-03T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-04T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-05-06T00:00:00Z",
    count: 1,
    growth: 0,
  },
  {
    atDay: "2021-06-04T00:00:00Z",
    count: 1,
    growth: 0,
  },
];

const now = new Date();
const daysOfYear = [];

const parseItems = (items) => {
  const parsedItems = {};

  items.forEach((item) => {
    const parsedDate = new Date(item.atDay);
    const year = parsedDate.getFullYear();
    const month =
      parsedDate.getMonth() + 1 < 10
        ? `0${parsedDate.getMonth() + 1}`
        : parsedDate.getMonth() + 1;
    const day =
      parsedDate.getDate() < 10
        ? `0${parsedDate.getDate()}`
        : parsedDate.getDate();

    parsedItems[`${year}-${month}-${day}`] = item.count;
  });

  return parsedItems;
};

const installedParsed = parseItems(installed);
// const uninstalledParsed = parseItems(uninstalled);

// console.log("installedParsed", installedParsed);
// console.log("uninstalledParsed", uninstalledParsed);

const data = [];
let total = 0;

for (let d = new Date("2019-08-26"); d <= now; d.setDate(d.getDate() + 1)) {
  const year = d.getFullYear();
  const month =
    d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const formattedDate = `${year}-${month}-${day}`;
  const installed = installedParsed[formattedDate] || 0;
  total += installed;

  data.push({
    date: formattedDate,
    balance: total,
  });

  // console.log(`${year}-${month}-${day}`);
}

const dataJSON = JSON.stringify(data, null, "\t");

fs.writeFileSync("./data.json", dataJSON);

// console.log("data", data);
