import React, { Suspense } from 'react';
const PreRFQPage = React.lazy(() => import('preRfq/PreRFQPage'));
const RFQPage = React.lazy(() => import('rfq/RFQPage'));
const PostRFQPage = React.lazy(() => import('postRfq/PostRFQPage'));

function App() {
    return (
        <div>
            <h1>Shell App</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <PreRFQPage />
                <RFQPage />
                <PostRFQPage/>
            </Suspense>
        </div>
    );
}

export default App;
