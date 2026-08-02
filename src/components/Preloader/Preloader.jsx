/**
 * Preloader with animated rings
 */
export default function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Loading">
      <div className="preloaderRing">
        <div className="ring1" />
        <div className="ring2" />
        <div className="ring3" />
      </div>
      <p>Loading Portfolio...</p>
      <span className="burmese">ရလာဒ်နေပါ...</span>
    </div>
  );
}
