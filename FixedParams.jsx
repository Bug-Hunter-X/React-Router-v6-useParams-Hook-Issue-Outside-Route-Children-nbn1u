The solution involves restructuring the component tree to ensure that the component using `useParams` is a direct child of a route.  Alternatively, you can pass the parameters down using a context provider.  Below is an example using context:

```javascript
import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const ParamsContext = createContext();

const ParamsProvider = ({ children }) => {
  const location = useLocation();
  const params = location.pathname.split('/').slice(1);
  return (
    <ParamsContext.Provider value={params}>
      {children}
    </ParamsContext.Provider>
  );
};

const useRouteParams = () => {
  const params = useContext(ParamsContext);
  return params;
};

export { ParamsProvider, useRouteParams };
```

Now, your component can use `useRouteParams` instead of `useParams` to access the route parameters.