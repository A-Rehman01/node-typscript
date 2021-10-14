const authorized = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //ub agr isko hr jga  likhta to msla hota is liye ye kam ek midllerware se krliya hr bar ye check hoga
  if (url === "/") {
    next();
  } else {
    res.status(400).json({ success: false, message: "Permission Denied" });
  }
};

const logger = (req, res, next) => {
  console.log("logger");
  next();
};

// req => middleware => req

// app.use(logger); sub pr applay ek midddleware
// app.use("/api", logger); srif /api wale routes pr applay or srf logger
// app.use([logger, authorized]);sub pr applay all midddleware
//ab smj aya app.use(morgan)

app.get("/api", [logger, authorized], (req, res) => {
  res.send("hello");
});
app.get("/api", [logger, authorized], (req, res) => {
  res.send("hello");
});
app.get("/api/products", [logger, authorized], (req, res) => {
  res.send("hello");
});

//agr 100 route he and sub me loogger daluga tomsla he is liye app.use() me daldo hr jga lag jaegi
// jese
// app.use(logger);

// ab ap chahate ho ke /api/user pr lage
// to app.use('/api/user',logger)
// ab api/user/id api/user/nam in sub pr lge hi
//is pr nh lage gi /api/product wgera pr
// ekse zada middleware he app.use me to app.use([middleware1,middleware2])
