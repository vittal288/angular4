# ANGULAR KEYNOTES 
+ Deep tree benchmark (destroy everything and recreate everything at the moment application switches the router)


## BEST PRACTICES 
+ Do not use JTT compilations for production code , because it converts all components into string of JS in the browser itself amd create view class of all components and executes view class(string of JS code) using eval method and eval method is not good for security reasons.