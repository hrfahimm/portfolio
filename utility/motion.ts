/** @format */

export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}
export function slideInFromTop(delay: number) {
    return {
        hidden: { y: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}//
//
// initial={{ y: -100, x: "-50%", opacity: 0 }}
//animate={{ y: 0, x: "-50%", opacity: 1 }}
//
//
//
// export const slideInFromTop = {
//     hidden: { y: -100, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             delay: 0.5,
//             duration: 0.5,
//         },
//     },
// };

// initial={{ y: -100, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
