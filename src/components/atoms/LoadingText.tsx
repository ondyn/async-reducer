import React, { FunctionComponent } from 'react';

interface IProps {
  isLoading: boolean,
}

const LoadingText: FunctionComponent<IProps> = (
  {
    isLoading, children,
  }: React.PropsWithChildren<IProps>,
) => (
  <span>{isLoading ? <span>Loading...</span> : children}</span>
);

export default LoadingText;
