import { gsap } from "gsap";

export const ThresholdPoint = 0.3;

export const FadeIn = (element: string): void => {
  gsap.to(element, 3, {
    opacity: 1,
    y: -40,
    ease: "power4.out",
    // next animation fadeIn
    stagger: {
      amount: 0.8
    }
  });
};
export const FadeOut = (element: string): void => {
  gsap.to(element, 2, {
    opacity: 0,
    y: -40,
    ease: "power4.out"
  });
};

export const DeepFadeIn = (element: string): void => {
  gsap.to(element, 5, {
    opacity: 1,
    y: -60,
    ease: "power4.out",
    // next animation fadeIn
    stagger: {
      amount: 0.8
    }
  });
};

// Memo: Style `margin-top: 20px;` to the parents div and `padding-top: 20px;` to the fadeIn className
export const ScrollFadeIn = (
  intersection: IntersectionObserverEntry | null,
  className: string,
  isFadeOut: boolean,
  thresholdPoint = ThresholdPoint,
  fadeIn = FadeIn,
  fadeOut = FadeOut
): void => {
  if (isFadeOut) {
    intersection && intersection.intersectionRatio < thresholdPoint
      ? fadeOut(className)
      : fadeIn(className);
  } else if (!isFadeOut) {
    if (intersection && intersection.intersectionRatio > thresholdPoint) {
      fadeIn(className);
    }
  }
};
