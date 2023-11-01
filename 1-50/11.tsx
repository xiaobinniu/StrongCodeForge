import { useState, useEffect } from 'react';

function withDelayedLoad(WrappedComponent: React.FC<any>) {

    return function (props: any) {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setIsLoaded(true);
            }, 2000);

            return () => {
                clearTimeout(timeoutId);
            };
        }, []);

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    }
}
export default withDelayedLoad;