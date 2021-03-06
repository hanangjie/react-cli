import Header from "./layouts/header";

// const registerModel = (app, model) => {
//   // eslint-disable-next-line
//   if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
//     app.model(model);
//   }
// };

export default [
  {
    path: "/",
    components: Header,
    indexRoute: { onEnter: (nextState, replace) => replace("/index") },
    childRoutes: [
      {
        path: "index",
        getComponent(next, cb) {
          require.ensure([], reqiure => {
            cb(null, require("./routes/blog/"));
          });
        }
      },
      {
        path: "demo",
        getComponent(next, cb) {
          require.ensure([], reqiure => {
            cb(null, require("./routes/demo/"));
          });
        }
      },
      {
        path: "demo1",
        getComponent(next, cb) {
          require.ensure([], reqiure => {
            cb(null, require("./routes/demo/demo.js"));
          });
        }
      },
      {
        path: "demo_redux",
        getComponent(next, cb) {
          require.ensure([], reqiure => {
            cb(null, require("./routes/demo/demo_redux"));
          });
        }
      }
    ]
  }
];
