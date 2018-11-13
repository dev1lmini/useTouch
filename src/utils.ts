import * as React from 'react'

export type ReactFunction = (...arg) => React.ReactElement<any>

export const checkTheElement = (element: React.ReactElement<any> | ReactFunction): element is ReactFunction => typeof (<ReactFunction>element) === 'function'
