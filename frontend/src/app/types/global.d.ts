declare module '*.module.css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

// declare module '*css' {
//     interface IClassNames {
//         [className: string]: string;
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.svg' {
//     import type { FC, SVGProps } from 'react';
//     const SVG: FC<SVGProps<SVGSVGElement>>;
//     export default SVG;
// }

declare type AppStore = ReturnType<typeof import('../store').setupStore>;
declare type RootState = ReturnType<typeof import('../store').rootReducer>;
declare type AppDispatch = AppStore['dispatch'];
