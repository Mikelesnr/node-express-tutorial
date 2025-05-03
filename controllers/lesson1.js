const mikeRoute = (req,res) => {  
    res.send("Hello Michael");
  };

const ngoniRoute = (req,res) => {  
    res.send("Hello Ngonidashe");
  };

module.exports = {
    mikeRoute,
    ngoniRoute
  };