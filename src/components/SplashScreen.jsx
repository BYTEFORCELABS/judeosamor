import Image from "next/image";

/**
 * The opening frame: his monogram, held for a beat while the page settles.
 *
 * It dismisses itself with a CSS animation rather than JavaScript, so it can
 * never get stuck on screen if a script fails, and it is pointer-transparent
 * throughout so it can't swallow a click on its way out. The page content is
 * rendered underneath it the whole time, so crawlers and reduced-motion
 * visitors are unaffected.
 *
 * An inline script in the root layout marks the document once per session,
 * which hides this entirely on subsequent navigations — a splash is a
 * welcome the first time and an obstacle every time after.
 */
export default function SplashScreen() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-mark relative w-72 h-72 sm:w-80 sm:h-80">
        <Image
          src="/images/monogram_light.png"
          alt=""
          fill
          sizes="(max-width: 640px) 288px, 320px"
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
