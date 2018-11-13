import * as React from 'react';
export declare type ReactFunction = (...arg: any[]) => React.ReactElement<any>;
export declare const checkTheElement: (element: React.ReactElement<any> | ReactFunction) => element is ReactFunction;
