import React, { useEffect, useState } from 'react';
import { Stub } from './components/Stub';

import { PageIndex } from './pages/index';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 700px)')

    function updateScreenMatch(mq: MediaQueryList, e: MediaQueryListEvent) {
      setIsMobile(mq.matches);
    };

    // @ts-ignore
    mql.addListener(updateScreenMatch);

    // @ts-ignore
    return () => mql.removeListener(updateScreenMatch);
  }, []);

  if (isMobile) {
    return (
      <div className="App">
        <Stub />
      </div>
    )
  }

  return (
    <div className="App">
      <PageIndex />
    </div>
  );
}

export default App;
