export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.99,
      when: "beforeChildren",
      staggerChildren: 0.9,
    },
  },
}

const transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
}

export const rightEnter = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 2, ...transition } },
}

export const bottomEnter = {
  exit: { y: "100%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { delay: 2, ...transition },
  },
}
